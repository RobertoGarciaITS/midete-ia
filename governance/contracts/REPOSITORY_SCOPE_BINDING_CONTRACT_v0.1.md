# MÍDETE IA
# REPOSITORY_SCOPE_BINDING_CONTRACT_v0.1

**Artifact ID:** `ART-047`  
**Version:** `v0.1`  
**Phase:** `GLOBAL`  
**Status:** `APPROVED`  
**Validation State:** `ACCEPTED`  
**Owner / Role:** Project Governance  
**Canonical Repository:** `RobertoGarciaITS/midete-ia`  
**Default Branch:** `main`  
**Scope:** Repository identity, project-context isolation, cross-repository boundaries and execution targeting  
**Upstream Dependencies:** `ART-003 — AGENTS.md`, `ART-009 — CONTEXT_ACQUISITION_CONTRACT_v0.1.md`, `ART-010 — REPOSITORY_STRUCTURE_CONTRACT_v0.1.md`, `ART-046 — AI_EXECUTION_ORCHESTRATION_CONTRACT_v0.1.md`  
**Authority Boundary:** This contract restricts repository targeting. It does not authorize phase progression, code implementation, deployment, merge, release or cross-repository mutation.

---

## 1. Purpose

Prevent project-context drift by binding Mídete IA execution to one canonical repository.

The canonical repository for this project is:

```text
RobertoGarciaITS/midete-ia
```

Repository identity is part of context acquisition and must be resolved before any repository operation.

---

## 2. Mandatory repository binding

For Mídete IA project work, all repository-native operations MUST target exactly:

```text
RobertoGarciaITS/midete-ia
```

This includes, when applicable:

- repository reads;
- file reads;
- branches;
- commits;
- diffs;
- pull requests;
- issues;
- GitHub Actions;
- releases;
- repository evidence;
- repository-scoped searches;
- persistent mutations.

No other repository may be silently substituted because it contains similar concepts, agents, contracts, code, prompts or prior work.

---

## 3. Preflight identity rule

Before a repository operation, the actor must verify:

```text
EXPECTED_REPOSITORY = RobertoGarciaITS/midete-ia
ACTUAL_REPOSITORY   = RobertoGarciaITS/midete-ia
```

If the repository is unknown or does not match exactly:

```text
STOP
↓
BLOCKED_REPOSITORY_SCOPE_MISMATCH
```

The actor must not retry against a guessed, remembered, similarly named or previously used repository.

---

## 4. No fallback repository

There is no fallback execution repository for Mídete IA.

Explicitly prohibited:

- using `Full-Stack-AI-Developer` as a substitute;
- using another Mídete-related repository as a substitute;
- continuing work in a repository selected from memory;
- copying status from another project and presenting it as Mídete IA state;
- treating another repository's README, AGENTS, contracts, skills, branches or tests as canonical project truth.

---

## 5. Memory and prior-conversation boundary

Conversation memory, summaries, prior chats and previous project work are supporting context only.

They MUST NOT override live canonical repository state.

When remembered context conflicts with:

- `README.md`;
- `AGENTS.md`;
- Project Constitution;
- Project Execution Manifest;
- registries;
- traceability;
- approved contracts;
- gates;
- live repository files;

the live canonical Mídete IA repository governs.

---

## 6. Cross-repository research

Another repository may be inspected only when the User explicitly authorizes cross-repository research or comparison.

Default conditions:

- read-only;
- noncanonical;
- provenance must be identified;
- findings must be treated as external/reference material;
- no mutation is permitted outside `RobertoGarciaITS/midete-ia`;
- no external artifact becomes Mídete IA truth without explicit import, review and applicable change control.

A request to research another repository does not change the canonical Mídete IA repository.

---

## 7. Mutation boundary

Under this project context, persistent repository mutations are permitted only inside:

```text
RobertoGarciaITS/midete-ia
```

and still require all existing Mídete IA authorization, prompt, skill, contract, evidence and gate rules.

A valid repository identity does not itself authorize a mutation.

---

## 8. Tool targeting rule

When a tool accepts an explicit repository selector, the actor must pass:

```text
repository_full_name = RobertoGarciaITS/midete-ia
```

or the exact equivalent owner/repository fields.

Do not omit the selector when omission could cause ambiguous repository resolution.

---

## 9. Canonical repository change

Changing the canonical project repository is a governed project-level decision.

It requires:

1. explicit User instruction;
2. impact analysis;
3. update of this contract;
4. update of `AGENTS.md`;
5. registry and traceability reconciliation;
6. evidence of the approved transition.

A repository change must never be inferred from a chat topic, remembered prior project, linked URL, or tool availability.

---

## 10. Stop conditions

STOP and mark the work blocked when:

- repository identity is unresolved;
- actual repository differs from the canonical repository;
- a requested mutation targets another repository;
- required project truth exists only in another repository and has not been governed into Mídete IA;
- an actor attempts to use another repository as fallback;
- repository evidence cannot be tied to the canonical Mídete IA repository.

---

## 11. Acceptance criteria

This contract is satisfied when:

- `AGENTS.md` declares the exact canonical repository;
- repository mismatch produces a stop/block rule;
- no fallback repository is allowed;
- prior-project memory is explicitly noncanonical;
- cross-repository work requires explicit User authorization and is read-only by default;
- persistent mutations are restricted to Mídete IA;
- the contract is registered and traceable.

---

## 12. Final rule

```text
MÍDETE IA PROJECT WORK
        ↓
VERIFY REPOSITORY IDENTITY
        ↓
RobertoGarciaITS/midete-ia ?
     ├── YES → continue normal governance
     └── NO  → STOP / BLOCK
```

**Repository identity is a mandatory project precondition, not a convenience.**
