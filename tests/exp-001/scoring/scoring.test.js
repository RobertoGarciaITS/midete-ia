'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const { scoreAssessment } = require('../../../apps/exp-001/scoring/scoring.js');

const allYes = Object.fromEntries(Array.from({ length: 10 }, (_, index) => [`RDY-${String(index + 1).padStart(3, '0')}`, 'Sí']));
const allNo = Object.fromEntries(Array.from({ length: 10 }, (_, index) => [`RDY-${String(index + 1).padStart(3, '0')}`, 'No']));

function expectedValid(total, dimensions, priorityState, priorityCandidates, primaryPriority, strengthState, strengthCandidates, primaryStrength) {
  return {
    result_status: 'VALID', score_generated: true, total_indicators_present: total, dimensions,
    priority_state: priorityState, priority_candidates: priorityCandidates, primary_priority: primaryPriority,
    strength_state: strengthState, strength_candidates: strengthCandidates, primary_strength: primaryStrength,
    error_code: null
  };
}

test('TV-SCORE-001 ALL_YES', () => {
  assert.deepEqual(scoreAssessment(allYes), expectedValid(10, {
    VIGENCIA_PROFESIONAL: 2, AI_DIGITAL_READINESS: 2, MARKET_AWARENESS: 2,
    TRANSFERIBILIDAD_EVIDENCIA: 2, ADAPTABILIDAD_ACCION: 2
  }, 'NO_PRIORITY_GAP_DETECTED', [], null, 'STRENGTH_IDENTIFIED', [
    'VIGENCIA_PROFESIONAL', 'AI_DIGITAL_READINESS', 'MARKET_AWARENESS',
    'TRANSFERIBILIDAD_EVIDENCIA', 'ADAPTABILIDAD_ACCION'
  ], 'VIGENCIA_PROFESIONAL'));
});

test('TV-SCORE-002 ALL_NO', () => {
  assert.deepEqual(scoreAssessment(allNo), expectedValid(0, {
    VIGENCIA_PROFESIONAL: 0, AI_DIGITAL_READINESS: 0, MARKET_AWARENESS: 0,
    TRANSFERIBILIDAD_EVIDENCIA: 0, ADAPTABILIDAD_ACCION: 0
  }, 'PRIORITY_IDENTIFIED', [
    'VIGENCIA_PROFESIONAL', 'AI_DIGITAL_READINESS', 'MARKET_AWARENESS',
    'TRANSFERIBILIDAD_EVIDENCIA', 'ADAPTABILIDAD_ACCION'
  ], 'VIGENCIA_PROFESIONAL', 'NO_RELATIVE_STRENGTH_IDENTIFIED', [], null));
});

test('TV-SCORE-003 CONTRACT_EXAMPLE_SEVEN_OF_TEN', () => {
  const responses = { ...allYes, 'RDY-004': 'No', 'RDY-006': 'No', 'RDY-010': 'No' };
  assert.deepEqual(scoreAssessment(responses), expectedValid(7, {
    VIGENCIA_PROFESIONAL: 2, AI_DIGITAL_READINESS: 1, MARKET_AWARENESS: 1,
    TRANSFERIBILIDAD_EVIDENCIA: 2, ADAPTABILIDAD_ACCION: 1
  }, 'PRIORITY_IDENTIFIED', ['AI_DIGITAL_READINESS', 'MARKET_AWARENESS', 'ADAPTABILIDAD_ACCION'],
  'AI_DIGITAL_READINESS', 'STRENGTH_IDENTIFIED', ['VIGENCIA_PROFESIONAL', 'TRANSFERIBILIDAD_EVIDENCIA'],
  'VIGENCIA_PROFESIONAL'));
});

test('TV-SCORE-004 UNIQUE_PRIORITY', () => {
  const responses = { ...allYes, 'RDY-003': 'No', 'RDY-004': 'No', 'RDY-006': 'No', 'RDY-010': 'No' };
  const result = scoreAssessment(responses);
  assert.equal(result.total_indicators_present, 6);
  assert.deepEqual(result.priority_candidates, ['AI_DIGITAL_READINESS']);
  assert.equal(result.primary_priority, 'AI_DIGITAL_READINESS');
});

test('TV-SCORE-005 MISSING_REQUIRED_RESPONSE', () => {
  const responses = { ...allYes };
  delete responses['RDY-010'];
  assert.deepEqual(scoreAssessment(responses), { result_status: 'INVALID', score_generated: false,
    total_indicators_present: null, dimensions: null, priority_state: null, priority_candidates: [],
    primary_priority: null, strength_state: null, strength_candidates: [], primary_strength: null,
    error_code: 'SCORE_INCOMPLETE' });
});

test('TV-SCORE-006 INVALID_RESPONSE', () => {
  assert.equal(scoreAssessment({ ...allYes, 'RDY-001': 'Tal vez' }).error_code, 'SCORE_INVALID_VALUE');
});

test('TV-SCORE-007 NON_SCORED_DATA_DOES_NOT_CHANGE_SCORE', () => {
  const base = { ...allYes, 'RDY-004': 'No', 'RDY-006': 'No', 'RDY-010': 'No' };
  const withContext = { ...base, 'INT-001': 'INT-05', 'PROF-003': '16+', 'VOC-001': 'Contexto diferente' };
  assert.deepEqual(scoreAssessment(withContext), scoreAssessment(base));
});

test('rejects unexpected questions and duplicate scored responses', () => {
  assert.equal(scoreAssessment({ ...allYes, 'RDY-011': 'Sí' }).error_code, 'SCORE_UNEXPECTED_QUESTION');
  const duplicate = Object.entries(allYes).concat([['RDY-001', 'Sí']]);
  assert.equal(scoreAssessment(duplicate).error_code, 'SCORE_DUPLICATE_RESPONSE');
});

test('preserves deterministic tie ordering for priority and strength', () => {
  const result = scoreAssessment({ ...allYes, 'RDY-001': 'No', 'RDY-002': 'No', 'RDY-005': 'No', 'RDY-006': 'No' });
  assert.deepEqual(result.priority_candidates, ['VIGENCIA_PROFESIONAL', 'MARKET_AWARENESS']);
  assert.deepEqual(result.strength_candidates, ['AI_DIGITAL_READINESS', 'TRANSFERIBILIDAD_EVIDENCIA', 'ADAPTABILIDAD_ACCION']);
});

