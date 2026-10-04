# AGENTS.md — Mídete IA

## Canonical repository scope — mandatory

Canonical project repository:

```text
RobertoGarciaITS/midete-ia
```

Before any repository-native operation, verify that the actual repository matches this exact identity.

Rules:
- All Mídete IA repository reads, branches, commits, diffs, PRs, Actions, evidence and persistent mutations must target `RobertoGarciaITS/midete-ia`.
- There is no fallback repository.
- Do not substitute another repository from memory, a previous chat, another project, a similar repository name, or a prior implementation.
- Prior-conversation memory and other-project repository content are noncanonical and never override live Mídete IA repository truth.
- If repository identity is unknown or mismatched, STOP and report `BLOCKED_REPOSITORY_SCOPE_MISMATCH`.
- Cross-repository research requires explicit User authorization, is read-only by default, and does not change the canonical project repository.
- Persistent mutation outside `RobertoGarciaITS/midete-ia` is prohibited under this project context.
- Changing the canonical repository requires an explicit User decision and governed update of the repository-scope contract and this file.

Governing contract:
`governance/contracts/REPOSITORY_SCOPE_BINDING_CONTRACT_v0.1.md`.

## Mandatory bootstrap sequence

Before performing work, read in this order:

1. `governance/constitution/MIDETE_AI_PROJECT_CONSTITUTION_v0.1.md`
2. `governance/manifests/PROJECT_EXECUTION_MANIFEST_v0.1.yaml`
3. `governance/contracts/CONTEXT_ACQUISITION_CONTRACT_v0.1.md`
4. `governance/contracts/AI_EXECUTION_ORCHESTRATION_CONTRACT_v0.1.md`
5. The active phase or work-package prompt.
6. The relevant registry entries, traceability row and required skill.
7. The relevant upstream specifications, architecture decisions and contracts.

## Execution rule

Do not infer approval to enter a later phase. Respect dependencies and gates.

Every persistent work item must identify:
- work item ID;
- phase;
- type;
- execution model;
- specification owner;
- build owner;
- technical test owner;
- review owner;
- approval owner;
- upstream dependencies;
- prompt;
- skill;
- governing contract;
- artifact;
- acceptance criteria;
- evidence;
- gate.

## AI execution routing

Before execution, resolve the task using `AI_EXECUTION_ORCHESTRATION_CONTRACT_v0.1.md`.

Allowed primary execution models are:
- `CHATGPT` for reasoning, specification, architecture, governance, review and evidence interpretation;
- `CODEX` for already-bounded technical implementation and automated technical tests;
- `CHATGPT_CODEX_CHATGPT` for governed work that requires specification, implementation and independent acceptance.

For product-code work, the default handoff is:

```text
CHATGPT
specification / architecture / acceptance criteria
      ↓
USER
persistent-change authorization
      ↓
CODEX
implementation / technical tests
      ↓
CHATGPT
spec-conformance audit / acceptance / evidence
      ↓
USER
reconciliation or next-step authorization when required
```

Do not route unresolved product semantics, architecture decisions, privacy boundaries, commercial claims or acceptance policy directly to Codex.
Do not allow an implementation agent to become the sole acceptance or progression authority.

## Prohibited during P00

Do not implement application code, APIs, database schemas, AI agents, payment integration, Docker/Kubernetes infrastructure, or cloud resources during P00.

## Change discipline

The Project Constitution is FROZEN. Proposed changes must use the Change Control Contract and create a new constitution version after approval.

## Current phase and skill resolution

Resolve the current phase and active phase prompt from the Project Execution Manifest.
Resolve execution ownership and handoff through the AI Execution Orchestration Contract before invoking a skill or implementation agent.
Resolve the prompt definition and governed work-item scope through the Prompt Registry.
Resolve required skill instructions through the Skill Registry; REGISTERED alone does not mean executable.
Resolve the work-item contract, artifact, dependencies, evidence and gate from the Traceability Matrix and relevant registries.
If a required prompt, skill path, contract, upstream artifact, evidence source or gate is missing, record the dependency as BLOCKED instead of inferring it.

Read-only audits may continue without gate progression. Persistent changes require explicit user authorization; approval of one task does not approve subsequent work items, later phases or product release.
