/* __IIFE__ */
;(function(){
// TankFlow UI kit — Registrar ingreso (Gate-in).
const { Card, SectionHeader, Input, Select, Button, StatusBadge } = window.TankFlowDesignSystem_32ec47;

function FieldRow({ children, cols = 2 }) {
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '16px' }}>{children}</div>;
}

function Intake({ go }) {
  const [done, setDone] = React.useState(false);
  const [code, setCode] = React.useState('');

  if (done) {
    return (
      <div>
        <SectionHeader eyebrow="Operación · Gate-in" title="Ingreso registrado" />
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 0 18px' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(45,212,160,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <Icon name="check-check" size={26} color={'var(--green-400)'} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700 }}>{code || 'MSKU 204418-7'} ingresó al patio</div>
              <div style={{ color: 'var(--text-muted)', marginTop: 4 }}>Posición asignada B3-14 · siguiente paso: inspección</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button iconLeft={<Icon name="clipboard-check" />} onClick={() => go('inspection')}>Iniciar inspección</Button>
            <Button variant="secondary" onClick={() => setDone(false)}>Registrar otro</Button>
            <Button variant="ghost" onClick={() => go('dashboard')}>Volver al panel</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <SectionHeader
        eyebrow="Operación · Gate-in"
        title="Registrar ingreso"
        subtitle="Alta de un contenedor que ingresa al depósito"
        actions={<StatusBadge status="inspeccion-pendiente">Nuevo ingreso</StatusBadge>}
      />
      <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Card title="Identificación del equipo">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FieldRow>
              <Input label="Código ISO 6346" mono placeholder="MSKU 204418-7" icon={<Icon name="container" />} value={code} onChange={(e) => setCode(e.target.value)} />
              <Select label="Tipo / tamaño" placeholder="Seleccionar…" options={['20DV', '40DV', '40HC', '20RF', '45HC', { value: '20TK', label: "20' Tank container" }, { value: '40TK', label: "40' Tank container" }]} />
            </FieldRow>
            <FieldRow>
              <Select label="Naviera" placeholder="Seleccionar…" options={['Maersk', 'MSC', 'CMA CGM', 'Hapag-Lloyd', 'ONE', 'Evergreen', 'COSCO']} />
              <Input label="Tara (kg)" mono placeholder="3 750" />
            </FieldRow>
          </div>
        </Card>

        <Card title="Logística de ingreso">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FieldRow>
              <Input label="Transportista" placeholder="Transporte Andino S.A." icon={<Icon name="truck" />} />
              <Input label="Chofer / patente" placeholder="AB 123 CD" />
            </FieldRow>
            <FieldRow>
              <Select label="Posición en patio" placeholder="Asignar automáticamente" options={['Automática', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6']} />
              <Select label="Condición declarada" placeholder="Seleccionar…" options={['Vacío — apto', 'Vacío — requiere inspección', 'Con daño visible']} />
            </FieldRow>
            <Input label="Observaciones" placeholder="Notas del operador de portón…" />
          </div>
        </Card>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <Button variant="ghost" onClick={() => go('dashboard')}>Cancelar</Button>
          <Button iconLeft={<Icon name="log-in" />} onClick={() => setDone(true)}>Confirmar ingreso</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Intake });

})();
