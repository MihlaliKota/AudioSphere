import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./Card";

function Main() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((podcast) => {
          const { id, title, author, image, audio, link, seasons } = podcast;
          return { id, title, author, image, audio, link, seasons };
        });

        setPodcasts(formattedData);
      });
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={3}
        className="custom-carousel"
      >
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="carousel-card">
            <Card
              title={podcast.title}
              content={`Seasons: ${podcast.seasons}`}
              image={podcast.image}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Main;
