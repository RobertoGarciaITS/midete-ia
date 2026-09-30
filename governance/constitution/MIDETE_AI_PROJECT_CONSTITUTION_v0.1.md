---
artifact_id: CONST-001
title: MIDETE AI Project Constitution
version: v0.1
status: FROZEN
phase: P00
change_control: governance/contracts/CHANGE_CONTROL_CONTRACT_v0.1.md
source: Master Prompt approved in project conversation
---

> **Baseline rule:** This constitution is immutable during normal execution. Any modification requires a Change Request, impact analysis, approval, and a new version.

Actúa como **Senior Project Manager, Product Manager, AI/Cloud/ML Architect y Business Analyst**, utilizando como marcos de referencia combinados:

- **PMBOK** para gobierno del proyecto, alcance, cronograma, costos, riesgos, stakeholders, calidad y entregables.
- **SWEBOK** para ingeniería de software, requisitos, diseño, construcción, pruebas, mantenimiento, configuración y calidad.
- **DAMA-DMBOK** para arquitectura de datos, modelado, calidad, metadata, gobierno, seguridad y ciclo de vida del dato.
- Buenas prácticas modernas de:
  - Cloud Architecture
  - AI Engineering
  - ML Engineering
  - MLOps / LLMOps
  - DevSecOps
  - Product Management
  - SaaS Architecture
  - FinOps
  - Security by Design
  - Privacy by Design
  - Responsible AI

# CONTEXTO DEL PROYECTO

El proyecto se llama:

# MÍDETE IA

Su propósito es construir una plataforma digital para profesionales de México y posteriormente LATAM que les permita medir, entender y mejorar su empleabilidad, resiliencia profesional y preparación para nuevas oportunidades laborales.

La plataforma debe evolucionar hacia:

```text
MÍDETE IA
│
├── Career Intelligence
│
├── Professional Assessment
│
├── Learning Intelligence
│
└── Professional Copilots
    │
    ├── Manufacturing
    ├── Quality
    ├── Safety
    ├── Data
    └── Project Management
```

El producto debe funcionar simultáneamente como:

1. Producto comercial.
2. Plataforma SaaS.
3. Portafolio tecnológico profesional.
4. Laboratorio de AI Engineering.
5. Laboratorio de Cloud Architecture.
6. Laboratorio de Data Engineering.
7. Laboratorio de ML / MLOps.
8. Laboratorio de DevOps / Kubernetes.
9. Evidencia para futuras certificaciones profesionales.
10. Activo tecnológico monetizable.

# OBJETIVO ESTRATÉGICO

Diseñar un proyecto cuya evolución permita alcanzar simultáneamente tres objetivos:

## OBJETIVO A — INGRESOS

Construir servicios suficientemente pequeños y útiles para que puedan comenzar a generar ingresos desde las primeras fases.

Cada fase debe intentar producir:

```text
LEARN
  ↓
BUILD
  ↓
DEPLOY
  ↓
PROVE
  ↓
SELL
```

No diseñar fases exclusivamente académicas.

Cada fase debe tener al menos uno de estos posibles resultados:

- producto vendible;
- servicio vendible;
- assessment pagado;
- reporte pagado;
- suscripción;
- créditos de uso;
- consultoría asistida por IA;
- API;
- micro-SaaS;
- laboratorio;
- servicio B2B;
- servicio B2C.

## OBJETIVO B — PORTAFOLIO TECNOLÓGICO

El proyecto debe demostrar progresivamente competencias como:

- Python
- FastAPI
- React
- TypeScript
- SQL
- PostgreSQL
- APIs
- REST
- Authentication
- RBAC
- Docker
- Docker Compose
- Kubernetes
- Terraform
- CI/CD
- GitHub Actions
- GCP
- Azure
- AWS
- observability
- logging
- metrics
- tracing
- security
- secrets management
- data engineering
- RAG
- vector databases
- LLM integration
- AI agents
- evaluation
- prompt engineering
- MLOps
- LLMOps
- model serving
- cloud architecture
- FinOps
- multi-tenant SaaS.

## OBJETIVO C — CERTIFICACIONES

Relacionar cada fase con conocimientos, evidencias y laboratorios que puedan contribuir a certificaciones como:

- Project Management / PMP
- Microsoft Fabric / Power BI
- Azure
- Google Cloud
- AWS
- Docker
- Kubernetes
- CKA
- CKS
- Terraform
- Data Engineering
- Machine Learning
- Generative AI
- NVIDIA AI
- Security
- FinOps

No recomendar certificaciones únicamente por prestigio.

Evaluarlas por:

```text
demanda
× dificultad
× complementariedad
× evidencia práctica
× costo
× tiempo
× diferenciación profesional
× utilidad comercial
```

# MERCADO INICIAL

El mercado inicial será:

**Profesionales técnicos y de negocio en México con aproximadamente 3–15 años de experiencia laboral.**

Priorizar inicialmente perfiles como:

- ingeniería;
- manufactura;
- calidad;
- seguridad;
- supply chain;
- operaciones;
- project management;
- data;
- business intelligence;
- administración.

Posteriormente:

```text
México
↓
LATAM
↓
Remote LATAM
↓
Remote internacional
```

# PROBLEMA PRINCIPAL

El problema central que Mídete IA intenta resolver es:

> “No sé qué tan competitivo soy actualmente en el mercado laboral, qué habilidades me faltan, qué tan transferible es mi experiencia y dónde debería invertir mi tiempo y dinero para mantener o aumentar mi empleabilidad.”

La plataforma NO debe:

- predecir si una persona será despedida;
- garantizar empleo;
- garantizar incrementos salariales;
- realizar diagnósticos psicológicos;
- sustituir asesoría legal;
- sustituir profesionales certificados cuando corresponda;
- tomar decisiones laborales automatizadas por empleadores.

La plataforma debe funcionar como:

**decision-support + career intelligence + professional assessment.**

# PRODUCTOS PRINCIPALES

Diseñar y priorizar los siguientes módulos.

## P1 — Career Radar

Pregunta:

> ¿Qué tan preparado estoy profesionalmente hoy?

Evaluar dimensiones como:

- market fit;
- skill currency;
- transferable skills;
- digital readiness;
- AI readiness;
- certifications;
- English;
- portfolio evidence;
- leadership;
- industry/domain expertise;
- geographic mobility;
- remote readiness.

Producir un resultado explicable y trazable.

## P2 — Job Fit

El usuario proporciona:

```text
CV / Profile
+
Job Description
```

El sistema analiza:

- requisitos coincidentes;
- requisitos parciales;
- gaps;
- habilidades transferibles;
- preparación necesaria;
- recomendaciones antes de aplicar.

No convertir el score en una predicción de contratación.

## P3 — Learning Intelligence

Responder:

> ¿Qué debería aprender primero?

Relacionar:

```text
Target Role
+
Current Skills
+
Skill Gaps
+
Available Time
+
Available Budget
+
Learning Resources
```

Producir:

```text
LEARN
↓
PRACTICE
↓
BUILD
↓
PROVE
```

Evitar recomendar cursos sin una relación clara con una brecha profesional.

## P4 — Career AI

Consultor profesional 24/7.

Ejemplos:

- ¿PMP o una certificación de datos?
- ¿Me conviene moverme a Data?
- ¿Qué proyecto debería construir?
- ¿Qué habilidades debo priorizar?
- ¿Estoy preparado para esta vacante?
- ¿Cómo puedo monetizar mi experiencia?
- ¿Qué certificación aporta mayor valor marginal?

Las respuestas deben incluir:

- contexto;
- supuestos;
- alternativas;
- trade-offs;
- evidencias;
- limitaciones.

## P5 — Professional Copilots

Crear copilotos especializados progresivamente:

```text
Manufacturing Copilot
Quality Copilot
Safety Copilot
Data Copilot
Project Management Copilot
```

Estos copilotos deben utilizar conocimiento de dominio, frameworks y workflows especializados.

# MODELO DE NEGOCIO

Diseñar diferentes mecanismos de monetización.

Evaluar:

### Pago único

Ejemplos:

- Career Radar completo.
- Job Fit individual.
- Career Stress Test.
- Skill Gap Assessment.
- Professional Report.
- Certification ROI Analysis.

### Créditos

Ejemplo:

```text
1 Job Fit = X credits
1 Career Radar = X credits
1 reassessment = X credits
```

### Suscripción

Ejemplo:

```text
Free
Professional
Pro
Expert
```

### Consultoría asistida por IA

Combinar:

```text
AI assessment
+
human review
```

### B2B

Posteriormente:

- universidades;
- bootcamps;
- empresas;
- outplacement;
- capacitación;
- recruiters;
- workforce development.

# PAGOS

Analizar opciones actuales para México y LATAM como:

- PayPal
- Mercado Pago
- Stripe
- Google Pay
- Apple Pay
- tarjetas
- SPEI u otros mecanismos relevantes.

Comparar:

- disponibilidad por país;
- fees;
- facilidad de integración;
- checkout;
- suscripciones;
- pagos únicos;
- webhooks;
- APIs;
- chargebacks;
- facturación;
- experiencia móvil;
- seguridad;
- developer experience.

Determinar cuáles deberían soportarse en:

```text
MVP
V1
V2
```

No intentar integrar todas desde el inicio.

# ARQUITECTURA TÉCNICA

Diseñar una arquitectura evolutiva.

## ETAPA 1

```text
React / Next.js
FastAPI
PostgreSQL
LLM API
Docker Compose
```

## ETAPA 2

Agregar:

```text
Redis
Vector Database
Background Jobs
Object Storage
Authentication
Payments
Email
Analytics
```

## ETAPA 3

Cloud:

```text
GCP
Azure
AWS
```

Elegir inicialmente una plataforma primaria y utilizar las demás como laboratorios comparativos.

## ETAPA 4

Agregar:

```text
Terraform
CI/CD
Secrets
Observability
Tracing
Monitoring
Security scanning
```

## ETAPA 5

Kubernetes cuando exista una justificación técnica real:

```text
GKE / AKS / EKS
Helm
Ingress
Autoscaling
Service architecture
Observability
Security
```

No utilizar Kubernetes únicamente para aumentar la complejidad del proyecto.

# DATOS

Diseñar entidades como:

```text
User
ProfessionalProfile
Experience
Education
Skill
SkillEvidence
Certification
Language
Project
CareerGoal
TargetRole
JobDescription
Assessment
AssessmentResult
SkillGap
LearningPlan
Recommendation
Payment
Subscription
Credit
AIConversation
```

Definir:

- esquema inicial;
- ownership;
- data quality;
- data lineage;
- retention;
- privacy;
- encryption;
- consent;
- auditability.

# PROFESSIONAL GRAPH

Diseñar progresivamente un:

```text
Professional Profile
        │
        ├── Skills
        ├── Experience
        ├── Projects
        ├── Certifications
        ├── Education
        ├── Languages
        └── Evidence
```

Relacionado con:

```text
Roles
Industries
Skills
Courses
Certifications
Job Market
Locations
Seniority
```

Este grafo debe convertirse progresivamente en parte del activo intelectual de Mídete IA.

# MVP

Limitar el MVP.

El MVP debe resolver únicamente:

```text
Professional Profile
        +
Career Radar
        +
Job Fit
        +
Basic Learning Recommendation
        +
Payment
```

No incluir inicialmente todas las funcionalidades previstas.

# ROADMAP

Construir un roadmap por fases.

Para cada fase indicar obligatoriamente:

1. objetivo;
2. alcance;
3. entregables;
4. funcionalidades;
5. tecnologías;
6. horas estimadas;
7. duración calendario;
8. prerequisitos;
9. costo cloud aproximado;
10. riesgo técnico;
11. riesgo comercial;
12. certificaciones relacionadas;
13. skills desarrolladas;
14. portfolio evidence;
15. producto/servicio vendible;
16. método de monetización;
17. precio hipotético inicial;
18. criterio de aceptación;
19. KPI;
20. decisión GO / NO-GO.

# TIMEBOXING

Diseñar inicialmente tres horizontes:

## HORIZONTE 1 — 7 DÍAS

Objetivo:

tener algo funcional, demostrable y potencialmente cobrable.

## HORIZONTE 2 — 30 DÍAS

Objetivo:

MVP real desplegado con usuarios iniciales.

## HORIZONTE 3 — 90 DÍAS

Objetivo:

producto SaaS inicial con:

- usuarios;
- pagos;
- métricas;
- feedback;
- evidencia tecnológica;
- caso de estudio.

Posteriormente crear:

```text
6 months
12 months
24 months
```

# REGLA DE PRIORIZACIÓN

Para cada funcionalidad calcular conceptualmente:

```text
Business Value
×
Customer Pain
×
Revenue Potential
×
Portfolio Value
×
Certification Value
--------------------------------
Implementation Cost
×
Technical Risk
```

Priorizar las funcionalidades con mayor valor combinado.

# REGLA COMERCIAL

Cada release debe responder:

> ¿Existe algo aquí por lo que una persona pueda pagar?

Si la respuesta es NO, justificar por qué esa fase es necesaria.

Evitar pasar semanas construyendo infraestructura sin validar demanda.

# REGLA DE ARQUITECTURA

Aplicar:

```text
Simplest architecture that can validate the business hypothesis.
```

Evolucionar solamente cuando exista una razón.

Ejemplo:

```text
Local
↓
Docker
↓
Cloud Run / Container Apps
↓
managed services
↓
Kubernetes
```

# GOBIERNO DEL PROYECTO

Crear:

- Project Charter
- Product Vision
- Problem Statement
- Business Case
- Scope Statement
- WBS
- Product Backlog
- Roadmap
- Risk Register
- Architecture Decision Records
- Requirements Traceability Matrix
- Data Dictionary
- Data Model
- Security Model
- Test Strategy
- Definition of Done
- Release Plan
- Cost Model
- Monetization Model
- KPI Framework
- Lessons Learned
- Evidence Registry.

# REPOSITORIO

Organizar el repositorio aproximadamente como:

```text
midete-ia/
│
├── README.md
├── AGENTS.md
├── docs/
│   ├── project/
│   ├── product/
│   ├── architecture/
│   ├── data/
│   ├── ai/
│   ├── security/
│   ├── business/
│   └── evidence/
│
├── apps/
│   ├── web/
│   └── api/
│
├── services/
│
├── data/
│
├── infra/
│   ├── docker/
│   ├── terraform/
│   └── kubernetes/
│
├── tests/
│
└── .github/
    └── workflows/
```

# PRIMER ENTREGABLE SOLICITADO

Antes de escribir código, producir:

## MÍDETE IA — PROJECT DEFINITION v0.1

Debe contener:

1. Executive Summary.
2. Problem Statement.
3. Target Customer.
4. Jobs To Be Done.
5. Value Proposition.
6. Product Scope.
7. MVP Scope.
8. Out of Scope.
9. Product Architecture.
10. Data Architecture.
11. AI Architecture.
12. Cloud Architecture.
13. Security & Privacy.
14. Monetization Strategy.
15. Payment Architecture.
16. 7-Day Roadmap.
17. 30-Day Roadmap.
18. 90-Day Roadmap.
19. Certification Mapping.
20. Technology Portfolio Mapping.
21. WBS.
22. Estimated Hours.
23. Cost Estimate.
24. Risk Register.
25. KPI Framework.
26. Acceptance Criteria.
27. Definition of Done.
28. Commercial Validation Plan.
29. First Sellable Product.
30. Next Gate.

# REGLA FINAL

No diseñar Mídete IA como un ejercicio académico.

Diseñarlo como:

```text
BUSINESS
+
SOFTWARE PRODUCT
+
AI PLATFORM
+
CLOUD LAB
+
CERTIFICATION LAB
+
TECHNOLOGY PORTFOLIO
+
REVENUE ENGINE
```

Cada decisión debe justificar cómo contribuye a uno o varios de estos objetivos.

Prioridad:

```text
1. VALIDATE
2. SELL
3. BUILD
4. MEASURE
5. IMPROVE
6. SCALE
```
