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
3. **Upsell (OTO):** Pago único de S/ 67 (Pack de 50 Plantillas Meta Ads). Configurado en MP como Suscripción Limitada a 1 cobro.
   - Si acepta: Paga en Mercado Pago -> Redirige a `/acceso-premium`.
   - Si rechaza: Clic en botón -> Redirige a `/acceso-basico?auth=qp_secure`.

## Entregables (Fulfillment)
- Los accesos se entregan vía Google Drive.
- `/acceso-basico`: Entrega enlace a carpeta compartida de Drive para la suscripción mensual.
- `/acceso-premium`: Entrega enlace a la carpeta compartida Y enlace directo al PDF del Upsell.

## Reglas de Seguridad Frontend (MVP)
- Las rutas `/gracias`, `/acceso-basico` y `/acceso-premium` tienen un guardia en `useEffect` que expulsa a los usuarios que intentan acceder directamente escribiendo la URL sin los tokens de Mercado Pago o parámetros internos válidos, redirigiéndolos al index `/`.

## Optimización de Conversión (CRO) y UI
- **Copywriting:** Estilo Alex Hormozi (Agresivo, orientado al dolor de dejar en visto).
- **Urgencia:** Banner superior con escasez real y animación de latido (pulse).
- **Inversión de Riesgo:** Caja visual de Garantía de Hierro (100% Cero Riesgo) debajo de los precios.
- **Mobile First:** Botón de CTA (Llamado a la acción) "Sticky" anclado en la parte inferior de la pantalla para móviles.
- **Trust Factor:** Sección de contacto en el Footer (obligatorio para Meta Ads) usando el correo principal `partners@thequantpartners.com`. (Los correos de `devoluciones@` están configurados como un Alias gratuito en Zoho Mail que redirige al principal).
