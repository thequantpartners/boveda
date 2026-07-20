# Contexto del Proyecto: Bóveda Maestra de Cierres (Q-LT)

## Arquitectura (Monolito Modularizado)
- **Framework:** NPM Workspaces Monorepo.
- **Frontend (Landing):** `apps/landing` (Vite + React). Hospedado en Vercel.
- **Backend/Dashboard:** Carpetas preparadas en `apps/backend` y `apps/dashboard` para futuras expansiones.

## Embudo de Ventas (Funnel)
1. **Tráfico:** Meta Ads hacia la Landing Page.
2. **Producto Principal:** Suscripción mensual de S/ 29 (La Bóveda de Guiones).
   - Checkout en Mercado Pago.
   - Redirección automática a la página del Upsell (`/gracias`).
3. **Upsell (OTO):** Pago único de S/ 67 (Pack de 50 Plantillas Meta Ads).
   - Si acepta: Paga en Mercado Pago -> Redirige a `/acceso-premium`.
   - Si rechaza: Clic en botón -> Redirige a `/acceso-basico?auth=qp_secure`.

## Entregables (Fulfillment)
- Los accesos se entregan vía Google Drive.
- `/acceso-basico`: Entrega enlace a carpeta compartida de Drive para la suscripción mensual.
- `/acceso-premium`: Entrega enlace a la carpeta compartida Y enlace directo al PDF del Upsell.

## Reglas de Seguridad Frontend (MVP)
- Las rutas `/gracias`, `/acceso-basico` y `/acceso-premium` tienen un guardia en `useEffect` que expulsa a los usuarios que intentan acceder directamente escribiendo la URL sin los tokens de Mercado Pago o parámetros internos válidos, redirigiéndolos al index `/`.
