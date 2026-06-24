Píldora de estado del ciclo de vida de un contenedor en el depósito.

```jsx
<StatusBadge status="inspeccion-pendiente" />
<StatusBadge status="en-reparacion" />
<StatusBadge tone="info">Reservado</StatusBadge>
```

Estados: `inspeccion-pendiente`, `reparacion-pendiente`, `en-reparacion`, `disponible`. Cada uno mapea a un tono. Pasa `tone` y `children` para etiquetas personalizadas.
