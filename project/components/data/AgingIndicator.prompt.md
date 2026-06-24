Medidor de tiempo en el estado actual. Escala de verde → ámbar → rojo y marca los equipos que llevan más de un mes en el mismo estado sin avanzar.

```jsx
<AgingIndicator days={7} />     {/* OK */}
<AgingIndicator days={21} />    {/* atención */}
<AgingIndicator days={38} />    {/* crítico + flag */}
```

Umbrales por defecto: `warnAt=14`, `critAt=30`. Núcleo de la visibilidad de equipos demorados.
