export type PilarClave = 'oferta' | 'marketing' | 'copywriting' | 'mentalidad' | 'sistematizacion';

export interface Pilar {
  clave: PilarClave;
  nombre: string;
  referente: string;
  descripcion: string;
}

export const pilares: Pilar[] = [
  {
    clave: 'oferta',
    nombre: 'Oferta y ventas',
    referente: 'Alex Hormozi',
    descripcion: 'Cómo se construye y se pone precio a lo que vendes.',
  },
  {
    clave: 'marketing',
    nombre: 'Marketing y funnels',
    referente: 'Russell Brunson',
    descripcion: 'Cómo se llega a la gente y se construye audiencia.',
  },
  {
    clave: 'copywriting',
    nombre: 'Copywriting y marketing directo',
    referente: 'Dan Kennedy',
    descripcion: 'Cómo se escribe para que la gente actúe.',
  },
  {
    clave: 'mentalidad',
    nombre: 'Mentalidad y crecimiento',
    referente: 'Jim Rohn, Tony Robbins',
    descripcion: 'El lado humano de construir y sostener negocios.',
  },
  {
    clave: 'sistematizacion',
    nombre: 'Sistematización + IA',
    referente: 'Marco propio',
    descripcion: 'Cómo se ordena y automatiza la operación con software e IA.',
  },
];

export function nombreDePilar(clave: string): string {
  return pilares.find((pilar) => pilar.clave === clave)?.nombre ?? clave;
}
