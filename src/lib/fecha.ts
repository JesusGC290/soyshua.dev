const MESES = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

/** Formato de sello: `07 JUL 2026`. Usa UTC para no correr el día por zona horaria. */
export function formatearFecha(fecha: Date): string {
  const dia = String(fecha.getUTCDate()).padStart(2, '0');
  return `${dia} ${MESES[fecha.getUTCMonth()]} ${fecha.getUTCFullYear()}`;
}
