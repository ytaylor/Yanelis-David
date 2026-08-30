import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <div className="details__container">

        <div className="details__intro">
          <span className="details__eyebrow">Lo pequeños detalles</span>

          <h2>Una boda muy nuestra</h2>

          <p>
            No es una boda grande ni tradicional.
            Es una boda bonita, sencilla y cercana,
            pensada para disfrutarla con las personas que queremos.
          </p>
        </div>

        <div className="details__grid">

          {/* Dress Code */}
          <article className="detail-card">
            <div className="detail-card__icon">✦</div>

            <span className="detail-card__number">01</span>

            <h3>Código de vestimenta</h3>

            <p className="detail-card__highlight">
              Ven como te sientas tú.
            </p>

            <p>
              No hay protocolo ni hace falta ir de gala.
              Queremos una boda cercana, cómoda y natural,
              así que ponte guapo, pero sobre todo,
              ponte cómodo y disfruta.
            </p>
          </article>

          {/* Un pequeño detalle */}
          <article className="detail-card">
            <div className="detail-card__icon">♡</div>

            <span className="detail-card__number">02</span>

            <h3>Un pequeño detalle</h3>

            <p className="detail-card__highlight">
              Lo importante es que estés.
            </p>

            <p>
              No esperamos ningún regalo. De verdad.
              Para nosotros, el mejor regalo es compartir
              este día contigo.
            </p>

            <p>
              Pero si aun así quieres hacernos algún presente,
              hemos preparado un espacio para recibir regalos
              y sobres durante la celebración.
            </p>
          </article>

          {/* Durante el día */}
          <article className="detail-card">
            <div className="detail-card__icon">✧</div>

            <span className="detail-card__number">03</span>

            <h3>Durante el día 📸</h3>

            <p className="detail-card__highlight">
             Disfrutad, nosotros nos encargamos de las fotos.
            </p>

            <p>

            Habrá un fotógrafo especializado acompañándonos durante el día para capturar todos esos momentos que queremos recordar, así que no hace falta que estéis pendientes de sacar el móvil.

            Solo disfrutad, reíd, abrazadnos y vivid el momento con nosotros.


            </p>

            <p>
        Y, por supuesto, si queréis hacer vuestras propias fotos, tendréis un espacio preparado para compartirlas. Podréis subir todas las que queráis y, después, las compartiremos entre todos para que nadie se quede sin ver ningún recuerdo.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}

export default Details;
