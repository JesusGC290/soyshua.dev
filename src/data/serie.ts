/**
 * Serie "Cómo iniciar un negocio gastronómico y no perder tus ahorros en el intento".
 * Es una sección propia, aparte de la bitácora: 13 episodios (0 al 12), uno por área
 * del negocio. Cada episodio es un video y una entrada aquí.
 */

export type PilarSerie = 'numeros' | 'trincheras' | 'tech' | 'mentalidad';

export interface PilarSerieInfo {
  clave: PilarSerie;
  nombre: string;
  descripcion: string;
}

export const pilaresSerie: PilarSerieInfo[] = [
  {
    clave: 'numeros',
    nombre: 'Números que sí importan',
    descripcion: 'Punto de equilibrio, costos, márgenes, precios y caja. Sin adornos.',
  },
  {
    clave: 'trincheras',
    nombre: 'En las trincheras',
    descripcion: 'El diario real de Los de Caché: abrir, fallar, cerrar, arreglar, reintentar.',
  },
  {
    clave: 'tech',
    nombre: 'Tech para tu negocio',
    descripcion: 'Los sistemas que usas para controlar el negocio en lugar de perseguirlo.',
  },
  {
    clave: 'mentalidad',
    nombre: 'Mentalidad de emprendedor',
    descripcion: 'Las decisiones difíciles y lo que cuestan por dentro.',
  },
];

export function nombreDePilarSerie(clave: string): string {
  return pilaresSerie.find((pilar) => pilar.clave === clave)?.nombre ?? clave;
}

export interface Capitulo {
  episodio: number;
  titulo: string;
  descripcion: string;
  pilar: PilarSerie;
  /** Slug del .md en `src/content/serie/`. Sin slug = aún no escrito. */
  slug?: string;
}

/** El índice completo de la serie. Es el mapa que promete el episodio 0. */
export const capitulos: Capitulo[] = [
  {
    episodio: 0,
    titulo: 'Abrí mi taquería y la tuve que cerrar en 3 días',
    descripcion: 'Qué pasó, por qué cerré en lugar de seguir perdiendo, y qué voy a mostrar aquí.',
    pilar: 'trincheras',
    slug: 'abri-mi-taqueria-y-la-cerre-en-3-dias',
  },
  {
    episodio: 1,
    titulo: 'Los números antes de abrir: mi punto de equilibrio real',
    descripcion:
      'Cuánto me cuesta tener la taquería abierta un mes, con la lista completa y la comisión de tarjeta que casi nadie cuenta.',
    pilar: 'numeros',
    slug: 'punto-de-equilibrio-gastos-fijos-reales',
  },
  {
    episodio: 2,
    titulo: 'Cuánto te cuesta de verdad cada platillo',
    descripcion: 'Costeo de receta e insumos. Aquí el punto de equilibrio deja de ser el piso.',
    pilar: 'numeros',
  },
  {
    episodio: 3,
    titulo: 'Cómo poner precios sin quebrar ni espantar al cliente',
    descripcion: 'El número que cobras sale de tus costos, no de lo que cobra el de enfrente.',
    pilar: 'numeros',
  },
  {
    episodio: 4,
    titulo: 'Inventario y mermas',
    descripcion: 'Lo que se echa a perder también se paga. Cómo lo medí.',
    pilar: 'numeros',
  },
  {
    episodio: 5,
    titulo: 'Proveedores y compras',
    descripcion: 'A quién le compras y cada cuánto cambia tu costo más de lo que crees.',
    pilar: 'trincheras',
  },
  {
    episodio: 6,
    titulo: 'La operación y los tiempos',
    descripcion: 'Flujo de cocina y hora pico: dónde se cae el servicio.',
    pilar: 'trincheras',
  },
  {
    episodio: 7,
    titulo: 'Personal: roles y contratación',
    descripcion: 'Mi gasto más grande. Y el que peor tenía medido.',
    pilar: 'trincheras',
  },
  {
    episodio: 8,
    titulo: 'Punto de venta y control',
    descripcion: 'Qué tienes que poder ver del negocio sin estar parado adentro.',
    pilar: 'tech',
  },
  {
    episodio: 9,
    titulo: 'Manejo de caja y efectivo',
    descripcion: 'Dónde se va el dinero que sí vendiste.',
    pilar: 'numeros',
  },
  {
    episodio: 10,
    titulo: 'Los primeros clientes',
    descripcion: 'Abrir sin público es abrir a perder. Lo aprendí caro.',
    pilar: 'trincheras',
  },
  {
    episodio: 11,
    titulo: 'Permisos y trámites',
    descripcion: 'Lo aburrido que te puede cerrar el negocio.',
    pilar: 'trincheras',
  },
  {
    episodio: 12,
    titulo: 'Mis errores, uno por uno',
    descripcion: 'El recuento completo, sin maquillaje.',
    pilar: 'mentalidad',
  },
];

/** `Ep. 01` — el sello de cada episodio. */
export function selloEpisodio(episodio: number): string {
  return `Ep. ${String(episodio).padStart(2, '0')}`;
}
