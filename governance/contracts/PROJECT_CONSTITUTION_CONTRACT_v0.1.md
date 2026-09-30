# Project Constitution Contract v0.1

## Purpose
Protect the approved project baseline from prompt drift and unreviewed scope change.

## Rules
1. `MIDETE_AI_PROJECT_CONSTITUTION_v0.1.md` has status **FROZEN**.
2. Operational prompts may specialize the Constitution but may not contradict it.
3. A conflict is resolved in this precedence order:
   Constitution > approved Contract > approved ADR/Requirement > active Phase Prompt > Task Prompt > model suggestion.
4. Changing the Constitution requires a Change Request, impact analysis, explicit approval, new version, and registry update.
5. Normal task execution must never overwrite a frozen artifact.

## Acceptance
A work item is nonconforming if it changes project purpose, MVP baseline, commercial priority, safety boundaries, or architecture progression without change control.
