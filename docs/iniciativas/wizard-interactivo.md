# Iniciativa: Herramientas interactivas con IA (wizard) — de sitio de lectura a sitio de interacción

Brief de handoff para trabajar esta iniciativa en su propia conversación. Léelo junto con la base compartida (abajo).

## Base compartida (leer primero)
- `docs/plan-sitio.md` — posicionamiento, voz, identidad visual "bitácora de taller".
- `docs/build/01-design-system.md` — tokens de diseño (paleta, tipografía Plex, motivos de cuaderno) para que la herramienta se vea nativa del sitio.
- `src/content/bitacora/nei-digital-precio-value-equation.md` — la pieza que da origen a la primera herramienta (ejercicio de oferta/valor de Hormozi).

## Visión
Transformar soyshua.dev de un sitio de **lectura** a uno de **interacción**: las mismas prácticas/ejercicios que Shua hace (empezando por el costeo de productos/servicios con el marco de Hormozi) se vuelven **wizards estructurados** que el usuario completa en el sitio. Más valor, sin fricción.

## Primer tool: wizard de oferta / costeo (Hormozi)
El usuario responde un wizard guiado (paso a paso, basado en la ecuación de valor y el ejercicio de costeo). Con esas respuestas el sistema:
- **Salida A (por defecto):** genera un **prompt listo para pegar** en el LLM favorito del usuario, ya con toda la base estructurada, para que termine el análisis donde quiera.
- **Salida B (opcional):** devuelve directamente el **análisis/respuesta** hecho por una IA en el mismo sitio.

Conecta narrativamente con la pieza #2 del blog: "aquí conté cómo lo hice; ahora hazlo tú".

## Principios (no negociables)
- **Cero fricción:** sin crear cuenta, sin login, sin que el usuario ponga su propia API key.
- **MVP barato:** correr sobre **Cloudflare AI** con límites, para no generar costos. Modelo pequeño, tokens acotados.
- **Identidad "Bitácora de taller":** el wizard se ve parte del cuaderno (papel, sellos, Plex), no un widget ajeno.
- **Honestidad:** si hay límites de uso, se comunican con claridad.

## Arquitectura técnica propuesta (a validar)
Stack actual: Astro 6 + Cloudflare Pages (salida estática `dist`, ver `wrangler.toml`).
- **Cómputo servidor:** Cloudflare **Pages Functions** (`functions/`) con binding de **Workers AI** (`env.AI`), o el adaptador Cloudflare de Astro para endpoints SSR. La IA corre del lado servidor → la API key es de Cloudflare, nunca del usuario.
- **Modelo:** uno pequeño del catálogo de Workers AI (ej. Llama 3.x 8B instruct) para mantener costo cercano a cero en el tier gratuito.
- **Flujo:** wizard client-side (Astro + JS, sin framework pesado) recolecta inputs estructurados → `POST` a la Pages Function → la función arma el prompt del sistema, llama a la IA → responde con el prompt final (salida A) o el análisis (salida B).
- **Control de costo/abuso sin cuentas:** Cloudflare **Turnstile** (captcha invisible, gratis), rate limiting (reglas de Cloudflare o contador en KV), tope de tokens por request y por ventana de tiempo.

## Decisiones abiertas (resolver al arrancar)
1. ¿Salida A (prompt para pegar), B (respuesta directa), o ambas con toggle?
2. ¿Pages Functions vs. adaptador SSR de Astro? (implica si el sitio deja de ser 100% estático)
3. Modelo de Workers AI y límites concretos (tokens, requests/día).
4. Definición exacta de los pasos del wizard de costeo (mapearlos al ejercicio real de Hormozi).
5. ¿Dónde vive en el sitio? (sección "Herramientas" nueva, o dentro de `/recursos`)
6. Estrategia anti-abuso definitiva (Turnstile + rate limit) y mensajes de límite.

## Cómo arrancar la conversación
> "Vamos a construir las herramientas interactivas de soyshua.dev. Lee `docs/iniciativas/wizard-interactivo.md` y la base que referencia. Empecemos por cerrar las decisiones abiertas y luego un plan técnico para el primer wizard (costeo con Hormozi) sobre Cloudflare AI, sin fricción para el usuario."
