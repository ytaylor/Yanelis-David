import "./OurStory.css";

import fotoPareja from '../../assets/nosotros_ia.jpeg';

const OurStory = () => {
  return (
    <section className="our-story" id="historia">
      <div className="our-story__content">

        <p className="our-story__eyebrow">NUESTRA HISTORIA</p>

        <h2>
          Hay historias que
          <span> empiezan sin hacer ruido.</span>
        </h2>

        <div className="our-story__divider">
          <span></span>
          ✦
          <span></span>
        </div>

        <div className="our-story__photo">
          <img
            src={fotoPareja}
            alt="Yanelis y David"
          />
        </div>

        <p className="our-story__text">
          Dos personas, dos caminos y una historia que, paso a paso,
          nos llevó hasta aquí.
        </p>

        <p className="our-story__date">
          26 · 09 · 2026
        </p>

        <div className="our-story__milestones">

          <div className="milestone">
            <span className="milestone__icon">✦</span>
            <h3>Nos conocimos</h3>
            <p>
              Y sin saberlo, comenzamos a escribir nuestra historia.
            </p>
          </div>

          <div className="milestone">
            <span className="milestone__icon">⌂</span>
            <h3>Construimos nuestro hogar</h3>
            <p>
              Un hogar lleno de pequeños momentos, risas y recuerdos.
            </p>
          </div>

          <div className="milestone">
            <span className="milestone__icon">♡</span>
            <h3>Damos el siguiente paso</h3>
            <p>
              Y queremos celebrarlo rodeados de las personas que queremos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;

