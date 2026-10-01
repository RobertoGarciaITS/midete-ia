# EXP-001 Scoring Model Prompt v0.1

**Prompt ID:** `PRM-EXP001-003`  
**Level:** `L3_TASK`  
**Phase:** `P01`  
**Work Item:** `EXP-001-03`  
**Status:** `APPROVED`  
**Owner Role:** `business-analysis`  
**Governing Contract:** `MICRO_MVP_001_CONTRACT_v0.1.md`  
**Required Skill:** `SK-BA`  
**Upstream Artifact:** `ART-029 — ASSESSMENT_QUESTION_BANK_v0.1.yaml`  
**Decision Gate:** `GATE-EXP-001`

---

## 1. Objective

Create `SCORING_MODEL_v0.1.yaml` for the EXP-001 AI Career Transformation Snapshot.

The scoring model must convert the ten approved binary readiness questions into a deterministic, explainable snapshot while preserving the commercial-validation purpose and responsible-language boundaries of EXP-001.

Do not modify the approved question bank.

---

## 2. Required context

Before drafting the scoring model, read:

1. `governance/constitution/MIDETE_AI_PROJECT_CONSTITUTION_v0.1.md`
2. `governance/manifests/PROJECT_EXECUTION_MANIFEST_v0.1.yaml`
3. `docs/product/experiments/EXP-001/MICRO_MVP_001_CONTRACT_v0.1.md`
4. `docs/product/experiments/EXP-001/EXPERIMENT_HYPOTHESIS_v0.1.md`
5. `docs/product/experiments/EXP-001/ASSESSMENT_QUESTION_BANK_v0.1.yaml`
6. `skills/business-analysis/SKILL.md`
7. the `EXP-001-03` row in the Project Work Traceability Matrix.

If any required upstream item is absent or contradictory, stop and record the task as BLOCKED.

---

## 3. Baseline scoring constraints

Preserve the approved baseline:

```text
YES = 1 indicator present
NO  = 0 indicators present

10 readiness questions
5 dimensions
2 questions per dimension
dimension score = 0..2
overall total = 0..10 indicators present
```

Only `RDY-001` through `RDY-010` may contribute to the readiness score.

The following must not contribute to scoring:

- `INT-001`
- `PROF-001`
- `PROF-002`
- `PROF-003`
- `VOC-001`

---

## 4. Required dimension mapping

Use the approved Question Bank mapping without changing question membership:

- `VIGENCIA_PROFESIONAL`: RDY-001, RDY-002
- `AI_DIGITAL_READINESS`: RDY-003, RDY-004
- `MARKET_AWARENESS`: RDY-005, RDY-006
- `TRANSFERIBILIDAD_EVIDENCIA`: RDY-007, RDY-008
- `ADAPTABILIDAD_ACCION`: RDY-009, RDY-010

No weighting is authorized in EXP-001 unless explicitly introduced through approved change control.

---

## 5. Required scoring-model decisions

The output must explicitly define:

- input contract;
- allowed response values;
- per-question point mapping;
- per-dimension calculation;
- overall calculation;
- valid score ranges;
- missing-answer behavior;
- invalid-value behavior;
- tie behavior when selecting a priority dimension;
- deterministic priority-selection rule;
- result-display contract;
- interpretation boundaries;
- prohibited interpretations;
- implementation-neutral test vectors;
- acceptance criteria.

Where the parent contract does not already determine a rule, label the rule as a deterministic EXP-001 design decision rather than presenting it as validated market evidence.

---

## 6. Responsible interpretation

The result represents only:

> indicators of professional preparation present based on the user's self-reported answers.

It must never be transformed into or described as:

- employability percentage;
- probability of hiring;
- probability of retaining employment;
- probability of layoff;
- probability of career success;
- intelligence or competence score;
- psychological assessment;
- salary prediction;
- guaranteed career outcome.

Allowed result form:

> Tienes 7 de 10 indicadores de preparación profesional presentes.

The scoring model must preserve the distinction between:

```text
measurement of responses
            ≠
prediction of employment outcomes
```

---

## 7. Output requirements

Create exactly:

`docs/product/experiments/EXP-001/SCORING_MODEL_v0.1.yaml`

The artifact must include the metadata required by the Artifact Lifecycle Contract:

- artifact_id;
- version;
- phase;
- status;
- owner;
- upstream_dependencies;
- downstream_consumers.

Initial lifecycle status must be `DRAFT` until acceptance review is completed.

Do not register, approve, freeze or advance the artifact automatically unless separately authorized.

---

## 8. Scope exclusions

This task does not authorize:

- modifying assessment questions;
- profession transformation cards;
- landing copy;
- privacy disclaimer;
- payment integration;
- analytics implementation;
- frontend code;
- Apps Script;
- backend code;
- database work;
- LLM integration;
- RAG;
- agents;
- cloud infrastructure.

---

## 9. Acceptance condition

EXP-001-03 may proceed to acceptance review only when the scoring model is:

- deterministic;
- traceable to ART-029;
- mathematically consistent;
- implementation-neutral;
- explicit about edge cases;
- compatible with the no-code Micro-MVP;
- compliant with responsible-language restrictions;
- free of unsupported employment predictions.

Document existence alone does not mark EXP-001-03 COMPLETE.
