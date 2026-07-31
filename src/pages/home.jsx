import Hero from "../components/Hero";
import FeaturedStories from "../components/FeaturedStories";
import PortfolioGallery from "../components/PortfolioGallery";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedStories />
      <PortfolioGallery />
      <Footer />
    </>
  );
}

export default Home;