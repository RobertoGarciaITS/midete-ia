# MÍDETE IA
# EXP_001_MVP_FUNCTIONAL_ARCHITECTURE_SPEC_v0.1
## Functional Architecture Specification for EXP-001 — AI Career Transformation Snapshot

**Artifact ID:** `ART-045`  
**Version:** `v0.1`  
**Phase:** `P01 / EXP-001`  
**Status:** `DRAFT`  
**Validation State:** `READY_FOR_REVIEW`  
**Owner / Role:** Product Management / Solution Architecture / Frontend Engineering / QA Governance  
**Scope:** Functional architecture for the EXP-001 Stage-0 MVP  
**Primary Product Baseline:** `ART-023 — MICRO_MVP_001_CONTRACT_v0.1.md`  
**Canonical Question Specification:** `ART-029 — ASSESSMENT_QUESTION_BANK_v0.1.yaml`  
**Canonical Scoring Specification:** `ART-035 — SCORING_MODEL_v0.1.yaml`  
**Delivery Plan:** `ART-036 — EXP_001_ROLLING_WAVE_EXECUTION_PLAN_v0.1.md`  
**Architecture Fit:** `ART-038 — EXP_001_ARCHITECTURE_FIT_REVIEW_v0.1.md`  
**Runtime Decision:** `ART-039 — ADR_EXP001_001_STAGE0_WEB_APP_ARCHITECTURE_v0.1.md`  
**Execution-Conformance Contract:** `ART-044 — EXP_001_SPEC_BASELINE_EXECUTION_CONTRACT_v0.1.md`  
**Existing Executable Core:** `EXP-001-WP03 — scoring.js`  
**Decision Gate:** `GATE-EXP-001`

---

## 1. Purpose

This artifact defines the minimum functional architecture required to turn the already approved EXP-001 product specifications into a browser-accessible, testable Stage-0 MVP without redefining the product, scoring model, experiment hypothesis or approved runtime.

It fills the integration-design gap between:

```text
PRODUCT / EXPERIMENT SPEC
        ↓
QUESTION SPEC
        ↓
SCORING SPEC
        ↓
RUNTIME ADR
        ↓
FUNCTIONAL APPLICATION ARCHITECTURE
        ↓
WORK-PACKAGE IMPLEMENTATION
```

This specification describes how approved components interact.

It does not authorize implementation by itself.

---

## 2. Non-redefinition rule

ART-045 is downstream of the approved EXP-001 baseline.

It must not redefine:

- the business hypothesis;
- the 15-question assessment;
- canonical question IDs;
- question wording;
- allowed values;
- required / optional semantics;
- scoring rules;
- scoring dimensions;
- scoring tie behavior;
- prohibited employment interpretations;
- experiment KPIs;
- willingness-to-pay target;
- privacy baseline;
- responsible-AI boundaries;
- commercial offer;
- gate criteria.

When exact semantics are required, implementation must read the canonical source rather than copying this document.

---

## 3. Architecture authority

Functional implementation resolves requirements in this order:

```text
ART-023  Micro-MVP baseline
   ↓
ART-029  Canonical assessment
   ↓
ART-035  Canonical scoring
   ↓
ART-038  Architecture fit
   ↓
ART-039  Approved runtime
   ↓
ART-044  Baseline execution discipline
   ↓
ART-045  Functional architecture
   ↓
Authorized WP prompt
   ↓
Code / tests / evidence
```

ART-039 explicitly refines the original Forms-centric implementation option into:

```text
Google Apps Script Web App
+ HTML Service
+ HTML / CSS / JavaScript
+ Google Sheets in the persistence slice
```

That evolution affects the implementation surface only.

All unaffected ART-023 requirements remain in force.

---

## 4. Functional MVP boundary

The complete EXP-001 product flow remains:

```text
LANDING
   ↓
HOOK / PRIMARY CTA
   ↓
ASSESSMENT
   ↓
PROFESSIONAL CONTEXT
   ↓
10 READINESS INDICATORS
   ↓
OPTIONAL VOC
   ↓
VALIDATION
   ↓
SCORING
   ↓
SNAPSHOT
   ↓
PAID CTA
   ↓
PAYMENT / INTEREST SIGNAL
```

The functional architecture must support this flow incrementally.

A work package may implement only one slice while preserving interfaces needed by later slices.

---

## 5. Logical component architecture

Target Stage-0 logical architecture:

```text
USER / BROWSER
      │
      ▼
┌─────────────────────────────┐
│ LANDING / ENTRY             │
│ WP-08                       │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ ASSESSMENT UI               │
│ WP-04                       │
│ ART-029 driven              │
└──────────────┬──────────────┘
               │ raw UI values
               ▼
┌─────────────────────────────┐
│ RESPONSE ADAPTER            │
│ WP-04                       │
│ UI → canonical values       │
└──────────────┬──────────────┘
               │ canonical response object
               ▼
┌─────────────────────────────┐
│ SCORING ENGINE              │
│ WP-03 COMPLETE              │
│ scoring.js / ART-035        │
└───────┬─────────────────────┘
        │ structured scoring result
        ▼
┌─────────────────────────────┐
│ RESULT ADAPTER              │
│ WP-06                       │
│ score → presentation model  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ RESULT SNAPSHOT UI          │
│ WP-06 / WP-07               │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ PAID CTA / EXTERNAL PAYMENT │
│ WP-10                       │
└─────────────────────────────┘
```

Cross-cutting components:

```text
PERSISTENCE     → WP-05
PRIVACY         → WP-09
ANALYTICS       → WP-11
QA              → WP-12
LAUNCH REVIEW   → WP-13
```

---

## 6. Development architecture vs runtime architecture

These two environments must not be confused.

### 6.1 Development environment

Primary development surface may be GitHub Codespaces or an equivalent local Git workspace.

Expected capabilities:

- Git;
- Node.js for deterministic automated tests;
- HTML / CSS / JavaScript editing;
- browser preview;
- static validation;
- unit and integration tests;
- Codex-assisted implementation when authorized.

Development does not define production architecture.

### 6.2 Approved Stage-0 runtime

Per ART-039:

```text
Google Apps Script Web App
        │
        ├── HTML Service
        │     ├── HTML
        │     ├── CSS
        │     └── JavaScript
        │
        └── Apps Script server functions
                │
                └── Google Sheets [WP-05]
```

No dedicated backend API, database server, container runtime or cloud compute service is required for EXP-001.

---

## 7. Component responsibility model

### FA-COMP-001 — Landing

Responsibility:

- present approved hook and value proposition;
- display expected completion time;
- provide primary `MIDE MI PREPARACIÓN` CTA;
- route to the assessment;
- emit the approved landing event when analytics exists.

Must not:

- calculate scoring;
- collect hidden personal data;
- redefine experiment claims.

Primary future package: `WP-08`.

### FA-COMP-002 — Assessment UI

Responsibility:

- render the approved assessment;
- preserve canonical order where specified;
- collect all required answers;
- clearly distinguish optional VOC input;
- support mobile and desktop interaction;
- provide client-side required-field feedback.

Canonical source: `ART-029`.

Primary package: `WP-04`.

### FA-COMP-003 — Response Adapter

Responsibility:

- transform UI values into canonical identifiers and values;
- output data compatible with `scoreAssessment()`;
- preserve non-scored context separately;
- reject mappings that would change approved semantics.

Example scoring payload:

```javascript
{
  "RDY-001": "Sí",
  "RDY-002": "No"
}
```

The adapter may normalize implementation representations but must not invent new response meaning.

Primary package: `WP-04`.

### FA-COMP-004 — Scoring Engine

Existing implementation:

`apps/exp-001/scoring/scoring.js`

Responsibility:

- validate scored input;
- calculate five dimension scores;
- calculate total indicators present;
- calculate priority and strength candidates;
- preserve deterministic tie behavior;
- return structured output.

Canonical source: `ART-035`.

This component must remain independent of:

- DOM;
- Google Sheets;
- Apps Script APIs;
- analytics;
- payments;
- LLMs;
- profession content.

Current package: `WP-03 COMPLETE`.

### FA-COMP-005 — Result Adapter

Responsibility:

- convert canonical scoring output into a presentation model;
- map dimension IDs to approved display labels;
- preserve tied priority / strength information;
- expose only statements authorized by ART-035 and later result/content artifacts.

It must not:

- recalculate scores;
- reinterpret totals as percentages;
- invent market claims.

Primary package: `WP-06`.

### FA-COMP-006 — Result Snapshot

Responsibility:

- show total indicators present;
- show five dimension scores;
- show `LO QUE YA TIENES`;
- provide an interface for `LO QUE ESTÁ CAMBIANDO`;
- show `SIGUIENTE PRIORIDAD`;
- present approved responsible-use wording;
- expose the approved paid CTA when its package is active.

Primary packages: `WP-06`, `WP-07`, `WP-09`, `WP-10`.

### FA-COMP-007 — Persistence Adapter

Responsibility:

- write only approved experiment fields;
- preserve canonical question IDs;
- persist enough data for scoring reproducibility and experiment analysis;
- avoid unnecessary identifiers.

Approved Stage-0 target: Google Sheets.

Persistence must not become a dependency of the scoring engine.

Primary package: `WP-05`.

### FA-COMP-008 — Analytics Adapter

Responsibility:

- emit only approved funnel events;
- avoid changing product behavior;
- avoid storing unnecessary personal content in event properties;
- support verification that each event can be observed.

Primary package: `WP-11`.

### FA-COMP-009 — Commercial Handoff

Responsibility:

- render the approved paid offer;
- route to an approved external payment link;
- preserve payment success / cancel behavior specified by the commercial package.

Must not implement:

- subscription engine;
- wallet;
- billing database;
- custom payment API unless separately authorized by future evidence.

Primary package: `WP-10`.

---

## 8. Canonical response architecture

The UI must preserve three logical response groups.

### 8.1 Intent

```text
INT-001
```

Used for segmentation and market research.

Not scored.

### 8.2 Professional context

```text
PROF-001
PROF-002
PROF-003
```

Used for segmentation and later result context.

Not scored.

### 8.3 Readiness

```text
RDY-001
...
RDY-010
```

Only these ten inputs are scored.

### 8.4 Voice of Customer

```text
VOC-001
```

Optional.

Not scored.

The scoring adapter must not let INT / PROF / VOC values alter score calculations.

---

## 9. Client-side state model

The minimum UI state machine is:

```text
INIT
  ↓
ASSESSMENT_READY
  ↓
IN_PROGRESS
  ↓
VALIDATING
  ├── INVALID
  │      ↓
  │  VALIDATION_FEEDBACK
  │      ↓
  │  IN_PROGRESS
  │
  └── VALID
         ↓
      SCORING
         ↓
    RESULT_READY
         ↓
    RESULT_VISIBLE
```

Later packages may add:

```text
PERSISTING
CTA_VISIBLE
PAYMENT_HANDOFF
```

without changing scoring semantics.

---

## 10. Validation architecture

Two validation layers are required.

### 10.1 UI validation

Responsibilities:

- required field present;
- allowed selection present;
- optional field clearly optional;
- open text limit / guidance enforced when specified;
- no duplicate rendered controls for a canonical question ID.

UI validation improves user experience but is not the final scoring authority.

### 10.2 Scoring validation

`scoreAssessment()` remains the canonical scoring validator.

Current error contract:

```text
SCORE_INCOMPLETE
SCORE_INVALID_VALUE
SCORE_UNEXPECTED_QUESTION
SCORE_DUPLICATE_RESPONSE
```

Recommended presentation behavior:

| Error | User-visible handling | Engineering interpretation |
|---|---|---|
| SCORE_INCOMPLETE | Ask user to complete missing required answers | expected recoverable input state |
| SCORE_INVALID_VALUE | Block result and request valid response | adapter/UI defect or invalid input |
| SCORE_UNEXPECTED_QUESTION | generic safe error; do not expose internals | implementation defect |
| SCORE_DUPLICATE_RESPONSE | generic safe error; do not expose internals | implementation defect |

Raw internal codes may be logged for development but should not be used as user-facing copy.

---

## 11. Result contract boundary

The scoring engine outputs data.

The result UI creates presentation.

These must remain separate.

```text
scoreAssessment()
      ↓
{
  total_indicators_present,
  dimensions,
  priority_candidates,
  primary_priority,
  strength_candidates,
  primary_strength
}
      ↓
Result Adapter
      ↓
Presentation Model
      ↓
Result UI
```

The result layer must never convert:

```text
7 / 10
```

into:

```text
70% employability
70% future-ready
70% competence
```

unless a future validated specification explicitly authorizes such a measure.

---

## 12. Persistence architecture

Persistence belongs after canonical response resolution.

Target sequence:

```text
UI RESPONSES
      ↓
CANONICAL RESPONSE OBJECT
      ├───────────────→ SCORING ENGINE
      │
      └───────────────→ PERSISTENCE ADAPTER [WP-05]
```

A later persisted row may include only fields approved by the storage package.

The exact schema is intentionally deferred to WP-05.

ART-045 does not authorize new personal identifiers.

---

## 13. Event architecture

Events must be side effects around the user journey, not business-rule dependencies.

Target events from ART-023:

```text
landing_view
assessment_start
assessment_complete
result_view
paid_cta_click
payment_link_open
payment_complete
```

Functional principle:

> Failure of analytics must not change the user's score.

Where practical:

```text
PRODUCT ACTION
      ↓
PRODUCT RESULT
      ↓
EVENT OBSERVATION
```

not:

```text
EVENT SERVICE SUCCESS
      ↓
allow scoring
```

---

## 14. Privacy architecture

Privacy is layered into the flow rather than isolated to a single page.

Expected placement:

```text
LANDING
  └── beta / orientation boundary

ASSESSMENT
  ├── data minimization
  └── VOC confidentiality warning

RESULT
  └── decision-support / non-predictive notice

COMMERCIAL HANDOFF
  └── approved offer / payment terms
```

The exact final text remains owned by the privacy package.

Functional architecture must leave clear UI locations for those notices.

---

## 15. Planned repository module boundaries

The following is a logical target layout, not authorization to create files:

```text
apps/exp-001/
│
├── scoring/
│   └── scoring.js
│
├── assessment/
│   ├── index.html
│   ├── app.js
│   └── styles.css
│
└── runtime/
    └── Apps Script integration [later authorized slice]

tests/exp-001/
│
├── scoring/
│   └── scoring.test.js
│
├── assessment/
│   └── assessment integration tests
│
└── smoke/
    └── MVP smoke scenarios
```

Exact filenames may be resolved in the execution-ready package as long as component boundaries remain consistent with this specification.

---

## 16. Work-package-to-component map

| Work Package | Primary architecture responsibility |
|---|---|
| WP-03 | deterministic scoring core |
| WP-04 | assessment UI + response adapter |
| WP-05 | persistence adapter + storage mapping |
| WP-06 | result adapter + result snapshot |
| WP-07 | profession transformation content interface |
| WP-08 | landing / acquisition entry |
| WP-09 | privacy and responsible-use integration |
| WP-10 | commercial CTA / external payment handoff |
| WP-11 | funnel event instrumentation |
| WP-12 | integrated functional / E2E QA |
| WP-13 | deployment and launch-readiness verification |
| WP-14 | experiment measurement |
| WP-15 | evidence-based experiment gate |

No row authorizes execution by itself.

---

## 17. Testing architecture

EXP-001 testing should be layered.

### Level 1 — Unit

Scope:

- pure deterministic business functions.

Current example:

`scoring.js`

Current evidence baseline:

```text
9 tests
9 pass
0 fail
```

### Level 2 — Component / Integration

Scope examples:

```text
Assessment UI
      ↓
Response Adapter
      ↓
Scoring Engine
```

Validate:

- canonical field mapping;
- required responses;
- non-scored invariance;
- valid score propagation;
- invalid score handling.

### Level 3 — Smoke

Purpose:

Verify that the minimum vertical product path is alive.

Canonical smoke scenarios:

#### SMOKE-MVP-001 — ALL YES

```text
Assessment
→ 10 canonical Sí
→ scoring
→ result total 10 / 10
```

Expected:

- valid result;
- all dimensions 2 / 2;
- no priority gap.

#### SMOKE-MVP-002 — ALL NO

```text
Assessment
→ 10 canonical No
→ scoring
→ result total 0 / 10
```

Expected:

- valid result;
- all dimensions 0 / 2;
- no relative strength.

#### SMOKE-MVP-003 — CANONICAL MIXED

Use the approved 7 / 10 baseline vector from ART-035.

Expected:

```text
TOTAL 7 / 10
VIGENCIA_PROFESIONAL       2 / 2
AI_DIGITAL_READINESS       1 / 2
MARKET_AWARENESS           1 / 2
TRANSFERIBILIDAD_EVIDENCIA 2 / 2
ADAPTABILIDAD_ACCION       1 / 2
```

These three cases initially run at engine level and should later be promoted to browser-level smoke tests without changing their business expectations.

### Level 4 — Functional

Validate user-visible features against ART-023 and downstream specifications.

### Level 5 — End-to-End

Target path:

```text
Landing
→ Assessment
→ Validation
→ Score
→ Result
→ Storage
→ Paid CTA
→ External payment handoff
```

E2E readiness belongs to WP-12 / WP-13.

---

## 18. QA-contract mapping

ART-023 defines ten critical QA items.

Architecture support mapping:

| QA | Architecture owner |
|---|---|
| QA-001 Complete form | WP-04 |
| QA-002 All Yes | WP-03 + WP-04 + WP-06 |
| QA-003 All No | WP-03 + WP-04 + WP-06 |
| QA-004 Mixed | WP-03 + WP-04 + WP-06 |
| QA-005 Mobile | WP-04 / WP-08 / WP-12 |
| QA-006 Desktop | WP-04 / WP-08 / WP-12 |
| QA-007 Scoring | WP-03 |
| QA-008 Redirect / CTA | WP-08 / WP-10 |
| QA-009 Payment link | WP-10 |
| QA-010 Storage | WP-05 |

No QA item may be marked PASS before its required implementation exists.

---

## 19. Functional requirement set

ART-045 formalizes these architecture-level requirements without redefining product semantics.

### FA-REQ-001
The assessment UI shall preserve canonical question IDs from ART-029.

### FA-REQ-002
The response adapter shall produce canonical values compatible with ART-035.

### FA-REQ-003
The scoring engine shall remain independent from DOM, persistence and external services.

### FA-REQ-004
The result adapter shall use the scoring output as authoritative and shall not recalculate business rules.

### FA-REQ-005
The result UI shall not present unsupported predictive or percentage interpretations.

### FA-REQ-006
Persistence shall be downstream of canonical response mapping and shall not alter scoring.

### FA-REQ-007
Analytics failures shall not modify scoring semantics.

### FA-REQ-008
Privacy / responsible-use notices shall have defined integration points before public launch.

### FA-REQ-009
The MVP shall support mobile-usable and desktop-usable assessment and result flows before launch.

### FA-REQ-010
The canonical three-case smoke suite shall pass at browser level before the integrated MVP may be considered smoke-tested.

### FA-REQ-011
Full EXP-001 launch readiness shall remain governed by the QA contract and WP-13 rather than by the existence of code alone.

### FA-REQ-012
No deferred technology may be introduced without the architecture-evolution process.

---

## 20. Non-functional boundaries

For Stage-0, prioritize:

- deterministic behavior;
- reproducibility;
- simple UX;
- mobile usability;
- readable accessibility-conscious HTML;
- low operational burden;
- data minimization;
- reversible architecture;
- clear failure handling;
- minimal external dependencies.

This specification does not establish enterprise-grade:

- availability SLA;
- disaster-recovery architecture;
- horizontal scaling;
- complex observability stack;
- multi-region deployment;
- authentication / authorization;
- advanced application security infrastructure.

Those are not required by the current experiment.

---

## 21. Deferred technologies

Remain deferred unless future evidence triggers architecture review:

- React / Next.js;
- FastAPI;
- PostgreSQL;
- authentication;
- custom managed backend;
- LLM runtime;
- RAG;
- agents;
- Docker;
- Terraform;
- Kubernetes;
- microservices.

Codespaces is a development environment and does not constitute authorization for containerized production architecture.

---

## 22. Error containment

Failures should remain localized.

Examples:

```text
UI validation failure
→ remain in assessment

Scoring validation failure
→ no result generated

Persistence failure
→ must not silently change score

Analytics failure
→ must not silently change score

Payment-link failure
→ must not corrupt assessment/result data
```

Later work packages must specify whether persistence failure blocks result presentation or is retried; ART-045 does not invent that product behavior.

---

## 23. Functional observability

The MVP must eventually allow verification of:

```text
landing reachable?
assessment reachable?
assessment completable?
scoring valid?
result visible?
storage working?
privacy present?
CTA visible?
payment handoff reachable?
analytics observable?
```

This observability is functional evidence, not a requirement for an enterprise monitoring platform.

---

## 24. Architecture evolution triggers

A new architecture review is required if implementation evidence introduces a need for:

- user accounts or persistent user history;
- external reusable API;
- complex concurrent workloads;
- advanced dynamic UX impractical in Apps Script;
- AI inference runtime;
- strong transactional guarantees;
- workload scale / reliability beyond Stage-0;
- regulated or materially more sensitive data;
- payment infrastructure beyond approved external links.

Until such evidence exists, ART-039 remains sufficient.

---

## 25. Relationship to ART-044

ART-044 governs execution discipline.

ART-045 defines functional integration.

Together:

```text
ART-044
Can this task execute without changing the baseline?
          +
ART-045
How should approved MVP components integrate?
          ↓
Authorized Work Package
```

If implementation convenience conflicts with ART-023, ART-029, ART-035, ART-039 or ART-044, the implementation must stop and follow change control rather than silently modifying this architecture.

---

## 26. Definition of architecture-ready for a work package

A work package is architecture-ready only when:

- its component responsibility is known;
- inputs are known;
- outputs are known;
- upstream canonical spec is known;
- invariants are known;
- error behavior required for the slice is known;
- test level is known;
- evidence target is known;
- implementation technology is already authorized or separately reviewed.

Architecture-ready does not equal execution-authorized.

---

## 27. Definition of functional MVP

A browser prototype is not automatically the completed EXP-001 MVP.

The integrated Micro-MVP satisfies its technical baseline only when the ART-023 Definition of Done is evidenced, including:

- landing accessible;
- primary CTA functional;
- assessment accessible;
- readiness inputs configured;
- scoring validated;
- result shown;
- required data stored;
- paid CTA visible;
- payment link functional;
- use notice present;
- mobile flow validated;
- minimum tracking available;
- critical QA passed.

Commercial validation remains dependent on real-user evidence.

---

## 28. Acceptance criteria for ART-045

ART-045 is ready for approval review when:

- it preserves ART-023 product semantics;
- it preserves ART-029 question semantics;
- it preserves ART-035 scoring semantics;
- it conforms to ART-039 runtime decision;
- it conforms to ART-044 execution discipline;
- it separates UI, adapters, scoring, persistence and presentation responsibilities;
- it defines the canonical response flow;
- it defines client state and error boundaries without inventing business rules;
- it defines testing levels;
- it formalizes the three-case smoke baseline;
- it maps ART-023 QA items to architecture ownership;
- it maps work packages to components;
- it introduces no unauthorized technology;
- it changes no current work-item status;
- it authorizes no implementation by itself.

---

## 29. Architecture conclusion

EXP-001 should be implemented as a small, composable Stage-0 application:

```text
APPROVED PRODUCT SPEC
        ↓
ASSESSMENT UI
        ↓
CANONICAL RESPONSE ADAPTER
        ↓
DETERMINISTIC SCORING ENGINE
        ↓
RESULT ADAPTER
        ↓
RESULT SNAPSHOT
        ↓
MINIMAL PERSISTENCE / EVENTS
        ↓
EXTERNAL COMMERCIAL HANDOFF
```

with:

```text
UNIT
→ COMPONENT
→ SMOKE
→ FUNCTIONAL
→ E2E
```

verification.

The architectural objective is not maximum technical sophistication.

It is the smallest testable system capable of generating reliable EXP-001 product and market evidence while preserving the approved specification.
