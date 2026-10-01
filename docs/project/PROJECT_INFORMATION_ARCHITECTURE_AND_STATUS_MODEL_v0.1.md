# MÍDETE IA
# PROJECT_INFORMATION_ARCHITECTURE_AND_STATUS_MODEL_v0.1
## Hierarchical Information Architecture, Status Roll-Up and LLM Context Navigation

**Artifact ID:** `ART-041`  
**Version:** `v0.1`  
**Phase:** `P01`  
**Status:** `DRAFT`  
**Validation State:** `READY_FOR_REVIEW`  
**Owner / Role:** Product Management / Architecture Governance  
**Scope:** Global information architecture and project-status model  
**Upstream Dependencies:** `AGENTS.md`, `PROJECT_EXECUTION_MANIFEST_v0.1.yaml`, `CONTEXT_ACQUISITION_CONTRACT_v0.1.md`, `REPOSITORY_STRUCTURE_CONTRACT_v0.1.md`, `REQUIREMENT_TRACEABILITY_CONTRACT_v0.1.md`, `ARTIFACT_LIFECYCLE_CONTRACT_v0.1.md`, `CHANGE_CONTROL_CONTRACT_v0.1.md`, `ART-036`, `ART-040`  
**Downstream Consumers:** future README hierarchy, status views, project dashboards, context routers, roll-up automation

---

## 1. Purpose

This artifact defines how Mídete IA can evolve from a repository containing governed artifacts into a coherent, hierarchical, evidence-driven project information system without breaking the current governance baseline.

The model is intended to support:

- human navigation;
- project management visibility;
- LLM context acquisition;
- progressive delivery;
- status roll-up;
- traceability;
- architecture evolution;
- evidence-driven gates;
- future dashboard generation.

It is a design artifact only.

It does not authorize repository restructuring, file movement, ID changes, new technologies, work-package advancement or automated state mutation.

---

## 2. Non-negotiable preservation rule

> **No existing canonical artifact, ID, dependency, evidence relation, or physical path may be changed solely to satisfy the new information hierarchy.**

The information architecture must initially be additive and backward-compatible.

The existing governance model remains authoritative.

Preserve:

- artifact IDs;
- work-item IDs;
- prompt IDs;
- skill IDs;
- evidence IDs;
- gate IDs;
- approved artifact paths;
- dependency relationships;
- traceability relationships;
- lifecycle state;
- frozen artifacts;
- repository canonical roots.

The model may add navigation and classification metadata, but must not silently reinterpret existing project state.

---

## 3. Core design principle

Mídete IA has two different structures that must not be confused.

### 3.1 Physical repository tree

The physical tree answers:

> Where does the file live?

Current canonical roots remain:

```text
governance/
prompts/
skills/
docs/
artifacts/
apps/
services/
packages/
data/
infra/
tests/
.github/
```

### 3.2 Logical project tree

The logical tree answers:

> Where does this work belong in the project?

Target conceptual hierarchy:

```text
PROJECT
  ↓
CAPABILITY
  ↓
PHASE
  ↓
EXPERIMENT / MICRO-MVP
  ↓
WORK PACKAGE
  ↓
TASK
  ↓
TEST / EVIDENCE
```

The physical and logical trees are related but do not need to be identical.

---

## 4. Project hierarchy model

### L0 — Project

Represents the long-term system and strategic vision.

Current project:

```text
MÍDETE IA
```

The Project Constitution remains the highest-level baseline.

### L1 — Capability

Represents a durable product or platform capability.

Examples already present conceptually in the Constitution include:

- Career Intelligence;
- Professional Assessment;
- Job Fit;
- Learning Intelligence;
- Professional Copilots.

Capability classification is descriptive until separately governed.

A capability ID must not be retroactively inserted into approved artifacts without an approved change.

### L2 — Phase

Represents a governed project lifecycle stage.

Examples:

```text
P00 — Project Governance and Repository Bootstrap
P01 — Product Definition
P02 — Requirements
P03 — Architecture
...
```

Phase status remains governed by the Project Execution Manifest and gates.

### L3 — Experiment / Micro-MVP

Represents a bounded business/product learning unit.

Example:

```text
EXP-001 — AI Career Transformation Snapshot
```

An experiment may include business, product, architecture, implementation and evidence work while remaining inside its governing phase/gate.

### L4 — Work Package

Represents an implementation or delivery increment with clear scope and handoff.

Example:

```text
EXP-001-WP03 — Scoring Engine
```

### L5 — Task

Represents a bounded unit of work within a work package.

Tasks may include:

- specification;
- implementation;
- testing;
- review;
- integration;
- documentation;
- configuration.

Task-level IDs may be introduced only when justified by project complexity.

### L6 — Test / Evidence

Represents objective verification and learning.

Examples:

- automated test results;
- review evidence;
- acceptance evidence;
- experiment metrics;
- architecture-fit evidence;
- launch evidence.

Evidence remains governed by the Evidence Contract and Evidence Registry.

---

## 5. Five project graphs

The project should be understood through multiple graphs rather than a single folder hierarchy.

### 5.1 Hierarchy graph

Answers:

> Where does this belong?

Example:

```text
MÍDETE IA
  ↓
P01
  ↓
EXP-001
  ↓
EXP-001-WP03
```

Hierarchy is not dependency.

### 5.2 Dependency graph

Answers:

> What must exist or complete before this work can proceed?

Example:

```text
EXP-001-WP01
      ↓
EXP-001-WP02
      ↓
EXP-001-WP03
```

Dependency state remains governed by the Dependency Registry.

### 5.3 Traceability graph

Answers:

> Why does this exist and how is it verified?

Canonical trace path remains:

```text
Business Need
  ↓
Requirement
  ↓
Architecture / Design
  ↓
Component / Function
  ↓
Test
  ↓
Evidence
  ↓
Release
```

The Project Work Traceability Matrix remains the principal cross-reference.

### 5.4 Architecture evolution graph

Answers:

> What requirement caused a technology or architecture decision?

Conceptual pattern:

```text
New Requirement
      ↓
Current Architecture Fit?
      ↓
Architecture Review
      ↓
ADR / Technology Decision
      ↓
Implementation
```

This graph is governed by the Evolutionary Architecture Contract, technology matrix and ADRs.

### 5.5 Responsibility graph

Answers:

> Which professional role and execution agent supports this work?

Conceptual pattern:

```text
Professional Role
      ↓
Skill
      ↓
Technology
      ↓
ChatGPT / Codex support
      ↓
Human approval
```

ART-040 is the current descriptive reference for this graph.

---

## 6. Source-of-truth matrix

Each type of state must have one authoritative owner.

| Information | Canonical Source | Human-readable views may display it? |
|---|---|---|
| Project principles / strategic baseline | Project Constitution | Yes |
| Current phase | Project Execution Manifest | Yes |
| Active experiment | Project Execution Manifest | Yes |
| Active delivery package | Project Execution Manifest | Yes |
| Work-item dependency state | Dependency Registry | Yes |
| Artifact lifecycle status | Artifact Registry | Yes |
| Prompt definition / scope | Prompt Registry | Yes |
| Skill availability | Skill Registry | Yes |
| Evidence result | Evidence Registry | Yes |
| Task/work-item cross-reference | Traceability Matrix | Yes |
| Architecture approval | Architecture Contract + Technology Matrix + ADRs | Yes |
| Business hypothesis | Experiment Hypothesis artifact | Yes |
| Scoring semantics | Approved Scoring Model artifact | Yes |
| Human navigation summary | README / dashboard | Derived only |

Rule:

> A README or dashboard must not become an independent competing source of execution state.

---

## 7. README hierarchy

READMEs should function as navigation and status views.

They should not silently define governed state.

### 7.1 Root README

Purpose:

- explain what Mídete IA is;
- show long-term vision;
- explain the delivery model;
- show current project status;
- identify active phase;
- identify active experiment;
- identify active work package;
- link to canonical sources;
- show the next action;
- explain how to navigate the repository.

### 7.2 Product / Capability README

Potential purpose:

- summarize product capabilities;
- show capability relationships;
- link capabilities to experiments and phases;
- distinguish current versus future capabilities.

Creation is optional until capability navigation becomes necessary.

### 7.3 Phase README

Potential purpose:

- phase objective;
- current status;
- work items;
- gate;
- evidence;
- blockers;
- next action.

Creation should be justified by navigation complexity.

### 7.4 Experiment README

Recommended first local dashboard.

For an experiment such as EXP-001 it should summarize:

- purpose;
- hypothesis;
- target user;
- offer;
- success criteria;
- architecture;
- work packages;
- evidence;
- blockers;
- current package;
- next action;
- gate;
- links to canonical artifacts.

### 7.5 Application / technical README

Purpose:

- explain implementation architecture;
- local run/test instructions;
- module boundaries;
- technical dependencies;
- related work package;
- canonical spec links.

Technical READMEs must not redefine business rules.

---

## 8. README content contract

A status-oriented README should use a consistent structure where applicable:

```text
Purpose
Scope
Canonical Sources
Current Status
Current Phase / Experiment / Work Package
Architecture
Work Packages or Tasks
Evidence
Risks / Blockers
Decisions
Next Action
Navigation Links
```

Dynamic state shown in a README must identify or link to its canonical source.

---

## 9. Status taxonomy

Current governance uses status values such as:

- PLANNED;
- READY;
- BLOCKED;
- COMPLETE.

These remain authoritative until separately changed.

For human dashboards, a richer derived presentation may later be useful:

```text
PLANNED
SPECIFYING
READY
IMPLEMENTING
TESTING
REVIEW
RECONCILIATION_REQUIRED
COMPLETE
BLOCKED
CANCELLED
```

These richer labels are **derived display states only** unless formally adopted through governance.

Example:

A work package may remain canonically `READY` while the repository contains implemented/tested code awaiting evidence reconciliation. A dashboard may display:

```text
RECONCILIATION_REQUIRED
```

provided it clearly shows that this is derived, not a replacement of the canonical registry state.

---

## 10. Status roll-up model

The target roll-up hierarchy is:

```text
Task / Evidence
      ↓
Work Package
      ↓
Experiment
      ↓
Phase
      ↓
Project
```

Roll-up must be deterministic and must never infer approval.

### 10.1 Work-package roll-up

Conceptual checks may include:

- specification available;
- implementation present;
- required tests executed;
- test result;
- evidence registered;
- acceptance recorded;
- dependencies reconciled.

Example derived state:

```text
implementation_present = true
tests_pass = true
evidence_registered = false
canonical_status = READY

derived_view = RECONCILIATION_REQUIRED
```

### 10.2 Experiment roll-up

Experiment status may summarize:

- completed work packages;
- active package;
- blockers;
- success-metric availability;
- current gate;
- next decision.

It must not report GO/PIVOT/STOP before the governed gate decision occurs.

### 10.3 Phase roll-up

Phase status must derive primarily from:

- Manifest;
- Dependency Registry;
- gate result;
- required accepted artifacts.

No dashboard may mark a phase complete without its gate.

### 10.4 Project roll-up

Project status may summarize:

- current phase;
- active experiments;
- active work packages;
- blockers;
- evidence count;
- current architecture;
- next governed action.

It must not replace the Manifest.

---

## 11. Anti-drift rules

To reduce conflicting status information:

1. Every status field must have one canonical source.
2. README status must be treated as a view.
3. A persistent status change requires updating the canonical source first.
4. A README must not independently advance a work item.
5. Generated views should identify generation/update time when automation is introduced.
6. If canonical sources disagree, the conflict must be surfaced rather than guessed.
7. Frozen artifacts must never be updated merely to keep a summary current.
8. Historical evidence must not be rewritten to match later state.
9. Existing IDs remain stable.
10. Path changes require explicit migration impact analysis.

---

## 12. LLM context acquisition model

The current AGENTS bootstrap remains valid.

Target navigation concept:

```text
AGENTS.md
   ↓
Project Constitution
   ↓
Project Execution Manifest
   ↓
Context Acquisition Contract
   ↓
Resolve:
   ├── current phase
   ├── active experiment
   └── active work package
           ↓
Traceability / Registries
           ↓
Prompt + Skill + Contract
           ↓
Upstream Artifacts
           ↓
Execute bounded task
```

Future README layers may accelerate orientation but do not replace this bootstrap.

---

## 13. Human dashboard model

A future root status view may present:

```text
MÍDETE IA

Current Phase          P01 — Product Definition
Active Experiment      EXP-001
Active Delivery        EXP-001-WP03
Current Gate           GATE-EXP-001

WORK
P00                    COMPLETE
P01                    ACTIVE
EXP-001                ACTIVE
WP-01                  COMPLETE
WP-02                  COMPLETE
WP-03                  <derived operational state>

TESTS
Latest suite           <derived test evidence>

BLOCKERS
<count / summary>

NEXT GOVERNED ACTION
<derived from manifest + dependencies>
```

This is a view over canonical project data.

---

## 14. Compatibility with current contracts

### Repository Structure Contract

Compatible.

No new top-level directory is required.

New READMEs can be added inside existing canonical roots.

### Requirement Traceability Contract

Compatible.

The new hierarchy complements, but does not replace, the trace path from business need through evidence.

### Artifact Lifecycle Contract

Compatible.

Controlled design artifacts remain registered and versioned.

README views may remain controlled artifacts if already registered.

### Change Control Contract

Compatible.

Approved baselines must not be silently changed during information-architecture adoption.

### Context Acquisition Contract

Compatible.

The current mandatory bootstrap sequence remains authoritative.

### Evolutionary Architecture Contract

Compatible.

Information hierarchy must not drive technology adoption.

---

## 15. Migration strategy

Adopt the model additively.

### Stage IA-01 — Information Model

Define:

- hierarchy;
- graphs;
- ownership;
- source-of-truth rules.

This artifact provides that initial design.

### Stage IA-02 — Source-of-Truth Validation

Audit current state fields and identify duplicated or stale status.

Do not rewrite governed history.

### Stage IA-03 — README Views

Introduce or update only the minimum useful README views.

Recommended order:

1. reconcile active work-package state;
2. correct stale root README state;
3. add EXP-001 README;
4. evaluate whether phase/application READMEs materially improve navigation.

### Stage IA-04 — Status Roll-Up Rules

Define deterministic derived status rules.

Initially manual/read-only.

### Stage IA-05 — Automation

Only after stable rules exist, consider:

```text
Manifest
+ Registries
+ Traceability
+ Test/Evidence metadata
        ↓
Status aggregation script
        ↓
PROJECT_STATUS artifact
        ↓
README/dashboard view
```

Automation must not become an uncontrolled writer to governance state.

---

## 16. Change impact matrix

| Proposed change | Impact | Default decision |
|---|---:|---|
| Add experiment README | Low | Allow after review |
| Update stale root README | Low | Allow after canonical reconciliation |
| Add phase README | Low | Add only if navigation value is clear |
| Add capability classification metadata | Low–Medium | Defer until taxonomy is governed |
| Add derived status labels | Medium | Keep display-only initially |
| Add automated dashboard generation | Medium | Defer until status rules stabilize |
| Move approved artifacts | High | Avoid |
| Rename existing IDs | Very High | Prohibit by default |
| Replace registries | Very High | Prohibit |
| Merge registries into one file | Very High | Prohibit |
| Move governance control-plane files | Very High | Prohibit |

---

## 17. Current Mídete IA fit

The existing repository already contains most control-plane capabilities required by this model:

```text
Constitution              PRESENT
Manifest                  PRESENT
Artifact Registry         PRESENT
Prompt Registry           PRESENT
Skill Registry            PRESENT
Dependency Registry       PRESENT
Evidence Registry         PRESENT
Traceability Matrix       PRESENT
Gate Model                PRESENT
Architecture Governance   PRESENT
Experiment Model          PRESENT
Work Package Model        PRESENT
Role / Execution Matrix   PRESENT (ART-040 draft)

Root README dashboard      STALE
Experiment README          NOT PRESENT
Status roll-up rules       NOT FORMALIZED
Automated roll-up          NOT PRESENT
```

Therefore the recommended strategy is refinement, not replacement.

---

## 18. Relationship to current EXP-001

This information-architecture design does not change EXP-001 state.

At the time this artifact is drafted:

- EXP-001 remains the active experiment;
- WP-03 remains governed by existing canonical state;
- implementation/testing evidence must be reconciled separately;
- no WP-04 activation is authorized by this artifact.

The information model should be adopted only after current-state reconciliation avoids creating an additional stale status view.

---

## 19. Acceptance criteria

ART-041 is ready for approval review when:

- it preserves all current canonical IDs;
- it preserves existing approved paths by default;
- it distinguishes physical structure from logical hierarchy;
- it separates hierarchy, dependency and traceability relationships;
- it identifies canonical owner for each project-state category;
- it defines README as a derived human view;
- it defines an anti-drift strategy;
- it preserves current AGENTS bootstrap semantics;
- it does not change canonical work-item status;
- it does not introduce a new technology requirement;
- it provides a staged migration strategy;
- it identifies high-risk changes that require explicit change control.

---

## 20. Design conclusion

Mídete IA should evolve toward:

```text
EXISTING GOVERNANCE CONTROL PLANE
                +
LOGICAL PROJECT HIERARCHY
                +
DERIVED HUMAN-READABLE VIEWS
                +
EVIDENCE-DRIVEN STATUS ROLL-UP
                +
LLM CONTEXT ROUTING
```

without replacing the existing governance system.

The repository remains the operational memory of the project, while READMEs and future dashboards become navigational views over canonical structured state.
