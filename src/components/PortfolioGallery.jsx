import { useState } from "react";
import portfolio from "../data/portfolio";
import "../styles/PortfolioGallery.css";

function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="portfolio">
      <div className="portfolio-title">
        <p>EDITORIAL PORTFOLIO</p>
        <h2>Moments That Last Forever</h2>
      </div>

      <div className="portfolio-grid">
        {portfolio.map((item) => (
          <div
          className="portfolio-item"
          key={item.id}
          onClick={() => setSelectedImage(item.image)}
        >
          <img
            src={item.image}
            alt={`Portfolio ${item.id}`}
          />
        </div>
        ))}
      </div>
          {selectedImage && (
      <div
        className="lightbox"
        onClick={() => setSelectedImage(null)}
      >
        <img
          src={selectedImage}
          alt="Preview"
          className="lightbox-image"
        />
      </div>
    )}
    </section>
  );
}

export default PortfolioGallery;