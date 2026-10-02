# MÍDETE IA
# ROLE_TECHNOLOGY_EXECUTION_MATRIX_v0.1
## Professional Roles, Technology Responsibilities and AI-Assisted Execution Model

**Artifact ID:** `ART-040`  
**Version:** `v0.1`  
**Phase:** `P01`  
**Status:** `APPROVED`  
**Validation State:** `ACCEPTED`  
**Owner / Role:** Product Management / Architecture Governance  
**Scope:** Global project reference with current EXP-001 execution mapping  
**Upstream Dependencies:** `AGENTS.md`, `SKILL_REGISTRY_v0.1.yaml`, `ART-036`, `ART-038`, `ART-039`  
**Downstream Consumers:** future work-package planning, skills, prompts, staffing model, learning/evidence map

---

## 1. Purpose

This artifact provides one canonical cross-reference for:

- professional roles used by Mídete IA;
- expected experience / seniority for the current scope;
- technologies associated with each role;
- repository skill IDs;
- current versus future relevance;
- how ChatGPT supports each professional role;
- how Codex supports each professional role;
- what remains a human responsibility;
- which EXP-001 work packages exercise each role.

The goal is not to claim that ChatGPT or Codex replace accountable professionals.

The execution model is:

```text
PROFESSIONAL ROLE
        ↓
CAPABILITY / SKILL
        ↓
TECHNOLOGY
        ↓
AI-ASSISTED EXECUTION
   ├── ChatGPT
   └── Codex
        ↓
HUMAN APPROVAL / ACCOUNTABILITY
```

---

## 2. Seniority scale

The seniority labels in this document describe the approximate experience level normally suitable for the current task complexity.

They are not an HR certification or an assessment of any individual.

| Level | Working definition in Mídete IA |
|---|---|
| Junior | Can implement well-defined tasks from explicit specifications with review. |
| Junior–Mid | Can implement and test bounded features, resolve ordinary technical details, and work independently inside a defined architecture. |
| Mid | Can own a subsystem or operational slice, make local technical decisions, and integrate adjacent capabilities. |
| Mid–Senior | Can translate ambiguous business needs into governed requirements, evaluate risks, and review cross-functional implications. |
| Senior | Can define product/architecture direction, make trade-offs across domains, establish governance, and accept/reject material decisions. |
| Senior–Lead | Appropriate for high-complexity platform, AI, security, data, or operational decisions spanning multiple systems. |

---

## 3. Core role × technology × AI-support matrix

| Role ID | Professional Role | Current Seniority Need | Skill ID | Current / Relevant Technologies | Project State | ChatGPT Support | Codex Support | Human Responsibility |
|---|---|---|---|---|---|---|---|---|
| ROLE-PROD | Product Manager / Product Owner | Senior | SK-PROD / SK-PM | GitHub, Markdown, YAML, experiment metrics, product artifacts | ACTIVE | Problem framing, hypotheses, scope, work packages, acceptance criteria, gate preparation | Limited; can implement product-defined changes but should not invent product strategy | Approve product direction, scope, commercial assumptions and irreversible choices |
| ROLE-BA | Business Analyst | Mid–Senior | SK-BA | YAML, structured requirements, assessment logic, scoring rules, Sheets/CSV concepts | ACTIVE | Translate business logic into deterministic rules, acceptance criteria, traceability and evidence boundaries | Implement already-approved deterministic rules and validation logic | Confirm business meaning and approve changes to scoring/assessment semantics |
| ROLE-ARCH | Software / Solution Architect | Senior | SK-ARCH | ADRs, Apps Script architecture, HTML Service, integration boundaries, GitHub | ACTIVE / REVIEW | Architecture fit reviews, technology trade-offs, ADR drafting, evolution triggers | Implement architecture-compliant code; surface feasibility issues | Approve material architecture changes and technology adoption |
| ROLE-FE | Frontend / JavaScript Engineer | Junior–Mid for WP-03; Mid for integrated UI | SK-FE | JavaScript, HTML, CSS, Node.js tests, later Apps Script HTML Service | ACTIVE | Produce implementation specifications, review conformance, inspect code/tests | Primary implementation agent for bounded JavaScript/UI slices and automated tests | Review/approve code changes and user-facing behavior |
| ROLE-QA | QA / Test Engineer | Junior–Mid for unit/functional slices; Mid for E2E | SK-QA | Node.js `node:test`, assertions, test vectors, later browser/E2E checks | ACTIVE SUPPORT / FORMAL SKILL PLANNED | Test strategy, acceptance audit, edge-case review, evidence interpretation | Write/run automated tests, reproduce defects, apply implementation fixes | Accept test evidence and decide whether defects block progression |
| ROLE-GAS | Google Apps Script Developer | Mid | SK-FE initially; specialized skill may be added later | Apps Script V8, HTML Service, `google.script.run`, deployment settings | NEXT | Integration design, runtime constraints, security/privacy review | Implement Apps Script integration, HTML Service wiring and bounded runtime code | Approve deployment configuration and public-access settings |
| ROLE-DATA-AN | Data / Experiment Analyst | Mid | SK-BA initially | Google Sheets, CSV, funnel metrics, segmentation | NEXT | Define metrics, interpret experiment evidence, separate facts from assumptions | Implement transformations or small analysis scripts if required | Approve interpretation used for product/business decisions |
| ROLE-SEC | Security / Privacy Engineer | Mid–Senior | SK-SEC | privacy controls, least-data collection, IAM/deployment review, secret handling | NEXT | Privacy/security requirements, misuse boundaries, launch review | Implement technical controls/config changes once specified | Accept residual security/privacy risk before public launch |
| ROLE-BE | Backend Engineer | Mid | SK-BE | Future FastAPI/Node APIs, service contracts | DEFERRED | API/spec design and architecture review if requirement emerges | Backend implementation and tests | Approve new backend dependency and operational burden |
| ROLE-DATA | Data Engineer / Data Architect | Mid–Senior | SK-DATA | Future SQL, PostgreSQL/BigQuery, pipelines, data models | DEFERRED | Data requirements, model/schema review, architecture decisions | Data pipelines/schema/code when authorized | Approve persistence/data architecture changes |
| ROLE-CLOUD | Cloud Engineer | Mid–Senior | SK-CLOUD | Future GCP/Azure/AWS managed runtime, IAM, networking | DEFERRED | Cloud architecture, control requirements, cost/security trade-offs | Deployment/config implementation when authorized | Approve accounts, billing, IAM and runtime exposure |
| ROLE-DEVOPS | DevOps Engineer | Mid | SK-DEVOPS | Future CI/CD, GitHub Actions, Docker, release automation | DEFERRED | Pipeline requirements and review criteria | CI/CD/config implementation and technical fixes | Approve production/release automation |
| ROLE-AI | AI Engineer | Senior | SK-AI | Future LLM APIs, structured outputs, AI evaluation | DEFERRED | AI use-case design, evaluation criteria, guardrails, architecture | Implement approved model integration/evaluations | Approve model/provider, cost, privacy and quality thresholds |
| ROLE-RAG | RAG / Knowledge Engineer | Senior | planned specialized skill | Future corpus governance, embeddings, retrieval, vector/search systems | DEFERRED | Retrieval architecture, source governance, evaluation design | Retrieval/indexing implementation when authorized | Approve corpus, sources and retrieval quality requirements |
| ROLE-AGENT | Agent / AI Workflow Engineer | Senior–Lead | planned specialized skill | Future agent tools, memory/state, workflow/orchestration | DEFERRED | Agent architecture, tool contracts, control/evaluation model | Implement agent workflows/tools under approved contracts | Approve autonomy boundaries, permissions and production release |

---

## 4. Current EXP-001 role utilization

| Professional Role | Current Status | Evidence in Current Project |
|---|---|---|
| Product Management | PRACTICED / ACTIVE | Micro-MVP scope, hypothesis, rolling-wave plan, work-package sequencing |
| Business Analysis | PRACTICED | Assessment Question Bank and approved Scoring Model |
| Software / Solution Architecture | PRACTICED / ACTIVE | Evolutionary Architecture Contract, Architecture Fit Review, Stage-0 ADR |
| JavaScript / Frontend Engineering | PRACTICED / WP-03 COMPLETE | WP-03 scoring engine accepted; WP-04 assessment capture is the next planned UI slice |
| QA / Testing | PRACTICED / WP-03 COMPLETE | WP-03 canonical scoring tests and acceptance evidence completed with 9/9 tests passing |
| Google Apps Script Development | NEXT / PLANNED | Selected Stage-0 runtime; WP-04 assessment capture is the next planned integration step |
| Data / Experiment Analytics | NEXT | Analytics and measurement packages are planned |
| Security / Privacy | NEXT | Privacy slice precedes real-user launch |
| Backend Engineering | DEFERRED | No verified requirement for custom backend |
| Data Engineering | DEFERRED | No verified requirement for relational/analytical data platform |
| Cloud Engineering | DEFERRED | No custom managed cloud runtime required in Stage 0 |
| AI Engineering | DEFERRED | Deterministic EXP-001 does not require runtime AI |
| RAG Engineering | DEFERRED | No current governed retrieval requirement |
| Agent Engineering | DEFERRED | No current multi-step autonomous workflow requirement |

---

## 5. ChatGPT execution responsibilities

ChatGPT currently functions as an AI-assisted cross-functional planning and review layer.

| Professional role supported | ChatGPT responsibility in Mídete IA | Boundary |
|---|---|---|
| Product Manager | Frame problem, define experiment, structure scope, sequence work, define acceptance criteria | Does not replace user approval for product direction |
| Business Analyst | Translate approved business logic into structured rules and artifacts | Does not invent evidence or silently change approved semantics |
| Solution Architect | Perform fit reviews, compare options, draft ADRs, enforce evolutionary architecture | Does not authorize material architecture changes without required approval |
| QA / Reviewer | Audit implementation against specification, inspect diffs, test edge cases, propose evidence | Does not mark work COMPLETE without lifecycle/evidence reconciliation |
| Security / Privacy reviewer | Define boundaries and review proposed data handling | Does not approve real-world risk on behalf of the user |
| Experiment Analyst | Analyze observed metrics and distinguish evidence from assumptions | Does not fabricate validation or market evidence |
| Governance / Documentation | Maintain traceability model, registry consistency and handoff clarity | Persistent mutations require explicit user authorization |

ChatGPT is therefore primarily used for:

```text
REASONING
SPECIFICATION
ARCHITECTURE
GOVERNANCE
REVIEW
EVIDENCE INTERPRETATION
```

---

## 6. Codex execution responsibilities

Codex currently functions as the implementation-focused engineering agent.

| Professional role supported | Codex responsibility in Mídete IA | Boundary |
|---|---|---|
| JavaScript / Frontend Engineer | Implement bounded JavaScript modules and later UI slices | Must follow approved specifications and architecture |
| QA / Test Engineer | Create/run automated tests, reproduce defects, fix implementation issues | Does not redefine acceptance criteria |
| Apps Script Developer | Future HTML Service / server integration and deployment-oriented code | Only after its work package is activated |
| Backend Engineer | Future backend implementation if architecture later authorizes it | Backend remains deferred |
| Data Engineer | Future transformations/pipelines if required | Data platform remains deferred |
| DevOps / Cloud Engineer | Future pipeline/runtime configuration | Infrastructure remains deferred until justified |
| AI Engineer | Future model integration/evaluation code | Runtime AI remains deferred |

Codex is therefore primarily used for:

```text
IMPLEMENTATION
AUTOMATED TESTS
TECHNICAL FIXES
REFACTORING WITHIN APPROVED SCOPE
IMPLEMENTATION EVIDENCE
```

Codex must not independently redefine:

- product hypotheses;
- scoring semantics;
- privacy boundaries;
- commercial claims;
- experiment success criteria;
- architecture maturity;
- gates.

---

## 7. Human authority and accountability

The user remains the approval authority for persistent project changes and material progression.

Current handoff:

```text
USER
approval authority
      ↓
CHATGPT
product / business analysis / architecture / governance / review
      ↓
CODEX
implementation / technical tests
      ↓
CHATGPT
acceptance audit / evidence proposal / reconciliation proposal
      ↓
USER
authorization for persistent reconciliation or next material step
```

Human responsibilities include:

- approve repository mutations;
- approve material product scope changes;
- approve architecture changes when required;
- approve progression across gates;
- approve public deployment;
- approve use of live-user data;
- approve commercial/payment activation;
- accept residual privacy/security risks.

---

## 8. Work-package × role × agent matrix

| WP | Capability | Primary Professional Role(s) | ChatGPT | Codex | Human |
|---:|---|---|---|---|---|
| WP-01 | Scoring acceptance | Business Analyst / QA | Primary review | — | Authorizes reconciliation |
| WP-02 | Architecture fit | Solution Architect | Primary architecture review | — | Authorizes architecture persistence |
| WP-03 | Scoring engine | JavaScript Engineer / QA | Specification + acceptance audit | Primary build + tests | Authorizes completion reconciliation |
| WP-04 | Assessment capture | Frontend Engineer | Product/interaction spec + review | Primary build | Approves persistent implementation |
| WP-05 | Response storage | Apps Script Developer / Data | Data minimization + schema review | Primary build | Approves storage and live-data use |
| WP-06 | Result snapshot | Frontend / Product | Result boundaries + UX review | Primary build | Approves user-facing result |
| WP-07 | Profession cards | Business Analyst / Research | Primary content/evidence review | Integration support | Approves content baseline |
| WP-08 | Landing | Product / Frontend | Copy/spec/review | Primary build | Approves public messaging |
| WP-09 | Privacy | Security / Privacy | Primary specification/review | Technical integration | Approves notice/data handling |
| WP-10 | Commercial offer | Product / Commercial | Offer specification/review | CTA/payment-link integration | Approves price/offer/payment |
| WP-11 | Analytics | Product Analytics / Data | Event definitions/review | Instrumentation | Approves measurement/privacy balance |
| WP-12 | End-to-End QA | QA Engineer | Acceptance owner | Test/fix support | Receives release recommendation |
| WP-13 | Launch readiness | Product / QA / Security | Primary gate review | Config/fixes if needed | Approves launch |
| WP-14 | Experiment measurement | Product / Data Analyst | Primary analysis | Scripts if required | Reviews evidence |
| WP-15 | Experiment gate | Product / Governance | Evidence synthesis | — | Final GO / ITERATE / PIVOT / STOP authority |

---

## 9. Technology × role ownership matrix

Legend:
- **P** = primary current role
- **S** = supporting role
- **F** = future / deferred role

| Technology / Capability | Product | BA | Architect | FE / JS | QA | Apps Script | Data | Security | Backend | Cloud/DevOps | AI/RAG/Agent |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| GitHub governance | P | S | P | S | S | S | S | S | S | S | S |
| Markdown / YAML specs | P | P | P | S | S | S | S | S | S | S | S |
| JavaScript scoring | S | S | S | P | P | S | — | — | — | — | — |
| Node.js unit tests | — | S | S | P | P | S | — | — | — | — | — |
| HTML / CSS | S | — | S | P | S | P | — | S | — | — | — |
| Apps Script V8 | — | — | P | S | S | P | S | S | — | — | — |
| HTML Service | S | — | S | P | S | P | — | S | — | — | — |
| Google Sheets | S | S | S | — | S | P | P | S | — | — | — |
| Funnel analytics | P | P | S | S | P | S | P | S | — | — | — |
| External payment link | P | — | S | S | S | S | — | S | — | — | — |
| PostgreSQL / SQL platform | — | S | F | — | F | — | F | F | F | F | — |
| FastAPI / custom backend | — | — | F | — | F | — | — | F | F | F | — |
| Docker / CI/CD / cloud runtime | — | — | F | — | F | — | — | F | F | F | — |
| LLM runtime | S | S | F | — | F | — | F | F | F | F | F |
| RAG / governed retrieval | S | S | F | — | F | — | F | F | F | F | F |
| Agent workflows | S | S | F | — | F | — | F | F | F | F | F |

---

## 10. Role activation rule

A role being listed in this artifact does not authorize its technology.

Role activation follows repository governance:

```text
NEW REQUIREMENT
      ↓
ROLE / CAPABILITY NEEDED?
      ↓
SKILL AVAILABLE?
      ↓
ARCHITECTURE FIT?
      ↓
PROMPT + CONTRACT + ACCEPTANCE
      ↓
USER AUTHORIZATION
      ↓
IMPLEMENTATION
```

A future role remains `DEFERRED` until a verified requirement creates a need for it.

---

## 11. Skill registry alignment

Current executable skills:

| Skill | Status | Current Scope |
|---|---|---|
| SK-PROD — product-management | AVAILABLE | P01-01 |
| SK-BA — business-analysis | AVAILABLE | EXP-001-03 |
| SK-FE — frontend-engineering | AVAILABLE | EXP-001-WP03 |

Currently registered but not yet materialized as executable project skills include:

- SK-PM;
- SK-REQ;
- SK-ARCH;
- SK-DATA;
- SK-AI;
- SK-BE;
- SK-CLOUD;
- SK-DEVOPS;
- SK-QA;
- SK-SEC;
- SK-FINOPS;
- SK-DOC.

This matrix does not automatically promote any registered skill to AVAILABLE.

---

## 12. Current professional-learning map

The current project provides practical exposure to:

```text
Product Management          PRACTICED / ACTIVE
Business Analysis           PRACTICED
Solution Architecture       PRACTICED / ACTIVE
JavaScript Engineering      PRACTICED / WP-03 COMPLETE
QA / Testing                PRACTICED / WP-03 COMPLETE
Apps Script Development     NEXT / PLANNED
Data / Experiment Analytics NEXT
Security / Privacy          NEXT

Backend Engineering         DEFERRED
Data Engineering            DEFERRED
Cloud Engineering           DEFERRED
AI Engineering              DEFERRED
RAG Engineering             DEFERRED
Agent Engineering           DEFERRED
```

This is a project-execution map, not a certification of individual proficiency.

---

## 13. Governance rule

This artifact is descriptive and planning-oriented.

It does not:
- change the Project Constitution;
- authorize a new technology;
- activate a registered skill;
- change work-item status;
- approve a gate;
- replace the Technology Adoption Decision Matrix;
- supersede a work-package prompt or ADR.

If this matrix conflicts with a higher-precedence artifact, the higher-precedence artifact governs.
