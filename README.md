# Mídete IA

Mídete IA is an evidence-driven career intelligence and professional assessment platform for Mexico first, then LATAM.

The long-term vision is intentionally broader than the current implementation. The repository separates **what Mídete IA may become** from **what has been validated and authorized to build now**.

> **Status-view rule:** this README is a human-readable command center. Canonical execution state lives in the Project Execution Manifest, registries, traceability matrix, approved artifacts and gates.

---

## Repository scope binding

The canonical repository for Mídete IA is:

```text
RobertoGarciaITS/midete-ia
```

All repository-native project execution must target that exact repository. Other repositories are noncanonical and may only be consulted when the User explicitly authorizes cross-repository research. Repository mismatch is a stop condition.

See:
[ART-047 — Repository Scope Binding Contract](governance/contracts/REPOSITORY_SCOPE_BINDING_CONTRACT_v0.1.md).

---

## 1. Long-term vision

Mídete IA is intended to evolve toward:

~~~text
MÍDETE IA
│
├── Career Intelligence
├── Professional Assessment
├── Job Fit
├── Learning Intelligence
├── Professional Graph
├── Career AI
└── Professional Copilots
    ├── Manufacturing
    ├── Quality
    ├── Safety
    ├── Data
    └── Project Management
~~~

The platform is designed to serve simultaneously as:

- a commercial product;
- a progressive SaaS opportunity;
- a technology portfolio;
- an AI / data / cloud engineering laboratory;
- a source of practical evidence;
- a potentially monetizable technology asset.

The Project Constitution is the strategic baseline:
[governance/constitution/MIDETE_AI_PROJECT_CONSTITUTION_v0.1.md](governance/constitution/MIDETE_AI_PROJECT_CONSTITUTION_v0.1.md).

---

## 2. How Mídete IA is built

Mídete IA uses progressive, evidence-driven delivery.

~~~text
LONG-TERM VISION
       ↓
BACKCASTING
       ↓
CAPABILITY
       ↓
PHASE
       ↓
EXPERIMENT / MICRO-MVP
       ↓
WORK PACKAGE
       ↓
TASK
       ↓
IMPLEMENT
       ↓
TEST
       ↓
EVIDENCE
       ↓
GATE
       ↓
LEARN / CONTINUE / ITERATE / PIVOT / STOP
~~~

The operating priority remains:

~~~text
VALIDATE
  ↓
SELL
  ↓
BUILD
  ↓
MEASURE
  ↓
IMPROVE
  ↓
SCALE
~~~

The architecture principle is:

> **Use the simplest architecture that can validate the current business hypothesis.**

Technology is adopted because a verified requirement needs it, not because it appears in the long-term roadmap.

---

## 3. Current project status

| Dimension | Current state |
|---|---|
| Project | **MÍDETE IA** |
| Constitution | **v0.1 — FROZEN** |
| Current phase | **P01 — Product Definition** |
| Completed phase | **P00 — Governance & Repository Bootstrap** |
| Current phase gate | **GATE-P01** |
| Next formal phase work item | **P01-01 — Problem Statement — READY** |
| Active experiment | **EXP-001 — AI Career Transformation Snapshot** |
| Experiment gate | **GATE-EXP-001 — OPEN** |
| Next experiment work item | **EXP-001-06 — Privacy Disclaimer — READY in dependency track** |
| Completed delivery package | **WP-03 — Scoring Engine — COMPLETE** |
| Next delivery package | **WP-04 — Assessment Capture — NEXT / PLANNED** |
| Active delivery prompt | **None** |
| Product code | **Started — deterministic scoring engine accepted** |
| Latest automated scoring result | **9/9 tests PASS** |

Canonical state:
[Project Execution Manifest](governance/manifests/PROJECT_EXECUTION_MANIFEST_v0.1.yaml).

---

## 4. Two execution tracks

Mídete IA currently uses two related but distinct planning tracks.

### Formal project phase track

~~~text
P00 Governance
   ✅ COMPLETE
        ↓
P01 Product Definition
   🟡 CURRENT
        ↓
P01-01 Problem Statement
   READY
~~~

Later phases remain blocked until their gates and dependencies permit progression.

### EXP-001 rolling-wave delivery track

~~~text
EXP-001 — AI Career Transformation Snapshot
│
├── EXP-001-00 Micro-MVP Contract       ✅ COMPLETE
├── EXP-001-01 Experiment Hypothesis    ✅ COMPLETE
├── EXP-001-02 Assessment Question Bank ✅ COMPLETE
├── EXP-001-03 Scoring Model            ✅ COMPLETE
│
├── WP-01 Scoring Acceptance            ✅ COMPLETE
├── WP-02 Architecture Fit              ✅ COMPLETE
├── WP-03 Scoring Engine                ✅ COMPLETE
└── WP-04 Assessment Capture            ⏳ NEXT / PLANNED
~~~

The experiment can progressively produce evidence while the formal product-definition phase remains active. Neither track silently advances the other.

See:
[EXP-001 dashboard](docs/product/experiments/EXP-001/README.md).

---

## 5. Current Stage-0 architecture

The current approved architecture is deliberately small:

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
           [later persistence slice]
~~~

The first accepted executable capability is:

~~~text
RDY-001..RDY-010
      ↓
strict validation
      ↓
deterministic scoring
      ↓
5 dimensions
      ↓
total 0..10
      ↓
priority / strength output
~~~

Current implementation:

- [Scoring engine](apps/exp-001/scoring/scoring.js)
- [Scoring tests](tests/exp-001/scoring/scoring.test.js)
- [WP-03 acceptance](docs/product/experiments/EXP-001/WP_03_SCORING_ENGINE_ACCEPTANCE_v0.1.md)

Deferred until a verified requirement justifies them:

- React / Next.js product architecture;
- custom backend API;
- PostgreSQL;
- authentication;
- LLM runtime;
- RAG;
- agents;
- containers;
- Terraform;
- Kubernetes;
- managed cloud backend.

---

## 6. AI-assisted execution model

The current handoff model is:

~~~text
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
acceptance audit / evidence / reconciliation
      ↓
USER
authorization for persistent changes and material progression
~~~

Detailed role mapping:
[ART-040 — Role Technology Execution Matrix](docs/project/ROLE_TECHNOLOGY_EXECUTION_MATRIX_v0.1.md).

Execution routing contract:
[ART-046 — AI Execution Orchestration Contract](governance/contracts/AI_EXECUTION_ORCHESTRATION_CONTRACT_v0.1.md).

Before execution, the task must resolve whether the primary model is `CHATGPT`, `CODEX`, or `CHATGPT_CODEX_CHATGPT`, together with specification, build, technical-test, review and approval ownership.

Persistent repository mutations require explicit user authorization.

---

## 7. Project information architecture

The repository separates:

~~~text
PHYSICAL TREE
Where does a file live?

from

LOGICAL TREE
Where does the work belong?
~~~

Logical hierarchy:

~~~text
PROJECT
  ↓
CAPABILITY
  ↓
PHASE
  ↓
EXPERIMENT / MICRO-MVP
  ↓
WORK PACKAGE
  ↓
TASK
  ↓
TEST / EVIDENCE
~~~

The repository also preserves separate graphs for:

- hierarchy;
- dependency;
- traceability;
- architecture evolution;
- responsibility.

See:
[ART-041 — Project Information Architecture and Status Model](docs/project/PROJECT_INFORMATION_ARCHITECTURE_AND_STATUS_MODEL_v0.1.md).

---

## 8. Canonical sources of truth

| Information | Canonical source |
|---|---|
| Strategic principles | Project Constitution |
| Current phase / active experiment / next delivery package | Project Execution Manifest |
| Work-item dependencies | Dependency Registry |
| Artifact lifecycle | Artifact Registry |
| Evidence | Evidence Registry |
| Prompt scope | Prompt Registry |
| Skill availability | Skill Registry |
| Cross-work traceability | Project Work Traceability Matrix |
| Architecture authorization | Architecture contracts + Technology Matrix + ADRs |
| Human status summary | README views — derived only |

Key control-plane files:

- [AGENTS.md](AGENTS.md)
- [Repository Scope Binding Contract](governance/contracts/REPOSITORY_SCOPE_BINDING_CONTRACT_v0.1.md)
- [AI Execution Orchestration Contract](governance/contracts/AI_EXECUTION_ORCHESTRATION_CONTRACT_v0.1.md)
- [Project Execution Manifest](governance/manifests/PROJECT_EXECUTION_MANIFEST_v0.1.yaml)
- [Artifact Registry](governance/registries/ARTIFACT_REGISTRY_v0.1.yaml)
- [Dependency Registry](governance/registries/DEPENDENCY_REGISTRY_v0.1.yaml)
- [Evidence Registry](governance/registries/EVIDENCE_REGISTRY_v0.1.yaml)
- [Traceability Matrix](artifacts/registry/PROJECT_WORK_TRACEABILITY_MATRIX_v0.1.csv)

---

## 9. Repository navigation

~~~text
governance/   Constitution, contracts, manifests, registries and gates
prompts/      Phase / work-package / task prompts
skills/       Reusable execution instructions
docs/         Human-readable project, product and architecture artifacts
artifacts/    Controlled matrices and structured project artifacts
apps/         Product implementation
tests/        Automated verification
infra/        Infrastructure only when justified and authorized
~~~

For project orientation:

~~~text
README.md
   ↓
AGENTS.md
   ↓
Constitution
   ↓
Manifest
   ↓
Context Acquisition Contract
   ↓
AI Execution Orchestration Contract
   ↓
Traceability / Registries
   ↓
Active Prompt + Skill + Contract
   ↓
Upstream Artifacts
~~~

AGENTS.md remains the authoritative bootstrap rule for execution.

---

## 10. Current evidence

Key accepted evidence includes:

- EVID-P00-009 — P00 closeout PASS;
- EVID-EXP001-002 — Assessment Question Bank PASS;
- EVID-EXP001-003 — Scoring Model PASS;
- EVID-EXP001-WP02-001 — Architecture Fit PASS;
- EVID-EXP001-WP03-001 — Scoring Engine TEST PASS.

WP-03 automated scoring evidence:

~~~text
tests:   9
pass:    9
fail:    0
skipped: 0
~~~

This evidence validates deterministic scoring implementation only; it does not validate deployment, UI, persistence, live-user behavior or commercial demand.

---

## 11. Current blockers and boundaries

WP-04 is the next logical delivery package but is **not execution-ready yet** because there is no active delivery prompt.

EXP-001-06 — Privacy Disclaimer is READY in the experiment dependency track, but its execution package still requires prompt/skill/artifact/evidence resolution before implementation under AGENTS.md.

Future architecture remains deferred unless a verified requirement makes the Stage-0 architecture insufficient.

---

## 12. Next governed action

Current delivery sequence:

~~~text
WP-03 COMPLETE
      ↓
prepare WP-04 execution-ready package
      ↓
explicit user authorization
      ↓
WP-04 Assessment Capture implementation
~~~

In parallel, the formal P01 track still identifies:

~~~text
P01-01 — Problem Statement
READY
~~~

No later phase, work package or release should be inferred as approved merely because it appears in this README.

---

## 13. Start here

For a human reader:

1. Read this README for orientation.
2. Open the [EXP-001 dashboard](docs/product/experiments/EXP-001/README.md) for the active experiment.
3. Use the Manifest and registries for canonical state.

For an LLM or coding agent:

1. Read [AGENTS.md](AGENTS.md).
2. Follow its mandatory bootstrap sequence exactly, including the AI Execution Orchestration Contract.
3. Resolve the execution model and ownership before invoking a skill or implementation agent.
4. Never infer later-phase or next-work-package execution authority.
