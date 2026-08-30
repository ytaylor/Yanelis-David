
import "./Wedding.css";
import fotoMonasterio from '../../assets/monasterio.png';
import fotoRioLuz from '../../assets/rio_luz.png';

const Wedding = () => {
  return (
    <section className="wedding" id="wedding">
      <div className="wedding__inner">

        {/* INTRO */}
        <div className="wedding__intro">
          <span className="wedding__eyebrow">LA BODA</span>

          <h2>
            Nuestro
            <span> gran día</span>
          </h2>

          <p>
            Un día para celebrar nuestro amor, rodeados de las personas
            que queremos y en lugares muy especiales para nosotros.
          </p>
        </div>

        {/* FECHA */}
        <div className="wedding__date">
          <span className="wedding__date-label">TE ESPERAMOS</span>

          <div className="wedding__date-main">
            <span>26</span>
            <div>
              <strong>SEPTIEMBRE</strong>
              <small>2026</small>
            </div>
          </div>
        </div>

        {/* CEREMONIA */}
        <div className="wedding-event wedding-event--ceremony">

          <div className="wedding-event__time">
            <span>12:00</span>
            <small>h</small>
          </div>

          <div className="wedding-event__line">
            <span className="wedding-event__dot">♡</span>
          </div>

          <div className="wedding-event__content">
            <span className="wedding-event__eyebrow">
              CEREMONIA
            </span>

            <h3>
              Monasterio de
              <em> Santa María de Palazuelos</em>
            </h3>

            <p>
              Comenzaremos a las <strong>12:00 h</strong>, rodeados de
              naturaleza y en un espacio lleno de encanto, recientemente
              renovado para conservar su esencia y belleza.
            </p>
     <div className="our-story__photo">       <img src={fotoMonasterio} /></div>
           

            <a
              href="https://maps.app.goo.gl/b3dMFrcLuPHPFwzD7"
              target="_blank"
              rel="noreferrer"
              className="wedding-event__link"
            >
              VER UBICACIÓN <span>↗</span>
            </a>
          </div>
        </div>

        {/* AVISO CEREMONIA */}
        <div className="wedding-note">
          <span className="wedding-note__icon">✦</span>

          <div>
            <h4>Un pequeño detalle</h4>

            <p>
              Al celebrarse la ceremonia en un entorno natural tan especial,
              os pedimos que no llevéis cañones, confeti u otros
              elementos que puedan dejar residuos.
            </p>

            <p>
              No tenéis que preocuparos por preparar nada: nosotros
              proporcionaremos <strong>pétalos y arroz</strong> para quienes
              queráis acompañarnos en ese momento tan bonito.
            </p>

            <small>
              Utilizaremos únicamente elementos biodegradables.
            </small>
          </div>
        </div>

        {/* RESTAURANTE */}
        <div className="wedding-event wedding-event--restaurant">

          <div className="wedding-event__time">
            <span>13:30</span>
            <small>h</small>
          </div>

          <div className="wedding-event__line">
            <span className="wedding-event__dot">✦</span>
          </div>

          <div className="wedding-event__content">
            <span className="wedding-event__eyebrow">
              CELEBRACIÓN
            </span>

            <h3>
              Restaurante
              <em> Río Luz</em>
            </h3>
            <div className="our-story__photo">       <img src={fotoRioLuz } /></div>

           

            <p>
              Después de la ceremonia nos trasladaremos al restaurante
              para brindar, disfrutar del cóctel y compartir la comida
              juntos.
            </p>

            <p>
             <div>

              <div>
                <strong>13:30h - 14:30h </strong>
                <span>Cóctel</span>
              </div>

              <div>
                <strong>14:30h - 17:00h </strong>
                <span>Comida</span>
              </div>

              <div>
                <strong>17:00h - 18:30h </strong>
                <span>Barra libre</span>
              </div>

            </div>
            </p>

            <a
              href="https://maps.app.goo.gl/tvCXyqFgaS61g9r36"
              target="_blank"
              rel="noreferrer"
              className="wedding-event__link"
            >
              VER UBICACIÓN <span>↗</span>
            </a>
          </div>
        </div>

        {/* HORARIOS APROXIMADOS */}
        <div className="wedding__approx">
          <span>~</span>

          <p>
            <strong>Todos los horarios son aproximados.</strong>
            <br />
            Queremos disfrutar del día sin prisas, por lo que los tiempos
            podrán variar ligeramente dependiendo de cómo vaya evolucionando
            la celebración.
          </p>
        </div>

        {/* INTOLERANCIAS */}
        <div className="wedding-note wedding-note--food">
          <span className="wedding-note__icon">♡</span>

          <div>
            <h4>¿Tienes alguna intolerancia?</h4>

            <p>
              Si tienes alguna intolerancia, alergia o necesidad alimentaria
              especial, por favor, comunícanoslo directamente a nosotros
              para poder avisar al restaurante con antelación.
            </p>

            <small>
              Queremos que todos podáis disfrutar del día y de la comida
              con total tranquilidad.
            </small>
          </div>
        </div>

        {/* CIERRE */}
        <div className="wedding__closing">
          <span>Nos vemos allí</span>

          <p>
            Y mientras tanto...
            <br />
            <em>¡qué ganas de celebrar con vosotros!</em>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Wedding;
