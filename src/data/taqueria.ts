/**
 * Números reales de Los de Caché.
 * Fuente única de verdad: todo lo derivado (total, comisión, punto de equilibrio)
 * se calcula aquí para que el sitio, el video y el PDF nunca se contradigan.
 * Si un gasto cambia, se cambia aquí y todo lo demás se recalcula solo.
 */

export interface GastoFijo {
  concepto: string;
  monto: number;
  nota?: string;
}

/** Nómina semanal real. El mes se calcula con 52 semanas ÷ 12 = 4.33 semanas. */
export const nominaSemanal = 15_600;
export const nominaMensual = Math.round((nominaSemanal * 52) / 12);

/** Variante conservadora: presupuestar a 4 semanas exactas en lugar de 4.33. */
export const nominaCuatroSemanas = nominaSemanal * 4;

export const gastosFijos: GastoFijo[] = [
  { concepto: 'Nómina', monto: nominaMensual, nota: '$15,600/semana × 52 ÷ 12' },
  { concepto: 'Renta', monto: 20_000 },
  { concepto: 'Luz', monto: 5_000 },
  { concepto: 'Redes sociales', monto: 5_000 },
  { concepto: 'Gas', monto: 4_000 },
  { concepto: 'Punto de venta', monto: 1_156 },
  { concepto: 'Fumigación', monto: 1_000 },
  { concepto: 'Internet', monto: 400 },
  { concepto: 'Basura', monto: 400 },
  { concepto: 'Filtros', monto: 300 },
  { concepto: 'Agua', monto: 300 },
];

export const totalFijo = gastosFijos.reduce((suma, gasto) => suma + gasto.monto, 0);

/** El procesador se queda este porcentaje de cada venta con tarjeta. */
export const comisionTarjeta = 0.025;

/** Para que NETEEN los gastos fijos hay que facturar más, porque la comisión se va antes. */
export const ventaNecesariaMes = Math.round(totalFijo / (1 - comisionTarjeta));
export const costoComisionMes = ventaNecesariaMes - totalFijo;

export const diasDelMes = 30;
export const ventaNecesariaDia = Math.round(ventaNecesariaMes / diasDelMes);

/** Total si la nómina se presupuesta a 4 semanas exactas en vez de 4.33. */
export const totalFijoCuatroSemanas = totalFijo - nominaMensual + nominaCuatroSemanas;

/** El gasto más grande de la lista. Se calcula para que el texto nunca mienta. */
export const gastoMayor = gastosFijos.reduce((mayor, gasto) =>
  gasto.monto > mayor.monto ? gasto : mayor,
);

export const renta = gastosFijos.find((gasto) => gasto.concepto === 'Renta')!;

/** Formato de moneda para pantalla: `$105,156`. Sin centavos: son cifras de operación. */
export function pesos(monto: number): string {
  return `$${Math.round(monto).toLocaleString('es-MX')}`;
}

/** Porcentaje legible: `2.5%`. */
export function porcentaje(fraccion: number): string {
  return `${(fraccion * 100).toLocaleString('es-MX', { maximumFractionDigits: 2 })}%`;
}
