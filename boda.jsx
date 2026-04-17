import { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=Caveat:wght@400;500&family=Jost:wght@300;400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --paper:   #F5EFE4;
    --paper2:  #EDE4D3;
    --ink:     #2C2416;
    --ink-soft:#6B5C44;
    --terra:   #9C6B3C;
    --terra-l: #C49060;
    --sage:    #6D7B60;
    --cream:   #FAF6EE;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--paper);
    color: var(--ink);
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    line-height: 1.8;
    overflow-x: hidden;
  }

  .hero {
    min-height: 100svh;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 80px 32px 60px;
    background: var(--cream);
    border-bottom: 1px solid rgba(156,107,60,0.18);
  }

  .hero-inner { max-width: 480px; }

  .hero-eyebrow {
    font-family: 'Caveat', cursive;
    font-size: 22px;
    color: var(--terra);
    margin-bottom: 24px;
    display: block;
    transform: rotate(-1.5deg);
  }

  .hero-title {
    font-family: 'Lora', serif;
    font-size: clamp(56px, 14vw, 96px);
    font-weight: 400;
    font-style: italic;
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 20px;
  }

  .hero-date {
    font-family: 'Caveat', cursive;
    font-size: 32px;
    color: var(--terra-l);
    margin-bottom: 28px;
  }

  .hero-sub {
    font-size: 16px;
    font-weight: 300;
    color: var(--ink-soft);
    line-height: 1.7;
    max-width: 320px;
    margin: 0 auto;
  }

  .pullquote {
    font-family: 'Lora', serif;
    font-style: italic;
    font-size: clamp(20px, 4vw, 26px);
    color: var(--ink);
    line-height: 1.5;
    text-align: center;
    padding: 64px 32px 56px;
    max-width: 520px;
    margin: 0 auto;
    position: relative;
  }

  .pullquote::before {
    content: '"';
    font-family: 'Lora', serif;
    font-size: 140px;
    color: var(--terra-l);
    opacity: 0.13;
    position: absolute;
    top: 8px;
    left: 8px;
    line-height: 1;
  }

  .section {
    padding: 72px 32px;
    max-width: 600px;
    margin: 0 auto;
  }

  .section-beige {
    background: var(--paper2);
    border-top: 1px solid rgba(156,107,60,0.12);
    border-bottom: 1px solid rgba(156,107,60,0.12);
  }

  .section-beige-inner {
    max-width: 600px;
    margin: 0 auto;
    padding: 72px 32px;
  }

  .label {
    font-family: 'Caveat', cursive;
    font-size: 19px;
    color: var(--terra);
    display: block;
    margin-bottom: 6px;
    transform: rotate(-0.8deg);
  }

  h2 {
    font-family: 'Lora', serif;
    font-weight: 400;
    font-style: italic;
    font-size: clamp(28px, 6vw, 42px);
    line-height: 1.15;
    color: var(--ink);
    margin-bottom: 28px;
  }

  p {
    font-size: 16px;
    color: var(--ink-soft);
    line-height: 1.85;
    margin-bottom: 14px;
  }

  .sep {
    display: block;
    width: 44px;
    height: 1.5px;
    background: var(--terra-l);
    margin: 32px 0;
    opacity: 0.35;
    border-radius: 2px;
  }

  .card {
    background: var(--cream);
    border: 1px solid rgba(156,107,60,0.2);
    border-radius: 8px;
    padding: 24px 28px;
    margin-bottom: 14px;
  }

  .card-label {
    font-family: 'Caveat', cursive;
    font-size: 17px;
    color: var(--terra);
    display: block;
    margin-bottom: 6px;
  }

  .card p { font-size: 15px; margin: 0; }

  .btn {
    display: inline-block;
    font-family: 'Jost', sans-serif;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: var(--cream);
    background: var(--terra);
    padding: 15px 44px;
    border-radius: 100px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }

  .btn:hover { background: var(--terra-l); transform: translateY(-2px); }

  .live-dot {
    display: inline-block;
    width: 7px; height: 7px;
    background: var(--sage);
    border-radius: 50%;
    margin-right: 7px;
    vertical-align: middle;
    animation: breathe 2.5s ease-in-out infinite;
  }
  @keyframes breathe { 0%,100%{opacity:1} 50%{opacity:0.3} }

  .foto {
    width: 100%;
    border-radius: 4px;
    display: block;
    filter: sepia(10%) saturate(88%) brightness(1.02);
  }

  .cierre {
    background: var(--ink);
    text-align: center;
    padding: 88px 32px 80px;
  }

  .cierre-title {
    font-family: 'Lora', serif;
    font-style: italic;
    font-size: clamp(28px, 6vw, 44px);
    color: var(--paper);
    margin-bottom: 14px;
    line-height: 1.3;
  }

  .cierre-hand {
    font-family: 'Caveat', cursive;
    font-size: 20px;
    color: var(--terra-l);
    margin-top: 18px;
    display: block;
  }

  @media (max-width: 480px) {
    .card { padding: 18px 18px; }
  }
`;

const IMG_PAREJA = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=65&auto=format";
const IMG_LUGAR  = "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=65&auto=format";

export default function Boda() {
  const [clicked, setClicked] = useState(false);
  const wa = "https://wa.me/34600000000?text=¡Hola!%20Confirmo%20que%20estaré%20el%2026%20de%20septiembre%20%F0%9F%A4%8D";

  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow">una cosa que queremos contarte</span>
          <h1 className="hero-title">Nos<br/>casamos 🤍</h1>
          <div className="hero-date">26 de septiembre</div>
          <p className="hero-sub">Queremos compartir algo muy íntimo contigo</p>
        </div>
      </div>

      {/* PULLQUOTE */}
      <div style={{ background: "var(--cream)", borderBottom: "1px solid rgba(156,107,60,0.12)" }}>
        <div className="pullquote">
          No es una boda grande ni tradicional ni complicada.
          <span style={{
            display: "block", marginTop: 16,
            fontStyle: "normal", fontFamily: "'Jost',sans-serif",
            fontSize: 16, fontWeight: 300, color: "var(--ink-soft)"
          }}>
            Es algo pequeño, muy nuestro, con gente muy elegida.<br/>
            Y nos hace ilusión que estés 🤍
          </span>
        </div>
      </div>

      {/* NUESTRA IDEA — con foto */}
      <div className="section-beige">
        <div className="section-beige-inner">
          <span className="label">nuestra idea</span>
          <h2>Algo que se siente<br/>de verdad</h2>
          <p>No queremos protocolo, ni un día de esos que pasan volando sin recordar nada. Queremos estar bien, tranquilos, con vosotros.</p>
          <span className="sep" />
          <img className="foto" src={IMG_PAREJA} alt="la pareja" style={{ maxWidth: 320, marginBottom: 0 }} />
        </div>
      </div>

      {/* CUÁNDO Y DÓNDE */}
      <div className="section">
        <span className="label">cuándo y dónde</span>
        <h2>El 26 de septiembre<br/>en Valladolid</h2>

        <div className="card">
          <span className="card-label">📍 el sitio</span>
          <p>La cosa será en el <strong style={{ fontWeight: 400, color: "var(--ink)" }}>Monasterio de Cabezón de Pisuerga</strong>. Un lugar bonito y tranquilo, muy nuestro.</p>
        </div>

        <div className="card">
          <span className="card-label">🍽 después</span>
          <p>Iremos a comer al <strong style={{ fontWeight: 400, color: "var(--ink)" }}>restaurante Río Luz</strong>.</p>
        </div>

        <div className="card">
          <span className="card-label">🕐 la hora</span>
          <p>La confirmaremos pronto. No te preocupes ahora.</p>
        </div>

        <img className="foto" src={IMG_LUGAR} alt="lugar" style={{ marginTop: 32 }} />
      </div>

      {/* CÓMO SERÁ */}
      <div className="section-beige">
        <div className="section-beige-inner">
          <span className="label">cómo será</span>
          <h2>Sin protocolos<br/>ni prisas</h2>
          <p>Será una boda muy pequeña — unas 30 ó 35 personas.</p>
          <p>Sin complicaciones, sin formalismos, sin nada raro.</p>
          <p>Nos gustaría que vengas cómodo/a, siendo tú.</p>
        </div>
      </div>

      {/* CONFIRMACIÓN */}
      <div className="section" style={{ textAlign: "center" }}>
        <span className="label" style={{ display: "block", textAlign: "center", transform: "rotate(-0.5deg)" }}>¿podrás venir?</span>
        <h2 style={{ textAlign: "center" }}>Para nosotros<br/>importa mucho saberlo</h2>
        <p style={{ textAlign: "center", maxWidth: 360, margin: "0 auto 32px" }}>
          Cuando lo sepas, cuéntanoslo. Sin prisa, cuando puedas.
        </p>
        {clicked
          ? <p style={{ fontFamily: "'Caveat',cursive", fontSize: 26, color: "var(--terra)", textAlign: "center" }}>¡Qué alegría! 🤍</p>
          : <a className="btn" href={wa} target="_blank" rel="noopener noreferrer" onClick={() => setClicked(true)}>
              Confirmar asistencia
            </a>
        }
        <p style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 14, opacity: 0.7 }}>
          Puedes hacerlo cuando quieras, sin ninguna prisa
        </p>
      </div>

      {/* DETALLES */}
      <div className="section-beige">
        <div className="section-beige-inner">
          <p style={{ marginBottom: 16, fontSize: 14 }}>
            <span className="live-dot" />
            <span style={{ fontFamily: "'Caveat',cursive", fontSize: 17, color: "var(--terra)", verticalAlign: "middle" }}>
              se va actualizando
            </span>
          </p>
          <span className="label">detalles</span>
          <h2>Ya te iremos<br/>contando más</h2>
          <p>Iremos actualizando esta página poco a poco con horarios y todo lo que necesites saber.</p>
          <p>No hace falta que tengas todo ahora — ya te iremos contando 😊</p>
        </div>
      </div>

      {/* CIERRE */}
      <div className="cierre">
        <p className="cierre-title">Gracias por formar<br/>parte de esto 🤍</p>
        <span className="cierre-hand">26 · 09 · 2025 · Valladolid</span>
      </div>
    </>
  );
}
