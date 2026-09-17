import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bitacora = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bitacora' }),
  schema: z.object({
    title: z.string(),
    pilar: z.enum(['oferta', 'marketing', 'copywriting', 'mentalidad', 'sistematizacion']),
    fecha: z.coerce.date(),
    resumen: z.string(),
    proyecto: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const serie = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/serie' }),
  schema: z.object({
    title: z.string(),
    episodio: z.number().int().nonnegative(),
    pilar: z.enum(['numeros', 'trincheras', 'tech', 'mentalidad']),
    fecha: z.coerce.date(),
    resumen: z.string(),
    /** Anexa el bloque de gastos fijos reales al final de la entrada. */
    numeros: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { bitacora, serie };
