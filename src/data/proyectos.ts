export interface Proyecto {
  nombre: string;
  sello: string;
  descripcion: string;
  url: string;
  urlLabel: string;
  destacado?: boolean;
}

export const proyectos: Proyecto[] = [
  {
    nombre: 'Nei Digital',
    sello: 'Foco principal',
    descripcion:
      'Suite operativa para restaurantes: menú digital con IA, punto de venta, reservas y lealtad —sin hardware costoso. Es donde más aprendo de oferta y precio ahora mismo; el rediseño de sus planes lo estoy documentando en la bitácora.',
    url: 'https://nei.digital',
    urlLabel: 'Ver nei.digital →',
    destacado: true,
  },
  {
    nombre: 'LexGuard',
    sello: 'Secundario',
    descripcion:
      'Un sistema operativo con agentes de IA para negocios con procesos repetibles —CRM con WhatsApp, automatización de documentos, MCPs. Varios módulos en beta.',
    url: 'https://lexguard.app',
    urlLabel: 'Ver lexguard.app →',
  },
  {
    nombre: 'Pide.Land',
    sello: 'Ocasional',
    descripcion:
      'Listas curadas de lugares —tus recomendaciones de siempre, ordenadas y compartibles. "Tu ciudad, curada por quien sí la vive."',
    url: 'https://pide.land',
    urlLabel: 'Ver pide.land →',
  },
  {
    nombre: 'Aztecknology',
    sello: 'El estudio',
    descripcion:
      'El estudio donde construimos todo esto, con Victor Rojas y el equipo. Liderazgo técnico y productos propios. Además de los de arriba, tenemos en producción Detalle.Digital (regalos con QR experiencial) y Aprandr (EdTech con IA).',
    url: 'https://aztecknology.com',
    urlLabel: 'Ver aztecknology.com →',
  },
];
