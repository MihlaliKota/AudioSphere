import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { fetchShows } from "C:/Users/Mihlali/Desktop/ReactProject/capstone/src/services/api.js";
import "./Carousel.css";

const genreMapping = {
  1: "Personal Growth",
  2: "True Crime and Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family",
};

function CarouselSlide() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchAvailableShows = async () => {
      try {
        const data = await fetchShows();
        setShows(data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchAvailableShows();
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + " ...";
    }
    return description;
  };

  return (
    <div className="main-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        centerMode={true}
        centerSlidePercentage={20}
        emulateTouch={true}
        swipeable={true}
        infiniteLoop={true}
        selectedItem={2}
        interval={5000}
      >
        {shows.map((show) => (
          <div key={show.id} className="show-card">
            <img src={show.image} alt={show.title} className="show-image" />
            <div className="show-details">
              <h2 className="show-title">{show.title}</h2>
              <p className="show-metadata">Seasons: {show.seasons}</p>
              <p className="show-metadata">
                Genres:{" "}
                {show.genres.map((genreId) => genreMapping[genreId]).join(", ")}
              </p>
              <p className="show-description">
                Description: {truncateDescription(show.description, 150)}
              </p>
              <p className="show-metadata">
                Last Updated:{" "}
                {new Date(show.updated).toLocaleDateString("en-GB")}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselSlide;
