export interface Recurso {
  titulo: string;
  descripcion: string;
  tipo: string;
  pilar: string;
  href: string;
  numero: string;
  nota?: string;
}

export const recursos: Recurso[] = [
  {
    numero: '№ 01',
    titulo: 'Calculadora IA de Equilibrio',
    descripcion:
      'El prompt exacto para calcular tu punto de equilibrio en segundos, con la guía en PDF y el video donde lo explico paso a paso.',
    tipo: 'PDF + Prompt + Video',
    pilar: 'Sistematización + IA',
    href: '/recursos/calculadora-equilibrio.pdf',
    nota: 'Fue mi primer ebook y mi contenido más visto. Sigue aquí porque funciona.',
  },
];
