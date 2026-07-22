# SOP: Creación y Lanzamiento de Campañas en TikTok Ads (Q-LT)

**Código del Documento:** SOP-QP-002  
**Versión:** 1.0  
**Área:** Paid Media & TikTok Growth  
**Autor:** Quant Partners Team  

---

## 🎯 1. Objetivo del SOP
Estandarizar el procedimiento para **configurar, lanzar y optimizar campañas de conversión en TikTok Ads**, asegurando el seguimiento de píxel en tiempo real, medición de ROI/ROAS y escalamiento eficiente de los infoproductos (S/ 29 base).

---

## 🔑 2. Guía Paso a Paso para Obtener las Credenciales (MCP & Píxel)

Para conectar TikTok Ads Manager con el agente AI y registrar eventos, se deben obtener 3 credenciales clave desde el panel de TikTok:

### Paso 2.1: Obtener el Advertiser Account ID
1. Ingresar a [ads.tiktok.com](https://ads.tiktok.com).
2. Ubicar en la esquina superior derecha (junto al perfil) el número de 19 dígitos (ej. `7664763779825025041`).
3. También se encuentra en la URL del navegador tras `advertiser_id=`.

### Paso 2.2: Crear el Píxel y Obtener el Pixel ID
1. En TikTok Ads Manager, ir a **Tools (Herramientas)** ➔ **Events (Eventos)** ➔ **Web Events**.
2. Hacer clic en **Get Started / Connect Data Source** ➔ Seleccionar **Web** ➔ **Manual Setup**.
3. Elegir **TikTok Pixel + Events API (Recommended)**.
4. Asignar el nombre del Píxel (ej. `Boveda Master Pixel`) y hacer clic en **Create**.
5. Copiar el código del Píxel alfanumérico generado en el script (ej. `D9G1MPJC77U0255M8JG0`).

### Paso 2.3: Generar el Access Token (Events API / MCP Key)
1. Avanzar en el asistente activando la opción **Enable Automatic Advanced Matching (AAM)**.
2. En el panel del Píxel creado, ingresar a la pestaña **Settings (Configuración)**.
3. Desplazarse hasta la sección **Events API**.
4. Hacer clic en el botón **Generate Access Token**.
5. Copiar la clave alfanumérica larga generada (ej. `52b765a7f346ca264a39183148feb610868b9f4f`).

### 📌 Tabla de Credenciales Oficiales de la Marca

| Parámetro | Valor / ID | Estado |
| :--- | :--- | :--- |
| **TikTok Advertiser ID** | `7664763779825025041` | ✅ Conectado |
| **TikTok Pixel ID** | `D9G1MPJC77U0255M8JG0` | ✅ Instalado en `index.html` |
| **Events API Access Token** | `52b765a7f346ca264a39183148feb610868b9f4f` | ✅ Habilitado |

---

## 📊 3. Eventos del Embudo Rastreados

El frontend rastrea automáticamente 3 eventos críticos en TikTok Events Manager:

1. **`PageView` / `ViewContent`:** Se dispara al cargar la Landing Page (`/`).
2. **`InitiateCheckout`:** Se dispara cuando el cliente hace clic en *"QUIERO MIS GUIONES"* (S/ 29 o S/ 39 con Order Bump).
3. **`CompletePayment` (Evento de Conversión Principal):** Se dispara en las páginas de agradecimiento/entrega (`/gracias`, `/acceso-premium`).

---

## 🚀 4. Configuración Estándar de Campaña en TikTok Ads Manager

### A. Nivel de Campaña
- **Objetivo Publicitario:** **Website Conversions (Conversiones Web)**.
- **Modo de Presupuesto:** Presupuesto Diario (Daily Budget).

### B. Nivel de Conjunto de Anuncios (Ad Group)
- **Tipo de Promoción:** Sitio Web (Website).
- **Píxel de TikTok:** Seleccionar `Boveda Master Pixel` (`D9G1MPJC77U0255M8JG0`).
- **Evento de Optimización:** `CompletePayment`.
- **Ubicaciones (Placements):** Seleccionar **Únicamente TikTok** (Desactivar Pangle y News Feed Apps).
- **Segmentación Demográfica:**
  - **Ubicación:** Perú.
  - **Edad:** 21 - 50 años.
  - **Idioma:** Español.
- **Intereses Recomendados:** Emprendimiento, Small Business, E-commerce, Ropa/Moda, Tecnología, Servicios Profesionales.
- **Presupuesto Diario de Prueba:** S/ 30.00 - S/ 50.00 al día por Ad Group.

### C. Nivel de Anuncio (Creative)
- **Formato:** Video Vertical (9:16) de 15 a 30 segundos.
- **Tipo de Anuncio:** **Spark Ads** (Recomendado usando posts orgánicos de la cuenta) o **In-Feed Ads**.
- **Texto del Anuncio (Caption):**
  > *"¿Cansado de que te pregunten '¿Precio?' y te claven el visto en WhatsApp? Cierra ventas en 5 minutos con este sistema copy-paste de S/ 29."*
- **Call to Action (CTA):** *Shop Now* / *Order Now* (Comprar ahora).

---

## 📋 5. Checklist para Lanzar la Campaña

- [x] 1. TikTok Pixel `D9G1MPJC77U0255M8JG0` instalado y activo en `index.html`.
- [x] 2. Disparador de `InitiateCheckout` integrado en los botones de pago.
- [x] 3. Disparador de `CompletePayment` en páginas de entrega.
- [ ] 4. Subir de 3 a 5 variaciones de video UGC (siguiendo SOP-QP-003).
- [ ] 5. Encender campaña con S/ 30/día y monitorear CPA objetivo (< S/ 15 por compra).
