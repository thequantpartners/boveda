import React, { useState, useEffect } from 'react';
import './index.css';

// === PÁGINA DE GRACIAS Y UPSELL (OTO) ===
function GraciasPage() {
  const [showDriveLink, setShowDriveLink] = useState(false);
  // Link de la Carpeta Compartida (Bóveda Maestra - Producto S/ 29)
  const driveLink = "https://drive.google.com/drive/folders/1PztWxFEP34uqBJe2gamIIwiEaJMU1jiA?usp=sharing";
  
  // Link de Mercado Pago para el Upsell (S/ 67)
  const handleUpsellPurchase = (e) => {
    e.preventDefault();
    alert("Aquí irá tu link de Mercado Pago de S/ 67. (Su URL de retorno será el Drive del Upsell)");
    // Cuando tengas el link de MP, descomenta esto y pégalo:
    // window.location.href = 'TU_LINK_DE_MERCADO_PAGO_S67';
    
    // NOTA PARA EL DESARROLLADOR: 
    // El link de Google Drive del Upsell que debe ir en la configuración de Mercado Pago es:
    // https://drive.google.com/file/d/1EWs1vPgvuq-2v_wO2BIZ1Zskal6UyTPa/view?usp=sharing
  };

  return (
    <div className="upsell-page">
      <div className="container">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <p className="progress-text">Paso 1 de 2: ¡Tu orden de S/ 29 ha sido confirmada!</p>

        <h1 className="upsell-warning">¡ESPERA! TU ORDEN AÚN NO ESTÁ COMPLETA.</h1>
        
        <div className="upsell-box">
          <h2>No cierres esta página. Tenemos una Oferta Única para ti.</h2>
          
          <div className="upsell-content">
            <p>Ya tienes los guiones exactos para cerrar ventas por WhatsApp y dejar de perder dinero.</p>
            <p><strong>Pero... ¿De qué sirven los mejores guiones del mundo si no te llegan suficientes mensajes todos los días?</strong></p>
            
            <div className="upsell-offer">
              <h3>Presentamos el "Pack de 50 Plantillas de Anuncios para Facebook & Instagram Ads"</h3>
              <ul className="pain-list" style={{textAlign: 'left'}}>
                <li>Textos diseñados psicológicamente para atraer prospectos que NO buscan precio, sino calidad.</li>
                <li>Incluye indicaciones exactas de qué imagen o video poner junto al texto.</li>
                <li>Solo copia, pega en tu Business Manager y mira cómo tu WhatsApp explota de mensajes.</li>
              </ul>
            </div>

            <div className="upsell-price-box">
              <span className="real-price">Precio Normal: S/ 149.00</span>
              <span className="offer-price">Añádelo hoy a tu orden por solo S/ 67.00</span>
            </div>

            <div className="cta-wrapper">
              <button onClick={handleUpsellPurchase} className="cta-button upsell-btn">
                SÍ, AÑADIR EL PACK DE ANUNCIOS (S/ 67)
              </button>
            </div>

            <div className="decline-offer">
              <a 
                href={driveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="decline-link"
              >
                No gracias. No quiero inundar mi WhatsApp de clientes. Llévame directo a mi Bóveda de Guiones de S/ 29.
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
            Dada la naturaleza del Producto (contenido digital descargable e intangible de acceso inmediato), <strong>todas las ventas son definitivas y NO SE EMITIRÁN REEMBOLSOS</strong> una vez que el usuario haya accedido a la plataforma o descargado el material.
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

  // Link de Mercado Pago para el producto principal (S/ 29)
  const handlePurchase = (e) => {
    e.preventDefault();
    // Cuando tengas el link de MercadoPago, puedes enviarlos allí en lugar de directamente a /gracias
    // Por ahora simulamos la compra exitosa enviándolos a la página de gracias (donde está el upsell)
    window.location.href = '/gracias';
  };

  const faqs = [
    {
      q: "¿Sirve para mi negocio si vendo ropa/tecnología/servicios?",
      a: "Sí. Las objeciones humanas ('está caro', 'déjame pensarlo') son idénticas en todos los rubros. Las plantillas están diseñadas con espacios en blanco [ ] para que pongas el nombre de tu producto en 2 segundos y lo envíes."
    },
    {
      q: "¿Es un pago único o mensual?",
      a: "Es una suscripción de S/29 al mes porque CADA MES subimos nuevos guiones adaptados a las campañas de Perú (Día de la Madre, Cyber, Navidad, etc.). Pero no hay amarres, puedes cancelar al primer mes con un clic si quieres."
    },
    {
      q: "¿Qué pasa si lo compro y no me sirve?",
      a: "Tienes garantía incondicional. Si aplicas los guiones y sientes que no te sirvieron, cancelas tu suscripción con un clic y te quedas con todo lo que descargaste. Cero riesgo."
    }
  ];

  return (
    <div className="landing-wrapper">
      <div className="top-banner">
        🔥 Alerta: Solo por hoy, llévate los 3 Bonos Exclusivos Gratis con tu acceso.
      </div>

      <section className="hero">
        <div className="container">
          <h1>
            Deja de perder dinero cada vez que das el precio por <span className="highlight">WhatsApp</span>.
          </h1>
          <p className="subtitle">
            Descubre la Máquina Anti-Visto: Guiones copy-paste para rebatir objeciones, revivir clientes fríos y cerrar ventas en automático... sin sonar desesperado.
          </p>
          <div className="cta-wrapper">
            <button onClick={handlePurchase} className="cta-button">
              QUIERO MIS GUIONES AHORA (S/29)
            </button>
            <span className="guarantee-text">⏱️ Oferta válida solo por hoy. Acceso Inmediato.</span>
          </div>
          <div className="trust-badges">
            <span>✅ Pago Seguro</span>
            <span>✅ Acceso Inmediato</span>
            <span>✅ Cancela cuando quieras</span>
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
              <p>"Pagar 29 soles es un chiste. Literalmente en la primera hora usando la plantilla Anti-Visto recuperé a 3 clientas. Ya pagué mi año entero."</p>
              <strong>- Lucía R. (Tienda de Ropa)</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="value-stack">
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
            <span className="real-price">Valor Total Real: S/ 492.00</span>
            <span className="offer-price">¡Solo S/ 29.00!</span>
            <span className="urgency">Menos de lo que gastas en un menú.</span>
            
            <div className="cta-wrapper">
              <button onClick={handlePurchase} className="cta-button">
                SÍ, QUIERO RECUPERAR MIS VENTAS (S/29)
              </button>
            </div>
            <p className="risk-reversal">
              Con UNA sola venta que recuperes hoy usando estas plantillas, ya pagaste tu suscripción. Cero riesgo.
            </p>
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
          <p style={{ fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--gray)' }}>
            2026 | Quant Partners | <a href="/terminos" style={{ color: 'inherit', textDecoration: 'underline' }}>Política de Privacidad</a> | <a href="/terminos" style={{ color: 'inherit', textDecoration: 'underline' }}>Términos y Condiciones</a>
          </p>

          <p className="footer-disclaimer" style={{ textAlign: 'justify', fontSize: '0.75rem', color: '#6B7280', lineHeight: '1.6' }}>
            Este sitio web es operado y mantenido por Quant Partners. El uso de este sitio web se rige por sus Términos de Servicio y Política de Privacidad. Quant Partners es una empresa proveedora de herramientas de ventas, plantillas y recursos de marketing digital. No vendemos oportunidades de negocio, programas para "hacerse rico rápidamente" ni sistemas automáticos para ganar dinero. Todos los productos, servicios, guiones, contenidos, herramientas y estrategias proporcionados por la empresa tienen fines exclusivamente educativos, referenciales e informativos.
            <br /><br />
            No podemos ni garantizamos tu capacidad para obtener resultados o generar ingresos a partir de nuestras plantillas, ideas, herramientas o estrategias. Nada de lo expuesto en este sitio web, en ninguno de nuestros otros sitios, programas, contenidos o productos constituye una promesa o garantía de resultados, ingresos actuales o futuros. No realizamos afirmaciones sobre ganancias, esfuerzos ni aseguramos que el uso de nuestros guiones produzca resultados financieros específicos.
            <br /><br />
            Cualquier cifra financiera mencionada es únicamente ilustrativa de conceptos y no debe interpretarse como ingresos promedio, exactos o garantizados. No proporcionamos asesoramiento legal, contable, fiscal ni profesional de ningún tipo. Siempre debes consultar con tu contador, abogado o asesor profesional antes de tomar decisiones basadas en esta información relacionadas con tu negocio o finanzas.
            <br /><br />
            El éxito de nuestros clientes varía significativamente. Aunque compartimos plantillas y estrategias que han funcionado para otros, los resultados individuales dependen de múltiples factores, incluidos —pero no limitados a— la calidad del producto o servicio que vendes, tu mercado, experiencia previa, habilidades comerciales, dedicación, tiempo invertido y circunstancias personales. No garantizamos que obtendrás resultados similares a los ejemplos, estudios de caso o testimonios mostrados.
            <br /><br />
            Los testimonios, declaraciones y representaciones reflejan opiniones, hallazgos o experiencias de usuarios individuales que han adquirido nuestros recursos. Son anecdóticos y no representan necesariamente la experiencia típica ni predicen resultados futuros. Los resultados individuales pueden variar de manera significativa. No medimos ganancias ni desempeño financiero. En su lugar, podemos realizar seguimientos de transacciones completadas y niveles de satisfacción mediante encuestas voluntarias. No debes equiparar transacciones completadas con éxito financiero.
            <br /><br />
            Muchos clientes no continúan con las suscripciones, no aplican lo aprendido o intentan aplicar los guiones sin obtener los resultados esperados. Al utilizar este sitio y registrarte en nuestros servicios, reconoces que eres el único responsable de tus decisiones, acciones y resultados, y aceptas no intentar responsabilizar a Quant Partners bajo ninguna circunstancia.
            <br /><br />
            Todo el material es propiedad intelectual de Quant Partners y está protegido por derechos de autor. Cualquier duplicación, reventa, reproducción o distribución no autorizada está estrictamente prohibida y sujeta a acciones legales. La Empresa puede enlazar o hacer referencia a contenidos, servicios o recursos creados o proporcionados por terceros no afiliados. Quant Partners no es responsable de dicho contenido ni lo respalda o aprueba.
            <br /><br />
            Utilizamos cookies para mejorar, promover y proteger nuestros servicios. Al continuar utilizando este sitio, aceptas nuestra Política de Privacidad y Términos de Uso.
            <br /><br />
            Este sitio no forma parte del sitio web de Facebook, Meta o Google. Este sitio NO está respaldado por Facebook o Google de ninguna manera. FACEBOOK es una marca registrada de META, Inc.
          </p>
        </div>
      </footer>
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
      ) : currentPath === '/terminos' ? (
        <LegalPage />
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;
