# AGENTS.md — Mídete IA

## Mandatory bootstrap sequence

Before performing work, read in this order:

1. `governance/constitution/MIDETE_AI_PROJECT_CONSTITUTION_v0.1.md`
2. `governance/manifests/PROJECT_EXECUTION_MANIFEST_v0.1.yaml`
3. `governance/contracts/CONTEXT_ACQUISITION_CONTRACT_v0.1.md`
4. The active phase prompt.
5. The relevant registry entries and upstream artifacts.

## Execution rule

Do not infer approval to enter a later phase. Respect dependencies and gates.

Every persistent work item must identify:
- work item ID;
- phase;
- type;
- upstream dependencies;
- prompt;
- skill;
- governing contract;
- artifact;
- acceptance criteria;
- evidence;
- gate.

## Prohibited during P00

Do not implement application code, APIs, database schemas, AI agents, payment integration, Docker/Kubernetes infrastructure, or cloud resources during P00.

## Change discipline

The Project Constitution is FROZEN. Proposed changes must use the Change Control Contract and create a new constitution version after approval.

## Current phase and skill resolution

Resolve the active phase prompt through the manifest and Prompt Registry. P01 uses
`prompts/phase/P01_PRODUCT_DEFINITION_PROMPT_v0.1.md`.
Resolve skill instructions through the Skill Registry; REGISTERED alone does not mean executable.
For P01-01 use SK-PROD at `skills/product-management/SKILL.md`.
If a required prompt or skill path is missing, record the dependency as BLOCKED.

Read-only audits may continue without gate progression. Persistent changes require explicit user authorization; approval of one task does not approve later phases or product release.
