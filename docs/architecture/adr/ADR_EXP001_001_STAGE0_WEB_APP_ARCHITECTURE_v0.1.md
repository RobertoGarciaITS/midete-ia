# ADR-EXP001-001
# Stage-0 Web Application Architecture

**Artifact ID:** `ART-039`  
**ADR ID:** `ADR-EXP001-001`  
**Version:** `v0.1`  
**Phase:** `P01 / EXP-001`  
**Status:** `APPROVED`  
**Owner / Role:** Architecture Governance  
**Decision Date:** `2026-10-01`  
**Upstream Dependencies:** `ART-024`, `ART-025`, `ART-026`, `ART-038`  
**Downstream Consumers:** `WP-03`, `WP-04`, `WP-05`, `WP-06`  
**Evidence:** `EVID-EXP001-WP02-001`

## Context

EXP-001 requires a respondent-facing assessment with an immediate deterministic personalized result.

The original Stage-0 architecture permits simple landing, form capture, tabular persistence, lightweight automation and an external payment link.

A Forms-centric implementation is insufficient as the primary respondent UI because the experiment requires a controlled immediate personalized snapshot.

## Decision

Use:

```text
Google Apps Script Web App
+ HTML Service
+ HTML / CSS / JavaScript
+ Google Sheets for later tabular persistence
```

The web app is the primary user-facing runtime for EXP-001.

Google Sheets is the approved Stage-0 persistence target when WP-05 is activated.

The scoring engine implemented in WP-03 must not depend on Google Sheets or server persistence.

## Rationale

This choice:
- satisfies immediate personalized scoring/result UX;
- stays within the approved low-code Stage-0 maturity level;
- avoids a dedicated backend and database;
- minimizes deployment and operations burden;
- preserves a migration path to a future custom frontend/backend if evidence later justifies it.

## Consequences

Positive:
- one lightweight web-app deployment surface;
- normal HTML/CSS/JavaScript UI development;
- direct access to Apps Script server functions;
- straightforward later Sheets integration;
- reversible decision.

Constraints:
- Apps Script quotas and deployment permissions exist;
- HTML Service runs with sandbox restrictions;
- runtime coupling to Google Apps Script is accepted for EXP-001;
- if later requirements exceed this environment, a new architecture review is required.

## Deferred alternatives

Remain `DEFER`:
- React / Next.js;
- FastAPI;
- PostgreSQL;
- authentication;
- managed cloud backend;
- LLM runtime;
- RAG;
- agents;
- Docker;
- Terraform;
- Kubernetes.

## Supersession trigger

Revisit this ADR if evidence introduces a requirement for any of:
- persistent user accounts/history;
- complex concurrency;
- reusable external API;
- advanced dynamic UX not practical in Apps Script;
- AI inference runtime;
- workload scale or reliability not adequately supported by the Stage-0 implementation.

## Sources

- https://developers.google.com/apps-script/guides/html
- https://developers.google.com/apps-script/guides/html/communication
- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/guides/html/restrictions
