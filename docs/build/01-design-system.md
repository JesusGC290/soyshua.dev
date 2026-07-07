# 01 — Sistema de diseño: "Bitácora de taller"

Concepto: **cuaderno de campo de un operador.** Cada pieza (entrada de blog, recurso, proyecto) se presenta como una ficha fechada, sellada y archivada. Estética técnica pero cálida — papel, tinta, sellos, reglas. Nada de "landing de producto".

Referencia visual aprobada (moodboard): https://claude.ai/code/artifact/70e67149-c6db-408b-aebc-ef6ec99329ae — dirección "Bitácora de taller".

## Paleta (única, modo claro — NO implementar dark mode)

| Token (Tailwind) | Hex | Uso |
|---|---|---|
| `paper` | `#EBE8DB` | Fondo de página (aclarado a propósito para dar contraste al texto) |
| `card` | `#F5F2E7` | Fondo de tarjetas / fichas (un tono más claro que el papel) |
| `ink` | `#23281F` | Texto principal, titulares |
| `ink-soft` | `#5B5A4C` | Texto secundario, metadatos, párrafos de apoyo |
| `rule` | `#B7B29B` | Líneas, bordes, reglas del cuaderno |
| `brass` | `#8F5A26` | **Acento principal** — sellos, tags, esquina doblada, enlaces hover |
| `moss` | `#3E5940` | Acento secundario — usar con moderación (estados, detalles) |

Reglas de color:
- Un solo acento protagónico: **brass**. `moss` es apoyo, no lo uses como segundo acento fuerte.
- Texto sobre `brass` (badges/sellos rellenos): usar `#F5F2E7` (papel claro), nunca blanco puro.
- No degradados, no sombras de colores, no glow. Sombras solo funcionales muy sutiles si acaso.

## Tipografía (producción vía @fontsource, NO CDN)

Superfamilia IBM Plex. Instalar con npm (ver `04-tecnico.md`).

| Rol | Fuente | Pesos | Notas |
|---|---|---|---|
| Display / titulares / sellos | **IBM Plex Mono** | 700 | `font-mono` en Tailwind. Titulares en peso 700, tracking ligeramente negativo. |
| Cuerpo de texto | **IBM Plex Sans** | 400, 500 | `font-sans` en Tailwind. `line-height` ~1.6, ancho de lectura ~65ch. |
| Metadatos (fechas, precios, tags) | **IBM Plex Mono** | 400/500 | mayúsculas espaciadas para "sellos" (`letter-spacing: .08–.12em`, `text-transform: uppercase`). |

Stacks (para `tailwind.config.mjs`):
- `mono`: `['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']`
- `sans`: `['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']`

Escala de tipo (guía, ajustable con `clamp`):
- H1: `clamp(2rem, 5vw, 3.25rem)` / mono 700 / `text-wrap: balance`
- H2: `clamp(1.5rem, 3.5vw, 2.25rem)` / mono 700
- H3: `1.15–1.35rem` / mono 700
- Body: `1rem–1.0625rem` / sans 400 / `leading-relaxed`
- Eyebrow/sello: `0.6875rem` (11px) / mono / uppercase / tracking amplio

## Motivos visuales (la firma del diseño)

1. **Fondo de cuaderno rayado.** Líneas horizontales muy sutiles en el fondo de página:
   ```css
   background-color: #EBE8DB;
   background-image: repeating-linear-gradient(to bottom, transparent 0, transparent 34px, rgba(91,90,76,.14) 35px);
   ```
   Debe ser sutil — apoyo, no protagonista. Considerar aplicarlo al `body` o a un contenedor de fondo, no encima del texto.

2. **Esquina doblada en fichas.** Cada tarjeta de contenido lleva una pequeña "solapa" doblada arriba a la derecha, como ficha archivada:
   ```css
   .card { position: relative; background:#F5F2E7; border:1px solid #B7B29B; }
   .card::before {
     content:""; position:absolute; top:-1px; right:18px;
     width:26px; height:14px; background:#8F5A26;
     clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
   }
   ```

3. **Sellos / tags.** Metadatos de pilar, fecha, estado, tag → en mono, mayúsculas, tracking amplio, color `brass`. Ej: `№ 02 · OFERTA Y VENTAS`, `EN CURSO`, `PDF + PROMPT`.

4. **Numeración de entrada.** Las fichas pueden llevar un número tipo folio (`№ 01`, `№ 02`) SOLO cuando el orden signifique algo (secuencia de bitácora). No numerar por decorar.

5. **Bordes rectos.** Radios de esquina pequeños o nulos (2–4px). Es un cuaderno, no una app de tarjetas redondeadas. Evitar `rounded-2xl` por todos lados.

## Qué se ELIMINA del diseño actual

- Paleta verde salvia `#78866B` / crema `#F5F5F4` como sistema. (El verde salvia NO es el nuevo `moss`; se reemplaza toda la identidad.)
- Fuentes Outfit + Inter.
- Fondo con `radial-gradient` fijo en tonos salvia (`global.css`).
- Tarjetas "bento", esquinas `rounded-2xl`, `backdrop-blur`, sombras suaves tipo producto.
- Stickers/insignias flotantes rotadas ("Build in Public 🚀", "CEO Tech", "⚙️").
- Emojis como elementos de UI (el skill de diseño y esta identidad los prohíben — usar sellos/tipografía).
- Duplicación de formularios (hoy hay dos forms de captura). Se consolida en un componente `LeadForm` reutilizable.

## Accesibilidad y calidad

- Contraste: `ink` sobre `paper`/`card` cumple AA holgado. `ink-soft` solo para texto de apoyo, nunca para cuerpo largo crítico.
- Focus visible en todos los interactivos (anillo `brass` de 2px).
- Respetar `prefers-reduced-motion`: sin animaciones de entrada agresivas.
- Animación con MUCHA moderación: micro-hover en fichas (leve elevación/underline en brass) y quizá una revelación sutil al hacer scroll. Nada más — el exceso de animación delata diseño genérico.
