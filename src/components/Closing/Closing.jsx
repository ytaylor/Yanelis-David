import "./Closing.css";

const Closing = () => {
  return (
    <section className="closing" id="closing">
      <div className="closing__content">
        <span className="closing__flourish">✽</span>

        <h2 className="closing__title">
          Y lo que queda… <br />
          <em>lo vivimos juntos.</em>
        </h2>

        <p className="closing__text">
          Después de todo lo que hemos vivido para llegar hasta aquí,
          solo nos queda disfrutarlo con vosotros.
        </p>

        <div className="closing__date">
          26 · 09 · 2026
        </div>

        <div className="closing__names">
          Yanelis <span>&</span> David
        </div>

        <span className="closing__line"></span>
      </div>
    </section>
  );
};

export default Closing;