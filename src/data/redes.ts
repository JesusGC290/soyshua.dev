/**
 * Mis redes. Fuente única de verdad: el footer, "Sobre mí" y los CTA de la
 * serie salen de aquí, para que un handle nuevo no haya que perseguirlo
 * por medio sitio.
 */

export interface Red {
  label: string;
  href: string;
  /** Handle tal como se dice en voz alta y se escribe en pantalla. */
  handle: string;
}

/** Mismo nombre en todas: soyshua.dev. */
export const redes: Red[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/soyshua.dev',
    handle: '@soyshua.dev',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@soyshua.dev',
    handle: '@soyshua.dev',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/soyshua',
    handle: 'in/soyshua',
  },
];

/** La principal: a donde mandamos el tráfico del sitio. */
export const redPrincipal = redes[0];

/** El estudio. Va junto a las redes en el footer, pero no es una red. */
export const aztecknology = {
  label: 'Aztecknology',
  href: 'https://aztecknology.com',
};

/**
 * Los de Caché — la taquería. Cuenta propia, aparte de la marca personal.
 * El contenido de soyshua.dev empuja seguidores hacia acá.
 *
 * Nota: la URL del reel va sin el parámetro `stkn` con el que se comparte.
 * Ese token es de la sesión de quien comparte y no tiene por qué quedar
 * publicado en el sitio.
 */
export const losDeCache = {
  nombre: 'Los de Caché',
  descripcion: 'Tacos al carbón en Ladrón de Guevara, Guadalajara.',
  sitio: 'https://losdecache.com',
  instagram: 'https://www.instagram.com/losdecachetacos',
  handle: '@losdecachetacos',

  /**
   * Estado real: cerrada. Abrió y cerró a los 3 días; reabre más adelante,
   * sin fecha definida.
   *
   * IMPORTANTE: losdecache.com todavía no refleja el cierre (anuncia horario
   * de 7 pm a 12 am). Por eso soyshua.dev no republica horario ni dirección:
   * no vamos a mandar a nadie a un lugar cerrado. Cuando reabra, se pone
   * `abierta: true` y se cambia la nota — nada más.
   */
  abierta: false,
  estado: 'Cerrada por ahora',
  notaEstado: 'Cerró a los 3 días de abrir. Reabre cuando los números cierren.',
};

/** El reel donde arranca la serie. */
export const reelDeArranque = 'https://www.instagram.com/reel/DdXOUPzRQvh/';
