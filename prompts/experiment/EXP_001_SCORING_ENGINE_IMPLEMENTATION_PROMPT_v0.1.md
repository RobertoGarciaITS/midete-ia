# EXP-001 WP-03 — Scoring Engine Implementation Prompt v0.1

**Prompt ID:** `PRM-EXP001-WP03`  
**Level:** `L2_WORK_PACKAGE`  
**Phase:** `P01`  
**Experiment:** `EXP-001`  
**Work Package:** `WP-03`  
**Status:** `APPROVED`  
**Build Owner:** `Codex`  
**Required Skill:** `SK-FE`  
**Canonical Specification:** `ART-035 — SCORING_MODEL_v0.1.yaml`  
**Architecture Decision:** `ART-039 — ADR-EXP001-001`  
**Governing Contracts:** `MICRO_MVP_001_CONTRACT_v0.1.md`, `EVOLUTIONARY_ARCHITECTURE_CONTRACT_v0.1.md`  
**Gate:** `GATE-EXP-001`

## Objective

Implement the deterministic EXP-001 scoring engine as the first product-code slice.

Do not change business rules.

## Mandatory bootstrap

Before modifying code, read:
1. `AGENTS.md`;
2. project Constitution;
3. current Execution Manifest;
4. `ART-035 — SCORING_MODEL_v0.1.yaml`;
5. `ART-038 — EXP_001_ARCHITECTURE_FIT_REVIEW_v0.1.md`;
6. `ART-039 — ADR-EXP001-001`;
7. `skills/frontend-engineering/SKILL.md`;
8. relevant registry and traceability entries.

Stop if any required item conflicts with the current manifest.

## Implementation scope

Implement:
- canonical input validation;
- exactly RDY-001 through RDY-010;
- `Sí = 1`;
- `No = 0`;
- five approved dimension calculations;
- total 0..10;
- priority candidates;
- primary priority;
- strength candidates;
- primary strength;
- deterministic tie behavior;
- missing-input behavior;
- invalid-value behavior;
- structured output matching ART-035.

## Code boundary

WP-03 code must be implementation-neutral enough to be consumed later by the Apps Script Web App.

It must not depend on:
- Google Sheets;
- payment links;
- analytics;
- DOM rendering;
- profession cards;
- external APIs;
- LLMs;
- RAG;
- agents.

Prefer a small pure JavaScript module/function set.

## Tests

Implement automated tests for all ART-035 test vectors:
- TV-SCORE-001 ALL_YES;
- TV-SCORE-002 ALL_NO;
- TV-SCORE-003 CONTRACT_EXAMPLE_SEVEN_OF_TEN;
- TV-SCORE-004 UNIQUE_PRIORITY;
- TV-SCORE-005 MISSING_REQUIRED_RESPONSE;
- TV-SCORE-006 INVALID_RESPONSE;
- TV-SCORE-007 NON_SCORED_DATA_DOES_NOT_CHANGE_SCORE.

Tests should assert the complete relevant structured output, not merely the total score.

Add focused tests for:
- duplicate scored response representation if the chosen input structure can express it;
- unexpected scored question;
- deterministic ordering of tied candidates.

## Prohibited behavior

Do not:
- modify ART-035;
- introduce weights;
- create low/medium/high bands;
- calculate employability percentages;
- infer job-loss or hiring probabilities;
- add storage;
- add a UI;
- add third-party packages unless strictly necessary;
- introduce React, TypeScript framework, FastAPI, PostgreSQL or cloud infrastructure.

## Expected repository output

Use the existing canonical roots.

Preferred minimal structure:

```text
apps/exp-001/
└── scoring/
    └── scoring.js

tests/exp-001/
└── scoring/
    └── scoring.test.js
```

A simpler equivalent is allowed if justified and consistent with repository structure.

## Completion report

Return:
- files created/updated;
- implementation summary;
- exact test command;
- test result;
- deviations, if any;
- known limitations;
- evidence suitable for repository registration.

Do not mark WP-03 COMPLETE and do not advance the manifest unless separately authorized.
