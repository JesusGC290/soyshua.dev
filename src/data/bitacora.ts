import type { PilarClave } from './pilares';

/**
 * Numeración de pieza (folio) por slug de entrada publicada.
 * Se mantiene aquí para no tocar el frontmatter de los .md ya publicados;
 * al publicar una pieza nueva, agregar su slug con el folio que le toca.
 */
export const numeroDePieza: Record<string, string> = {
  'nei-digital-precio-value-equation': '№ 02',
  'por-que-no-tengo-funnel-de-venta': '№ 03',
};

export interface PiezaProxima {
  numero: string;
  pilar: PilarClave;
  titulo: string;
  descripcion: string;
}

/** Roadmap real: piezas anunciadas que aún no están escritas. */
export const proximamente: PiezaProxima[] = [
  {
    numero: '№ 04',
    pilar: 'copywriting',
    titulo: 'Reescribiendo el copy de mi propio sitio',
    descripcion: 'Apliqué a mí mismo lo que leo de Dan Kennedy. Esto es lo que cambié y por qué.',
  },
  {
    numero: '№ 05',
    pilar: 'mentalidad',
    titulo: 'De "Developer" a cofundador y CMO',
    descripcion: 'El cambio de identidad más incómodo y más útil que he hecho.',
  },
];
