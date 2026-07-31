import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2 className="footer-logo">
        VISIONURA
      </h2>

      <p className="footer-tagline">
        POWERED BY VISION. DRIVEN BY EMOTION.
      </p>

      <div className="footer-links">
        <a
          href="https://www.instagram.com/thevisionura?igsh=Z2N5bDduaTBxM2hp"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <a
          href="https://www.linkedin.com/in/visionura-offical-15ab4241a/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>

        <a
          href="https://wa.me/916367017108"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>

      <div className="footer-line"></div>

      <p className="footer-copy">
        © 2026 Visionura. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;