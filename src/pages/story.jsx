import { useParams } from "react-router-dom";
import featuredStories from "../data/featuredStories";
import "../styles/story.css";

function Story() {
  const { slug } = useParams();

  const story = featuredStories.find(
    (item) => item.slug === slug
  );

  if (!story) {
    return <h1>Story Not Found</h1>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="story-hero">
        <img
          src={story.hero}
          alt={story.couple}
          className="story-hero-image"
        />

        <div className="story-overlay">
          <h1>{story.couple}</h1>
          <p>{story.location}</p>
        </div>
      </section>

      {/* Story Content */}
      <section className="story-content">
        <h2>{story.story.title}</h2>

        {story.story.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
          <section className="story-gallery">
        {story.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${story.couple} ${index + 1}`}
          />
        ))}
      </section>
    </>
  );
}

export default Story;