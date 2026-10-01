# MÍDETE IA
# EXP_001_ARCHITECTURE_FIT_REVIEW_v0.1
## WP-02 — Stage-0 Architecture Fit Review

**Artifact ID:** `ART-038`  
**Version:** `v0.1`  
**Phase:** `P01`  
**Status:** `APPROVED`  
**Validation State:** `ACCEPTED`  
**Owner / Role:** Architecture Governance  
**Experiment:** `EXP-001`  
**Work Package:** `WP-02`  
**Upstream Dependencies:** `ART-023`, `ART-024`, `ART-025`, `ART-026`, `ART-029`, `ART-035`, `ART-036`, `ART-037`  
**Downstream Consumers:** `WP-03`, `ART-039`, scoring implementation, assessment implementation  
**Evidence:** `EVID-EXP001-WP02-001`  
**Decision Gate:** `GATE-EXP-001`

## 1. Decision question

What is the simplest implementation architecture that can satisfy the current EXP-001 requirement:

> A user completes the approved assessment and receives an immediate deterministic personalized snapshot, while the experiment can persist the minimum response data needed for validation.

This review does not authorize later-stage platform architecture.

## 2. Required capabilities

The current slice requires:

1. browser-accessible assessment;
2. approved question capture;
3. deterministic scoring based on ART-035;
4. immediate result rendering;
5. five dimension scores;
6. priority / strength output;
7. later tabular persistence;
8. later lightweight funnel instrumentation;
9. later external payment-link handoff;
10. low operational burden and low recurring cost.

The current slice does not require:

- user accounts;
- relational database;
- reusable public API;
- AI inference;
- RAG;
- agents;
- containers;
- infrastructure as code;
- Kubernetes.

## 3. Options evaluated

### Option A — Google Forms + Google Sheets

**Fit:** INSUFFICIENT for the complete user experience.

Strengths:
- very low implementation effort;
- structured capture;
- native Sheet response storage;
- suitable for a survey.

Limitation:
- the required personalized result must be presented immediately to the respondent;
- Apps Script HTML interfaces bound to Forms are editor interfaces rather than respondent-facing result surfaces.

Decision: `REJECT_FOR_PRIMARY_UI`.

Google Forms remains a valid prototyping or backup capture mechanism but is not selected as the primary EXP-001 user interface.

### Option B — Google Forms + Sheets + Apps Script triggers

**Fit:** PARTIAL.

Strengths:
- retains Forms capture;
- allows post-submit processing;
- retains low infrastructure.

Limitations:
- submit triggers are suitable for reacting to responses but do not provide the clean respondent-facing personalized result flow required by EXP-001;
- result UX becomes indirect or fragmented.

Decision: `DEFER`.

### Option C — Static HTML/CSS/JavaScript + separate lightweight persistence endpoint

**Fit:** SATISFIES.

Strengths:
- immediate client-side scoring and result;
- full control over assessment UX;
- simple static frontend.

Limitations:
- persistence requires an additional endpoint or service;
- introduces an extra deployment surface compared with a single Apps Script web app.

Decision: `VALID_ALTERNATIVE_NOT_SELECTED`.

### Option D — Google Apps Script Web App + HTML Service + Google Sheets

**Fit:** SATISFIES with lowest combined operational burden.

Capabilities:
- browser-accessible web app;
- HTML/CSS/client JavaScript;
- server-side Apps Script functions;
- asynchronous client-to-server calls;
- Google Sheets persistence;
- one lightweight deployment surface;
- compatible with later external payment links.

Decision: `SELECTED`.

## 4. Selected architecture

```text
Google Apps Script Web App
        │
        ├── HTML / CSS / JavaScript
        │       ├── Landing
        │       ├── Assessment
        │       ├── Scoring integration
        │       └── Result
        │
        └── Apps Script server functions
                │
                ▼
           Google Sheets
                │
                ▼
        Experiment evidence

External payment link
added only in its authorized work package
```

## 5. WP-03 boundary

WP-03 implements only the deterministic scoring engine.

It must remain independent from:
- Sheets;
- payment;
- analytics;
- external APIs;
- LLMs;
- UI copy;
- profession transformation cards.

The purpose is to build and test the foundation before later slices depend on it.

## 6. Technology decision matrix result

| Capability | Decision for EXP-001 |
|---|---|
| Apps Script Web App | APPROVED_FOR_EXP_001 |
| HTML Service | APPROVED_FOR_EXP_001 |
| HTML/CSS/JavaScript | APPROVED_FOR_EXP_001 |
| Google Sheets | APPROVED_FOR_EXP_001 |
| External payment link | APPROVED when commercial slice is activated |
| React / Next.js | DEFER |
| FastAPI / backend API | DEFER |
| PostgreSQL | DEFER |
| Authentication | DEFER |
| LLM | DEFER |
| RAG | DEFER |
| Agents | DEFER |
| Docker | DEFER |
| Terraform | DEFER |
| Kubernetes | DEFER |

## 7. Security and privacy considerations

- collect only data authorized by EXP-001;
- do not place secrets in client HTML or repository files;
- later deployment permissions must be reviewed before public launch;
- HTML Service sandbox restrictions must be respected;
- external active resources must use HTTPS;
- persistence is not implemented in WP-03.

## 8. Cost and operations

Expected Stage-0 operational characteristics:
- no dedicated server administration;
- no relational database administration;
- no container runtime;
- no cluster;
- no always-on custom backend;
- low deployment surface count.

Actual Google quota and account constraints must be checked again at launch readiness because service limits can change.

## 9. Evidence sources

Official Google documentation reviewed for WP-02:

- https://developers.google.com/apps-script/guides/html
- https://developers.google.com/apps-script/guides/html/communication
- https://developers.google.com/apps-script/guides/web
- https://developers.google.com/apps-script/guides/html/restrictions

Key supported facts:
- Apps Script HTML Service can serve HTML web interfaces;
- a web app can be exposed through `doGet()` / `doPost()`;
- browser HTML can call server functions using `google.script.run`;
- Forms-bound custom HTML UI is visible to form editors, not respondents.

## 10. Review result

`PASS`

The existing Stage-0 philosophy remains valid, but the primary respondent interface is refined from Google Forms-centric capture to a Google Apps Script Web App.

This is a reversible architecture decision and does not authorize Stage-1 technologies.

## 11. Next handoff

```text
WP-02 Architecture Fit       COMPLETE
             ↓
WP-03 Scoring Engine         READY
             ↓
Codex implementation
             ↓
automated tests
             ↓
ChatGPT audit
             ↓
implementation evidence
```
