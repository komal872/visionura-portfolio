import heroImage from "../assets/images/Wedding1.jpg";

function Hero() {
  return (
    <section className="hero">

      {/* Hero Image */}
      <div className="hero-image-wrapper">
        <img
          src={heroImage}
          alt="Visionura Wedding Photography"
          className="hero-image"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">

        <h1 className="hero-logo">
          VISIONURA
        </h1>

        <p className="hero-tagline">
          POWERED BY VISION. DRIVEN BY EMOTION.
        </p>

        <h2 className="hero-title">
          Capturing
          <br />
          Stories Beyond Time
        </h2>

        <p className="hero-description">
          Luxury wedding photography & films that preserve
          emotions, relationships and timeless memories.
        </p>

      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;