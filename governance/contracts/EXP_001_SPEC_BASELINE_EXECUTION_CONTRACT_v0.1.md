# MÍDETE IA
# EXP_001_SPEC_BASELINE_EXECUTION_CONTRACT_v0.1

**Artifact ID:** `ART-044`  
**Version:** `v0.1`  
**Phase:** `P01 / EXP-001`  
**Status:** `DRAFT`  
**Validation State:** `READY_FOR_REVIEW`  
**Owner / Role:** Product Management / Architecture Governance / Execution Governance  
**Scope:** EXP-001 baseline-conformant task execution  
**Primary Baseline:** `ART-023 — MICRO_MVP_001_CONTRACT_v0.1.md`  
**Upstream Dependencies:** `AGENTS.md`, `ART-023`, `ART-024`, `ART-029`, `ART-035`, `ART-036`, `ART-038`, `ART-039`, `ART-046`, Artifact Lifecycle Contract, Change Control Contract, Context Acquisition Contract, Requirement Traceability Contract  
**Downstream Consumers:** future EXP-001 work-package prompts, implementation tasks, acceptance reviews, QA, evidence reconciliation, governance validators  
**Gate:** `GATE-EXP-001`

---

## 1. Purpose

This contract governs how approved EXP-001 specifications are executed without silently changing, reinterpreting or expanding the approved Micro-MVP baseline.

Its purpose is to ensure that each implementation task:

1. identifies the exact baseline requirement it is executing;
2. resolves the most specific approved downstream specification;
3. applies only explicitly approved evolutions;
4. preserves all unaffected baseline requirements;
5. refuses unauthorized scope or semantic changes;
6. produces evidence proving conformance;
7. reconciles canonical state only after implementation and verification.

This contract does **not** redefine the EXP-001 product.

It governs disciplined execution of existing approved specifications.

---

## 2. Governing principle

> **Execute the approved baseline as written. Reconcile only explicitly approved evolutions. Do not reinterpret the specification to fit implementation convenience.**

The implementation must conform to the specification.

The specification must not be retroactively changed merely to match implementation.

Canonical direction:

```text
APPROVED SPECIFICATION
        ↓
IMPLEMENTATION
        ↓
TEST
        ↓
EVIDENCE
        ↓
CANONICAL RECONCILIATION
```

Prohibited direction:

```text
IMPLEMENTATION
        ↓
rewrite approved specification
to justify implementation
```

---

## 3. Scope

This contract applies to persistent EXP-001 work including:

- product implementation;
- UI implementation;
- assessment capture;
- result rendering;
- persistence;
- profession cards;
- landing;
- privacy integration;
- commercial offer integration;
- analytics;
- QA;
- launch-readiness work;
- experiment measurement;
- implementation corrections.

It also applies to ChatGPT, Codex or any future execution agent working on EXP-001.

It does not by itself authorize any work package, repository mutation, deployment or gate transition.

---

## 4. Authority and precedence hierarchy

A task must resolve authority from highest governing scope to the most specific approved implementation specification.

Default order:

```text
1. Project Constitution / AGENTS.md / Manifest
                ↓
2. ART-023 — EXP-001 Micro-MVP baseline
                ↓
3. Approved downstream product specification
   e.g. ART-029, ART-035
                ↓
4. Approved architecture evolution / ADR
   e.g. ART-038, ART-039
                ↓
5. Approved work-package prompt
                ↓
6. Implementation
```

Rules:

- A lower-level artifact may refine a higher-level artifact when the refinement is consistent with the higher-level intent.
- An approved evolution may replace only the decision explicitly within its scope.
- An approved evolution does **not** silently supersede unrelated baseline requirements.
- A planning template, README, code file or developer preference cannot override an approved specification.
- If two approved sources conflict and no explicit supersession relationship resolves the conflict, execution is `SPEC_BLOCKED`.

---

## 5. Baseline preservation rule

The EXP-001 baseline must be preserved unless an approved downstream artifact or approved change explicitly modifies a specific decision.

For every task, classify baseline clauses as:

```text
EXECUTED
REFINED_BY_APPROVED_SPEC
SUPERSEDED_BY_APPROVED_EVOLUTION
NOT_APPLICABLE
UNCHANGED
```

No other interpretation is allowed without change control.

Implementation convenience, framework preference, agent preference, developer preference, available cloud services or technical novelty are not valid reasons to change the baseline.

---

## 6. Approved evolution rule

An evolution is applicable only when all of the following are true:

1. the artifact is present;
2. its lifecycle state permits use;
3. its scope clearly addresses the decision being changed;
4. its upstream dependencies are valid;
5. it does not claim broader supersession than documented;
6. the task identifies the original decision and the approved replacement.

Required declaration:

```text
ORIGINAL BASELINE DECISION:
<artifact + clause / decision>

APPROVED EVOLUTION:
<artifact + decision>

REPLACED SCOPE:
<exact scope only>

PRESERVED BASELINE:
<all unaffected requirements>
```

Example pattern:

```text
ART-023 architecture baseline
        ↓
ART-038 architecture-fit review
        ↓
ART-039 approved Stage-0 ADR
        ↓
runtime decision refined

assessment scope, scoring,
privacy, commercial target,
responsible-use rules
remain unchanged
```

---

## 7. Mandatory Task Conformance Declaration

Before implementation, every persistent EXP-001 task must resolve and report:

```text
WORK_ITEM:
PHASE:
TASK_TYPE:

EXECUTION_MODEL:
SPEC_OWNER:
BUILD_OWNER:
TECHNICAL_TEST_OWNER:
REVIEW_OWNER:
APPROVAL_OWNER:

PRIMARY_BASELINE:
BASELINE_CLAUSES:

CANONICAL_DOWNSTREAM_SPECS:

APPROVED_EVOLUTIONS:

PROMPT:
SKILL:
GOVERNING_CONTRACTS:

UPSTREAM_DEPENDENCIES:

OUTPUT_ARTIFACT_OR_CODE:

ACCEPTANCE_CRITERIA:

TEST_REQUIREMENTS:

EVIDENCE_TARGET:

GATE:

PRESERVE_WITHOUT_CHANGE:

AUTHORIZED_REFINEMENTS:

PROHIBITED_CHANGES:

EXECUTION_CLASSIFICATION:
```

No field required by AGENTS.md may be inferred when unresolved.

Execution ownership must resolve through `ART-046 — AI_EXECUTION_ORCHESTRATION_CONTRACT_v0.1.md`.

For persistent product-code work, a task that requires specification, implementation and independent acceptance should normally resolve as:

```text
EXECUTION_MODEL: CHATGPT_CODEX_CHATGPT
SPEC_OWNER: ChatGPT
BUILD_OWNER: Codex
TECHNICAL_TEST_OWNER: Codex
REVIEW_OWNER: ChatGPT
APPROVAL_OWNER: User
```

A different routing is allowed only when the task characteristics and governing artifacts justify it explicitly.

---

## 8. Immutable task invariants

A work package must identify the values and semantics that are immutable for its scope.

Examples may include:

- canonical IDs;
- approved question wording;
- response values;
- required/optional state;
- scoring semantics;
- dimensional mappings;
- privacy classifications;
- prohibited interpretations;
- architecture boundaries;
- experiment success criteria;
- commercial hypothesis;
- accepted evidence requirements.

An implementation must not:

- rename canonical IDs for convenience;
- silently normalize business meaning;
- add questions or fields outside approved scope;
- change scoring rules;
- introduce new qualitative scoring bands;
- introduce employment, hiring, layoff or salary prediction;
- expand data collection without approval;
- change an experiment KPI or target after execution begins;
- introduce a deferred technology merely because it is available.

---

## 9. Execution readiness gate

Specification conformance and execution readiness are separate decisions.

A task can conform to the spec and still be blocked from execution.

Execution readiness requires, where applicable:

- work-item identity;
- resolved execution model;
- resolved specification owner;
- resolved build owner;
- resolved technical test owner;
- resolved review owner;
- resolved approval owner;
- valid dependency state;
- approved or executable prompt;
- required skill available for the work-item scope;
- governing contract;
- canonical upstream artifacts;
- explicit outputs;
- acceptance criteria;
- test strategy or derivable tests;
- evidence target;
- gate;
- explicit user authorization for persistent mutation.

If any mandatory element is unresolved:

```text
EXECUTION_READINESS = FAIL
FINAL = SPEC_BLOCKED
```

Do not code first and reconcile missing governance later.

---

## 10. Execution classifications

Every preflight must return exactly one of:

### `SPEC_EXECUTE`

Use when:

- baseline is clear;
- downstream specification is clear;
- no material conflict exists;
- no unapproved baseline change is required;
- execution readiness is satisfied.

### `SPEC_RECONCILE_APPROVED_EVOLUTION`

Use when:

- the task is baseline-conformant;
- a later approved artifact explicitly replaces or refines one decision;
- unaffected requirements remain preserved;
- execution readiness is satisfied.

### `SPEC_CHANGE_REQUEST_REQUIRED`

Use when execution would require changing:

- approved product semantics;
- approved scope;
- canonical IDs;
- scoring rules;
- privacy boundary;
- data collection;
- architecture beyond approved evolution;
- KPIs / success targets;
- commercial baseline;
- other controlled baseline decisions.

No implementation may proceed until the required change is governed and approved.

### `SPEC_BLOCKED`

Use when:

- authority cannot be resolved;
- approved sources conflict;
- execution model or required ownership is unresolved;
- routing conflicts with ART-046;
- prompt is missing;
- skill is unavailable for the scope;
- required upstream artifact is missing;
- dependency is unresolved;
- acceptance criteria cannot be derived;
- evidence path is missing;
- required user authorization is absent.

---

## 11. Test and evidence rule

A task is not compliant merely because implementation exists.

Evidence must demonstrate that:

1. the task implemented the approved requirement;
2. preserved invariants were not changed;
3. approved evolution was limited to its declared scope;
4. prohibited behavior is absent;
5. acceptance criteria pass;
6. relevant regression tests pass;
7. implementation remains traceable to its source specification.

Evidence should reference:

```text
WORK ITEM
    ↓
SPECIFICATION
    ↓
IMPLEMENTATION
    ↓
TEST
    ↓
ACCEPTANCE
    ↓
EVIDENCE
```

Tests must not invent product behavior that is absent from approved specifications.

---

## 12. Reconciliation workflow

After implementation and successful verification:

```text
IMPLEMENTATION
      ↓
TEST
      ↓
ACCEPTANCE REVIEW
      ↓
EVIDENCE REGISTRATION
      ↓
ARTIFACT / CODE TRACEABILITY
      ↓
DEPENDENCY STATE
      ↓
TRACEABILITY MATRIX
      ↓
MANIFEST POINTER
      ↓
DERIVED README / DASHBOARD
```

Rules:

- canonical state changes before derived views;
- README or dashboard is updated last;
- historical evidence is never rewritten to simulate current state;
- governance state is not auto-advanced solely because code exists;
- next-work authorization remains a separate human decision.

---

## 13. Stop conditions

Execution must stop and return a blocking finding if any of the following occurs:

- implementation requires changing an approved baseline without an approved evolution;
- a developer or agent proposes a deferred technology without an architecture trigger;
- a new data field changes the privacy boundary;
- a prompt attempts to override an approved product specification;
- code behavior conflicts with approved scoring or question semantics;
- required evidence cannot be produced;
- an approved artifact conflicts with another approved artifact and precedence is unresolved;
- a frozen or approved baseline would need silent in-place rewriting;
- required explicit user authorization is absent.

The stop response must identify:

```text
BLOCKING SOURCE
AFFECTED REQUIREMENT
PROPOSED CHANGE
WHY IT IS NOT CURRENTLY AUTHORIZED
REQUIRED GOVERNANCE ACTION
```

---

## 14. Change-control boundary

This contract distinguishes execution from change.

### Execution

Implements what is already approved.

### Reconciliation

Applies a previously approved downstream specification or architecture evolution while preserving unrelated baseline requirements.

### Change

Alters an approved baseline decision.

Changes require the existing Change Control Contract.

This contract does not replace change control.

---

## 15. Relationship to current EXP-001 artifacts

For current EXP-001 work:

### Master baseline

- `ART-023 — MICRO_MVP_001_CONTRACT_v0.1.md`

### Approved downstream specifications

- `ART-029 — ASSESSMENT_QUESTION_BANK_v0.1.yaml`
- `ART-035 — SCORING_MODEL_v0.1.yaml`

### Approved architecture evolution

- `ART-038 — EXP_001_ARCHITECTURE_FIT_REVIEW_v0.1.md`
- `ART-039 — ADR_EXP001_001_STAGE0_WEB_APP_ARCHITECTURE_v0.1.md`

### Delivery governance

- `ART-036 — EXP_001_ROLLING_WAVE_EXECUTION_PLAN_v0.1.md`
- `ART-037 — EXP_001_PROMPT_CATALOG_v0.1.md` remains planning-oriented until a prompt is formally executable under current governance.

### Functional architecture integration

- `ART-045 — EXP_001_MVP_FUNCTIONAL_ARCHITECTURE_SPEC_v0.1.md` defines the current functional integration model and remains `DRAFT / READY_FOR_REVIEW` until formally accepted.

### Execution orchestration

- `ART-046 — AI_EXECUTION_ORCHESTRATION_CONTRACT_v0.1.md` defines execution routing and ownership resolution and remains `DRAFT / READY_FOR_REVIEW` until formally accepted.

This list does not authorize downstream work by itself.

---

## 16. What this contract intentionally does not duplicate

ART-044 must not become a competing specification.

It does **not** duplicate:

- question wording;
- question values;
- scoring formulas;
- test vectors;
- privacy notice text;
- profession card content;
- landing copy;
- commercial offer wording;
- analytics catalog;
- experiment results;
- full work-package backlog;
- current dynamic status;
- application code.

Rule:

> Reference the canonical specification. Do not copy it into this contract unless the content is itself a governance rule.

---

## 17. Conformance audit procedure

A read-only conformance audit for any task must execute:

### A. Baseline resolution
Identify ART-023 clauses relevant to the task.

### B. Downstream specification resolution
Identify the most specific approved product/data/scoring specification.

### C. Evolution resolution
Identify approved evolutions affecting only the task's scope.

### D. Preservation check
List what must remain unchanged.

### E. Scope-creep check
Identify requested behavior absent from approved specifications.

### F. Execution-routing check
Resolve execution model, specification owner, build owner, technical-test owner, review owner and approval owner through ART-046.

### G. Execution-readiness check
Resolve prompt, skill, contract, dependencies, acceptance, evidence and authorization.

### H. Classification
Return exactly one execution classification from Section 10.

---

## 18. Acceptance criteria for ART-044

ART-044 is acceptable when it:

- preserves ART-023 as the EXP-001 master baseline;
- does not duplicate the product specification;
- defines explicit precedence;
- distinguishes refinement from supersession;
- limits approved evolutions to their documented scope;
- requires task-level conformance declarations;
- separates spec conformance from execution readiness;
- defines deterministic execution classifications;
- prevents implementation-first specification rewriting;
- requires test/evidence traceability;
- preserves existing Change Control;
- preserves AGENTS.md authorization requirements;
- introduces no new technology;
- changes no current EXP-001 work-item state.

---

## 19. Final rule

For EXP-001:

```text
DO NOT REDESIGN WHAT IS ALREADY APPROVED.
DO NOT CHANGE THE BASELINE TO FIT THE CODE.
DO NOT EXPAND SCOPE BY IMPLEMENTATION CONVENIENCE.

EXECUTE THE BASELINE.
APPLY ONLY APPROVED EVOLUTIONS.
TEST CONFORMANCE.
RECORD EVIDENCE.
RECONCILE CANONICAL STATE.
```
