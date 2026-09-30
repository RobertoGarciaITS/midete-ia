# Artifact Lifecycle Contract v0.1

## States
DRAFT -> REVIEW -> APPROVED -> FROZEN -> SUPERSEDED
A rejected artifact uses REJECTED.

## Naming
Controlled artifacts use stable names and explicit versions where appropriate:
`<ARTIFACT_NAME>_vMAJOR.MINOR.<ext>`

## Required metadata
- artifact_id
- version
- phase
- status
- owner/role
- upstream dependencies
- downstream consumers

## Mutation
FROZEN artifacts are not edited in place. Create a new version and preserve traceability.

## Registration
Every controlled artifact must appear in `ARTIFACT_REGISTRY_v0.1.yaml`.
