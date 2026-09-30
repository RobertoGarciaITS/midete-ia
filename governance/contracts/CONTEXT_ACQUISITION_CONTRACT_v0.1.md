# Context Acquisition Contract v0.1

Before executing any task, the actor must identify and read:
1. Project Constitution.
2. Project Execution Manifest.
3. Active phase prompt.
4. Work-item row in the traceability matrix.
5. Required contracts.
6. Upstream artifacts and dependencies.

The actor must state or record unknown/missing dependencies instead of inventing them.

## Stop conditions
STOP and mark BLOCKED when:
- required upstream artifact is absent;
- gate approval is required but missing;
- instructions conflict with the Constitution;
- task requires files outside its allowed scope;
- evidence cannot be produced.

## Output minimum
Every completed work item records artifact ID, version, status, dependencies, acceptance result, and evidence ID.
