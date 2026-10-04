# MÍDETE IA
# AI_EXECUTION_ORCHESTRATION_CONTRACT_v0.1

**Artifact ID:** `ART-046`  
**Version:** `v0.1`  
**Phase:** `GLOBAL`  
**Status:** `DRAFT`  
**Validation State:** `READY_FOR_REVIEW`  
**Owner / Role:** Project Governance / AI Execution Governance  
**Scope:** Task routing and handoff among User, ChatGPT, Codex and future execution agents  
**Upstream Dependencies:** Project Constitution, `AGENTS.md`, Context Acquisition Contract, Artifact Lifecycle Contract, Change Control Contract, Requirement Traceability Contract, current Project Execution Manifest  
**Downstream Consumers:** `AGENTS.md`, work-package prompts, task prompts, skills, ART-044 task conformance declarations, acceptance reviews, implementation handoffs, evidence reconciliation  
**Authority Boundary:** This contract assigns execution responsibility; it does not authorize repository mutation, phase progression, deployment or gate approval.

---

## 1. Purpose

This contract defines how Mídete IA determines **who should perform a task before the task is executed**.

Its purpose is to prevent responsibility drift such as:

- ChatGPT implementing code that should be delegated to Codex;
- Codex redefining product, architecture, scoring, privacy or acceptance criteria;
- an implementation agent approving its own work;
- technical execution beginning before specification and acceptance boundaries are resolved;
- repository reconciliation occurring before implementation evidence exists;
- human approval being silently inferred.

Every persistent task must resolve its execution route as part of context acquisition.

---

## 2. Governing orchestration principle

> **Resolve the work before selecting the executor. Resolve the executor before execution. Separate specification, implementation, technical testing, review and approval whenever the task crosses those boundaries.**

Canonical orchestration:

```text
TASK REQUEST
     ↓
CONTEXT ACQUISITION
     ↓
SPEC / CONTRACT / DEPENDENCY RESOLUTION
     ↓
EXECUTION ROUTING
     ↓
USER AUTHORIZATION WHEN REQUIRED
     ↓
EXECUTION
     ↓
TECHNICAL TEST
     ↓
INDEPENDENT REVIEW / ACCEPTANCE
     ↓
EVIDENCE
     ↓
CANONICAL RECONCILIATION
     ↓
NEXT HUMAN DECISION
```

---

## 3. Actors

### 3.1 User

The User is the authority for:

- approval of persistent repository mutations;
- approval of material product changes;
- approval of material architecture changes;
- approval of gate progression;
- approval of public deployment;
- approval of live-user data collection;
- approval of payment/commercial activation;
- acceptance of residual privacy/security risk;
- final GO / ITERATE / PIVOT / STOP decisions where governance requires human authority.

The User does not need to perform technical implementation.

### 3.2 ChatGPT

ChatGPT is primarily the reasoning, specification, architecture, governance and review actor.

Default responsibilities include:

- repository/context analysis;
- product definition;
- business analysis;
- requirements and specification;
- architecture evaluation;
- ADR drafting and review;
- governance contracts;
- work-package decomposition;
- acceptance criteria;
- test strategy and benchmark definition;
- implementation review against approved specs;
- smoke / functional acceptance analysis;
- evidence interpretation;
- reconciliation proposals;
- decision-support for the User.

ChatGPT must not silently take over implementation work assigned to Codex when the task is a bounded coding task.

### 3.3 Codex

Codex is primarily the implementation and technical-test actor.

Default responsibilities include:

- application code;
- HTML / CSS / JavaScript implementation;
- Apps Script implementation when authorized;
- backend code when future architecture authorizes it;
- automated unit tests;
- automated integration tests;
- reproducible technical smoke tests;
- defect reproduction;
- implementation fixes;
- refactoring inside approved scope;
- technical implementation evidence.

Codex must not independently redefine:

- product hypotheses;
- approved question semantics;
- scoring semantics;
- privacy boundaries;
- commercial claims;
- experiment success criteria;
- architecture maturity;
- gates;
- acceptance policy.

### 3.4 Future agents

A future agent may participate only when its role, skill, permissions, scope and review boundary are governed.

No new autonomous agent inherits ChatGPT or Codex authority by default.

---

## 4. Execution models

Each persistent task must resolve exactly one primary execution model.

### `CHATGPT`

Use when the task is primarily:

- analysis;
- research interpretation;
- specification;
- requirements;
- architecture;
- governance;
- acceptance design;
- audit;
- evidence interpretation;
- reconciliation planning;
- decision-support.

No Codex handoff is necessary unless implementation is discovered to be required.

### `CODEX`

Use only when:

- the implementation specification already exists;
- acceptance criteria are already resolved;
- implementation boundaries are already approved;
- the task is strictly bounded technical execution;
- no upstream reasoning or product decision remains unresolved.

Even in this model, human authorization rules still apply.

### `CHATGPT_CODEX_CHATGPT`

Use when the task contains a specification-to-implementation-to-acceptance lifecycle.

Canonical flow:

```text
CHATGPT
spec / architecture / acceptance / handoff
      ↓
USER
persistent-change authorization
      ↓
CODEX
implementation / technical tests
      ↓
CHATGPT
spec-conformance audit / smoke / acceptance / evidence
      ↓
USER
reconciliation / next-step authorization when required
```

This is the default model for a governed product work package that creates or modifies application code.

---

## 5. Mandatory ownership declaration

Before execution, every persistent task must resolve:

```text
WORK_ITEM:
TASK:
TASK_TYPE:

EXECUTION_MODEL:

SPEC_OWNER:
BUILD_OWNER:
TECHNICAL_TEST_OWNER:
REVIEW_OWNER:
APPROVAL_OWNER:

PROMPT:
SKILL:
GOVERNING_CONTRACTS:
UPSTREAM_DEPENDENCIES:

OUTPUT:
ACCEPTANCE:
EVIDENCE:
GATE:
```

Allowed owner values must identify the actual actor or role, for example:

```text
ChatGPT
Codex
User
Human Reviewer
<future governed agent>
```

Fields must not be silently inferred when governance requires explicit resolution.

---

## 6. Default routing matrix

| Task category | Primary executor | Review / approval boundary |
|---|---|---|
| Repository read-only audit | ChatGPT | User only if a later mutation is proposed |
| Product definition | ChatGPT | User approves material direction |
| Business analysis | ChatGPT | User approves material product change |
| Requirements / specification | ChatGPT | User approves persistent artifact creation/change |
| Architecture fit / ADR | ChatGPT | User approves material architecture persistence |
| Governance / contracts | ChatGPT | User approves persistent mutation |
| Acceptance criteria | ChatGPT | User approves when part of controlled baseline |
| Test strategy / benchmark | ChatGPT | Technical implementation may be delegated |
| Application code | Codex | ChatGPT audits; User authorizes mutation |
| HTML / CSS / JavaScript | Codex | ChatGPT audits; User authorizes mutation |
| Apps Script code | Codex | ChatGPT reviews runtime / privacy / architecture |
| Automated unit tests | Codex | ChatGPT reviews adequacy against spec |
| Automated integration tests | Codex | ChatGPT reviews adequacy against spec |
| Technical defect fix | Codex | ChatGPT audits against approved behavior |
| Refactor inside approved scope | Codex | ChatGPT verifies no semantic drift |
| Spec-conformance audit | ChatGPT | User authorizes reconciliation if needed |
| Functional acceptance | ChatGPT | Uses implementation/test evidence |
| Evidence interpretation | ChatGPT | Must distinguish facts from inference |
| Gate recommendation | ChatGPT | User retains final authority where required |
| Persistent repository mutation | Selected executor only after User authorization | User authority |
| Public launch | Technical executor + ChatGPT review | User approval required |

---

## 7. Routing decision procedure

Before work begins, resolve the following questions in order:

### A. Is the task read-only?

If yes, ChatGPT may generally execute the analysis directly unless specialized tooling or implementation work is required.

### B. Does the task define or change product semantics?

If yes, route specification/reasoning to ChatGPT.

Do not send unresolved product semantics directly to Codex.

### C. Does the task define or change architecture?

If yes, route architecture analysis to ChatGPT.

Codex may provide implementation feasibility feedback but may not approve the architecture change.

### D. Does the task require code?

If yes, determine whether the code is already fully bounded by an approved spec.

- If no: `CHATGPT_CODEX_CHATGPT`.
- If yes and review boundaries already exist: `CODEX` may be sufficient.

### E. Does the task require independent acceptance?

If yes, the implementation actor must not be the sole acceptance authority.

For product code, ChatGPT performs the conformance/acceptance review unless another governed reviewer is explicitly assigned.

### F. Does the task mutate persistent state?

If yes, User authorization is required before the mutation.

---

## 8. Handoff contract — ChatGPT to Codex

A Codex implementation handoff must include, at minimum:

```text
WORK_ITEM
IMPLEMENTATION_SCOPE
CANONICAL_SPECIFICATIONS
APPROVED_ARCHITECTURE
FILES_ALLOWED_TO_CREATE_OR_MODIFY
FILES_PROHIBITED_TO_MODIFY
INPUT_CONTRACT
OUTPUT_CONTRACT
INVARIANTS
ERROR_BEHAVIOR
TEST_CASES
ACCEPTANCE_CRITERIA
PROHIBITED_BEHAVIOR
EVIDENCE_EXPECTATION
```

Codex must not infer missing business rules.

If required information is absent or conflicting, Codex returns a blocker rather than inventing behavior.

---

## 9. Handoff contract — Codex to ChatGPT

After technical execution, Codex must return enough evidence for independent review:

```text
FILES_CHANGED
IMPLEMENTATION_SUMMARY
TESTS_ADDED_OR_UPDATED
COMMANDS_EXECUTED
TEST_RESULTS
KNOWN_LIMITATIONS
SPEC_DEVIATIONS
UNRESOLVED_DEFECTS
COMMIT_OR_DIFF_REFERENCE
```

Any deviation from the approved specification must be explicit.

A successful technical test does not automatically mean acceptance.

---

## 10. ChatGPT acceptance responsibilities

ChatGPT review must evaluate:

1. conformance to canonical specification;
2. conformance to architecture;
3. preservation of invariants;
4. absence of unauthorized scope;
5. adequacy of tests;
6. smoke / functional behavior where executable;
7. evidence sufficiency;
8. repository/governance reconciliation required;
9. next dependency;
10. whether User approval is required before progression.

ChatGPT must distinguish:

```text
TECHNICALLY PASSING
from
SPEC-CONFORMANT
from
ACCEPTED
from
AUTHORIZED TO PROGRESS
```

These are not interchangeable states.

---

## 11. Self-approval prohibition

An implementation agent must not be the sole actor that:

- writes the code;
- defines the acceptance criteria after implementation;
- declares conformance;
- marks the task complete;
- advances the gate.

For product-code work, the preferred separation is:

```text
ChatGPT → specification / review
Codex   → build / technical tests
User    → mutation / progression authority
```

---

## 12. Skill interaction

A skill defines **how an assigned role performs work**.

A skill does not decide by itself:

- whether the task should exist;
- whether the task is authorized;
- which agent owns specification;
- whether a gate can advance.

Execution routing occurs before skill execution.

Canonical sequence:

```text
TASK
 ↓
ROUTING
 ↓
ROLE / AGENT
 ↓
SKILL
 ↓
EXECUTION
```

not:

```text
SKILL EXISTS
 ↓
therefore execute task
```

---

## 13. Prompt interaction

A prompt defines the bounded instruction for a work item.

The routing declaration must be compatible with the prompt.

Examples:

- a product-definition prompt normally routes to ChatGPT;
- an implementation prompt normally routes to Codex after specification and authorization;
- an acceptance-review prompt normally routes to ChatGPT.

If prompt content and orchestration routing conflict, execution is blocked until the conflict is resolved.

---

## 14. Context acquisition requirement

Execution routing is part of initial context acquisition.

Before execution, the actor must read the orchestration contract and answer:

```text
WHAT is the task?
WHY is it authorized?
WHO specifies it?
WHO builds it?
WHO technically tests it?
WHO reviews it?
WHO approves persistent mutation?
WHAT evidence closes it?
```

Failure to resolve these questions is an execution-readiness defect.

---

## 15. EXP-001 default work-package routing

Unless a later approved artifact explicitly changes ownership:

| WP | Default execution model |
|---|---|
| WP-01 Scoring Acceptance | CHATGPT |
| WP-02 Architecture Fit | CHATGPT |
| WP-03 Scoring Engine | CHATGPT_CODEX_CHATGPT |
| WP-04 Assessment Capture | CHATGPT_CODEX_CHATGPT |
| WP-05 Response Storage | CHATGPT_CODEX_CHATGPT |
| WP-06 Result Snapshot | CHATGPT_CODEX_CHATGPT |
| WP-07 Profession Cards | CHATGPT, with Codex only for bounded integration |
| WP-08 Landing | CHATGPT_CODEX_CHATGPT |
| WP-09 Privacy | CHATGPT, then Codex for bounded technical integration |
| WP-10 Commercial Offer | CHATGPT, then Codex for bounded CTA/payment-link integration |
| WP-11 Analytics | CHATGPT_CODEX_CHATGPT |
| WP-12 End-to-End QA | CHATGPT_CODEX_CHATGPT, with ChatGPT as acceptance owner |
| WP-13 Launch Readiness | CHATGPT, with Codex for fixes/config only |
| WP-14 Experiment Measurement | CHATGPT, with Codex only for bounded scripts if required |
| WP-15 Experiment Gate | CHATGPT + User; User retains final disposition authority |

This table is an orchestration default, not work authorization.

---

## 16. Stop conditions

Execution must stop when:

- the execution model is unresolved;
- ownership fields conflict;
- Codex receives unresolved product semantics;
- ChatGPT would bypass a designated Codex implementation handoff without justification;
- the implementation actor is also attempting to become sole approval authority;
- the required skill is unavailable;
- the prompt is absent or incompatible with routing;
- User authorization for persistent mutation is absent;
- a task requires permissions or actions outside the assigned actor's authority.

The blocker report must include:

```text
WORK_ITEM
ROUTING_PROBLEM
MISSING_OWNER_OR_INPUT
WHY_EXECUTION_CANNOT_PROCEED
REQUIRED_RESOLUTION
```

---

## 17. Evidence and traceability

Execution evidence should preserve the chain:

```text
TASK
  ↓
EXECUTION_MODEL
  ↓
SPEC_OWNER
  ↓
BUILD_OWNER
  ↓
TECHNICAL_TEST_OWNER
  ↓
REVIEW_OWNER
  ↓
APPROVAL_OWNER
  ↓
ARTIFACT / CODE
  ↓
TEST
  ↓
ACCEPTANCE
  ↓
EVIDENCE
```

Future automation may validate that required ownership fields exist, but this contract does not authorize automatic state mutation.

---

## 18. Relationship to ART-040

`ART-040 — ROLE_TECHNOLOGY_EXECUTION_MATRIX_v0.1.md` describes professional roles, technologies and current role utilization.

ART-046 converts that descriptive responsibility model into an execution-routing rule.

```text
ART-040
WHO the professional roles are
       ↓
ART-046
HOW work is routed among execution actors
```

If a later role matrix changes, ART-046 remains authoritative for orchestration until formally updated or superseded.

---

## 19. Relationship to ART-044

`ART-044 — EXP_001_SPEC_BASELINE_EXECUTION_CONTRACT_v0.1.md` governs baseline conformance for EXP-001.

ART-046 governs executor selection and handoff.

Together:

```text
ART-044
WHAT MAY BE EXECUTED
        +
ART-046
WHO EXECUTES EACH PART
        ↓
EXECUTION-READY TASK
```

A task that passes spec conformance but lacks valid execution routing remains blocked.

---

## 20. What this contract does not do

ART-046 does not:

- authorize a repository mutation;
- activate a skill;
- activate a prompt;
- approve a work package;
- approve a gate;
- approve a deployment;
- define product semantics;
- define technical architecture;
- replace AGENTS.md;
- replace the Context Acquisition Contract;
- replace the Change Control Contract.

It provides the routing contract used by those controls.

---

## 21. Acceptance criteria for ART-046

ART-046 is ready for approval review when it:

- defines User, ChatGPT and Codex authority boundaries;
- defines deterministic execution models;
- requires explicit ownership fields;
- requires routing during initial context acquisition;
- separates specification, implementation, testing, review and approval;
- defines ChatGPT-to-Codex and Codex-to-ChatGPT handoffs;
- prohibits implementation-agent self-approval;
- preserves User authorization authority;
- aligns with ART-040;
- integrates with ART-044;
- introduces no new product scope;
- introduces no new technology;
- changes no current work-item status.

---

## 22. Final orchestration rule

```text
DO NOT START WITH "WHO CAN DO THIS?"

START WITH:
WHAT IS THE TASK?
WHAT GOVERNS IT?
WHAT IS ALREADY APPROVED?
WHAT ROLE OWNS EACH STAGE?

THEN ROUTE:

CHATGPT
for reasoning / specification / architecture / review

CODEX
for bounded implementation / technical tests

USER
for persistent-change and material progression authority
```
