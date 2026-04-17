import React, { useState } from "react";
import "./Invitation.css";
import { Section, InfoCard } from "./InvitationLayout";
import fotoPareja from '../assets/nosotros.jpeg';


const IMG_PAREJA = {fotoPareja};
const IMG_LUGAR  = "https://www.monestirs.cat/monst/annex/espa/calleo/valladolid/palaz/Z-Palazuelos-01.jpg";

export default function Boda() {
  const [clicked, setClicked] = useState(false);
  const wa = "https://wa.me/34665695925?text=¡Hola!%20Confirmo%20que%20estaré%20el%2026%20de%20septiembre%20%F0%9F%A4%8D";

  return (
    <div className="">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-intro-card">
            <p className="hero-names">Yanelis & David</p>
          </div>
          <h1 className="hero-title">Nos<br/>casamos 🤍</h1>
          <p className="hero-sub"> Y queremos compartirlo contigo: el <strong>26 de septiembre</strong> damos un paso importante…
y nos hace mucha ilusión que formes parte de algo muy íntimo, muy nuestro.</p>
        </div>
      </header>

      {/* NUESTRA IDEA */}
      <Section isBeige label="nuestra idea" title="Algo que se siente de verdad">
        <p className="text-p">No es una boda grande, ni tradicional, ni complicada.
Es más bien una reunión bonita, con gente muy elegida.</p>
        <span className="sep" />
                <p className="text-p">Queremos algo sencillo, cercano, sin protocolos raros. Estar a gusto, disfrutar, comer rico y compartir el momento con calma.</p>
        <span className="sep" />
         <p className="text-p">Si estás aquí, es porque eres importante para nosotros 🤍</p>
        <span className="sep" />
        <img className="foto" src={fotoPareja} alt="la pareja" style={{ maxWidth: 320 }} />
      </Section>

      {/* CUÁNDO Y DÓNDE */}
      <Section label="cuándo y dónde" title="El 26 de septiembre en Valladolid">
        <InfoCard label="📍 el sitio">
          <p className="text-p">La ceremonia civil será en el<strong> Monasterio de Santa María de Palazuelos </strong> de Cabezón de Pisuerga </p>
        </InfoCard>
        <InfoCard label="🍽 después">
          <p className="text-p">Después iremos a comer juntos
(el sitio lo confirmaremos más adelante)</p>
        </InfoCard>
        <InfoCard label="🕐 la hora">
          <p className="text-p">La confirmaremos pronto. No te preocupes ahora.</p>
        </InfoCard>
        <img className="foto" src={IMG_LUGAR} alt="lugar" style={{ marginTop: 32, maxWidth: 320  }} />
      </Section>

      {/* CÓMO SERÁ */}
      <Section isBeige label="cómo será" title="Sin protocolos ni prisas">
        <p className="text-p">Será una boda muy pequeña — unas 30 ó 35 personas.</p>
        <p className="text-p">Sin complicaciones, sin formalismos, sin nada raro.</p>
        <p className="text-p">Nos gustaría que vengas cómodo/a, siendo tú.</p>
      </Section>

      {/* CONFIRMACIÓN (RSVP) */}
      <Section center label="¿podrás venir?" title="Para nosotros es importante saber si podrás venir">
        <p className="text-p" style={{ maxWidth: 360, margin: "0 auto 32px" }}>
          Cuando lo sepas, cuéntanoslo. Sin prisa, pero sin pausa 😉. 
        </p>
        {clicked ? (
          <p style={{ fontFamily: "'Caveat',cursive", fontSize: 26, color: "var(--terra)" }}>¡Qué alegría! 🤍</p>
        ) : (
        <a className="btn-wa" href={wa} target="_blank" rel="noopener noreferrer" onClick={() => setClicked(true)}>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.532 5.845L.057 23.617a.75.75 0 0 0 .92.92l5.733-1.484A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 0 1-4.989-1.375l-.358-.214-3.717.961.988-3.635-.234-.374A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
  Confirmar por WhatsApp al 665695925
</a>
        )}
        <p style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 14, opacity: 0.7 }}>
          Nos hace ilusión ir sabiendo quiénes vendrán para organizarlo todo mejor.
        </p>
      </Section>

      {/* DETALLES DINÁMICOS */}
      <Section isBeige label="detalles" title="Ya te iremos contando más">
        <p style={{ marginBottom: 16, fontSize: 14 }}>
          <span className="live-dot" />
          <span style={{ fontFamily: "'Caveat',cursive", fontSize: 17, color: "var(--terra)", verticalAlign: "middle" }}>
            se va actualizando
          </span>
        </p>
        <p className="text-p">Iremos actualizando esta página poco a poco con horarios y todo lo que necesites saber.</p>
      </Section>

      {/* CIERRE */}
      <footer className="cierre">
        <p className="cierre-title">Gracias por formar<br/>parte de esto 🤍</p>
        <span className="cierre-hand">26 · 09 · 2026 · Valladolid</span>
      </footer>
    </div>
  );
}