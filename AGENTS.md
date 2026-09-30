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
