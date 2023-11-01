import { useState, useEffect } from "react";
import { fetchShows } from "C:/Users/Mihlali/Desktop/ReactProject/capstone/src/services/api.js";
import "./Main.css";

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

function Main() {
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
      {shows.map((show) => (
        <div key={show.id} className="show-card">
          <img src={show.image} alt={show.title} className="show-image" />
          <div className="show-details">
            <h2 className="show-title">{show.title}</h2>
            <p className="show-season"><span className="maindesign">Seasons:</span> {show.seasons}</p>
            <p className="show-genre">
              <span className="maindesign">Genres:{" "}</span>
              {show.genres.map((genreId) => genreMapping[genreId]).join(", ")}
            </p>
            <p className="show-description">
              <span className="maindesign">Description:</span>
              {truncateDescription(show.description, 150)}
            </p>
            <p className="show-update">
              <span className="maindesign">Updated:</span> {new Date(show.updated).toLocaleDateString("en-GB")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
