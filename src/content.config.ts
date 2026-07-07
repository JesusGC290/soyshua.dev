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

export const collections = { bitacora };
