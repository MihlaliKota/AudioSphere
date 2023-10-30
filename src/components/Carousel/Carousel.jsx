import { useState, useEffect } from "react";
import { fetchShows } from "../../services/api";
import "./Carousel.css"

const ShowCarousel = () => {
  const [carouselShows, setCarouselShows] = useState([]);

  useEffect(() => {
    // Fetch shows for the carousel
    const fetchCarouselShows = async () => {
      try {
        const data = await fetchShows();
        // Set the carousel shows to the first few shows from the API response
        setCarouselShows(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching shows for carousel:", error);
      }
    };

    fetchCarouselShows();
  }, []);

  return (
    <div className="show-carousel">
      {carouselShows.map((show) => (
        <div key={show.id} className="carousel-item">
          <img src={show.image} alt={show.title} />
          <p>Seasons: {show.seasons}</p>
          <p>Genres: {show.genres.join(", ")}</p>
          <p>
            Last Updated: {new Date(show.updated).toLocaleDateString("en-GB")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShowCarousel;
