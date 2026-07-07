# 04 — Especificación técnica

Stack actual (conservar): **Astro 6.4 + Tailwind v4** (`@tailwindcss/vite`), Node ≥22.12, deploy a **Cloudflare Pages** (`wrangler.toml`, salida `dist`). No cambiar de framework ni de proveedor.

## Fuentes: migrar de CDN a @fontsource

Hoy `Layout.astro` carga Outfit + Inter vía `<link>` a Google Fonts. Reemplazar por auto-hospedaje:

1. Instalar:
   ```
   npm i @fontsource/ibm-plex-mono @fontsource/ibm-plex-sans
   ```
   (Los scripts de npm usan el prefijo `PATH="$PWD/.node-local/bin:$PATH"`. Respetar ese entorno; ver `package.json`.)

2. En `Layout.astro`, eliminar los tres `<link>` de Google Fonts y sus `preconnect`. Importar solo los pesos usados (en el frontmatter del layout o en `global.css`):
   ```
   import '@fontsource/ibm-plex-mono/700.css';
   import '@fontsource/ibm-plex-mono/400.css';
   import '@fontsource/ibm-plex-sans/400.css';
   import '@fontsource/ibm-plex-sans/500.css';
   ```

## Tailwind v4: tokens

El proyecto puentea un config JS con `@config '../../tailwind.config.mjs'` desde `global.css`. Mantener ese enfoque. En `tailwind.config.mjs`, **reemplazar** `colors` y `fontFamily`:

```js
export default {
  // quitar darkMode: 'class' — el sitio es modo claro único
  theme: {
    extend: {
      colors: {
        paper: '#EBE8DB',
        card: '#F5F2E7',
        ink: '#23281F',
        'ink-soft': '#5B5A4C',
        rule: '#B7B29B',
        brass: '#8F5A26',
        moss: '#3E5940',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

## global.css: fondo de cuaderno

Reemplazar el bloque `body` actual (fondo `radial-gradient` salvia) por:
```css
body {
  background-color: #EBE8DB;
  color: #23281F;
  background-image: repeating-linear-gradient(to bottom, transparent 0, transparent 34px, rgba(91,90,76,.14) 35px);
  background-attachment: fixed;
}
html { scroll-behavior: smooth; }
```
Mantener `@import 'tailwindcss';` y `@config '../../tailwind.config.mjs';` al inicio.

## Formulario de suscripción: reusar Make.com

Extraer la lógica del `<script>` del `index.astro` actual a un componente `LeadForm.astro` reutilizable. **Conservar exactamente:**
- Webhook: `https://hook.us2.make.com/57p3buwbr7de8h1u0ek47v3aknfxr36f`
- Honeypot: input oculto `name="a_password_confirm_hash"` (fuera de pantalla, `tabindex="-1"`, `autocomplete="new-password"`). Si viene lleno → simular éxito sin enviar.
- Envía `FormData` con `nombre` y `email`.
- Estados: "Enviando…", éxito (oculta form, muestra mensaje), error (alert + restaura botón).
- IDs únicos por instancia si hay varios forms en una misma página (el modelo híbrido puede repetir el form) — parametrizar para evitar colisión de `id`.

## Contenido y datos

- `src/content.config.ts` — colección `bitacora` (schema en `02-arquitectura.md`).
- `src/content/bitacora/` — carpeta para los `.md` (vacía o con drafts al lanzar; **no crear artículos falsos**).
- `src/data/recursos.ts` — array con 1 recurso (Calculadora).
- `src/data/proyectos.ts` (opcional) — o hardcode en `/proyectos`.

## Conservar (no tocar salvo lo indicado)

- `astro.config.mjs` (site `https://soyshua.dev`, plugin tailwind vite).
- `wrangler.toml` (deploy Cloudflare Pages).
- `package.json` scripts con el prefijo de PATH; solo AÑADIR las deps de @fontsource.
- `src/img/soyshua.jpg` (foto de perfil).
- `public/recursos/calculadora-equilibrio.pdf` (recurso real, 16MB — no re-subir ni borrar).
- `public/favicon.svg` y `favicon.ico` (se pueden rediseñar después; no bloquea).
- Meta SEO / OG / canonical de `Layout.astro` (actualizar textos por defecto, mantener estructura).

## Reemplazar por completo

- `src/pages/index.astro` — reescritura total con el nuevo Inicio.
- `src/styles/global.css` — nuevo fondo/colores (arriba).
- `tailwind.config.mjs` — nuevos tokens (arriba).

## Verificación antes de dar por hecho

1. `npm run build` compila sin errores.
2. `npm run dev` levanta y las 6 rutas responden: `/`, `/bitacora`, `/recursos`, `/proyectos`, `/sobre-mi`, y una entrada de prueba `/bitacora/[slug]` (crear un draft temporal para probar el render de `[slug]`, luego borrarlo o dejarlo como `draft: true`).
3. Las fuentes IBM Plex cargan (no fallback a system) — verificar en el navegador.
4. El fondo es papel `#EBE8DB` con líneas sutiles; no queda rastro del verde salvia ni de Outfit/Inter.
5. El `LeadForm` envía al webhook y muestra el estado de éxito.
6. Sin errores de consola; focus visible; layout responsive (móvil ~375px sin scroll horizontal).
