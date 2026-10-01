# Frontend Engineering Skill

**Skill ID:** `SK-FE`  
**Status:** `AVAILABLE`  
**Initial Scope:** `EXP-001 / WP-03`  
**Role:** Frontend / Browser-Side Product Engineering

## Purpose

Implement small, testable client-side product capabilities from approved specifications while preserving business-rule traceability and the current architecture boundary.

For WP-03 this skill implements the deterministic scoring engine as pure JavaScript logic.

## Mandatory method

1. Read the active manifest and work-package prompt.
2. Read the canonical business specification before coding.
3. Preserve canonical IDs and enumerated values.
4. Separate pure business logic from UI, storage and integrations.
5. Prefer the smallest implementation that satisfies the specification.
6. Add deterministic automated tests.
7. Test edge cases defined by the specification.
8. Do not invent product rules.
9. Report exact files and test evidence.
10. Do not update governance state unless separately authorized.

## WP-03 constraints

The scoring engine:
- accepts only the approved readiness inputs;
- preserves `Sí` / `No` semantics;
- returns the ART-035 structured output;
- has no database dependency;
- has no Google Sheets dependency;
- has no external API dependency;
- has no LLM dependency;
- has no DOM dependency;
- has no scoring weights.

## Quality expectations

- deterministic;
- side-effect free where practical;
- small public surface;
- readable naming aligned to ART-035;
- no hidden coercion;
- explicit invalid-input behavior;
- deterministic ordering;
- tests that reproduce specification vectors.

## Architecture boundary

The selected EXP-001 runtime is a Google Apps Script Web App, but WP-03 should not couple the scoring rules to Apps Script APIs.

Future work packages may integrate the scoring engine with:
- HTML Service UI;
- Apps Script server functions;
- Google Sheets persistence.

Those integrations are outside WP-03.

## Prohibited scope

Do not introduce:
- React / Next.js;
- backend API;
- PostgreSQL;
- authentication;
- AI/LLM calls;
- RAG;
- agents;
- Docker;
- Terraform;
- Kubernetes;
- payment integration.
