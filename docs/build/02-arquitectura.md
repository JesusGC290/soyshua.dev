# 02 — Arquitectura del sitio

De una sola landing → sitio multi-página. Stack actual se conserva: Astro 6 + Tailwind v4 + deploy a Cloudflare Pages (`dist`).

## Rutas / páginas

| Ruta | Página | Propósito |
|---|---|---|
| `/` | Inicio | Quién es Shua, qué es este sitio, entrada a los pilares, últimas entradas / próximamente, recurso destacado, suscripción. |
| `/bitacora` | Índice de bitácora (blog) | Lista de entradas publicadas + sección "Próximamente" con el roadmap real. |
| `/bitacora/[slug]` | Entrada individual | Artículo desde la colección de contenido. Al final, CTA de suscripción. |
| `/recursos` | Biblioteca de recursos | Ebooks / plantillas descargables. Lanza con la Calculadora (ya existe). |
| `/proyectos` | Proyectos | Nei Digital (principal), LexGuard, Pide.Land, Aztecknology (con Detalle.Digital + Aprandr mencionados). |
| `/sobre-mi` | Sobre mí | Bio actualizada (Cofundador & CMO en Aztecknology, no solo "Developer"). |

Navegación (header, en todas las páginas): `Inicio · Bitácora · Recursos · Proyectos · Sobre mí`. El nombre de la bitácora es genérico por ahora ("Bitácora") — sin marca propia todavía.

## Colecciones de contenido (Astro 6 content layer)

### `bitacora` — entradas de blog (Markdown)
`src/content.config.ts` con glob loader sobre `src/content/bitacora/*.md`.

Schema (zod):
```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bitacora = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bitacora' }),
  schema: z.object({
    title: z.string(),
    pilar: z.enum(['oferta', 'marketing', 'copywriting', 'mentalidad', 'sistematizacion']),
    fecha: z.coerce.date(),
    resumen: z.string(),
    proyecto: z.string().optional(),   // ej. "Nei Digital"
    draft: z.boolean().default(false),
  }),
});

export const collections = { bitacora };
```

**Importante — sin placeholders:** al lanzar YA existen **dos** entradas reales publicadas (ver abajo). Las demás piezas del roadmap se escriben después, a mano. NO inventar artículos ni usar lorem. El índice `/bitacora` debe:
- Renderizar entradas publicadas. **Ya hay dos** (`draft: false`) — respétalas, no las sobrescribas:
  - `src/content/bitacora/nei-digital-precio-value-equation.md` (№ 02, pilar `oferta`)
  - `src/content/bitacora/por-que-no-tengo-funnel-de-venta.md` (№ 03, pilar `marketing`)
- Mostrar una sección **"Próximamente"** con las piezas del roadmap que aún NO están escritas (ver `03-contenido.md`): solo las piezas №04 y №05. Las №02 y №03 ya están publicadas, no van en "Próximamente".

Cuando escribamos una pieza nueva, se agrega como `.md` real en `src/content/bitacora/` y pasa a publicada.

### Recursos — datos estructurados
Arrancar simple: `src/data/recursos.ts` con un array tipado. Un item al lanzar (Calculadora). Fácil de extender.
```ts
export interface Recurso {
  titulo: string;
  descripcion: string;
  tipo: string;          // "PDF + Prompt + Video"
  pilar: string;         // "Sistematización + IA"
  href: string;          // "/recursos/calculadora-equilibrio.pdf" o enlace
  numero: string;        // "№ 01"
}
```

### Proyectos — hardcode en la página
Conjunto pequeño y estable; no necesita colección. Datos en el propio `/proyectos` (o `src/data/proyectos.ts`). Contenido en `03-contenido.md`.

## Componentes a crear (`src/components/`)

- `Nav.astro` — header con navegación.
- `Footer.astro` — footer con enlaces (Aztecknology, Instagram, TikTok, LinkedIn) + © soyshua.dev.
- `LeadForm.astro` — formulario de suscripción reutilizable. **Reusa el webhook de Make.com y el honeypot** del `index.astro` actual (ver `04-tecnico.md`). Se usa en: Inicio (central), Recursos, y al final de cada entrada de bitácora (modelo híbrido).
- `EntryCard.astro` — ficha de entrada de bitácora (con esquina doblada + sello de pilar).
- `ResourceCard.astro` — ficha de recurso.
- `ProjectCard.astro` — ficha de proyecto (con nivel/prioridad como sello).
- `Sello.astro` (o clase utilitaria) — el "tag/stamp" de mayúsculas espaciadas.
- `Section.astro` (opcional) — wrapper de sección con ritmo vertical consistente.

## Modelo de suscripción (híbrido, confirmado)
- Punto central visible: en Inicio y en Recursos.
- Además: `LeadForm` al final de cada entrada de bitácora.
- Todos apuntan al mismo webhook de Make.com.

## Layout / SEO
`src/layouts/Layout.astro` se conserva como layout base (meta, OG, canonical) pero:
- Se le quitan los `<link>` a Google Fonts (se reemplazan por @fontsource, ver técnico).
- `<html lang="es">` se mantiene.
- Título/descripción por defecto se actualizan (ver `03-contenido.md`).
- `<body>` usa `font-sans` (Plex Sans) y el fondo de cuaderno.
