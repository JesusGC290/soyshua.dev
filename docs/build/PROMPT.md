# PROMPT MAESTRO — Rediseño completo de soyshua.dev

> **Cómo usar este archivo:** entrégaselo a Fable 5 como encargo único. Prompt sugerido:
> *"Lee `docs/build/PROMPT.md` y los archivos que referencia, y ejecuta el rediseño completo del sitio siguiendo el spec. Trabaja en una rama nueva. Al terminar, corre la verificación y repórtame el resultado."*

Eres el desarrollador que va a rediseñar **soyshua.dev** de punta a punta en una sola pasada: nuevo sistema de diseño, nueva estructura multi-página, contenido general real y actualización total de la página principal.

## Contexto en una línea
soyshua.dev deja de ser una landing de venta y se convierte en la **bitácora de taller** de Shua (Jesús García, cofundador y CMO en Aztecknology): un hub personal de valor donde documenta, build-in-public, cómo construye Nei Digital y otros productos aplicando ideas de oferta, marketing, copy y crecimiento a decisiones reales. **No vende nada** en el sitio.

## Lee estos archivos antes de escribir código (en orden)
1. `docs/build/01-design-system.md` — paleta, tipografía, motivos visuales, qué se elimina. Dirección visual aprobada: "Bitácora de taller".
2. `docs/build/02-arquitectura.md` — rutas, colecciones de contenido, componentes.
3. `docs/build/03-contenido.md` — **copy real y final** para cada página. Úsalo tal cual.
4. `docs/build/04-tecnico.md` — instrucciones técnicas exactas (Astro 6, Tailwind v4, @fontsource, webhook, qué conservar/reemplazar).
- Contexto estratégico de fondo (no imprescindible, pero útil): `docs/plan-sitio.md`.

## Orden de ejecución sugerido
1. Rama nueva (p. ej. `rediseno-bitacora`).
2. Base de diseño: instalar @fontsource, actualizar `tailwind.config.mjs`, reescribir `global.css`, actualizar `Layout.astro` (fuentes + meta por defecto).
3. Componentes compartidos: `Nav`, `Footer`, `LeadForm`, `Sello`, `EntryCard`, `ResourceCard`, `ProjectCard`.
4. Colecciones/datos: `src/content.config.ts`, carpeta `src/content/bitacora/`, `src/data/recursos.ts`, datos de proyectos.
5. Páginas: `/` (reescritura total), `/sobre-mi`, `/proyectos`, `/recursos`, `/bitacora`, `/bitacora/[...slug]`.
6. Verificación (checklist de `04-tecnico.md`).

## Reglas duras (no negociables)
- **Sin placeholders, sin lorem, sin datos inventados.** Si un contenido no está en `03-contenido.md`, no lo fabriques. Al lanzar, la bitácora no tiene artículos publicados: se maneja con la sección "Próximamente" (roadmap real) — NO inventes artículos.
- **Cero CTAs de venta.** Ningún "compra", "agenda una llamada", "contrata". Los proyectos se enlazan como referencia ("ver el sitio"), no como venta.
- **Respeta la dirección visual "Bitácora de taller".** Nada del diseño viejo (verde salvia, Outfit/Inter, bento cards, stickers, emojis de UI, degradado radial). Ver lista de eliminación en `01-design-system.md`.
- **Conserva lo indicado** en `04-tecnico.md`: webhook de Make.com + honeypot, PDF de la Calculadora, foto de perfil, config de Astro/Cloudflare, scripts de npm con su prefijo de PATH.
- **No dark mode.** Modo claro único (papel).
- Español en todo el contenido. Sentence case en títulos y botones (no Title Case, no MAYÚSCULAS salvo los "sellos" tipográficos).

## Definición de "terminado"
- Las 6 rutas responden y se ven coherentes con la dirección visual.
- `npm run build` pasa sin errores; `npm run dev` levanta limpio.
- Fuentes IBM Plex cargan (sin fallback); fondo papel con líneas sutiles; sin rastro del diseño viejo.
- `LeadForm` funciona contra el webhook y muestra estado de éxito.
- Responsive (móvil ~375px sin scroll horizontal), focus visible, sin errores de consola.
- Reporta: qué archivos creaste/modificaste, cómo corriste la verificación, y cualquier decisión que tomaste ante una ambigüedad.

## Lo que NO entra en este encargo
- Escribir las piezas de blog del roadmap (las 5). Se escriben después, a mano, con Shua. Aquí solo dejas la estructura + la sección "Próximamente".
- Nuevo favicon / branding gráfico adicional (opcional, no bloquea).
- Funnel de venta (decisión explícita: no existe todavía).
