---
artifact_id: ART-030
version: v0.1
phase: P01
status: APPROVED
owner: product-management
upstream_dependencies: [CONST-001, GATE-P00]
downstream_consumers: [P01-01]
---

# P01 Product Definition Prompt v0.1

## Objective and scope

Define the problem, target customer, jobs to be done, value proposition, product scope, bounded MVP and commercial hypotheses against Constitution v0.1.
Execute P01 work items in traceability/dependency order. This prompt does not complete or approve those deliverables.

## Bootstrap

Read AGENTS.md's sequence, the P01-01 traceability row, the Product Definition Contract, SK-PROD instructions and the relevant upstream artifacts.
For EXP-001, additionally read its Micro-MVP contract and hypothesis; use the experiment's own scope and gate.

## P01-01 — Problem Statement

Input: Constitution v0.1 and the documented GATE-P00 PASS.
Output: docs/product/PROBLEM_STATEMENT_v0.1.md (ART-033, planned).
Separate documented baseline facts, assumptions and missing customer evidence.
Acceptance: the stated problem, affected customer, consequences, current alternatives, validation questions and scope boundaries are explicit and traceable to the constitution. Avoid unsupported quantitative or employment claims.
Record review evidence as EVID-P01-001 only after performing the review; reserve that ID until then.

## Boundaries

Do not implement application code, infrastructure, scoring, payments or deployment under this prompt.
Do not modify the frozen constitution or infer a later gate approval.
P01-02 and subsequent work remain pending upstream completion and authorization.
