# Repository Structure Contract v0.1

## Canonical roots
- `governance/`: constitution, contracts, manifests, registries, gates.
- `prompts/`: phase, work-package, task, microtask prompts.
- `skills/`: reusable capability instructions.
- `docs/`: human-readable project/product/architecture/data/AI/security/business/certification documentation.
- `artifacts/`: controlled outputs, matrices, test/release evidence.
- `apps/`: deployable user-facing applications.
- `services/`: separately deployable/supporting services when justified.
- `packages/`: shared code.
- `data/`: approved non-secret data assets.
- `infra/`: Docker, Terraform, Kubernetes when gates permit.
- `tests/`: unit, integration, contract, e2e, security, AI evaluation.
- `.github/`: repository workflows and collaboration controls.

## Rules
Do not introduce a new top-level directory without documenting why.
Empty future directories need not exist until an artifact requires them.
No secrets, confidential employer data, or proprietary third-party content may be committed.
