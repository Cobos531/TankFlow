Campo de texto con etiqueta, ayuda, error e icono opcional.

```jsx
<Input label="Código ISO" mono placeholder="MSKU 204418-7" icon={<i data-lucide="container" />} />
<Input label="Naviera" error="Campo obligatorio" />
```

Usa `mono` para códigos ISO 6346 / IDs. `error` reemplaza a `hint` y aplica el estilo de error.
