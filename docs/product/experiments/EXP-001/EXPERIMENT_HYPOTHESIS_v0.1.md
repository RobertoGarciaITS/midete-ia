# MÍDETE IA
# EXPERIMENT_HYPOTHESIS_v0.1
## EXP-001 — AI Career Transformation Snapshot

**Artifact ID:** `ART-028`  
**Experiment ID:** `EXP-001`  
**Work Item:** `EXP-001-01`  
**Version:** `v0.1`  
**Status:** `APPROVED`  
**Validation State:** `BASELINE_ACCEPTED`  
**Parent Contract:** `MICRO_MVP_001_CONTRACT_v0.1.md`  
**Scope:** Commercial Validation / Product Discovery  
**Target Market:** Profesionales de México  
**Decision Gate:** `GATE-EXP-001`

---

# 1. PURPOSE

This artifact defines the hypotheses that EXP-001 must test before Mídete IA invests in a larger technical implementation.

The experiment is designed to validate demand, relevance and willingness to pay for a short professional-transformation assessment.

The primary deliverable is evidence.

It is not software.

---

# 2. PRIMARY BUSINESS HYPOTHESIS

## HYP-EXP001-001 — Professional Transformation Uncertainty

> Professionals experience enough uncertainty about how AI and new technologies are transforming their profession, skills and future readiness that they will voluntarily spend approximately five minutes completing a short assessment to understand where they stand.

This is the primary hypothesis of EXP-001.

If this hypothesis is not supported, deeper product automation is not justified without iteration or pivot.

---

# 3. VALUE HYPOTHESIS

## HYP-EXP001-002 — Snapshot Relevance

> After completing the assessment, users will consider a structured snapshot of professional readiness sufficiently relevant to continue exploring their result instead of treating the experience as a generic survey.

Evidence signals may include:

- assessment completion;
- result view;
- time spent on result when available;
- click on the deeper-analysis CTA;
- qualitative feedback;
- voluntary sharing or referral.

---

# 4. PAIN / INTENT HYPOTHESIS

## HYP-EXP001-003 — Detectable Career Concern

> Users will be able to identify at least one clear reason for wanting to measure their professional readiness.

The five initial intents are:

```text
Transformation
Upskilling
Employability
Mobility
Resilience
```

The distribution of these intents will be treated as market evidence.

The experiment must not assume in advance which one is dominant.

---

# 5. COMPLETION HYPOTHESIS

## HYP-EXP001-004 — Five-Minute Assessment Is Acceptable

> A short assessment consisting of one intent question, three professional-context questions, ten binary indicators and one optional open response is sufficiently lightweight for users to complete without excessive friction.

The experiment must observe:

```text
assessment_start
        ↓
assessment_complete
```

Completion behavior will be used to evaluate whether the assessment length and structure are acceptable.

---

# 6. COMMERCIAL HYPOTHESIS

## HYP-EXP001-005 — Desire for Deeper Analysis

> A meaningful subset of users who complete the free snapshot will want a deeper personalized analysis of how their profession is changing, what skills they already possess, what gaps may exist and what to prioritize next.

Primary observable behavior:

```text
result_view
     ↓
paid_cta_click
```

This behavior is stronger evidence than stated interest alone.

---

# 7. WILLINGNESS-TO-PAY HYPOTHESIS

## HYP-EXP001-006 — Founding Beta Payment

> At least one user from the initial validation cohort will be willing to make a real payment for the Career Transformation Radar — Founding Beta at the experimental price of MXN $99.

Target experimental evidence:

```text
50 completed assessments
        +
>= 1 real payment
```

A payment from a user who is not purchasing solely because of a personal relationship with the founder is considered particularly meaningful evidence.

---

# 8. TRUST HYPOTHESIS

## HYP-EXP001-007 — Positive Framing Supports Engagement

> Framing professional transformation as an opportunity to preserve and extend existing experience will produce enough trust for users to engage with the assessment without positioning Mídete IA as a fear-based job-loss predictor.

Core message:

> **Tu experiencia sigue teniendo valor. ¿Tu carrera está evolucionando al mismo ritmo que tu industria?**

The experiment must avoid claims about:

- future layoffs;
- employment probability;
- guaranteed career outcomes;
- guaranteed salary improvement;
- profession disappearance.

---

# 9. SEGMENT HYPOTHESIS

## HYP-EXP001-008 — Cross-Professional Relevance

> The problem of professional transformation uncertainty is sufficiently transversal to be recognizable across multiple professional domains rather than only technology roles.

Initial priority domains include:

- engineering;
- manufacturing;
- maintenance;
- quality;
- safety;
- operations;
- supply chain;
- project management;
- data;
- administration;
- finance;
- technology.

EXP-001 is exploratory.

The experiment will not claim that all segments have equal demand.

---

# 10. ASSUMPTIONS

The following assumptions are not yet validated:

### ASM-001
Professionals understand the phrase “transformación de tu profesión”.

### ASM-002
AI is a strong enough contextual trigger to motivate assessment participation.

### ASM-003
Approximately five minutes is an acceptable time commitment.

### ASM-004
A simple Yes/No structure is sufficient for first-pass readiness measurement.

### ASM-005
Users perceive the free snapshot as useful even without dynamic LLM analysis.

### ASM-006
Users understand that the score represents indicators present, not employability probability.

### ASM-007
MXN $99 is an acceptable experimental price for a deeper founding-beta analysis.

### ASM-008
A static/no-code implementation provides enough trust for initial demand validation.

These assumptions must remain distinguishable from verified findings.

---

# 11. RISKS TO VALIDITY

## RISK-EXP001-001 — Founder Network Bias

Personal contacts may complete or purchase mainly to support the founder.

Mitigation:

- identify source/channel where possible;
- distinguish close-contact responses from broader-market responses;
- interpret non-contact payments as stronger evidence.

## RISK-EXP001-002 — Curiosity vs Real Pain

AI-related messaging may generate curiosity without a meaningful professional need.

Mitigation:

- capture intent;
- capture optional open-text concern;
- measure deeper-analysis CTA behavior.

## RISK-EXP001-003 — Survey Bias

Users may answer positively but have no commercial intent.

Mitigation:

- prioritize behavioral evidence;
- track CTA clicks and payments;
- do not use “Would you pay?” as primary evidence.

## RISK-EXP001-004 — Score Misinterpretation

Users may interpret the indicator count as employability or job-security probability.

Mitigation:

- use “indicadores presentes” language;
- include explanatory notice;
- prohibit predictive claims.

## RISK-EXP001-005 — Segment Dilution

A broad audience may hide stronger demand in one profession or industry.

Mitigation:

- capture professional area and industry/function;
- segment results during analysis.

---

# 12. EVIDENCE MODEL

Evidence strength will be interpreted conceptually as:

```text
LOWER SIGNAL
social impression
      ↓
landing visit
      ↓
assessment start
      ↓
assessment complete
      ↓
result view
      ↓
paid CTA click
      ↓
payment attempt
      ↓
REAL PAYMENT
HIGHER SIGNAL
```

Qualitative open-text feedback complements but does not replace behavioral evidence.

---

# 13. KEY EXPERIMENT METRICS

The experiment will observe at minimum:

### KPI-EXP001-001
Landing → Assessment Start

Purpose: evaluate hook effectiveness.

### KPI-EXP001-002
Assessment Start → Assessment Complete

Purpose: evaluate friction and assessment acceptability.

### KPI-EXP001-003
Assessment Complete → Paid CTA Click

Purpose: evaluate perceived relevance and desire for deeper analysis.

### KPI-EXP001-004
Paid CTA Click → Payment Attempt

Purpose: evaluate commercial intent.

### KPI-EXP001-005
Assessment Complete → Payment Complete

Purpose: evaluate willingness to pay.

### KPI-EXP001-006
Intent Distribution

Purpose: identify dominant user concern.

### KPI-EXP001-007
Voice of Customer Themes

Purpose: identify recurring language, concerns and unmet needs.

---

# 14. INITIAL VALIDATION TARGET

The initial target is:

```text
50 completed assessments
```

Commercial evidence of special interest:

```text
>= 1 real payment
```

These are experiment targets, not universal benchmarks.

They are intended to support an initial GO / ITERATE / PIVOT / STOP decision.

---

# 15. DECISION LOGIC

## GO

Consider GO when evidence suggests:

- users enter the funnel;
- a meaningful number complete the assessment;
- users engage with the deeper-analysis offer;
- at least one credible real payment is observed;
- qualitative feedback supports the problem hypothesis.

GO does not automatically authorize advanced architecture.

It authorizes the next validated product iteration.

## ITERATE

Use ITERATE when:

- there is traffic or assessment interest;
- completion or commercial behavior is weak;
- evidence suggests the hook, assessment, result, CTA, price or segment should change.

## PIVOT

Use PIVOT when:

- a different user concern is repeatedly observed;
- the original transformation-readiness framing is not the strongest problem;
- another segment or outcome shows materially stronger evidence.

## STOP

Use STOP for the current hypothesis when:

- sufficient exposure produces little meaningful engagement;
- the problem is not recognized;
- repeated iterations do not improve evidence;
- deeper-analysis demand remains absent.

STOP applies to the tested hypothesis/configuration, not automatically to the entire Mídete IA vision.

---

# 16. EXPERIMENT FALSIFICATION QUESTIONS

At closeout, EXP-001 must answer:

1. Did professionals recognize the problem?
2. Did they start the assessment?
3. Did they complete it?
4. Which intent was most common?
5. What language did users use to describe their uncertainty?
6. Did the result motivate deeper exploration?
7. Did users click the paid offer?
8. Did users attempt to pay?
9. Did anyone complete a real payment?
10. Which audience/source produced the strongest behavior?
11. Which assumptions were disproven?
12. What should change before another iteration?

---

# 17. SCOPE BOUNDARY

This hypothesis artifact does not authorize:

- custom backend development;
- database implementation;
- authentication;
- LLM integration;
- RAG;
- agents;
- multi-agent orchestration;
- Docker;
- Terraform;
- Kubernetes;
- custom payment APIs.

Any such capability remains governed by the Evolutionary Architecture Contract and Technology Adoption Decision Matrix.

---

# 18. DEPENDENCIES

```text
MICRO_MVP_001_CONTRACT_v0.1
        ↓
EXPERIMENT_HYPOTHESIS_v0.1
        ↓
ASSESSMENT_QUESTION_BANK_v0.1
        ↓
SCORING_MODEL_v0.1
        ↓
RESULT / LANDING / QA
        ↓
LAUNCH
        ↓
EXPERIMENT_RESULTS
        ↓
GATE-EXP-001
```

---

# 19. ACCEPTANCE CRITERIA

EXP-001-01 is complete when:

- primary business hypothesis is explicit;
- value hypothesis is explicit;
- commercial hypothesis is explicit;
- willingness-to-pay hypothesis is explicit;
- assumptions are separated from facts;
- validity risks are documented;
- evidence hierarchy is defined;
- metrics are mapped to hypotheses;
- decision outcomes are defined;
- scope remains within MICRO_MVP_001_CONTRACT_v0.1.

---

# 20. CURRENT STATUS

```text
EXP-001-00  MICRO MVP CONTRACT      COMPLETE
                ↓
EXP-001-01  EXPERIMENT HYPOTHESIS   COMPLETE
                ↓
EXP-001-02  ASSESSMENT QUESTION BANK
                ↓
EXP-001-03  SCORING MODEL
                ↓
...
GATE-EXP-001
```
