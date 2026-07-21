import React, { useState, useEffect } from 'react';
import './index.css';

// === CONFIGURACIÓN DE LINKS DE MERCADO PAGO (PAGO ÚNICO) ===
const MP_LINKS = {
  BASE: 'https://mpago.la/1YFVjgT',      // Bóveda Base (S/ 29.00)
  BUMP: 'https://mpago.la/2ahKeTa',      // Bóveda + Garantía Order Bump (S/ 39.00)
  UPSELL: 'https://mpago.la/21UuVmw',    // Pack 50 Anuncios Meta Ads (S/ 67.00)
  DOWNSELL: 'https://mpago.la/1tEwFNv',  // Pack 50 Anuncios Descuento (S/ 37.00)
};

// === PÁGINAS DE ACCESO FINAL ===
function AccesoBasicoPage() {
  const driveFolderLink = "https://drive.google.com/drive/folders/1PztWxFEP34uqBJe2gamIIwiEaJMU1jiA?usp=sharing";
  
  useEffect(() => {
    // Seguridad básica: Verificar si viene con el token interno
    if (!window.location.search.includes("auth=qp_secure")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="access-page">
      <div className="container">
        <div className="celebration-icon">🎉</div>
        <h1>¡Felicidades! Compra Confirmada</h1>
        <p className="subtitle">Ya eres miembro oficial de la Bóveda Maestra de Cierre por WhatsApp.</p>
        
        <div className="access-box">
          <h2>Tu Compra Incluye:</h2>
          <ul className="check-list">
            <li>✅ Acceso Vitalicio a la Bóveda Maestra de Guiones</li>
            <li>✅ Actualizaciones Mensuales Garantizadas</li>
            <li>✅ Bonos de Audios y Prompts de IA</li>
          </ul>
          
          <div className="cta-wrapper">
            <a href={driveFolderLink} target="_blank" rel="noopener noreferrer" className="cta-button">
              ACCEDER A MI BÓVEDA EN DRIVE
            </a>
          </div>
          <p className="guarantee-text">Guarda este enlace en tus favoritos para acceder al contenido siempre que lo necesites.</p>
        </div>
      </div>
    </div>
  );
}

function AccesoPremiumPage() {
  const driveFolderLink = "https://drive.google.com/drive/folders/1PztWxFEP34uqBJe2gamIIwiEaJMU1jiA?usp=sharing";
  const upsellFileLink = "https://drive.google.com/file/d/1EWs1vPgvuq-2v_wO2BIZ1Zskal6UyTPa/view?usp=sharing";
  
  useEffect(() => {
    // Seguridad básica: Verificar si viene de Mercado Pago (tiene parámetros en la URL)
    if (window.location.search.length < 5) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="access-page premium-access">
      <div className="container">
        <div className="celebration-icon">🏆</div>
        <h1>¡Felicidades Miembro VIP!</h1>
        <p className="subtitle">Has asegurado tu máquina completa de ventas (Guiones + Tráfico).</p>
        
        <div className="access-box">
          <h2>Tu Arsenal Completo:</h2>
          
          <div className="product-access">
            <h3>1. La Bóveda Maestra de Guiones (Pago Único)</h3>
            <p>Aquí encontrarás tus guiones de WhatsApp y actualizaciones.</p>
            <a href={driveFolderLink} target="_blank" rel="noopener noreferrer" className="cta-button outline-btn">
              ACCEDER A LA BÓVEDA (DRIVE)
            </a>
          </div>

          <div className="product-access">
            <h3>2. Pack de 50 Plantillas Meta Ads (Pago Único)</h3>
            <p>Tus anuncios copy-paste para generar tráfico calificado.</p>
            <a href={upsellFileLink} target="_blank" rel="noopener noreferrer" className="cta-button upsell-btn">
              DESCARGAR PACK DE ANUNCIOS (PDF)
            </a>
          </div>
          
          <p className="guarantee-text" style={{marginTop: '2rem'}}>Asegúrate de guardar ambos enlaces para no perder tu acceso.</p>
        </div>
      </div>
    </div>
  );
}

// === PÁGINA DE GRACIAS Y UPSELL (OTO) ===
function GraciasPage() {
  useEffect(() => {
    // Seguridad básica: Verificar si viene de Mercado Pago (tiene parámetros en la URL)
    if (window.location.search.length < 5) {
      window.location.href = "/";
    }
  }, []);

  // Link de Mercado Pago para el Upsell (S/ 67)
  const handleUpsellPurchase = (e) => {
    e.preventDefault();
    window.location.href = MP_LINKS.UPSELL;
  };

  return (
    <div className="upsell-page">
      <div className="container">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <p className="progress-text">Paso 1 de 2: ¡Tu orden de la Bóveda ha sido confirmada!</p>

        <h1 className="upsell-warning">¡ESPERA! TU ORDEN AÚN NO ESTÁ COMPLETA.</h1>
        
        <div className="upsell-box">
          <h2>No cierres esta página. Tenemos una Oferta Única para ti.</h2>
          
          <div className="upsell-content">
            <p>Ya tienes los guiones exactos para cerrar ventas por WhatsApp y dejar de perder dinero.</p>
            <p><strong>Pero... ¿De qué sirven los mejores guiones del mundo si no te llegan suficientes mensajes todos los días?</strong></p>
            
            <div className="upsell-offer">
              <h3>Presentamos el "Pack de 50 Plantillas de Anuncios para Facebook & Instagram Ads"</h3>
              <ul className="check-list" style={{textAlign: 'left', marginTop: '1rem'}}>
                <li>✅ Textos diseñados psicológicamente para atraer prospectos que NO buscan precio, sino calidad.</li>
                <li>✅ Incluye indicaciones exactas de qué imagen o video poner junto al texto.</li>
                <li>✅ Solo copia, pega en tu Business Manager y mira cómo tu WhatsApp explota de mensajes.</li>
              </ul>
            </div>

            <div className="upsell-price-box">
              <span className="real-price">Precio Normal: S/ 149.00</span>
              <span className="offer-price">Añádelo hoy a tu orden por solo S/ 67.00 (Pago Único)</span>
            </div>

            <div className="cta-wrapper">
              <button onClick={handleUpsellPurchase} className="cta-button upsell-btn">
                SÍ, AÑADIR EL PACK DE ANUNCIOS (S/ 67)
              </button>
            </div>

            <div className="decline-offer">
              <a 
                href="/downsell?auth=qp_secure" 
                className="decline-link"
              >
                No gracias. No quiero inundar mi WhatsApp de clientes. Ir directo a mi orden.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// === PÁGINA DE DOWNSELL ===
function DownsellPage() {
  useEffect(() => {
    // Seguridad básica: Verificar si viene con el token interno o parámetros
    if (!window.location.search.includes("auth=qp_secure") && window.location.search.length < 5) {
      window.location.href = "/";
    }
  }, []);

  const handleDownsellPurchase = (e) => {
    e.preventDefault();
    window.location.href = MP_LINKS.DOWNSELL;
  };

  return (
    <div className="upsell-page downsell-page">
      <div className="container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '75%' }}></div>
        </div>
        <p className="progress-text">Paso 2 de 2: Última Oportunidad Especial</p>

        <h1 className="upsell-warning" style={{ color: '#D97706' }}>¡ESPERA! NO TE VAYAS CON LAS MANOS VACÍAS.</h1>
        
        <div className="upsell-box downsell-box">
          <h2>Te ofrecemos el Pack de Anuncios a un Precio de Remate Único</h2>
          
          <div className="upsell-content">
            <p>Entendemos perfectamente que S/ 67 puede estar fuera de tu presupuesto hoy.</p>
            <p>Pero no queremos que te quedes sin la herramienta número 1 para atraer clientes calificados a tu WhatsApp todos los días.</p>
            
            <div className="upsell-offer downsell-offer">
              <h3>"Pack Completo de 50 Plantillas de Anuncios Meta Ads"</h3>
              <p style={{ fontWeight: 'bold', color: '#1F2937', margin: '0.75rem 0' }}>Descuento Exclusivo de Última Oportunidad:</p>
              <ul className="check-list" style={{ textAlign: 'left' }}>
                <li>✅ 50 Textos e imágenes copiables listos para Meta Ads (FB e IG).</li>
                <li>✅ Diseñados para atraer prospectos dispuestos a pagar sin pedir descuentos.</li>
                <li>✅ Acceso inmediato e instrucciones paso a paso.</li>
              </ul>
            </div>

            <div className="upsell-price-box">
              <span className="real-price">Precio Normal: S/ 149.00</span>
              <span className="offer-price" style={{ color: '#059669' }}>¡Solo S/ 37.00 (Pago Único)!</span>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', marginTop: '0.25rem' }}>Ahorras S/ 30.00 adicionales solo por esta pantalla.</p>
            </div>

            <div className="cta-wrapper">
              <button onClick={handleDownsellPurchase} className="cta-button downsell-btn">
                SÍ, QUIERO EL PACK DE ANUNCIOS POR SOLO S/ 37
              </button>
            </div>

            <div className="decline-offer">
              <a 
                href="/acceso-basico?auth=qp_secure" 
                className="decline-link"
              >
                No gracias. Definitivamente rechazo esta oferta única y prefiero ir directo a mi Bóveda de Guiones.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// === PÁGINA LEGAL ===
function LegalPage() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Términos, Condiciones y Políticas Legales</h1>
        <p className="subtitle">Última actualización: {new Date().toLocaleDateString()}</p>
        
        <div className="legal-content">
          <h3>1. Naturaleza del Producto y Exención de Responsabilidad de Ingresos (Income Disclaimer)</h3>
          <p>
            Al adquirir nuestros productos, el Usuario reconoce y acepta expresamente que está adquiriendo material educativo y plantillas de comunicación. <strong>NO garantizamos ningún nivel de ingresos, ventas, éxito comercial o retorno de inversión (ROI).</strong> Los testimonios mostrados en nuestra página web son resultados excepcionales, los cuales no pretenden garantizar que usted logrará los mismos resultados.
          </p>

          <h3>2. Política de Reembolsos Estricta (All Sales Are Final)</h3>
          <p>
            Dada la naturaleza del Producto (contenido digital descargable e intangible de acceso inmediato), las ventas son definitivas una vez descargado el material, salvo que se haya adquirido la garantía extendida correspondiente.
          </p>

          <h3>3. Propiedad Intelectual y Cláusula de No Competencia (Piratería)</h3>
          <p>
            El contenido es propiedad intelectual exclusiva de Quant Partners. Se le otorga una licencia de uso personal y comercial para su propio negocio. <strong>Queda TERMINANTEMENTE PROHIBIDA la reventa o distribución de nuestras plantillas.</strong>
          </p>

          <h3>4. Resolución de Disputas y Arbitraje Obligatorio</h3>
          <p>
            Cualquier controversia derivada de este contrato será resuelta de manera exclusiva y final mediante arbitraje de derecho en la ciudad de Lima, Perú. El Usuario renuncia expresamente a su derecho de presentar o participar en demandas colectivas.
          </p>
        </div>

        <div className="cta-wrapper" style={{ marginTop: '3rem' }}>
          <a href="/" className="cta-button" style={{ animation: 'none', background: '#3B82F6' }}>
            Volver a la página principal
          </a>
        </div>
      </div>
    </div>
  );
}

// === LANDING PAGE PRINCIPAL ===
function LandingPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isBumpSelected, setIsBumpSelected] = useState(false);

  // Ancla suave hacia la sección de checkout/oferta
  const scrollToCheckout = (e) => {
    e.preventDefault();
    document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Link de Mercado Pago según si el Order Bump está seleccionado
  const handlePurchase = (e) => {
    e.preventDefault();
    window.location.href = isBumpSelected ? MP_LINKS.BUMP : MP_LINKS.BASE;
  };

  const faqs = [
    {
      q: "¿Sirve para mi negocio si vendo ropa/tecnología/servicios?",
      a: "Sí. Las objeciones humanas ('está caro', 'déjame pensarlo') son idénticas en todos los rubros. Las plantillas están diseñadas con espacios en blanco [ ] para que pongas el nombre de tu producto en 2 segundos y lo envíes."
    },
    {
      q: "¿Es un pago único o mensual?",
      a: "Es un PAGO ÚNICO de S/ 29. No hay suscripciones, no hay cobros recurrentes ni amarres mensuales. Pagas una sola vez y te quedas con el acceso a la Bóveda de por vida."
    },
    {
      q: "¿Cómo accedo al contenido inmediatamente después de pagar?",
      a: "Es facilísimo. Una vez completes tu pago de forma segura por Mercado Pago, el sistema te redirigirá automáticamente a tu área de entrega donde podrás acceder a la carpeta de Google Drive en 2 segundos."
    },
    {
      q: "¿Cómo funciona exactamente la garantía y el reembolso?",
      a: "Si aplicas los guiones y sientes que no te ayudaron a recuperar tu inversión, escríbenos a devoluciones@thequantpartners.com. Te devolveremos el 100% de tu dinero directamente a tu cuenta de Mercado Pago sin preguntas. Y los archivos descargados te los quedas como regalo."
    },
    {
      q: "¿Tengo que instalar alguna app o software complicado?",
      a: "Cero tecnología. Al comprar, te damos el link a una carpeta de Google Drive. Puedes abrir los documentos desde tu celular, copiar el texto y pegarlo directamente en el chat de tu cliente en WhatsApp."
    }
  ];

  return (
    <div className="landing-wrapper">
      <div className="top-banner urgency-pulse">
        🔥 ALERTA PERÚ: El precio promocional de pago único de S/ 29 subirá a S/ 97 este viernes a las 11:59 PM. Llévate los 3 Bonos Gratis hoy.
      </div>

      <section className="hero">
        <div className="container">
          <h1>
            Cómo cerrar ventas por <span className="highlight">WhatsApp</span> en 5 minutos sin regalar tu trabajo ni rogar por la venta.
          </h1>
          <p className="subtitle">
            El sistema 'Copy-Paste' exacto que usan los negocios más rentables del Perú para fulminar objeciones, revivir clientes en visto y hacer que te paguen sin chistar.
          </p>

          <div className="cta-wrapper">
            <button onClick={scrollToCheckout} className="cta-button pulse-btn">
              QUIERO MIS GUIONES AHORA (S/ 29)
            </button>
            <span className="secure-badge">🔒 Pago 100% Seguro vía Mercado Pago Perú</span>
            <span className="guarantee-text">⏱️ Acceso Inmediato. Pago Único De Por Vida.</span>
          </div>

          <div className="trust-badges">
            <span>✅ Pago Seguro</span>
            <span>✅ Acceso Inmediato</span>
            <span>✅ Un solo pago (Sin mensualidades)</span>
          </div>
        </div>
      </section>

      <section className="agitation">
        <div className="container">
          <h2>El error que te está costando miles de soles:</h2>
          <ul className="pain-list">
            <li>Pagas publicidad, consigues prospectos, te preguntan "¿Precio?"... y te clavan el visto. Dinero a la basura.</li>
            <li>Te frustra ver cómo se asustan por el precio y huyen con tu competencia más barata.</li>
            <li>No sabes qué responder cuando te dicen "está muy caro" o "yo te aviso", y terminas haciendo descuentos que matan tu ganancia.</li>
          </ul>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Lo que dicen emprendedores como tú:</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"Antes mandaba el precio y rezaba. Ayer usé el guión de manejo de objeciones y cerré una venta de S/450 que ya daba por perdida. Increíble."</p>
              <strong>- Carlos M. (Venta de Tecnología)</strong>
            </div>
            <div className="testimonial-card">
              <p>"Pagar 29 soles es un chiste. Literalmente en la primera hora usando la plantilla Anti-Visto recuperé a 3 clientas. El mejor pago único de mi negocio."</p>
              <strong>- Lucía R. (Tienda de Ropa)</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="value-stack" id="checkout-section">
        <div className="container">
          <h2>No compres un PDF. Accede al Ecosistema de Cierre:</h2>
          
          <div className="stack-item">
            <strong>📁 La Bóveda Anti-Visto (60+ Guiones)</strong>
            <span className="value">S/ 199.00</span>
          </div>
          <div className="stack-item">
            <strong>🔥 Bono 1: Arsenal de Seguimiento Agresivo</strong>
            <span className="value">S/ 97.00</span>
          </div>
          <div className="stack-item">
            <strong>🤖 Bono 2: Mega-Prompts de IA para Cierre Infinito</strong>
            <span className="value">S/ 149.00</span>
          </div>
          <div className="stack-item">
            <strong>✅ Bono 3: Plantillas de Audios Persuasivos</strong>
            <span className="value">S/ 47.00</span>
          </div>

          <div className="total-value">
            <div className="urgency-bar-container">
              <div className="urgency-bar-header">
                <span className="urgency-fire-text">🔥 <strong>88% de los accesos reservados</strong></span>
                <span className="urgency-seats-badge">¡Solo 4 disponibles!</span>
              </div>
              <div className="urgency-progress-track">
                <div className="urgency-progress-fill"></div>
              </div>
            </div>

            <span className="real-price">Valor Total Real: S/ 492.00</span>
            <span className="offer-price">
              {isBumpSelected ? "¡Solo S/ 39.00!" : "¡Solo S/ 29.00!"}
            </span>
            <span className="urgency">Pago Único. Acceso de por vida.</span>

            <div className="order-bump-container" style={{ margin: '1.5rem 0', textDecoration: 'none' }}>
              <label className="order-bump-card" style={{ background: 'white' }}>
                <input 
                  type="checkbox" 
                  checked={isBumpSelected} 
                  onChange={(e) => setIsBumpSelected(e.target.checked)}
                  className="order-bump-checkbox"
                />
                <div className="order-bump-info" style={{ textAlign: 'left' }}>
                  <span className="bump-tag pulse-tag">🛡️ PROTECCIÓN VIP CERO RIESGO (+ S/ 10.00)</span>
                  <strong className="bump-title">Añadir Cobertura de Reembolso Garantizado de "100% Cero Riesgo"</strong>
                  <p className="bump-desc">
                    Esto es simple: Descarga la Bóveda, copia un guión, pégalo en tu próximo chat de WhatsApp. <strong>Si con una sola venta que cierres no recuperas tu inversión</strong>, se te devuelve el 100% de tu dinero y te quedas con todo el material de regalo.
                  </p>
                </div>
              </label>
            </div>
            
            <div className="cta-wrapper">
              <button onClick={handlePurchase} className="cta-button pulse-btn">
                {isBumpSelected ? "QUIERO MIS GUIONES + GARANTÍA (S/ 39)" : "SÍ, QUIERO RECUPERAR MIS VENTAS (S/ 29)"}
              </button>
              <span className="secure-badge">🔒 Transacción Encriptada</span>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className="faq-q">
                  {faq.q}
                  <span>{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-contact">
            <h3>Contáctanos</h3>
            <p>✉️ Mail: partners@thequantpartners.com</p>
            <p>📍 Lima, Perú | Quant Partners</p>
          </div>

          <p style={{ fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--gray)' }}>
            2026 | Quant Partners | <a href="/terminos" style={{ color: 'inherit', textDecoration: 'underline' }}>Política de Privacidad</a> | <a href="/terminos" style={{ color: 'inherit', textDecoration: 'underline' }}>Términos y Condiciones</a>
          </p>

          <p className="footer-disclaimer" style={{ textAlign: 'justify', fontSize: '0.75rem', color: '#6B7280', lineHeight: '1.6' }}>
            Este sitio web es operado y maintained por Quant Partners. El uso de este sitio web se rige por sus Términos de Servicio y Política de Privacidad. Quant Partners es una empresa proveedora de herramientas de ventas, plantillas y recursos de marketing digital. No vendemos oportunidades de negocio, programas para "hacerse rico rápidamente" ni sistemas automáticos para ganar dinero. Todos los productos, servicios, guiones, contenidos, herramientas y estrategias proporcionados por la empresa tienen fines exclusivamente educativos, referenciales e informativos.
            <br /><br />
            No podemos ni garantizamos tu capacidad para obtener resultados o generar ingresos a partir de nuestras plantillas, ideas, herramientas o estrategias. Nada de lo expuesto en este sitio web, en ninguno de nuestros otros sitios, programas, contenidos o productos constituye una promesa o garantía de resultados, ingresos actuales o futuros. No realizamos afirmaciones sobre ganancias, esfuerzos ni aseguramos que el uso de nuestros guiones produzca resultados financieros específicos.
            <br /><br />
            Cualquier cifra financiera mencionada es únicamente ilustrativa de conceptos y no debe interpretarse como ingresos promedio, exactos o garantizados. No proporcionamos asesoramiento legal, contable, fiscal ni profesional de ningún tipo. Siempre debes consultar con tu contador, abogado o asesor profesional antes de tomar decisiones basadas en esta información relacionadas con tu negocio o finanzas.
            <br /><br />
            El éxito de nuestros clientes varía significativamente. Aunque compartimos plantillas y estrategias que han funcionado para otros, los resultados individuales dependen de múltiples factores, incluidos —pero no limitados a— la calidad del producto o servicio que vendes, tu mercado, experiencia previa, habilidades comerciales, dedicación, tiempo invertido y circunstancias personales. No garantizamos que obtendrás resultados similares a los ejemplos, estudios de caso o testimonios mostrados.
            <br /><br />
            Los testimonios, declaraciones y representaciones reflejan opiniones, hallazgos o experiencias de usuarios individuales que han adquirido nuestros recursos. Son anecdóticos y no representan necesariamente la experiencia típica ni predicen resultados futuros. Los resultados individuales pueden variar de manera significativa. No medimos ganancias ni desempeño financiero. En su lugar, podemos realizar seguimientos de transacciones completadas y niveles de satisfacción mediante encuestas voluntarias. No debes equiparar transacciones completadas con éxito financiero.
            <br /><br />
            Muchos clientes no continúan con el programa, no aplican lo aprendido o intentan aplicar los guiones sin obtener los resultados esperados. Al utilizar este sitio y registrarte en nuestros servicios, reconoces que eres el único responsable de tus decisiones, acciones y resultados, y aceptas no intentar responsabilizar a Quant Partners bajo ninguna circunstancia.
            <br /><br />
            Todo el material es propiedad intelectual de Quant Partners y está protegido por derechos de autor. Cualquier duplicación, reventa, reproducción o distribución no autorizada está estrictamente prohibida y sujeta a acciones legales. La Empresa puede enlazar o hacer referencia a contenidos, servicios o recursos creados o proporcionados por terceros no afiliados. Quant Partners no es responsable de dicho contenido ni lo respalda o aprueba.
            <br /><br />
            Utilizamos cookies para mejorar, promover y proteger nuestros servicios. Al continuar utilizando este sitio, aceptas nuestra Política de Privacidad y Términos de Uso.
            <br /><br />
            Este sitio no forma parte del sitio web de Facebook, Meta o Google. Este sitio NO está respaldado por Facebook o Google de ninguna manera. FACEBOOK es una marca registrada de META, Inc.
          </p>
        </div>
      </footer>

      <div className="sticky-mobile-cta">
        <button onClick={scrollToCheckout} className="cta-button pulse-btn" style={{width: '100%', fontSize: '1.05rem', padding: '0.75rem'}}>
          QUIERO MIS GUIONES (S/ 29)
        </button>
      </div>
    </div>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <>
      {currentPath === '/gracias' ? (
        <GraciasPage />
      ) : currentPath === '/downsell' ? (
        <DownsellPage />
      ) : currentPath === '/acceso-basico' ? (
        <AccesoBasicoPage />
      ) : currentPath === '/acceso-premium' ? (
        <AccesoPremiumPage />
      ) : currentPath === '/terminos' ? (
        <LegalPage />
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;
