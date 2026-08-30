
import "./TheDay.css";
import fotoMonasterio from '../../assets/monasterio.png';
import fotoRioLuz from '../../assets/rio_luz.png';

const events = [
  {
    time: "12:00",
    title: "Ceremonia",
    place: "Monasterio de Santa María de Palazuelos",
    description:
      "El momento en el que comienza nuestra historia como marido y mujer.",
    image: fotoMonasterio,
  },
  {
    time: "13:30",
    title: "Cóctel",
    place: "Restaurante Río Luz",
    description:
      "Brindaremos, picaremos algo y disfrutaremos juntos de este momento.",
    image: fotoRioLuz  },
  {
    time: "14:30",
    title: "Comida",
    place: "Restaurante Río Luz",
    description:
      "Una mesa, buena comida y las personas que más queremos.",
  },
  {
    time: "17:00",
    title: "Barra Libre",
    place: "Restaurante Río Luz",
    description:
      "Porque las mejores conversaciones siempre aparecen después de comer. (1 hora y media)",
  },
];

function TheDay() {
  return (
    <section className="the-day" id="the-day">
      <div className="the-day__intro">
        <span className="the-day__eyebrow">26 · 09 · 2026</span>

        <h2>El día que decimos "Sí, quiero"</h2>

        <p>
          Un día para celebrar, reír, brindar y compartirlo con las personas
          que queremos.
        </p>
      </div>

      <div className="timeline">
        {events.map((event, index) => (
          <div className="timeline__item" key={`${event.time}-${event.title}`}>
            <div className="timeline__time">{event.time}</div>

            <div className="timeline__line">
              <span className="timeline__dot"></span>

              {index !== events.length - 1 && (
                <span className="timeline__connector"></span>
              )}
            </div>

            <div className="timeline__content">
              <span className="timeline__number">
                0{index + 1}
              </span>

              <h3>{event.title}</h3>

              <span className="timeline__place">{event.place}</span>

              <p>{event.description}</p>

              {event.image && (
                <div className="timeline__location">
                  <img src={event.image} alt={event.place} />

                  {event.location && (
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noreferrer"
                      className="timeline__location-link"
                    >
                      Ver ubicación →
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TheDay;

