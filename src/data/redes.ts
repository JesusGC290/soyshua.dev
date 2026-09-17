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
