# TankFlow — Design System

**TankFlow** es un sistema operativo para la **gestión de un depósito de contenedores**: registra el ingreso y la salida (gate-in / gate-out), conduce la inspección, decide si un equipo necesita reparación y de qué tipo, y hace el **tracking de cada contenedor desde que ingresa hasta que termina** — dando visibilidad y señalando los equipos que llevan **más de un mes sin terminar su reparación** mientras esperan que el repuesto esté disponible.

> Este proyecto es el sistema de diseño que viste interfaces y materiales de marca TankFlow. Es un **sistema nuevo, creado desde cero** (no había marca, código ni Figma previos). Las decisiones de fuente, color y voz son intencionales, no copias de una marca existente.

---

## Contexto de producto

El dominio es un **depósito / patio de contenedores** (container depot / yard). El flujo central de un equipo:

1. **Ingreso (gate-in)** — alta del contenedor: código ISO 6346, naviera, tipo/tamaño, transportista, posición en patio.
2. **Inspección** — checklist de estado (estructura, pisos, puertas, interior, marcas/CSC) y decisión: ¿requiere reparación?
3. **Definición de reparación** — si requiere, se clasifica en una o varias de **5 categorías**:
   - **Estructural** — paneles, esquineros, piso, techo
   - **Interior** — revestimiento, listones, ventilación
   - **Rotulación** — placas, marcas, números ISO
   - **Pintura** — tratamiento y repintado
   - **Inspección regulatoria** — CSC / IICL / ensayos
4. **Reparación & espera de repuesto** — la orden avanza; si falta repuesto, el equipo queda en espera.
5. **Tracking & antigüedad** — se mide el **tiempo en el estado actual (días)** con escalado: OK (<14) → atención (≥14) → **demorado (≥30 días en el mismo estado)**.
6. **Despacho (gate-out)** — el equipo sale del depósito.

### Estados del equipo (canónicos)
Un contenedor tiene **exactamente uno** de estos 4 estados en todo momento:

| Estado | `status` | Tono | Significado |
|---|---|---|---|
| **Inspección Pendiente** | `inspeccion-pendiente` | neutral (gris) | Ingresó, espera inspección |
| **Reparación Pendiente** | `reparacion-pendiente` | warn (ámbar) | Inspeccionado, reparación definida sin iniciar |
| **En Reparación** | `en-reparacion` | info (azul) | Trabajo de reparación en curso |
| **Disponible** | `disponible` | ok (verde) | Listo / apto para despacho |

> La antigüedad (+30 días en el mismo estado sin avanzar) **no es un estado**: se señala con el medidor `AgingIndicator` en rojo y las alertas de “demorados”, sin cambiar el estado base del equipo.

**Producto / superficie:** una sola aplicación web operativa (control-room) usada por supervisores y operadores de patio. Idioma de interfaz: **español**.

### Fuentes / materiales recibidos
- **Ninguna marca, codebase ni Figma** fueron aportados. El brief original (en español) describe el proceso de negocio; el resto (nombre, identidad, fuentes, paleta) se diseñó para este sistema.
- Nombre elegido por el usuario: **TankFlow**. Idioma: español. Dirección visual: **control-room oscuro / industrial**. Densidad: cómoda.

---

## FUNDAMENTOS DE CONTENIDO (voz & tono)

- **Idioma:** español rioplatense neutro. La interfaz habla en **español**; el código y los tokens en inglés.
- **Tono:** operativo, directo, sin floritura. Es una herramienta de trabajo de patio, no marketing. Frases cortas y accionables.
- **Persona:** se le habla al operador de forma neutra/impersonal o imperativa: *"Registrar ingreso"*, *"Confirmar ingreso"*, *"Crear orden de reparación"*, *"Marcar como listo"*. Evitar primera persona; evitar el "tú/vos" salvo en preguntas directas (*"¿El equipo requiere reparación?"*).
- **Mayúsculas (casing):**
  - Botones y títulos: **Sentence case** — *"Registrar ingreso"*, *"Panel de control"*.
  - Etiquetas técnicas / eyebrows / encabezados de tabla: **MAYÚSCULAS** con tracking ancho y en fuente mono — *"PATIO · DEPÓSITO NORTE"*, *"CONTENEDOR"*, *"ANTIGÜEDAD"*.
  - Estados (badges): **MAYÚSCULAS** cortas — *"INSPECCIÓN PENDIENTE"*, *"EN REPARACIÓN"*, *"DISPONIBLE"*.
- **Datos:** los códigos ISO (*MSKU 204418-7*), IDs de orden (*#RP-1183*), fechas (*2026-06-12 08:41*) y métricas se muestran **en fuente mono**, siempre. Las fechas en formato `YYYY-MM-DD`.
- **Números:** los KPI van grandes y desnudos (*142*, *57*, *11*) con una etiqueta en mayúsculas arriba y una nota chica abajo (*"32 esperando repuesto"*). Sin decoración innecesaria.
- **Emoji:** **no se usan.** La iconografía es Lucide.
- **Vibe:** sala de control / torre de operaciones. Calma, legible, con señales de color claras cuando algo necesita atención.

**Ejemplos de copy:**
- Eyebrow + título: `PATIO · DEPÓSITO NORTE` / **Panel de control**
- Alerta: *"31 días en Reparación Pendiente sin avanzar. Reparación detenida esperando repuesto estructural (ETA 21 jun). Supera el umbral de 30 días."*
- Acción primaria: *"Registrar ingreso"* · *"Crear orden de reparación"* · *"Finalizar reparación"*
- Pregunta de decisión: *"¿El equipo requiere reparación?"* → Sí / No

---

## FUNDAMENTOS VISUALES

**Dirección:** *control-room oscuro, industrial, utilitario.* Superficies de acero profundo, una sola marca azul-señal, y colores de estado que se leen de un vistazo.

### Color
- **Base neutra (acero/slate frío):** la app vive sobre `--steel-900` (#0e131d); paneles hundidos `--steel-880`, tarjetas `--steel-850`, superficies elevadas `--steel-800`. El texto va de `--steel-050` (primario) a `--steel-500` (mute).
- **Marca:** **azul señal** `--blue-500` (#1f9cf0), con `--blue-400` para hover/glow. Es el único color "de marca"; se usa con moderación (acciones primarias, foco, eyebrow, estado activo del nav).
- **Señales operativas:** verde `--green-500` (listo/OK), ámbar `--amber-500` (atención/espera), rojo `--red-500` (crítico / +30 días). Los badges usan **superficie tintada + texto y borde del color** (no relleno sólido), salvo casos sólidos de énfasis.
- **5 acentos de reparación:** estructural (coral `--rep-estructural`), interior (teal), rotulación (oro), pintura (azul), regulatoria (violeta). Se usan en `RepairTag` y en gráficos por tipo.
- **Vibe del color:** frío, técnico, alto contraste sobre oscuro. Nada de gradientes violáceos decorativos; los gradientes solo aparecen en el logo.

### Tipografía
- **Display — Space Grotesk** (`--font-display`): títulos, KPIs y métricas. Grotesca técnica, tracking ceñido (`--ls-tight`).
- **Cuerpo / UI — IBM Plex Sans** (`--font-body`): texto de interfaz y contenido.
- **Datos — IBM Plex Mono** (`--font-mono`): códigos ISO, IDs, fechas, números de tabla, eyebrows en mayúsculas.
- Escala px-based, `--text-2xs` (11) → `--text-5xl` (52). En pantalla nunca por debajo de 11px (mono) / 13px (cuerpo).
- ⚠️ **Sustitución de fuentes:** las tres se cargan desde **Google Fonts CDN** porque no se aportaron binarios. Ver *Caveats*.

### Espaciado, radios, bordes, sombras
- **Espaciado:** base 8px, tokens `--space-1` (4) … `--space-20` (80). Densidad **cómoda**.
- **Radios:** restringidos / "engineered" — `--radius-md` (8px) para controles y tarjetas; `--radius-pill` solo para badges/medidores. Nada excesivamente redondeado.
- **Bordes:** finos (1px), de baja opacidad sobre oscuro (`--border-subtle` / `--border-default` / `--border-strong`). El borde, no la sombra, es el principal separador de superficies.
- **Sombras:** suaves y oscuras (`--shadow-sm/md/lg`). La profundidad viene de combinar superficie + borde, no de sombras fuertes. Existe un **glow de acento** (`--glow-accent`) para resaltar una tarjeta clave (p. ej. KPI en foco).

### Movimiento, hover y press
- **Easing:** `--ease-out` (cubic-bezier(.22,1,.36,1)); duraciones `--dur-fast` 120ms / `--dur-base` 180ms / `--dur-slow` 280ms. Sobrio: transiciones de color y de barras de progreso, sin bounce ni loops decorativos.
- **Hover:** sube de superficie (transparent → `--surface-hover`) y aclara el texto; los botones primarios pasan a `--blue-400`. Las filas de tabla resaltan el fondo entero.
- **Press:** `translateY(1px)` en botones (hundir). No se escala.
- **Foco:** anillo `0 0 0 3px var(--focus-ring)` (azul translúcido) en todos los controles.

### Cards & layout
- **Card:** superficie `--surface-card`, borde sutil, radio `lg`, con cabecera opcional (título en display + acciones a la derecha) separada por borde. Variante `bodyFlush` para tablas a sangre.
- **Layout app:** sidebar fijo oscuro (`--sidebar-w` 244px) + topbar fijo (`--topbar-h` 60px) con buscador de contenedor; contenido scrolleable. Grillas asimétricas (p. ej. 1.7fr / 1fr) para dar peso a la tabla principal.
- **Transparencia/blur:** mínima; los badges usan colores tintados con alpha; no se abusa de glass/blur.

---

## ICONOGRAFÍA

- **Set:** [**Lucide**](https://lucide.dev) — íconos de **trazo** (outline), `stroke-width: 1.75`, esquinas redondeadas. Coheren­tes con la estética técnica.
- **Carga:** desde **CDN** (`unpkg.com/lucide@0.460.0`). En el UI kit se renderizan con un componente React `Icon` (ver `ui_kits/depot/shell.jsx`) que aísla la mutación de Lucide del árbol de React.
- **Color:** los íconos heredan `currentColor`; se tiñen con el color del contexto (mute por defecto, acento si está activo, rojo en alertas).
- **Íconos clave del dominio:** `container`, `log-in` (ingreso), `truck` (despacho), `clipboard-check` (inspección), `wrench` (reparación), `paint-roller` (pintura), `shield-check` (regulatoria), `tag` (rotulación), `package-search` (repuesto), `clock-alert` (demorado/+30 días), `layout-dashboard`.
- **Emoji / unicode:** no se usan como íconos. Única excepción tipográfica: el chevron `▾` del `Select` y flechas de delta `▲▼` en `StatCard` (caracteres, no íconos).
- **Logo:** SVG vectorial propio — `assets/logo-full.svg` (marca + wordmark) y `assets/logo-mark.svg` (solo tile). Mark = stack de contenedores vistos de frente, con el bloque superior desplazado (flujo), sobre tile azul con gradiente sutil.

---

## Índice / manifiesto

**Raíz**
- `styles.css` — punto de entrada global (solo `@import`). Los consumidores enlazan **este** archivo.
- `readme.md` — esta guía.
- `SKILL.md` — para usar como Agent Skill en Claude Code.

**`tokens/`** — `fonts.css` (@import Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radios/sombras/motion/z).

**`assets/`** — `logo-full.svg`, `logo-mark.svg`.

**`components/`** (namespace runtime: `window.TankFlowDesignSystem_32ec47`)
- `forms/` — `Button`, `IconButton`, `Input`, `Select`, `Switch`
- `data/` — `StatusBadge`, `RepairTag`, `AgingIndicator`, `StatCard`
- `layout/` — `Card`, `SectionHeader`
- Cada uno: `.jsx` + `.d.ts` + `.prompt.md`; una `*.card.html` por carpeta para la pestaña Design System.

**`guidelines/`** — tarjetas de especímenes (colores, tipografía, espaciado, marca, iconografía) que pueblan la pestaña Design System.

**`ui_kits/depot/`** — recreación de la app:
- `index.html` — app interactiva (panel → ingreso → inspección → detalle/tracking)
- `shell.jsx` (sidebar + topbar + `Icon`), `Dashboard.jsx`, `Intake.jsx`, `Inspection.jsx`, `ContainerDetail.jsx`, `data.js` (datos mock)

---

## Caveats
- **Fuentes desde CDN, no self-hosted.** Space Grotesk, IBM Plex Sans y IBM Plex Mono se cargan desde Google Fonts. Si querés self-hosting (offline, performance), aportá los `.woff2` y se agregan reglas `@font-face` en `tokens/fonts.css`.
- **Marca generada.** Logo, paleta y voz fueron diseñados para TankFlow; reemplazá los assets de marca si existen oficiales.
- Los datos del UI kit son **mock** (ficticios) solo para la recreación visual.
