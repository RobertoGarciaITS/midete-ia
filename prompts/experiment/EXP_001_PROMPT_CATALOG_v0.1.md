# MÍDETE IA
# EXP_001_PROMPT_CATALOG_v0.1
## Rolling-Wave Prompt Catalog

**Artifact ID:** `ART-037`  
**Version:** `v0.1`  
**Phase:** `P01`  
**Status:** `DRAFT`  
**Validation State:** `READY_FOR_REVIEW`  
**Owner / Role:** Product Management / Prompt Governance  
**Experiment:** `EXP-001`  
**Parent Plan:** `EXP_001_ROLLING_WAVE_EXECUTION_PLAN_v0.1.md`

## Usage rule

These prompts are planning templates. A prompt becomes executable only when its work package is the next enabled package and repository context confirms that all required dependencies, skills and contracts are available.

Do not treat this catalog as authority to bypass the Project Execution Manifest, Prompt Registry, Skill Registry, Traceability Matrix or explicit user approval requirements.

---

## WP-01 — Scoring Acceptance

**Planned Prompt ID:** `PRM-EXP001-WP01`

```text
Execute the formal acceptance review for EXP-001-03 — SCORING_MODEL_v0.1.yaml.

Read:
- MICRO_MVP_001_CONTRACT_v0.1.md
- ASSESSMENT_QUESTION_BANK_v0.1.yaml
- SCORING_MODEL_v0.1.yaml
- ARTIFACT_LIFECYCLE_CONTRACT_v0.1.md
- PRM-EXP001-003
- SK-BA

Validate:
1. exactly RDY-001..RDY-010 are scored;
2. Yes=1 / No=0;
3. five dimensions contain two approved questions each;
4. dimension range is 0..2;
5. total range is 0..10;
6. no weighting exists;
7. missing/invalid input behavior is deterministic;
8. tie behavior is deterministic;
9. test vectors are internally correct;
10. prohibited employment interpretations are preserved.

Do not modify files during review.

Return:
PASS / FAIL
findings
required corrections
acceptance evidence proposal
repository reconciliation proposal.

Do not mark EXP-001-03 COMPLETE without explicit authorization.
```

---

## WP-02 — Architecture Fit Check

**Planned Prompt ID:** `PRM-EXP001-WP02`

```text
Evaluate the minimum implementation architecture required to execute EXP-001.

Business requirement:
A user must complete the approved assessment and receive an immediate,
deterministic personalized snapshot based on SCORING_MODEL_v0.1.

Start from the approved Stage-0 architecture:
- static landing;
- form capture;
- tabular persistence;
- Google Forms or equivalent;
- Google Sheets or equivalent;
- optional Apps Script;
- payment link.

Evaluate:
A. Google Forms + Sheets only
B. Google Forms + Sheets + Apps Script
C. static HTML/CSS/JavaScript + lightweight persistence
D. any simpler equivalent if justified.

For each option assess:
- immediate scoring;
- five-dimension result;
- data capture;
- analytics;
- privacy;
- implementation complexity;
- recurring cost;
- deployment burden;
- changeability;
- compatibility with EXP-001.

Apply TECHNOLOGY_ADOPTION_DECISION_MATRIX_v0.1.

Select the simplest architecture that satisfies the current experiment.
Do not introduce React, FastAPI, PostgreSQL, cloud backend or authentication
unless an explicit requirement proves the simpler architecture insufficient.

Return an architecture-fit review.
Only propose an ADR if a material architecture change is required.
```

---

## WP-03 — Scoring Engine Implementation

**Planned Prompt ID:** `PRM-EXP001-WP03`

```text
Implement the deterministic EXP-001 scoring engine.

Canonical specification:
SCORING_MODEL_v0.1.yaml

Do not modify the scoring specification.

Implement:
- canonical input validation;
- Yes/No point mapping;
- five dimension calculations;
- total 0..10;
- strength candidates;
- priority candidates;
- deterministic tie behavior;
- missing-input errors;
- invalid-value errors;
- structured scoring output.

Implement all test vectors defined in SCORING_MODEL_v0.1.yaml.

Constraints:
- no LLM;
- no external API;
- no database dependency unless WP-02 explicitly authorizes one;
- no scoring weights;
- no employability calculations;
- no business-rule invention.

Return:
- implementation files;
- automated tests where supported;
- test results;
- changed file list;
- evidence.

Do not modify governance or product specifications.
```

---

## WP-04 — Assessment Capture

**Planned Prompt ID:** `PRM-EXP001-WP04`

```text
Create the minimum assessment capture implementation using
ASSESSMENT_QUESTION_BANK_v0.1.yaml.

Preserve exactly:
1 intent question
3 professional-context questions
10 readiness questions
1 optional VOC question

Do not alter question wording, IDs or allowed responses.

Integrate the approved scoring engine.

Requirements:
- required-question validation;
- privacy notice on open text;
- canonical response mapping;
- mobile-usable flow;
- assessment_start hook;
- assessment_complete hook placeholder.

Return:
working assessment capture
field mapping
integration tests
evidence.

Do not implement features outside EXP-001.
```

---

## WP-05 — Response Storage

**Planned Prompt ID:** `PRM-EXP001-WP05`

```text
Define and implement the minimum EXP-001 response-storage mapping.

Use the architecture approved by WP-02.

Store only data required for:
- experiment analysis;
- scoring reproducibility;
- funnel measurement;
- segmentation.

Preserve question IDs as canonical identifiers.

Do not collect:
- employer name;
- salary;
- passwords;
- corporate confidential information;
- unnecessary personal information.

Define:
response_id
timestamp
intent
profession
industry_function
experience_band
RDY-001..RDY-010
VOC-001
score total
five dimension scores
priority candidates
primary priority

Return:
storage schema
implementation
write/read smoke test
evidence.
```

---

## WP-06 — Result Snapshot

**Planned Prompt ID:** `PRM-EXP001-WP06`

```text
Define and implement the free AI Career Transformation Snapshot result.

Inputs:
- SCORING_MODEL_v0.1
- scoring-engine structured output
- approved result boundaries

Render:
total indicators present
five dimension scores
LO QUE YA TIENES
LO QUE ESTÁ CAMBIANDO placeholder/interface
SIGUIENTE PRIORIDAD
paid CTA placeholder

Do not display:
percent employability
job-loss risk
hiring probability
salary prediction
career-success probability.

Test at minimum:
all yes
all no
7/10 baseline
unique priority
tied priority.

Return:
result specification
result implementation
tests
evidence.
```

---

## WP-07 — Profession Transformation Cards

**Planned Prompt ID:** `PRM-EXP001-WP07`

```text
Create the minimum predefined profession-transformation card set needed
for EXP-001.

Use only the initial professional domains required for the beta.

Each card must define:
profession/domain
major transformation themes
technologies/process changes
skills worth exploring
source/evidence status
content limitations

Do not predict profession disappearance.
Do not use live labor-market APIs.
Do not use LLM-generated runtime content.

Return:
PROFESSION_TRANSFORMATION_CARDS_v0.1.yaml

After acceptance, integrate cards into the existing result interface
without changing the scoring engine.
```

---

## WP-08 — Landing Slice

**Planned Prompt ID:** `PRM-EXP001-WP08`

```text
Define the minimum landing copy required to test EXP-001 demand.

Preserve:
"Tu experiencia sigue teniendo valor."
"¿Tu carrera está evolucionando al mismo ritmo que tu industria?"
"MIDE MI PREPARACIÓN"

The landing must answer:
what this is
why it matters
how long it takes
what the user receives
what it does not predict
what action to take

Return:
LANDING_COPY_v0.1.md

After acceptance, implement only the approved copy in the Stage-0 landing.

Test:
mobile
desktop
primary CTA
assessment routing.
```

---

## WP-09 — Privacy Slice

**Planned Prompt ID:** `PRM-EXP001-WP09`

```text
Define the minimum privacy and responsible-use notice required before
EXP-001 can be exposed to real users.

Cover:
beta status
data minimization
open-text caution
prohibited confidential information
orientation-only result
no hiring prediction
no layoff prediction
no professional guarantee

Return:
PRIVACY_DISCLAIMER_v0.1.md

After acceptance, integrate the notice at the appropriate landing,
assessment and result points.

Do not introduce account/privacy infrastructure not required by EXP-001.
```

---

## WP-10 — Commercial Offer

**Planned Prompt ID:** `PRM-EXP001-WP10`

```text
Finalize the EXP-001 paid-offer specification.

Baseline:
Career Transformation Radar — Founding Beta
Experimental price: MXN $99

Define exactly:
what the buyer receives
delivery mechanism
delivery expectation
what is not included
CTA copy
payment-success handling
payment-cancel handling

Return:
COMMERCIAL_OFFER_v0.1.md

After acceptance, integrate only:
paid CTA
approved external payment link
success/cancel routing.

Do not implement payment APIs, subscriptions, wallet or billing database.
```

---

## WP-11 — Analytics Slice

**Planned Prompt ID:** `PRM-EXP001-WP11`

```text
Define and implement the minimum EXP-001 funnel instrumentation.

Required events:
landing_view
assessment_start
assessment_complete
result_view
paid_cta_click
payment_link_open
payment_complete

For each event define:
event_id
trigger
required properties
optional properties
privacy limitations
storage destination
validation method.

Return:
ANALYTICS_EVENT_CATALOG_v0.1.yaml

After acceptance, instrument only the approved events.

Verify every event can be observed before launch.
```

---

## WP-12 — End-to-End QA

**Planned Prompt ID:** `PRM-EXP001-WP12`

```text
Create and execute the EXP-001 QA plan against the integrated Micro-MVP.

Minimum tests:
QA-001 complete form
QA-002 all Yes
QA-003 all No
QA-004 mixed responses
QA-005 mobile
QA-006 desktop
QA-007 scoring
QA-008 CTA / redirect
QA-009 payment link
QA-010 response storage

Also validate:
privacy notice
analytics events
error handling
result boundaries.

Return:
QA_TEST_PLAN_v0.1.md
test evidence
PASS / FAIL
blocking defects.

Do not authorize launch if critical tests fail.
```

---

## WP-13 — Launch Readiness

**Planned Prompt ID:** `PRM-EXP001-WP13`

```text
Perform EXP-001 launch-readiness review.

Verify:
landing reachable
assessment reachable
scoring passing
result visible
storage working
privacy present
paid CTA visible
payment link working
analytics observable
critical QA passed

Return:
READY_FOR_LAUNCH or BLOCKED
blocking issues
evidence references.

Do not alter product scope during this review.
```

---

## WP-14 — Experiment Measurement

**Planned Prompt ID:** `PRM-EXP001-WP14`

```text
Analyze live EXP-001 evidence.

Measure:
landing -> start
start -> complete
complete -> result
result -> paid CTA
paid CTA -> payment attempt
completed assessment -> payment

Segment where evidence permits by:
intent
profession
industry/function
experience range
traffic source.

Target:
50 completed assessments
>= 1 credible real payment

Separate:
observed facts
derived metrics
qualitative signals
assumptions
limitations.

Return:
EXPERIMENT_RESULTS_v0.1.csv
and analysis summary.

Do not change the experiment hypothesis retrospectively.
```

---

## WP-15 — GATE-EXP-001

**Planned Prompt ID:** `PRM-EXP001-WP15`

```text
Execute GATE-EXP-001 using the approved experiment hypothesis,
commercial targets and collected evidence.

Evaluate:
problem recognition
assessment start
completion
result engagement
paid CTA behavior
payment attempts
real payments
VOC themes
segment differences
experiment limitations

Return exactly one evidence-based disposition proposal:
GO
ITERATE
PIVOT
STOP

Document why.

If GO or ITERATE:
identify the smallest new requirement created by the evidence.

Then trigger:
architecture review
technology decision
next rolling-wave work package.

Do not authorize advanced architecture merely because it appears in
the long-term Mídete IA vision.
```

---

## Activation sequence

```text
WP-01
 ↓
WP-02
 ↓
WP-03  ← first code
 ↓
WP-04
 ↓
WP-05
 ↓
WP-06
 ↓
WP-07 / WP-08 / WP-09 / WP-10 / WP-11
 ↓
WP-12
 ↓
WP-13
 ↓
WP-14
 ↓
WP-15
```

The exact order of WP-07 through WP-11 may be refined when upstream evidence shows that a different ordering reduces risk or time-to-market, provided dependencies and governance remain satisfied.
