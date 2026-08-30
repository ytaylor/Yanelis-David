import "./Hero.css";
{/* HERO SECTION */}

const Hero = () => {
  return ( 
<header className="hero">
  <div className="hero-inner">

    <p className="hero-names">Yanelis & David</p>

    <p className="hero-date">26 · 09 · 2026</p>

    <h1 className="hero-title">
      Ya casi<br />
      es el día
    </h1>

    <p className="hero-sub">
      Y tenemos muchas ganas de compartirlo contigo.
    </p>

    <span className="hero-scroll">↓</span>

  </div>
</header>



  );
};

export default Hero;