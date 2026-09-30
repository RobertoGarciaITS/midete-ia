# MÍDETE IA  
# MICRO_MVP_001_CONTRACT_v0.1  
## AI Career Transformation Snapshot

**Artifact ID:** `CONTRACT-MVP-001`  
**Experiment ID:** `EXP-001`  
**Product:** Mídete IA  
**Version:** `v0.1`  
**Status:** `BASELINE / READY FOR EXECUTION`  
**Workstream:** Commercial Validation / Product Discovery  
**Parent Project:** Mídete IA  
**Target Market:** Profesionales de México, con expansión posterior a LATAM  
**Execution Principle:** `VALIDATE → SELL → BUILD → MEASURE → IMPROVE → SCALE`

---

# 1. PROPÓSITO DEL CONTRATO

Este contrato define el alcance, reglas, arquitectura mínima, experiencia de usuario, scoring, datos, monetización, pruebas, métricas, criterios de aceptación y condiciones de cierre del primer Micro-MVP comercial de Mídete IA.

El producto experimental se denomina:

# AI Career Transformation Snapshot

Su propósito NO es construir todavía la plataforma completa de Mídete IA.

Su propósito es obtener evidencia observable acerca de la siguiente hipótesis comercial:

> Los profesionistas experimentan suficiente incertidumbre sobre la transformación de su profesión, sus habilidades y su preparación frente a IA y nuevas tecnologías como para completar un assessment corto y mostrar interés —idealmente mediante un pago real— por un diagnóstico profesional más profundo.

Esta hipótesis corresponde al objetivo original de validar si un usuario completa el diagnóstico y posteriormente quiere profundizar mediante un producto de pago. fileciteturn52file0L17-L19

---

# 2. PROBLEMA A VALIDAR

El problema central de EXP-001 es:

> Un profesionista posee experiencia y conocimientos valiosos, pero puede no saber cómo está cambiando su profesión, qué tan actualizadas están sus habilidades, cuáles siguen siendo transferibles y qué debería aprender después.

No se buscará medir:

- probabilidad de despido;
- probabilidad de contratación;
- estabilidad financiera;
- salud mental;
- desempeño laboral;
- aptitud psicológica;
- inteligencia;
- valor personal;
- probabilidad de incremento salarial.

El producto únicamente proporcionará:

**career transformation decision-support.**

---

# 3. PROPUESTA DE VALOR EXPERIMENTAL

## Hook principal

> **Tu experiencia sigue teniendo valor. ¿Tu carrera está evolucionando al mismo ritmo que tu industria?**

## Promesa

> Descubre en aproximadamente 5 minutos cómo está cambiando tu profesión, qué tan preparado estás y qué áreas podrías fortalecer.

## CTA principal

> **MIDE MI PREPARACIÓN — 5 MIN**

---

# 4. OBJETIVO DE EXP-001

Determinar si existe señal suficiente de:

1. interés;
2. relevancia;
3. finalización;
4. curiosidad posterior al diagnóstico;
5. disposición a profundizar;
6. willingness to pay.

El entregable principal de EXP-001 NO es software.

El entregable principal es:

> **evidencia de demanda.**

---

# 5. SEGMENTO INICIAL

EXP-001 se dirigirá inicialmente a profesionistas de México.

Prioridad:

- ingeniería;
- manufactura;
- mantenimiento;
- calidad;
- seguridad;
- operaciones;
- supply chain;
- project management;
- data;
- administración;
- finanzas;
- tecnología.

No se requerirá que el usuario esté desempleado o buscando trabajo.

El assessment debe ser relevante tanto para:

- personas empleadas;
- personas buscando crecimiento;
- personas considerando cambio;
- personas preocupadas por actualización;
- personas en transición laboral.

---

# 6. ALCANCE FUNCIONAL

El Micro-MVP contendrá exclusivamente:

```text
LANDING
   ↓
HOOK
   ↓
ASSESSMENT
   ↓
PROFESSIONAL CONTEXT
   ↓
10 READINESS INDICATORS
   ↓
SNAPSHOT
   ↓
PAID CTA
   ↓
PAYMENT / INTEREST SIGNAL
```

El assessment tendrá:

- 1 pregunta de intención;
- 3 preguntas de contexto profesional;
- 10 preguntas binarias;
- 1 pregunta abierta opcional;
- resultado inmediato;
- CTA hacia oferta pagada.

El diseño fuente estima una duración aproximada de 4–6 minutos. fileciteturn52file0L23-L39

---

# 7. PREGUNTA DE INTENCIÓN

La primera pregunta será:

> **¿Qué quieres descubrir hoy sobre tu carrera?**

Opciones:

| Código | Respuesta | Intent |
|---|---|---|
| INT-01 | Cómo está cambiando mi profesión con IA | Transformation |
| INT-02 | Qué habilidades debería actualizar | Upskilling |
| INT-03 | Si mi experiencia sigue siendo competitiva | Employability |
| INT-04 | Qué nuevas oportunidades podría aprovechar | Mobility |
| INT-05 | Qué tan preparado estoy ante un cambio laboral | Resilience |

Esta variable tendrá doble función:

1. personalización básica;
2. investigación de mercado.

Las cinco categorías provienen directamente del diseño inicial del Micro-MVP. fileciteturn52file0L41-L53

---

# 8. CONTEXTO PROFESIONAL

Se capturarán exclusivamente tres elementos mínimos:

### PROF-01 — Profesión / área principal

### PROF-02 — Industria / función

### PROF-03 — Años de experiencia

Rangos:

```text
0–2
3–5
6–10
11–15
16+
```

Durante EXP-001 no se solicitará:

- nombre de empresa;
- salario;
- nombre del empleador;
- información confidencial;
- información propietaria;
- secretos comerciales.

Esta restricción forma parte explícita del diseño inicial. fileciteturn52file0L57-L80

---

# 9. DIMENSIONES DEL SNAPSHOT

EXP-001 utilizará cinco dimensiones.

## DIM-01 — Vigencia profesional

Pregunta:

> ¿Sabes cuáles son las principales tecnologías que están cambiando tu profesión?

Pregunta:

> ¿Has actualizado una habilidad relevante durante los últimos 12 meses?

---

## DIM-02 — AI / Digital Readiness

Pregunta:

> ¿Utilizas actualmente alguna herramienta de IA o automatización relacionada con tu trabajo?

Pregunta:

> ¿Podrías explicar cómo la IA podría modificar alguna de tus actividades actuales?

---

## DIM-03 — Market Awareness

Pregunta:

> ¿Has revisado vacantes de tu profesión durante los últimos 6 meses?

Pregunta:

> ¿Conoces las principales habilidades que actualmente solicitan para puestos similares al tuyo?

---

## DIM-04 — Transferibilidad / Evidencia

Pregunta:

> ¿Podrías identificar al menos dos puestos diferentes donde tu experiencia actual sería útil?

Pregunta:

> ¿Puedes demostrar tus capacidades mediante resultados, proyectos, certificaciones o portafolio?

---

## DIM-05 — Adaptabilidad / Acción

Pregunta:

> ¿Tienes identificada al menos una habilidad que necesitas fortalecer?

Pregunta:

> ¿Tienes un plan concreto de aprendizaje para los próximos 90 días?

Estas diez preguntas constituyen el baseline del assessment inicial. fileciteturn52file0L84-L99

---

# 10. SCORING CONTRACT

El scoring de EXP-001 debe mantenerse deliberadamente simple.

```text
YES = 1 indicador presente
NO  = 0 indicadores presentes
```

Resultado total:

```text
0–10 indicadores presentes
```

Está prohibido presentar este resultado como:

- porcentaje de empleabilidad;
- probabilidad de conseguir empleo;
- probabilidad de conservar el trabajo;
- probabilidad de éxito;
- predicción laboral.

Formato permitido:

> **Tienes 7 de 10 indicadores de preparación profesional presentes.**

Este enfoque se definió precisamente para evitar presentar falsa precisión como “73% de empleabilidad”. fileciteturn52file0L101-L115

---

# 11. PREGUNTA ABIERTA

Texto:

> **En máximo 200 palabras, cuéntanos qué haces profesionalmente hoy y qué cambio en tu profesión te genera más curiosidad o incertidumbre.**

Reglas:

- opcional;
- máximo aproximado de 200 palabras;
- no participa en el score;
- se utilizará para Voice of Customer;
- no deberá solicitar datos confidenciales.

La respuesta se analizará posteriormente para descubrir patrones como:

- necesidad de actualización;
- falta de capacitación;
- transición;
- trabajo remoto;
- certificaciones;
- IA;
- herramientas;
- cambio de área.

La respuesta abierta está explícitamente excluida del scoring en la versión inicial. fileciteturn52file0L119-L138

---

# 12. RESULTADO GRATUITO

El usuario recibirá:

# AI Career Transformation Snapshot

Ejemplo:

```text
MÍDETE IA

AI CAREER TRANSFORMATION SNAPSHOT

7 / 10
indicadores presentes
```

Desglose:

```text
VIGENCIA
2 / 2

AI / DIGITAL READINESS
1 / 2

MARKET AWARENESS
1 / 2

TRANSFERIBILIDAD / EVIDENCIA
2 / 2

ACTION READINESS
1 / 2
```

Y tres bloques narrativos:

```text
LO QUE YA TIENES

LO QUE ESTÁ CAMBIANDO

SIGUIENTE PRIORIDAD
```

La estructura básica del resultado está definida en el baseline del Micro-MVP. fileciteturn52file0L142-L187

---

# 13. PROFESSION TRANSFORMATION CARDS

EXP-001 NO utilizará inicialmente generación dinámica mediante LLM para describir cada profesión.

Se crearán aproximadamente 10–12 tarjetas predefinidas.

Ejemplo:

```text
ENGINEERING / MAINTENANCE

AI-assisted diagnostics
Predictive maintenance
IoT / sensors
Data analytics
Digital twins
Automation
```

Las tarjetas permiten personalización mínima sin requerir todavía:

- RAG;
- LLM;
- vector database;
- market intelligence engine.

El diseño original recomienda explícitamente utilizar tarjetas predefinidas en esta fase. fileciteturn52file0L192-L226

---

# 14. ARQUITECTURA EXPERIMENTAL

Arquitectura autorizada:

```text
DOMAIN
   ↓
LANDING PAGE
   ↓
FORM / QUIZ
   ↓
RESULT
   ↓
GOOGLE SHEETS
   ↓
OPTIONAL AUTOMATION
   ↓
PAID CTA
   ↓
PAYMENT LINK
```

Stack preferente:

```text
midete.ai

Google Forms
Google Sheets
Google Apps Script — optional

Mercado Pago Payment Link
PayPal Payment Link
```

La arquitectura original establece explícitamente este enfoque de dominio + formulario + Sheets + automatización opcional + pago. fileciteturn52file0L230-L260

---

# 15. INFRAESTRUCTURA EXPLÍCITAMENTE NO AUTORIZADA

Durante EXP-001 quedan fuera:

```text
FastAPI
PostgreSQL
React custom application
authentication
LLM API
RAG
vector database
Docker
Kubernetes
Terraform
GCP backend
Azure backend
AWS backend
subscription engine
Professional Digital Twin
```

Estos elementos no deberán incorporarse bajo el argumento de “hacer más profesional el MVP”.

El baseline los excluye explícitamente de esta primera validación. fileciteturn52file0L487-L509

---

# 16. PRINCIPIO DE ARQUITECTURA

Aplicará la regla:

> **Use the simplest architecture capable of validating the business hypothesis.**

El orden futuro previsto será:

```text
Forms
   ↓
Custom Frontend
   ↓
API
   ↓
Database
   ↓
AI
   ↓
Managed Cloud
   ↓
Containerization / advanced infrastructure
```

La progresión inicial está definida en el diseño de EXP-001. fileciteturn52file0L270-L315

---

# 17. PRODUCTO PAGADO

La oferta experimental será:

# Career Transformation Radar — Founding Beta

Entrega prevista:

```text
Tu experiencia actual
+
Cómo está cambiando tu profesión
+
Fortalezas transferibles
+
Top skill gaps
+
Posibles roles futuros
+
Plan inicial de acción
```

El precio experimental inicial será:

# MXN $99

Este precio es una **hipótesis de validación**, no pricing definitivo.

El primer producto pagado puede entregarse mediante:

```text
AI-assisted analysis
+
human review
```

y no requiere automatización completa.

La oferta y precio experimental iniciales están incluidos en la definición original. fileciteturn52file0L403-L438

---

# 18. PAYMENT CONTRACT

Durante EXP-001 se autoriza únicamente:

- Mercado Pago Payment Link;
- PayPal Payment Link;
- otro link de pago equivalente aprobado.

No se requiere:

- API de pagos;
- webhook;
- subscription engine;
- billing database;
- wallet;
- credits engine.

El objetivo es probar:

> **willingness to pay**

no la infraestructura financiera.

---

# 19. FUNNEL CONTRACT

El funnel mínimo será:

```text
IMPRESSION / SOCIAL POST
        ↓
LANDING VISIT
        ↓
ASSESSMENT START
        ↓
ASSESSMENT COMPLETE
        ↓
RESULT VIEWED
        ↓
PAID CTA CLICK
        ↓
PAYMENT ATTEMPT
        ↓
PAYMENT COMPLETED
```

Este funnel corresponde al baseline comercial establecido. fileciteturn52file0L442-L469

---

# 20. EVENTOS MÍNIMOS

Registrar, cuando la herramienta lo permita:

```text
EVT-001 landing_view
EVT-002 assessment_start
EVT-003 assessment_complete
EVT-004 result_view
EVT-005 paid_cta_click
EVT-006 payment_link_open
EVT-007 payment_complete
```

No es obligatorio construir event tracking custom si la plataforma utilizada ya proporciona métricas equivalentes.

---

# 21. MÉTRICAS PRINCIPALES

### KPI-001 — Landing → Assessment Start

Mide calidad del hook.

### KPI-002 — Assessment Start → Complete

Mide fricción.

### KPI-003 — Complete → Paid CTA Click

Mide interés posterior.

### KPI-004 — Paid CTA → Payment Attempt

Mide intención comercial.

### KPI-005 — Completed Assessment → Payment

Mide willingness to pay.

### KPI-006 — Intent Distribution

Mide el dolor dominante:

```text
Transformation
Upskilling
Employability
Mobility
Resilience
```

### KPI-007 — Voice of Customer Themes

Extraídos de respuestas abiertas.

Las métricas centrales del funnel fueron establecidas desde la definición original del experimento. fileciteturn52file0L460-L480

---

# 22. META DE VALIDACIÓN

Target inicial:

```text
50 completed assessments
```

Se considerará señal comercial especialmente significativa:

```text
>= 1 real payment
```

El pago debe preferentemente provenir de alguien que no esté comprando únicamente por relación personal con el fundador.

La meta de 50 assessments y al menos un pago está incluida expresamente en el baseline experimental. fileciteturn52file0L471-L483

---

# 23. ESTADOS DEL EXPERIMENTO

```text
DRAFT
↓
READY
↓
LIVE
↓
COLLECTING
↓
ANALYSIS
↓
DECISION
↓
CLOSED
```

---

# 24. DECISION GATE

## GATE-EXP-001

Después del periodo de prueba se tomará una de cuatro decisiones:

### GO

Existe evidencia suficiente para continuar y automatizar partes del producto.

### ITERATE

Existe interés, pero alguna variable debe ajustarse:

- hook;
- assessment;
- resultado;
- precio;
- CTA;
- segmento;
- profession cards.

### PIVOT

El problema identificado por los usuarios es diferente al supuesto inicial.

### STOP

No existe señal suficiente para justificar nueva inversión en la hipótesis actual.

---

# 25. REGLA DE INTERPRETACIÓN

Un resultado negativo NO significa automáticamente:

> “Mídete IA no tiene mercado.”

Puede significar:

```text
wrong hook
wrong audience
wrong promise
wrong assessment
wrong result
wrong offer
wrong price
insufficient trust
```

Estas causas deberán distinguirse antes de cerrar el experimento.

---

# 26. PRIVACY CONTRACT

Durante EXP-001 se aplicarán los siguientes principios:

### Data minimization

Recolectar únicamente los datos necesarios para validar el experimento.

### Prohibited collection

No solicitar:

- nombre del empleador;
- datos confidenciales;
- datos propietaries de la empresa;
- contraseñas;
- información financiera interna;
- información sensible innecesaria;
- documentos corporativos.

### User notice

Debe informarse que:

- es una beta;
- el resultado es orientativo;
- no predice contratación;
- no predice despido;
- no sustituye asesoría profesional especializada;
- las recomendaciones deben ser evaluadas por el usuario.

---

# 27. AI RESPONSIBILITY CONTRACT

En EXP-001 la IA no tomará decisiones laborales.

Está prohibido afirmar:

```text
“Vas a perder tu empleo.”

“Tienes X% de probabilidad de ser contratado.”

“Tu profesión desaparecerá.”

“Debes abandonar tu carrera.”

“Esta certificación garantiza empleo.”
```

El lenguaje autorizado deberá utilizar:

```text
podría
sugiere
indica
conviene explorar
posible brecha
posible oportunidad
basado en tus respuestas
```

---

# 28. QA CONTRACT

Antes de publicar EXP-001 deberán ejecutarse al menos:

### QA-001
Prueba de formulario completo.

### QA-002
Prueba de todas las respuestas Sí.

### QA-003
Prueba de todas las respuestas No.

### QA-004
Prueba de combinación intermedia.

### QA-005
Prueba móvil.

### QA-006
Prueba desktop.

### QA-007
Validación de scoring.

### QA-008
Validación de redirect/CTA.

### QA-009
Prueba de payment link.

### QA-010
Verificación de almacenamiento de respuestas.

---

# 29. TIMEBOX

Baseline estimado:

| Actividad | Horas |
|---|---:|
| Hook / landing copy | 0.5 |
| Formulario | 0.75 |
| Assessment/scoring | 0.75 |
| Branching | 0.5 |
| Sheets | 0.25 |
| Resultado | 0.75 |
| Profession cards | 1.0 |
| Privacy/disclaimer | 0.5 |
| Payments | 0.25 |
| Analytics | 0.5 |
| QA | 0.75 |
| **Estimado base** | **6.5 h** |

Con contingencia:

```text
7–8 horas
```

Este cálculo corresponde al baseline de esfuerzo del Micro-MVP. fileciteturn52file0L322-L345

---

# 30. DEFINITION OF DONE

EXP-001 estará técnicamente listo cuando:

- landing accesible;
- CTA funcional;
- assessment accesible;
- 10 indicadores configurados;
- scoring validado;
- resultado mostrado;
- datos almacenados;
- CTA pagado visible;
- payment link funcional;
- aviso de uso presente;
- experiencia móvil validada;
- tracking mínimo disponible;
- QA crítico aprobado.

EXP-001 estará comercialmente validado únicamente cuando existan datos reales de usuarios.

---

# 31. ARTIFACTS A GENERAR

```text
EXP-001/
│
├── MICRO_MVP_001_CONTRACT_v0.1.md
├── EXPERIMENT_HYPOTHESIS_v0.1.md
├── ASSESSMENT_QUESTION_BANK_v0.1.yaml
├── SCORING_MODEL_v0.1.yaml
├── PROFESSION_TRANSFORMATION_CARDS_v0.1.yaml
├── LANDING_COPY_v0.1.md
├── PRIVACY_DISCLAIMER_v0.1.md
├── QA_TEST_PLAN_v0.1.md
├── ANALYTICS_EVENT_CATALOG_v0.1.yaml
├── COMMERCIAL_OFFER_v0.1.md
├── EXPERIMENT_RESULTS_v0.1.csv
└── EXP_001_CLOSEOUT_v0.1.md
```

---

# 32. DEPENDENCIAS

```text
MICRO_MVP CONTRACT
        ↓
EXPERIMENT HYPOTHESIS
        ↓
ASSESSMENT
        ↓
SCORING
        ↓
RESULT DESIGN
        ↓
LANDING
        ↓
PAYMENT
        ↓
QA
        ↓
LAUNCH
        ↓
DATA COLLECTION
        ↓
ANALYSIS
        ↓
GATE-EXP-001
```

---

# 33. PROHIBITED SCOPE CREEP

Durante EXP-001 no se autoriza incorporar:

- user accounts;
- login;
- CV parser;
- job scraping;
- live labor-market APIs;
- AI agents;
- RAG;
- vector database;
- Kubernetes;
- Terraform;
- microservices;
- full SaaS subscriptions;
- marketplace;
- mobile app;
- recommendation marketplace;
- Professional Digital Twin.

Cualquier propuesta para agregar estos elementos deberá esperar el resultado de `GATE-EXP-001`.

---

# 34. SUCCESS CONDITION

El experimento habrá cumplido su propósito aunque el resultado comercial sea negativo, siempre que entregue evidencia suficiente para responder:

1. ¿La gente hace clic?
2. ¿La gente empieza?
3. ¿La gente termina?
4. ¿Qué quiere descubrir?
5. ¿Qué le preocupa?
6. ¿El resultado genera interés?
7. ¿Hace clic en la oferta?
8. ¿Intenta pagar?
9. ¿Alguien paga?
10. ¿Qué debemos cambiar?

---

# 35. PRINCIPIO FINAL

EXP-001 no existe para demostrar que podemos construir software.

Existe para responder:

# **¿Existe una necesidad suficientemente importante como para que alguien utilice y eventualmente pague por Mídete IA?**

Hasta obtener esa respuesta:

```text
NO OVER-ENGINEERING
NO PREMATURE CLOUD
NO PREMATURE AI
NO PREMATURE SCALE

VALIDATE FIRST.
```
