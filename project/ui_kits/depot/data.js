// TankFlow — mock depot data (shared across UI-kit screens).
// Fake data for visual recreation only.

window.TF_DATA = (function () {
  const navieras = ['Maersk', 'MSC', 'CMA CGM', 'Hapag-Lloyd', 'ONE', 'Evergreen', 'COSCO'];
  const tipos = ['20DV', '40DV', '40HC', '20RF', '45HC', '20TK', '40TK'];
  const repairTypes = ['estructural', 'interior', 'rotulacion', 'pintura', 'regulatoria'];
  const statuses = ['inspeccion-pendiente', 'reparacion-pendiente', 'en-reparacion', 'disponible'];

  // ISO-6346-ish codes
  const codes = [
    'MSKU 204418-7', 'MSCU 773901-2', 'CMAU 510337-9', 'HLXU 668120-4',
    'ONEU 339047-1', 'EGHU 904512-8', 'CSNU 118870-6', 'TGHU 442095-3',
    'MSKU 661204-5', 'MSCU 285517-0', 'CAXU 730118-2', 'BMOU 559043-7',
    'FCIU 802266-1', 'TCNU 410937-5', 'GESU 677401-9', 'DRYU 320885-4',
    'MRKU 991027-8', 'SUDU 145520-3', 'APZU 660874-2', 'TLLU 503391-6',
  ];

  function pick(arr, i) { return arr[i % arr.length]; }

  const containers = codes.map((code, i) => {
    const status = pick(statuses, i + 2);
    const needsRepair = ['reparacion-pendiente', 'en-reparacion'].includes(status);
    const days = [38, 41, 33, 7, 12, 21, 5, 47, 3, 16, 28, 9, 34, 2, 19, 11, 52, 6, 24, 1][i];
    // Tiempo en el ESTADO actual (siempre <= días en patio).
    const daysInStatus = [12, 33, 9, 4, 12, 18, 5, 41, 3, 7, 28, 9, 31, 2, 6, 11, 45, 6, 14, 1][i];
    return {
      id: 'C' + (1000 + i),
      code,
      naviera: pick(navieras, i),
      tipo: pick(tipos, i + 1),
      status,
      repairType: needsRepair ? pick(repairTypes, i) : null,
      days,
      daysInStatus,
      gateIn: '2026-06-' + String(((i * 3) % 18) + 1).padStart(2, '0'),
      etaRepuesto: status === 'reparacion-pendiente' ? '2026-06-' + String(((i * 5) % 12) + 18).padStart(2, '0') : null,
      operador: pick(['M. Ferreyra', 'J. Cáceres', 'L. Romero', 'P. Núñez'], i),
      ubicacion: 'B' + ((i % 6) + 1) + '-' + (String((i * 7) % 40).padStart(2, '0')),
    };
  });

  const kpis = {
    enPatio: 142,
    enReparacion: 57,
    esperaRepuesto: 32,
    masDe30: containers.filter((c) => c.daysInStatus >= 30 && c.status !== 'disponible').length + 8,
    despachadosHoy: 14,
    ingresosHoy: 8,
  };

  // status distribution for the dashboard
  const distribution = [
    { status: 'inspeccion-pendiente', label: 'Inspección Pendiente', value: 38, tone: 'neutral' },
    { status: 'reparacion-pendiente', label: 'Reparación Pendiente', value: 45, tone: 'warn' },
    { status: 'en-reparacion', label: 'En Reparación', value: 57, tone: 'info' },
    { status: 'disponible', label: 'Disponible', value: 32, tone: 'ok' },
  ];

  const byRepair = [
    { type: 'estructural', label: 'Estructural', value: 24 },
    { type: 'interior', label: 'Interior', value: 12 },
    { type: 'rotulacion', label: 'Rotulación', value: 9 },
    { type: 'pintura', label: 'Pintura', value: 8 },
    { type: 'regulatoria', label: 'Insp. regulatoria', value: 4 },
  ];

  // a sample timeline for the detail screen
  const timeline = [
    { icon: 'log-in', title: 'Ingreso al patio (Gate-in)', time: '2026-06-12 08:41', who: 'M. Ferreyra', done: true, note: 'Posición asignada B3-14' },
    { icon: 'clipboard-check', title: 'Inspección completada', time: '2026-06-12 11:20', who: 'J. Cáceres', done: true, note: 'Daño en panel lateral derecho' },
    { icon: 'wrench', title: 'Reparación definida — Estructural', time: '2026-06-12 11:35', who: 'J. Cáceres', done: true, note: 'Orden #RP-1183' },
    { icon: 'package-search', title: 'Esperando repuesto', time: '2026-06-13 09:00', who: 'Sistema', done: false, active: true, note: 'ETA 2026-06-21' },
    { icon: 'check-check', title: 'Reparación finalizada', time: '—', who: '', done: false },
    { icon: 'truck', title: 'Despacho (Gate-out)', time: '—', who: '', done: false },
  ];

  // Usuario actual (sesión simulada) y su rol.
  const currentUser = { name: 'M. Ferreyra', initials: 'MF', role: 'Supervisor de patio' };

  return { containers, kpis, distribution, byRepair, repairTypes, statuses, timeline, currentUser };
})();
