# MÍDETE IA
# EXP_001_ROLLING_WAVE_EXECUTION_PLAN_v0.1
## Progressive Delivery Plan for the AI Career Transformation Snapshot

**Artifact ID:** `ART-036`  
**Version:** `v0.1`  
**Phase:** `P01`  
**Status:** `DRAFT`  
**Validation State:** `READY_FOR_REVIEW`  
**Owner / Role:** Product Management / Architecture Governance  
**Experiment:** `EXP-001`  
**Parent Contract:** `MICRO_MVP_001_CONTRACT_v0.1.md`  
**Architecture Contract:** `EVOLUTIONARY_ARCHITECTURE_CONTRACT_v0.1.md`  
**Prompt Catalog:** `EXP_001_PROMPT_CATALOG_v0.1.md`  
**Decision Gate:** `GATE-EXP-001`

## 1. Purpose

This plan defines how EXP-001 will be delivered by progressive elaboration rather than by completing every specification before implementation begins.

The operating pattern is:

```text
JUST-ENOUGH SPEC
      ↓
IMPLEMENT
      ↓
TEST
      ↓
EVIDENCE
      ↓
RECONCILE
      ↓
PREPARE NEXT WORK PACKAGE
      ↓
REPEAT
```

The goal is to reach real-user evidence as early as possible without bypassing governance, privacy, QA or responsible-use boundaries.

## 2. Construction analogy

The execution model follows the logic used in staged building delivery.

Before foundations are designed, the project needs enough information about the building's intended load, size and use. It does not need the final paint specification for every room.

For EXP-001:

| Building analogy | Mídete IA equivalent |
|---|---|
| Number of apartments / floors | Core user journey and required capabilities |
| Structural loads | Data and scoring requirements |
| Foundations | Core scoring logic |
| Structural frame | Assessment capture + persistence |
| Building systems | Result + analytics |
| Access / entrance | Landing |
| Commercialization | Paid offer / payment link |
| Paint / finishes | Non-blocking visual refinements |

Rule:

> Specify in detail what the next implementation slice requires. Keep later work at planning-package level until it becomes execution-critical.

## 3. Rolling-wave operating rule

Each work package follows:

1. Read current context and evidence.
2. Confirm the next capability required by the business hypothesis.
3. Produce the minimum sufficient specification.
4. Review / accept the specification.
5. Implement only the approved scope.
6. Test against explicit acceptance criteria.
7. Record evidence.
8. Reconcile registries and dependency state.
9. Identify the next blocker.
10. Detail the next work package.

No work package is considered complete because a document or code file merely exists.

## 4. Current baseline

```text
EXP-001-00 Micro-MVP Contract       COMPLETE
EXP-001-01 Experiment Hypothesis    COMPLETE
EXP-001-02 Assessment Question Bank COMPLETE
EXP-001-03 Scoring Model            READY / artifact DRAFT
```

The first implementation code is intentionally scheduled before all later EXP-001 content artifacts are fully specified.

## 5. Work-package backlog

| WP | Work Package | Spec Owner | Build Owner | Test / Review | Primary Output | Activation |
|---:|---|---|---|---|---|---|
| WP-01 | Scoring Acceptance | ChatGPT | — | ChatGPT | accepted scoring model + evidence | NEXT |
| WP-02 | Architecture Fit Check | ChatGPT | — | ChatGPT | Stage-0 implementation decision | AFTER WP-01 |
| WP-03 | Scoring Engine | ChatGPT spec | Codex | Codex + ChatGPT audit | executable scoring + tests | AFTER WP-02 |
| WP-04 | Assessment Capture | ChatGPT | Codex | Codex + ChatGPT audit | functional assessment | PLANNED |
| WP-05 | Response Storage | ChatGPT | Codex | Codex + ChatGPT audit | minimal persistence | PLANNED |
| WP-06 | Result Snapshot | ChatGPT | Codex | Codex + ChatGPT audit | immediate result | PLANNED |
| WP-07 | Profession Transformation Cards | ChatGPT | Codex integration | ChatGPT | approved cards + integration | PLANNED |
| WP-08 | Landing Slice | ChatGPT | Codex | ChatGPT | landing + assessment entry | PLANNED |
| WP-09 | Privacy Slice | ChatGPT | Codex integration | ChatGPT | privacy / responsible-use notice | PLANNED |
| WP-10 | Commercial Offer | ChatGPT | Codex integration | ChatGPT | paid CTA + payment-link flow | PLANNED |
| WP-11 | Analytics Slice | ChatGPT | Codex | Codex + ChatGPT audit | observable funnel | PLANNED |
| WP-12 | End-to-End QA | ChatGPT | Codex fixes | ChatGPT | QA evidence + release status | PLANNED |
| WP-13 | Launch Readiness | ChatGPT | Codex config if needed | ChatGPT | READY_FOR_LAUNCH / BLOCKED | PLANNED |
| WP-14 | Experiment Measurement | ChatGPT | — | ChatGPT | experiment results | PLANNED |
| WP-15 | GATE-EXP-001 | ChatGPT + User | — | User approval | GO / ITERATE / PIVOT / STOP | PLANNED |

## 6. Specification maturity model

### EXECUTION-READY
The next work package has:
- explicit inputs;
- governing contract;
- output;
- acceptance criteria;
- owner;
- prompt;
- required skill;
- test/evidence expectations.

### PLANNING PACKAGE
Future work has:
- objective;
- intended capability;
- dependency;
- placeholder prompt in the Prompt Catalog;
- no authority to execute yet.

### BLOCKED
A work package becomes BLOCKED when:
- required upstream evidence is absent;
- current architecture cannot satisfy the requirement and no architecture decision exists;
- required privacy/security condition is unresolved;
- prompt/skill/contract required by AGENTS.md is unavailable.

## 7. Handoff model

```text
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
audit against approved specification
      ↓
EVIDENCE
      ↓
USER
approval for next persistent change when required
```

Codex must not redefine scoring, privacy, product claims or experiment success criteria during implementation.

## 8. First-code trigger

Code begins when both WP-01 and WP-02 pass.

```text
SCORING MODEL ACCEPTED
          +
STAGE-0 ARCHITECTURE CONFIRMED
          ↓
WP-03 SCORING ENGINE
          ↓
FIRST PRODUCT CODE
```

The project does not wait for all future copy, cards, commercial detail or visual polish before WP-03 begins.

## 9. Stage-0 architecture boundary

Current approved capabilities remain:

- static/simple landing;
- form capture;
- tabular persistence;
- simple analytics;
- optional lightweight automation;
- external payment link.

Deferred unless a documented requirement proves insufficiency:

- custom React/Next.js product;
- backend API;
- PostgreSQL;
- authentication;
- LLM runtime;
- RAG;
- agents;
- containers;
- Terraform;
- Kubernetes;
- managed cloud backend.

WP-02 explicitly re-tests whether the Stage-0 approach can deliver immediate scoring and result presentation.

## 10. Definition of ready for each implementation slice

A build task is READY only when:

- canonical input and output are known;
- business rule is deterministic enough to code;
- edge cases required for the slice are known;
- prohibited behavior is explicit;
- test cases exist or can be derived without inventing product rules;
- implementation target is allowed by architecture governance.

## 11. Definition of done for each implementation slice

A build task is DONE only when:

- approved scope is implemented;
- tests pass;
- evidence is recorded;
- no unauthorized scope was introduced;
- code and specification remain traceable;
- the next dependency is explicitly identified.

## 12. Change rule

Future work-package prompts in the Prompt Catalog are planning templates.

They do not authorize execution by themselves.

Before execution:
- resolve current repository state;
- resolve prompt / skill / contract;
- verify upstream acceptance;
- adjust only the minimum details needed by current evidence;
- request user confirmation before persistent repository mutation.

## 13. Success criterion

This delivery plan is successful if it shortens time to reliable market evidence while preserving:
- traceability;
- responsible scoring;
- privacy;
- testability;
- minimal architecture;
- reversible technology decisions;
- explicit human approval.
