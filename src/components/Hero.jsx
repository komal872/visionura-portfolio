import heroImage from "../assets/images/Wedding1.jpg";

function Hero() {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Visionura Wedding Photography"
        className="hero-image"
        fetchPriority="high"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-logo">VISIONURA</h1>

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

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;