Interruptor para ajustes binarios y filtros (encendido/apagado).

```jsx
<Switch label="Solo equipos en alerta" defaultChecked />
<Switch checked={onlyCritical} onChange={e => setOnlyCritical(e.target.checked)} />
```

Soporta uso controlado (`checked` + `onChange`) o no controlado (`defaultChecked`).
