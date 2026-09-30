# Mídete IA

Mídete IA is a career intelligence and professional assessment platform for Mexico first, then LATAM.

## Current project state

- Phase: `P01 — Product Definition`
- Constitution: `v0.1 — FROZEN`
- Coding status: **NOT STARTED**
- Completed gate: `GATE-P00 — PASS` (see [P00 closeout](docs/project/P00_CLOSEOUT_v0.1.md))
- Current gate: `GATE-P01`
- Next phase work item: `P01-01 — Problem Statement`
- Active experiment: `EXP-001 — AI Career Transformation Snapshot`
- Next experiment work item: `EXP-001-02 — Assessment Question Bank` (validation pending)
- MVP baseline: Professional Profile + Career Radar + Job Fit + Basic Learning Recommendation + Payment

## Operating model

```text
PROJECT CONSTITUTION
        ↓
PROJECT MANIFEST
        ↓
PHASE
        ↓
WORK PACKAGE
        ↓
TASK
        ↓
MICRO-TASK
        ↓
SKILL + CONTRACT + INPUT
        ↓
ARTIFACT
        ↓
TEST / REVIEW
        ↓
EVIDENCE
        ↓
GATE
```

## Repository principles

1. Validate before scaling.
2. Sell before over-engineering.
3. Use the simplest architecture that can validate the business hypothesis.
4. Preserve traceability from business requirement to evidence.
5. Do not introduce Kubernetes, multi-cloud, complex RAG, or advanced ML before an approved gate.
6. AI outputs are advisory decision-support, not guarantees of employment or employment decisions.

See `governance/constitution/MIDETE_AI_PROJECT_CONSTITUTION_v0.1.md`.

## Start here

Read [AGENTS.md](AGENTS.md), then the constitution, [execution manifest](governance/manifests/PROJECT_EXECUTION_MANIFEST_v0.1.yaml), context contract and [P01 prompt](prompts/phase/P01_PRODUCT_DEFINITION_PROMPT_v0.1.md).
The execution manifest is the current-state source; this README summarizes it.

P01 defines the product and validates commercial hypotheses. Application implementation and later phases remain subject to their gates. The EXP-001 question bank exists as a draft awaiting validation; its presence does not approve scoring or deployment.
