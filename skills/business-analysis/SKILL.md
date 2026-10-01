# Business Analysis Skill

**Skill ID:** `SK-BA`  
**Status:** `AVAILABLE`  
**Initial Scope:** `EXP-001-03`  
**Role:** Business Analysis / Assessment Logic

---

## Purpose

Translate approved business rules, experiment hypotheses and structured question definitions into deterministic, traceable analysis models without introducing unsupported claims or implementation scope.

For EXP-001-03, this skill is used to define the scoring model for the AI Career Transformation Snapshot.

---

## Mandatory working method

1. Read the current Project Execution Manifest.
2. Read the work-item row in the Traceability Matrix.
3. Read the governing contract and all required upstream artifacts.
4. Separate approved rules from new design decisions.
5. Preserve IDs and mappings from upstream artifacts.
6. Make calculations deterministic and testable.
7. Define edge cases explicitly.
8. State interpretation limits.
9. Check the output against acceptance criteria before proposing approval.
10. Do not advance dependencies or gates without recorded acceptance evidence.

---

## EXP-001 scoring rules

When executing `EXP-001-03`:

- use only RDY-001 through RDY-010 for scoring;
- preserve YES = 1 and NO = 0;
- preserve five dimensions with two approved readiness questions each;
- keep the total score in the range 0..10;
- keep each dimension in the range 0..2;
- do not introduce weighting unless approved through change control;
- do not score intent, professional context or open text;
- define missing/invalid response handling explicitly;
- define deterministic tie handling for any priority-selection logic;
- provide implementation-neutral test cases.

---

## Analysis discipline

Treat self-reported responses as indicators, not objective proof of competence.

Do not infer:

- employability probability;
- job-loss risk;
- hiring probability;
- psychological characteristics;
- intelligence;
- guaranteed professional outcomes.

Do not invent external benchmarks, market validation, interviews or statistical significance.

If a rule is not determined by an upstream artifact, identify it explicitly as a proposed design decision.

---

## Output quality checks

Before submitting a scoring artifact for review, verify:

- every scored question exists in the approved question bank;
- no non-readiness question contributes points;
- all mathematical ranges are internally consistent;
- totals can be reproduced from raw responses;
- edge cases have deterministic outputs;
- display language does not imply prediction;
- the model remains implementable in Google Forms / Sheets / Apps Script or an equivalent simple implementation.

---

## Boundaries

This skill defines business-analysis logic.

It does not authorize product-code implementation, infrastructure, payments, LLMs, RAG, agents, database design or release approval.
