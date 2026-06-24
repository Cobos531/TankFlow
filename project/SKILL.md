---
name: tankflow-design
description: Use this skill to generate well-branded interfaces and assets for TankFlow, a container-depot management system, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** TankFlow — depósito/patio de contenedores. UI en **español**, estética *control-room* oscura/industrial.
- **Entry CSS:** link `styles.css` (only) — pulls every token + font.
- **Fonts:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (códigos/datos), vía Google Fonts CDN.
- **Color:** base acero (`--steel-*`, app sobre `--steel-900`), marca azul `--blue-500`, señales `--green/amber/red-500`, 5 acentos `--rep-*`.
- **Icons:** Lucide (CDN), trazo 1.75. Sin emoji.
- **Components:** `window.TankFlowDesignSystem_32ec47` → `Button`, `IconButton`, `Input`, `Select`, `Switch`, `StatusBadge`, `RepairTag`, `AgingIndicator`, `StatCard`, `Card`, `SectionHeader`. See each `components/**/*.prompt.md`.
- **Full app recreation:** `ui_kits/depot/`.
