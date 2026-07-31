import { Link } from "react-router-dom";
import "./../styles/FeaturedStories.css";
import featuredStories from "../data/featuredStories";

function FeaturedStories() {
  return (
    <section className="featured">

      <div className="featured-title">
        <p>FEATURED STORIES</p>
        <h2>Three Unforgettable Celebrations</h2>
      </div>

      <div className="featured-grid">

        {featuredStories.map((story, index) => (

          <Link
            to={`/story/${story.slug}`}
            key={story.id}
            className="story-card"
          >

            <img src={story.cover} alt={story.couple} />

            <div className="story-overlay">
              <h3>{story.couple}</h3>
              <p>{story.location}</p>
              <span>View Story →</span>
            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default FeaturedStories;