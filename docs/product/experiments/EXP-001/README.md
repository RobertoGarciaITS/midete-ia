# EXP-001 — AI Career Transformation Snapshot
## Operational Experiment Dashboard

**Artifact ID:** ART-043  
**Version:** v0.1  
**Phase:** P01  
**Status:** APPROVED  
**Validation State:** ACCEPTED  
**Owner / Role:** Product Management / Experiment Governance  
**Experiment:** EXP-001  
**Gate:** GATE-EXP-001  
**Upstream Dependencies:** ART-023, ART-028, ART-029, ART-035, ART-036, ART-038, ART-039, ART-042  
**Downstream Consumers:** human navigation, LLM context orientation, future status views

> This README is a derived operational view. Canonical state remains in the Project Execution Manifest, registries, traceability matrix and approved artifacts.

---

## 1. Purpose

EXP-001 validates the smallest useful and potentially sellable Mídete IA experience before building the long-term platform.

The experiment asks whether professionals will:

1. understand the career-transformation proposition;
2. complete a short assessment;
3. find value in an immediate structured snapshot;
4. want a deeper next step;
5. demonstrate willingness to pay.

EXP-001 is both a product experiment and a progressive engineering slice.

---

## 2. Core user journey

~~~text
WHERE YOU ARE
      ↓
WHAT IS CHANGING
      ↓
WHAT YOU ALREADY HAVE
      ↓
WHAT YOU ARE MISSING
      ↓
WHAT TO DO NEXT
~~~

Current free product concept:

**AI Career Transformation Snapshot**

Target interaction time: approximately five minutes.

The result is advisory decision-support. It does not predict employment, job loss, hiring probability, salary or personal worth.

---

## 3. Experiment status

| Dimension | Current state |
|---|---|
| Experiment | EXP-001 — AI Career Transformation Snapshot |
| Lifecycle | ACTIVE |
| Gate | GATE-EXP-001 — OPEN |
| Contract | ART-023 — Micro-MVP Contract |
| Hypothesis | ART-028 — APPROVED |
| Question Bank | ART-029 — APPROVED / ACCEPTED |
| Scoring Model | ART-035 — APPROVED / ACCEPTED |
| Rolling-Wave Plan | ART-036 — APPROVED / ACCEPTED |
| Architecture Fit | ART-038 — APPROVED / ACCEPTED |
| Stage-0 ADR | ART-039 — APPROVED |
| Scoring Engine Acceptance | ART-042 — APPROVED / ACCEPTED |
| Next experiment dependency item | EXP-001-06 — Privacy Disclaimer |
| Next delivery package | WP-04 — Assessment Capture — NEXT / PLANNED |
| Active delivery prompt | None |

---

## 4. Experiment work items

~~~text
EXP-001-00 Micro-MVP Contract       ✅ COMPLETE
EXP-001-01 Experiment Hypothesis    ✅ COMPLETE
EXP-001-02 Assessment Question Bank ✅ COMPLETE
EXP-001-03 Scoring Model            ✅ COMPLETE
EXP-001-04 Profession Cards         🔒 BLOCKED
EXP-001-05 Landing Copy             🔒 BLOCKED
EXP-001-06 Privacy Disclaimer       🟡 READY
EXP-001-07 QA Test Plan             🔒 BLOCKED
EXP-001-08 Analytics Catalog        🔒 BLOCKED
EXP-001-09 Commercial Offer         🔒 BLOCKED
EXP-001-10 Experiment Results       🔒 BLOCKED
EXP-001-11 Experiment Closeout      🔒 BLOCKED
~~~

READY in the dependency registry does not by itself mean execution-ready under AGENTS.md.

---

## 5. Rolling-wave delivery

| WP | Capability | Canonical status | Operational note |
|---:|---|---|---|
| WP-01 | Scoring Acceptance | COMPLETE | Scoring specification accepted |
| WP-02 | Architecture Fit | COMPLETE | Stage-0 architecture accepted |
| WP-03 | Scoring Engine | COMPLETE | Code + 9/9 tests + acceptance evidence |
| WP-04 | Assessment Capture | PLANNED | **NEXT**; no active prompt yet |
| WP-05 | Response Storage | PLANNED | Later persistence slice |
| WP-06 | Result Snapshot | PLANNED | Immediate user result |
| WP-07 | Profession Transformation Cards | PLANNED | Evidence/content slice |
| WP-08 | Landing | PLANNED | Entry and proposition |
| WP-09 | Privacy | PLANNED | Responsible-use/privacy notice |
| WP-10 | Commercial Offer | PLANNED | Paid CTA / external payment link |
| WP-11 | Analytics | PLANNED | Funnel measurement |
| WP-12 | End-to-End QA | PLANNED | Integrated validation |
| WP-13 | Launch Readiness | PLANNED | Release decision preparation |
| WP-14 | Measurement | PLANNED | Experiment evidence analysis |
| WP-15 | Experiment Gate | PLANNED | GO / ITERATE / PIVOT / STOP |

Canonical rolling-wave plan:
[EXP_001_ROLLING_WAVE_EXECUTION_PLAN_v0.1.md](EXP_001_ROLLING_WAVE_EXECUTION_PLAN_v0.1.md).

---

## 6. Current Stage-0 architecture

~~~text
Google Apps Script Web App
        │
        ├── HTML / CSS / JavaScript
        │       ├── Landing
        │       ├── Assessment
        │       ├── Scoring integration
        │       └── Result
        │
        └── Apps Script server functions
                │
                ▼
           Google Sheets
           [WP-05 later]
~~~

Current accepted implementation slice:

~~~text
RDY-001..RDY-010
        ↓
strict validation
        ↓
Sí / No mapping
        ↓
5 dimensions
        ↓
total 0..10
        ↓
priority + strength
        ↓
structured result
~~~

The scoring engine intentionally has no dependency on:

- Google Sheets;
- DOM rendering;
- payment;
- analytics;
- external APIs;
- LLMs;
- RAG;
- agents.

---

## 7. Current implementation

Code:

- [Scoring engine](../../../../apps/exp-001/scoring/scoring.js)

Tests:

- [Scoring tests](../../../../tests/exp-001/scoring/scoring.test.js)

Acceptance:

- [ART-042 — WP-03 Scoring Engine Acceptance](WP_03_SCORING_ENGINE_ACCEPTANCE_v0.1.md)

Automated result:

~~~text
9 tests
9 passed
0 failed
~~~

---

## 8. Evidence

| Evidence | Work item | Result |
|---|---|---|
| EVID-EXP001-002 | Assessment Question Bank | PASS |
| EVID-EXP001-003 | Scoring Model | PASS |
| EVID-EXP001-WP02-001 | Architecture Fit | PASS |
| EVID-EXP001-WP03-001 | Scoring Engine | PASS |

Evidence is implementation or review evidence unless explicitly marked commercial, deployment or live-user evidence.

EXP-001 does **not** yet contain market-validation results.

---

## 9. Canonical artifacts

- [ART-023 — Micro-MVP Contract](MICRO_MVP_001_CONTRACT_v0.1.md)
- [ART-028 — Experiment Hypothesis](EXPERIMENT_HYPOTHESIS_v0.1.md)
- [ART-029 — Assessment Question Bank](ASSESSMENT_QUESTION_BANK_v0.1.yaml)
- [ART-035 — Scoring Model](SCORING_MODEL_v0.1.yaml)
- [ART-036 — Rolling-Wave Plan](EXP_001_ROLLING_WAVE_EXECUTION_PLAN_v0.1.md)
- [ART-042 — WP-03 Acceptance](WP_03_SCORING_ENGINE_ACCEPTANCE_v0.1.md)
- [Architecture Fit Review](../../../architecture/EXP_001_ARCHITECTURE_FIT_REVIEW_v0.1.md)
- [Stage-0 ADR](../../../architecture/adr/ADR_EXP001_001_STAGE0_WEB_APP_ARCHITECTURE_v0.1.md)

Project-level source of truth:
[Project Execution Manifest](../../../../governance/manifests/PROJECT_EXECUTION_MANIFEST_v0.1.yaml).

---

## 10. Current blockers and readiness

### WP-04 — Assessment Capture

Current classification:

~~~text
NEXT / PLANNED
~~~

It is not yet execution-ready because:

- no active delivery prompt is resolved in the Manifest;
- its execution-ready specification has not yet been baselined;
- explicit user authorization for its repository mutations has not been granted.

### EXP-001-06 — Privacy Disclaimer

The dependency registry marks it READY.

However, execution readiness still requires resolution of its prompt, executable skill, artifact, acceptance and evidence path under AGENTS.md.

---

## 11. AI-assisted handoff

~~~text
USER
approval authority
      ↓
CHATGPT
specification / architecture / governance
      ↓
CODEX
implementation / technical tests
      ↓
CHATGPT
acceptance audit / evidence
      ↓
USER
next persistent-change authorization
~~~

Codex must not independently redefine scoring, privacy, product claims, experiment success criteria or architecture maturity.

---

## 12. Next governed action

For the rolling-wave delivery track:

~~~text
WP-03 COMPLETE
      ↓
prepare WP-04 execution-ready package
      ↓
resolve prompt / skill / acceptance / evidence
      ↓
explicit user authorization
      ↓
implement Assessment Capture
~~~

For the experiment dependency track, EXP-001-06 — Privacy Disclaimer remains READY but requires its own execution setup.

No later package or experiment gate is authorized by this dashboard.
