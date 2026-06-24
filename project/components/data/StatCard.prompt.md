Tarjeta de métrica / KPI para tableros.

```jsx
<StatCard label="En patio" value="142" unit="equipos" icon={<i data-lucide="container" />} delta="8 hoy" deltaDir="up" />
<StatCard label="+30 días sin terminar" value="11" variant="critical" icon={<i data-lucide="clock-alert" />} note="esperando repuesto" />
```

`variant="accent"` resalta con glow azul; `variant="critical"` para alertas. `deltaDir` colorea la variación.
