---
artifact_id: ART-033
title: MIDETE IA Problem Statement — Workforce Capability Gap
version: v0.1
phase: P01
work_item: P01-01
status: REVIEW
validation_state: READY_FOR_USER_APPROVAL
owner: product-management
execution_model: CHATGPT
upstream_dependencies:
  - CONST-001
  - GATE-P00
  - ART-030
  - ART-031
  - ART-032
  - ART-034
downstream_consumers:
  - P01-02
evidence_id_reserved: EVID-P01-001
---

# MÍDETE IA — Problem Statement v0.1

## 0. Document control

This artifact executes **P01-01 — Problem Statement** under:

- `P01_PRODUCT_DEFINITION_PROMPT_v0.1.md`;
- `PRODUCT_DEFINITION_CONTRACT_v0.1.md`;
- `skills/product-management/SKILL.md`;
- the frozen Mídete IA Project Constitution v0.1.

This document is a **problem-definition baseline**, not a validated market conclusion, final scientific model, approved business model, or authorization to enter later P01 work items.

The purpose is to establish:

1. the documented customer problem;
2. the external evidence that makes the problem worth investigating;
3. the analytical thesis to test;
4. explicit assumptions and unknowns;
5. falsification criteria;
6. customer-validation questions;
7. product-scope boundaries.

---

## 1. Customer and professional context

### 1.1 Constitution baseline

The frozen Constitution defines the initial market as:

> Professionals in Mexico, initially with approximately 3–15 years of work experience, especially in engineering, manufacturing, quality, safety, supply chain, operations, project management, data, business intelligence and administration.

The Constitution defines the central user problem as:

> “No sé qué tan competitivo soy actualmente en el mercado laboral, qué habilidades me faltan, qué tan transferible es mi experiencia y dónde debería invertir mi tiempo y dinero para mantener o aumentar mi empleabilidad.”

This statement remains the canonical starting problem.

### 1.2 New market-side hypothesis introduced for exploration

This P01 analysis adds a related but **not yet validated** market-side hypothesis:

> The labour market may contain simultaneous friction on both sides: employers report difficulty finding required talent while experienced professionals may possess relevant, adjacent or transferable capabilities that are not clearly identified, current, evidenced, or matched to role demand.

This employer-side extension is an **exploration hypothesis**. It does not modify the Constitution, does not change the current initial customer, and does not authorize a B2B product.

---

## 2. External factual baseline

The following sources establish that skills change, skills gaps and lifelong learning are material workforce issues. They do **not** prove the specific Mídete IA causal thesis.

### 2.1 World Economic Forum — Future of Jobs Report 2025

The World Economic Forum reports, based on survey data from more than 1,000 companies across industries and economies, that:

- skill gaps are cited by 63% of surveyed employers as a main barrier to business transformation;
- nearly 40% of skills required on the job are expected to change by 2030;
- 59 of every 100 workers are projected to need reskilling or upskilling by 2030;
- employers expect both technology skills and human skills to remain important.

Source:
https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/

Interpretation boundary:

These findings establish a broad global skills-transition problem. They do not establish that Mídete IA's proposed capability/evidence model is the correct solution.

### 2.2 OECD — Skills Outlook 2025

The OECD emphasizes:

- the need for lifelong learning as skills demand evolves;
- the importance of aligning skills with productive and rewarding jobs;
- stronger labour-market intelligence;
- skills-first approaches;
- transparent skills assessment, recognition and credential portability;
- recognition of prior learning and flexible pathways that support mobility.

Source:
https://www.oecd.org/en/publications/oecd-skills-outlook-2025_26163cd3-en.html

Interpretation boundary:

The OECD supports the importance of skills recognition, relevant adult learning and labour-market matching. It does not validate Mídete IA's specific taxonomy, scoring, graph model or business model.

### 2.3 LinkedIn — Work Change Report 2025

LinkedIn states that it expects approximately 70% of the skills used in most jobs to change by 2030, with AI acting as a major catalyst.

Source:
https://news.linkedin.com/2025/work-change-report-2025

Interpretation boundary:

This is a platform-derived forecast and should not be treated as interchangeable with WEF estimates because methodologies, populations and definitions differ.

### 2.4 ManpowerGroup México — Escasez de Talento 2026

ManpowerGroup reports that 67% of more than 1,000 surveyed employers in Mexico say they have difficulty filling vacancies in 2026.

Source:
https://blog.manpowergroup.com.mx/manpowergroup/escasez-de-talento-2026-mx

Interpretation boundary:

Difficulty filling vacancies does not by itself prove a skills shortage. The observed difficulty may include compensation, location, work conditions, experience requirements, labour-market matching, credential requirements, availability, employer process design or other factors.

---

## 3. Core problem statement

### 3.1 Individual-side problem

Experienced professionals can have difficulty answering, with evidence:

- Which of my current capabilities remain relevant?
- Which capabilities are transferable to another role?
- Which capabilities are outdated, partial or missing?
- Which gaps materially prevent role readiness?
- Which skills should I validate instead of relearn?
- Which learning investment should I prioritize?
- What evidence demonstrates that I can perform the work?

As a result, people may invest time and money in education, certifications or job applications without a clear capability-to-role rationale.

### 3.2 Market-matching problem — hypothesis

Employers and training systems may also face difficulty distinguishing among:

- a true absence of required capability;
- a capability that exists but is not visible;
- an adjacent or transferable capability;
- outdated capability;
- tool familiarity without applied task competence;
- capability without evidence;
- role fit blocked by non-skill conditions such as location, schedule or compensation.

If these cases are treated as one generic “talent shortage” or “skills gap,” interventions may be poorly targeted.

### 3.3 Working formulation

> **Mídete IA is exploring whether part of the apparent talent-demand / talent-supply mismatch can be better explained and reduced by decomposing roles and people into observable capabilities, transferable capabilities, current gaps and verifiable evidence.**

This is the central P01 exploration thesis.

It is **not yet validated**.

---

## 4. Terminology

### 4.1 Skill

A discrete learned ability or knowledge component.

Examples:

- Power Query;
- SQL joins;
- financial forecasting;
- presenting findings.

### 4.2 Capability

For this project, a capability is broader than a named skill.

Working model:

```text
CAPABILITY
=
knowledge
+
tool / method
+
task
+
context
+
expected outcome
+
evidence
+
validation
```

Example:

```text
Capability:
Analyze commercial performance

Knowledge:
Commercial KPIs

Tools:
Excel / Power Query / Power BI

Task:
Integrate sales, customers, routes and targets

Context:
Commercial operations

Expected outcome:
Identify deviations and improvement opportunities

Evidence:
Data model + dashboard + written analysis

Validation:
Reconciled KPI calculations + task review
```

This definition is a project working construct and requires later validation.

### 4.3 Workforce Capability Gap

Working definition:

> The difference between the capabilities required to perform a target role or work outcome and the capabilities a person or workforce currently possesses, can transfer, keeps current and can demonstrate with sufficient evidence.

### 4.4 Digital literacy vs digital work capability

“Digital literacy” alone is too narrow to represent the full problem.

A person may know how to use a digital tool but still be unable to integrate it into a complete work process.

Working distinction:

```text
Tool familiarity
      ↓
Digital task competence
      ↓
Workflow integration
      ↓
Data / AI fluency
      ↓
Applied business outcome
      ↓
Evidence
```

The phrase **“analfabetismo digital laboral”** may be useful in public discussion, but Mídete IA should not use it as the canonical umbrella term at this stage because:

- it may imply a binary deficit;
- it may stigmatize experienced workers;
- it does not distinguish tool use from workflow integration;
- it does not explain transferable skills or evidence gaps;
- it is not yet an operationally validated construct in this project.

The preferred working term is:

> **Workforce Digital Capability Gap** for the digital subset of the broader **Workforce Capability Gap**.

---

## 5. Working gap taxonomy

The following taxonomy is an **analytical hypothesis**, not an established external standard.

| ID | Gap | Working question |
|---|---|---|
| GAP-01 | Digital Literacy Gap | Can the person use required basic digital tools? |
| GAP-02 | Digital Work Gap | Can the person operate effectively inside digital workflows? |
| GAP-03 | Data Literacy Gap | Can the person interpret, validate and use data? |
| GAP-04 | AI Literacy Gap | Can the person use AI appropriately and verify outputs? |
| GAP-05 | Tool Proficiency Gap | Does the person have the depth required in a specific tool? |
| GAP-06 | Workflow Integration Gap | Can tools, data and steps be combined into an end-to-end process? |
| GAP-07 | Automation Gap | Can repetitive analytical or operational work be reduced safely? |
| GAP-08 | Domain Context Gap | Does the person understand the business/process context? |
| GAP-09 | Transferability Gap | Can prior capability be translated into the target role? |
| GAP-10 | Currency Gap | Is the capability current enough for present work? |
| GAP-11 | Evidence Gap | Can the capability be demonstrated credibly? |
| GAP-12 | Availability Gap | Are non-skill work conditions compatible with the opportunity? |

Important:

`GAP-12` is deliberately separated from skill/capability because location, schedule, compensation or work modality can create hiring friction even when the capability exists.

---

## 6. Consequences to investigate

### 6.1 Individual-side consequences

Potential consequences include:

- unnecessary relearning of already-proven capability;
- investment in courses or certifications not linked to a material role gap;
- failure to recognize transferable experience;
- weak signalling of applied capability;
- poor prioritization of learning time and budget;
- low confidence in career-transition decisions;
- applying to roles without understanding the actual readiness gap.

These are hypotheses until validated with user research.

### 6.2 Employer-side consequences

Potential employer consequences include:

- difficulty distinguishing “missing skill” from “poor evidence”;
- overlooking adjacent internal or external talent;
- generic upskilling applied to heterogeneous populations;
- slower internal mobility;
- role definitions that overuse titles, years of experience or tool keywords as proxies for work capability.

These consequences require separate B2B validation and are not yet accepted as product facts.

---

## 7. Current alternatives — research baseline

The user may currently combine several alternatives:

- CV and LinkedIn profile;
- job descriptions;
- self-assessment;
- career coaching;
- certifications and course providers;
- generic learning platforms;
- portfolio projects;
- employer interviews and technical tests;
- ATS/recruiting systems;
- corporate LMS and internal learning programs;
- internal talent marketplaces or skills inventories.

At P01-01 these are **alternative categories**, not competitor findings.

Open research questions:

- Which alternatives are used most frequently by the target customer?
- Which are trusted?
- Which are paid for?
- Which create actionable learning decisions?
- Which validate skills versus merely listing them?
- Which identify transferable capability?
- Which are used by Mexican employers?
- Where does Mídete IA create incremental value rather than duplicating existing functionality?

Competitor and substitute research belongs to later authorized work, not this artifact.

---

## 8. Causal thesis to test

### 8.1 Proposed causal model

```text
FASTER CHANGE IN JOBS / TOOLS / AI
               +
OPAQUE ROLE REQUIREMENTS
               +
SELF-DECLARED OR WEAKLY EVIDENCED SKILLS
               +
LIMITED RECOGNITION OF TRANSFERABLE EXPERIENCE
               +
GENERIC / POORLY TARGETED LEARNING
               ↓
UNCERTAINTY ABOUT ACTUAL CAPABILITY
               ↓
TALENT SUPPLY ↔ TALENT DEMAND MATCHING FRICTION
               ↓
POORER CAREER / TRAINING / MOBILITY DECISIONS
```

### 8.2 Candidate product logic

If the causal thesis is supported, Mídete IA may be able to create value through:

```text
ROLE
  ↓
Required Capability Graph
  ↓
                GAP ANALYSIS
  ↑
Actual Capability Graph
  ↑
PERSON + EVIDENCE
  ↓
VALIDATE / UPSKILL / RESKILL
  ↓
PRACTICE
  ↓
NEW EVIDENCE
  ↓
ROLE READINESS
```

This is a **candidate analytical model only**.

Graph architecture, scoring, product scope, pricing and B2B commercialization remain subject to later work items and approvals.

---

## 9. Hypotheses

### H-P01-001 — Role decomposition

A job title and conventional job description are incomplete proxies for the capabilities actually required to perform a role.

### H-P01-002 — Transferable capability

Experienced professionals possess capabilities that can transfer to adjacent roles but are not consistently recognized by title/keyword-based representations.

### H-P01-003 — Gap compression

For some career transitions, the real readiness gap is smaller than “learn the whole new profession from zero.”

### H-P01-004 — Learning inefficiency

Without capability-level diagnosis, users may spend time or money learning content they already know or that does not materially improve role readiness.

### H-P01-005 — Evidence value

Task-based evidence can provide more actionable information than self-declared skill labels alone.

### H-P01-006 — Digital work distinction

Knowing how to use an individual tool is different from being able to integrate digital tools, data and reasoning into an end-to-end work outcome.

### H-P01-007 — Employer-side value

Employers may obtain value from identifying internal transferable capabilities and targeted upskilling needs before buying or assigning generic training.

### H-P01-008 — Willingness to act/pay

At least one customer segment may be willing to act on, and potentially pay for, a capability-gap/readiness assessment that produces sufficiently credible and actionable evidence.

No hypothesis is considered validated by this document.

---

## 10. Falsification criteria

The thesis should be weakened, rejected or materially revised if evidence shows one or more of the following:

1. Capability decomposition does not produce more useful decisions than conventional role/CV analysis.
2. Different reviewers cannot reach sufficiently consistent capability classifications from the same evidence.
3. Transferable-capability identification produces excessive false positives or cannot be operationalized.
4. Users do not change learning, application or career decisions after receiving a capability-gap assessment.
5. The identified gaps do not correspond to observable task-performance differences.
6. Evidence-based validation adds too much cost or friction relative to its decision value.
7. Existing tools already solve the same problem sufficiently for the target segment at acceptable cost.
8. Target users do not trust or value the output.
9. Employer-side users do not see measurable value in capability-level workforce mapping.
10. The problem is primarily explained by compensation, work conditions, geography, hiring-process design or other non-capability factors rather than capability mismatch.

A finding that contradicts the thesis is valid project evidence and should not be suppressed.

---

## 11. Validation questions

### 11.1 Individual / B2C

1. How do experienced professionals currently determine whether they are ready for a target role?
2. What information do they trust?
3. How often do they take courses without knowing whether the course closes a specific gap?
4. Can they distinguish skills they know from skills they can prove?
5. Can they identify transferable capability without external help?
6. What career decisions create the greatest uncertainty?
7. What outcome would make an assessment worth paying for?
8. What evidence would make recommendations credible?
9. Which parts of the assessment feel invasive, subjective or untrustworthy?
10. Does the output change what they do next?

### 11.2 Corporate / B2B — future validation only

1. How are role capabilities currently defined?
2. How are internal skill inventories maintained?
3. How are employees selected for upskilling or internal mobility?
4. How does the company distinguish training need from evidence need?
5. What data exists to validate task capability?
6. How much learning is generic versus gap-specific?
7. What is the cost of mis-targeted training?
8. Which talent-shortage problems are actually skill problems versus conditions/availability problems?
9. Would capability-level mapping improve internal mobility or workforce planning?
10. What procurement, privacy and employment-law constraints would apply?

These questions do not authorize B2B product development.

---

## 12. Validation evidence plan

Future authorized work should progressively collect:

### V1 — Secondary evidence

- labour-market reports;
- academic literature;
- workforce-development literature;
- skills taxonomies;
- skills-first hiring frameworks;
- adult-learning evidence;
- digital/AI literacy models.

### V2 — Role decomposition dataset

Sample multiple real job descriptions across initial target domains.

Test whether role requirements can be decomposed into:

```text
responsibility
→ task
→ capability
→ proficiency
→ evidence
```

### V3 — Professional profile cases

Use consented profiles to compare:

```text
self-declared skills
vs
documented experience
vs
task evidence
vs
target-role capability requirements
```

### V4 — Inter-rater consistency

Have multiple evaluators independently classify the same role/profile evidence.

Measure disagreement.

### V5 — User decision test

Determine whether the assessment changes a real next action:

- apply;
- do not apply;
- learn;
- validate;
- build evidence;
- pursue adjacent role;
- defer transition.

### V6 — Commercial test

Only after product semantics are sufficiently stable, test willingness to pay or organizational willingness to adopt.

---

## 13. Relationship to EXP-001

`EXP-001 — AI Career Transformation Snapshot` is compatible with this problem space but must remain separately governed.

EXP-001 can generate early evidence about whether users understand and value a transformation-readiness snapshot.

It does **not** by itself validate:

- the complete Workforce Capability Gap thesis;
- the 12-gap taxonomy;
- employer demand;
- capability graphs;
- evidence graphs;
- role matching;
- willingness to pay;
- B2B workforce intelligence.

No EXP-001 completion state is changed by this document.

---

## 14. Scope boundaries

Mídete IA remains:

> **decision-support + career intelligence + professional assessment**

This problem definition does not authorize the platform to:

- guarantee employment;
- predict whether an individual will be hired;
- automatically accept/reject candidates for an employer;
- make automated employment decisions;
- diagnose psychological or medical conditions;
- claim scientific validity before validation;
- label a worker as “digitally illiterate” from a simplistic score;
- infer capability without evidence;
- present an unvalidated readiness score as objective truth;
- treat employer-reported talent scarcity as proof of worker deficiency;
- assume all hiring friction is caused by skills.

The Constitution remains unchanged.

---

## 15. Unknowns

The following remain unresolved:

- Which gap categories are actually distinct in practice?
- Which categories predict useful action?
- What evidence is sufficient for each capability?
- How should proficiency be measured?
- Which capabilities are reliably transferable?
- How quickly does capability currency decay?
- How role-specific must assessment be?
- How much assessment friction will users tolerate?
- Which customer segment has the strongest pain?
- Which customer segment pays?
- Whether B2B has greater value than B2C.
- Whether capability graphs materially outperform simpler structured matrices.
- Whether the term Workforce Capability Gap is sufficiently understandable for users.
- Whether digital-work capability requires a separate index.
- Which parts can be automated safely with AI and which require human review.

---

## 16. Downstream implications — not authorization

If P01-01 is accepted, later governed work may explore:

```text
P01-02 Target Customer / Personas
        ↓
P01-03 Jobs To Be Done
        ↓
P01-04 Value Proposition
        ↓
P01-05 Product Scope
        ↓
P01-06 MVP / Out of Scope
        ↓
P01-07 Revenue Hypotheses
        ↓
P01-08 Commercial Experiments
```

The methodology proposed in the project conversation — capability model, role-readiness method, business-model hypotheses and validation backlog — should be decomposed across those work items instead of being prematurely frozen as one large document.

---

## 17. P01-01 acceptance checklist

| Acceptance requirement | Draft result |
|---|---|
| Customer and professional context explicit | PASS |
| Central problem explicit | PASS |
| Consequences explicit and separated from facts | PASS |
| Existing alternatives identified as categories/hypotheses | PASS |
| Assumptions explicit | PASS |
| Unknowns explicit | PASS |
| Validation questions explicit | PASS |
| Scope exclusions explicit | PASS |
| Advisory-only employment boundary preserved | PASS |
| Source links included | PASS |
| Unsupported quantitative employment claims avoided | PASS |
| Constitution modified | NO |
| Later P01 work silently advanced | NO |

This checklist was independently reviewed against the P01 prompt, Product Definition Contract and SK-PROD instructions.

Formal review result: **PASS**.

Review limitation: PASS confirms document completeness and traceability; it does not validate the market hypotheses or approve the material product direction.

`EVID-P01-001` records this review result.

---

## 18. Formal review

- Review actor: ChatGPT
- Review type: P01-01 acceptance review
- Result: PASS
- Evidence: `EVID-P01-001`
- Approval authority: User
- Approval state: PENDING
- Gate impact: NONE

The artifact remains in `REVIEW` until explicit User approval.

---

## 19. Current disposition

```text
ART-033
STATUS: REVIEW
VALIDATION_STATE: READY_FOR_USER_APPROVAL

P01-01
STATUS: NOT YET COMPLETE

EVID-P01-001
STATUS: REVIEW PASS / RECORDED

GATE-P01
STATUS: UNCHANGED
```
