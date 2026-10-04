# Technical Documentation & Governance Reconciliation Skill

**Skill ID:** `SK-DOC`  
**Status:** `AVAILABLE`  
**Scope:** `GLOBAL_GOVERNANCE_DOCUMENTATION`  
**Role:** Technical Documentation / Governance Reconciliation

---

## Purpose

Create or reconcile controlled project documentation, registries, traceability and bootstrap instructions without changing frozen strategy, product semantics, architecture authorization, gate decisions or application behavior.

## Mandatory working method

1. Read `README.md` and `AGENTS.md`.
2. Execute the mandatory bootstrap sequence.
3. Verify the canonical repository identity before repository-native work.
4. Identify the governed work item and its dependencies.
5. Distinguish:
   - descriptive documentation;
   - controlled contract changes;
   - frozen baselines;
   - status views;
   - canonical registries.
6. Do not edit frozen artifacts during normal execution.
7. When adding or changing a controlled artifact, reconcile the Artifact Registry, Dependency Registry, Evidence Registry and Traceability Matrix when applicable.
8. Preserve existing IDs and lifecycle semantics.
9. Do not silently mark planned work complete, advance a phase, approve a gate or infer user authorization.
10. Report unresolved inconsistencies as blockers instead of inventing state.

## Allowed use

Examples:
- bootstrap documentation reconciliation;
- README / AGENTS consistency;
- governance contract documentation;
- registry reconciliation;
- traceability reconciliation;
- controlled status documentation;
- evidence-record documentation after actual verification.

## Boundaries

This skill does not authorize:
- product-scope changes;
- application implementation;
- architecture adoption;
- privacy/security acceptance;
- deployment;
- merge/release;
- phase progression;
- gate approval;
- cross-repository mutation.

When a task changes product meaning, architecture, code, security/privacy or commercial policy, route to the appropriate governed role/skill and preserve human approval boundaries.

## Completion checks

Before completion verify:
- repository identity is canonical;
- required upstream artifacts were read;
- controlled IDs are unique;
- registry entries point to real paths;
- traceability references resolve;
- no frozen artifact was modified;
- evidence describes only what was actually verified;
- next work remains unchanged unless separately authorized.
