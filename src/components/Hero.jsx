import heroVideo from "../assets/videos/hero.mp4";

function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
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

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;