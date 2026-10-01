'use strict';

const REQUIRED_QUESTIONS = Object.freeze([
  'RDY-001', 'RDY-002', 'RDY-003', 'RDY-004', 'RDY-005',
  'RDY-006', 'RDY-007', 'RDY-008', 'RDY-009', 'RDY-010'
]);

const NON_SCORED_QUESTIONS = new Set([
  'INT-001', 'PROF-001', 'PROF-002', 'PROF-003', 'VOC-001'
]);

const DIMENSION_ORDER = Object.freeze([
  'VIGENCIA_PROFESIONAL',
  'AI_DIGITAL_READINESS',
  'MARKET_AWARENESS',
  'TRANSFERIBILIDAD_EVIDENCIA',
  'ADAPTABILIDAD_ACCION'
]);

const DIMENSION_QUESTIONS = Object.freeze({
  VIGENCIA_PROFESIONAL: ['RDY-001', 'RDY-002'],
  AI_DIGITAL_READINESS: ['RDY-003', 'RDY-004'],
  MARKET_AWARENESS: ['RDY-005', 'RDY-006'],
  TRANSFERIBILIDAD_EVIDENCIA: ['RDY-007', 'RDY-008'],
  ADAPTABILIDAD_ACCION: ['RDY-009', 'RDY-010']
});

const POINTS = Object.freeze({ 'Sí': 1, 'No': 0 });

function invalidResult(errorCode) {
  return {
    result_status: 'INVALID',
    score_generated: false,
    total_indicators_present: null,
    dimensions: null,
    priority_state: null,
    priority_candidates: [],
    primary_priority: null,
    strength_state: null,
    strength_candidates: [],
    primary_strength: null,
    error_code: errorCode
  };
}

function entriesFromInput(input) {
  if (Array.isArray(input)) {
    return input.map((entry) => {
      if (Array.isArray(entry)) return [entry[0], entry[1]];
      if (!entry || typeof entry !== 'object') return [undefined, undefined];
      return [entry.question_id ?? entry.questionId, entry.response ?? entry.value];
    });
  }

  if (input && typeof input === 'object') {
    const responses = input.responses ?? input;
    if (!responses || typeof responses !== 'object' || Array.isArray(responses)) return null;
    return Object.entries(responses);
  }

  return null;
}

function scoreAssessment(input) {
  const entries = entriesFromInput(input);
  if (!entries) return invalidResult('SCORE_INVALID_VALUE');

  const responses = new Map();
  for (const [questionId, value] of entries) {
    if (typeof questionId !== 'string') return invalidResult('SCORE_UNEXPECTED_QUESTION');
    if (NON_SCORED_QUESTIONS.has(questionId)) continue;
    if (!REQUIRED_QUESTIONS.includes(questionId)) return invalidResult('SCORE_UNEXPECTED_QUESTION');
    if (responses.has(questionId)) return invalidResult('SCORE_DUPLICATE_RESPONSE');
    if (!Object.prototype.hasOwnProperty.call(POINTS, value)) return invalidResult('SCORE_INVALID_VALUE');
    responses.set(questionId, value);
  }

  if (responses.size !== REQUIRED_QUESTIONS.length) return invalidResult('SCORE_INCOMPLETE');

  const dimensions = {};
  for (const dimension of DIMENSION_ORDER) {
    dimensions[dimension] = DIMENSION_QUESTIONS[dimension]
      .reduce((total, questionId) => total + POINTS[responses.get(questionId)], 0);
  }

  const scores = DIMENSION_ORDER.map((dimension) => dimensions[dimension]);
  const minScore = Math.min(...scores);
  const maxScore = Math.max(...scores);
  const priorityCandidates = DIMENSION_ORDER.filter((dimension) => dimensions[dimension] === minScore);
  const strengthCandidates = DIMENSION_ORDER.filter((dimension) => dimensions[dimension] === maxScore);
  const allIndicatorsPresent = minScore === 2;
  const allZero = maxScore === 0;

  return {
    result_status: 'VALID',
    total_indicators_present: scores.reduce((total, score) => total + score, 0),
    dimensions,
    priority_state: allIndicatorsPresent ? 'NO_PRIORITY_GAP_DETECTED' : 'PRIORITY_IDENTIFIED',
    priority_candidates: allIndicatorsPresent ? [] : priorityCandidates,
    primary_priority: allIndicatorsPresent ? null : priorityCandidates[0],
    strength_state: allZero ? 'NO_RELATIVE_STRENGTH_IDENTIFIED' : 'STRENGTH_IDENTIFIED',
    strength_candidates: allZero ? [] : strengthCandidates,
    primary_strength: allZero ? null : strengthCandidates[0],
    error_code: null
  };
}

const publicApi = {
  DIMENSION_ORDER,
  NON_SCORED_QUESTIONS,
  REQUIRED_QUESTIONS,
  scoreAssessment
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = publicApi;
}

