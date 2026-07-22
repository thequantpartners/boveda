# SOP: Creación y Despliegue de Micro-Servicios de Alta Conversión (Q-LT)

**Código del Documento:** SOP-QP-001  
**Versión:** 1.0  
**Área:** Growth, Producto & Frontend Engineering  
**Autor:** Quant Partners Team  

---

## 🎯 1. Objetivo del SOP
Estandarizar y sistematizar el proceso end-to-end para lanzar cualquier nuevo **Micro-Servicio o Infoproducto** en la plataforma. Garantiza que cada nuevo producto cumpla con los estándares de **carga ultrarrápida, alta conversión (CRO), sesgos cognitivos y arquitectura de embudo probado (Pago Único).**

---

## 💰 2. Matriz de Precios y Embudo Estándar

Todo micro-servicio debe seguir la siguiente estructura de arquitectura financiera:

| Etapa del Embudo | Producto / Oferta | Precio | Modelo de Pago | Link Mercado Pago | Redirección de Retorno |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Frontend Base** | Infoproducto Principal | **S/ 29.00** | Pago Único | `MP Link 1` | `https://[dominio]/gracias` |
| **2. Order Bump** | Cobertura VIP / Garantía Extendida | **+ S/ 10.00** *(Total S/ 39)* | Pago Único | `MP Link 2` | `https://[dominio]/gracias` |
| **3. Upsell (OTO)** | Pack de Tráfico / Plantillas Meta Ads | **S/ 67.00** | Pago Único | `MP Link 3` | `https://[dominio]/acceso-premium` |
| **4. Downsell** | Oferta Descuento del Pack | **S/ 37.00** | Pago Único | `MP Link 4` | `https://[dominio]/acceso-premium` |

*Nota: Si el cliente rechaza el Upsell en `/gracias`, el botón de rechazo lo deriva a `/downsell?auth=qp_secure`. Si rechaza el Downsell, se le deriva a `/acceso-basico?auth=qp_secure`.*

---

## 🏗️ 3. Estructura Narrativa de la Landing Page (Alex Hormozi $100M Offers)

La Landing Page debe construirse utilizando los siguientes 7 bloques secuenciales en React + Vanilla CSS:

1. **Banner de Urgencia Superior:**
   - Aviso de escasez real (ej. *"El precio de S/ 29 subirá este viernes a las 11:59 PM"*).
   - Animación de pulso continuo (`urgency-pulse`).
2. **Hero Section (Hook & Gran Promesa):**
   - Titular `<h1>` enfocado en el resultado deseado sin el dolor.
   - Botón principal de ancla suave que desplaza a la Agitación (`#agitation`).
   - Badge de Prueba Social Inline: Rating 5/5 estrellas + micro-testimonio de cliente real.
   - Badges de seguridad (`Pago Seguro`, `Acceso Inmediato`, `Pago Único`).
3. **Sección de Agitación (`#agitation` - ❌):**
   - 3 puntos de dolor específicos y frustraciones reales del cliente ideal.
4. **Sección de Calificación (`qualification` - ✅):**
   - Titular: *"Esta Bóveda es 100% para ti si..."*
   - 4 checks verdes de auto-identificación del prospecto.
5. **Stack de Valor & Checkout (`#checkout-section`):**
   - Desglose del valor real de bonos vs. Precio promocional.
   - Barra de Urgencia interactiva roja (88% reservado / 4 cupos disponibles).
   - Animación de rebote suave (`gentle-bounce`) en el precio.
   - Casilla de Order Bump interactiva (Garantía Extendida por S/ 10 extra).
   - Botón final de pago + Micro-Testimonio de Cierre.
6. **Preguntas Frecuentes (FAQs):**
   - Acordeón interactivo enfocado en aclarar que es **Pago Único sin mensualidades**.
7. **Trust & Footer Compliance:**
   - Correo oficial de contacto (`partners@thequantpartners.com`).
   - Disclaimer legal extenso obligatorio para aprobación de campañas en Meta Ads.

---

## ⚡ 4. Estándares Técnicos y Rendimiento Frontend

- **Framework:** React + Vite (Monorepo Workspace).
- **Estilos:** Vanilla CSS modular con variables centralizadas (`:root`). Cero frameworks pesados.
- **Optimizaciones de Carga:**
  - Cero dependencias externas pesadas.
  - Fuentes de Google Fonts pre-conectadas.
  - Tiempo de compilación inferior a 500ms (`vite build`).
- **Seguridad en Rutas:**
  - `useEffect` guard en `/gracias`, `/downsell`, `/acceso-basico` y `/acceso-premium` para verificar tokens o parámetros de Mercado Pago (`auth=qp_secure`).

---

## 📋 5. Lista de Chequeo para Lanzar un Nuevo Micro-Servicio (Checklist)

- [ ] 1. Crear los 4 links de cobro de Pago Único en Mercado Pago.
- [ ] 2. Verificar que las URLs de retorno en MP apunten a `/gracias` y `/acceso-premium`.
- [ ] 3. Configurar la constantes `MP_LINKS` en `App.jsx`.
- [ ] 4. Validar el funcionamiento del Order Bump (+S/ 10).
- [ ] 5. Probar el flujo de rechazo: `/gracias` ➔ `/downsell` ➔ `/acceso-basico`.
- [ ] 6. Verificar visibilidad mobile (above the fold) del badge de testimonio en la Hero section.
- [ ] 7. Ejecutar `npm run build` y confirmar 0 errores.
- [ ] 8. Actualizar `AGENTS.md` con la nueva configuración.
