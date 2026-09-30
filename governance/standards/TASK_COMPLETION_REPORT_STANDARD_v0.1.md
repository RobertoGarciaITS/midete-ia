# TASK_COMPLETION_REPORT_STANDARD_v0.1

**Artifact ID:** ART-027  
**Status:** APPROVED  
**Scope:** All repository-modifying tasks in Mídete IA

## Purpose

Standardize the completion report after a task so the user can continuously audit progress, repository state, traceability and dependencies.

## Mandatory completion output

After any task that creates, updates, deletes, moves or materially changes repository content, report the following sections.

### 1. Task Result

- Task ID / name
- Status: COMPLETE / PARTIAL / BLOCKED / FAILED
- Gate impact, if any
- One-sentence result

### 2. Changes Performed

Table:

| Operation | Path | Artifact ID | Result |
|---|---|---|---|

Operations include CREATE, UPDATE, DELETE, MOVE, RENAME or NO-CHANGE.

### 3. Evidence

Include, where available:
- commit SHA(s);
- test/validation result;
- evidence IDs;
- limitations or unverified items.

### 4. Traceability

Show:

```text
Requirement / Hypothesis
        ↓
Task
        ↓
Contract / Skill
        ↓
Artifact
        ↓
Evidence
        ↓
Gate / Next Dependency
```

State the exact current dependency and what is now unblocked or still blocked.

### 5. Repository Inventory

After repository-modifying work, query the repository again and report:
- total file count;
- total directory count;
- files created;
- files updated;
- files deleted;
- relevant current subtree;
- whether the returned tree was complete or truncated.

### 6. Current Project State

Report:
- current phase;
- active experiment/work item;
- current gate;
- next authorized work item;
- explicitly blocked future work where relevant.

### 7. Risks / Debt / Inconsistencies

List only real known items:
- governance debt;
- missing registry entries;
- unverified dependencies;
- scope drift;
- tests not run;
- unresolved architecture decisions.

If none: `No known blocking inconsistency detected.`

### 8. Proposed Next Action

Describe the next logical task.

If the next action requires creating or modifying any persistent repository file, skill, artifact, contract, prompt, code, test, registry, manifest, schema, workflow or configuration, STOP and request explicit user confirmation before performing it.

## Read-only work

For read-only audits or consultations, repository modification approval is not required. Clearly state that no repository files were changed.

## User authorization rule

Repository consultation may proceed continuously.

Persistent mutation requires explicit user confirmation before execution.
