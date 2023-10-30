import { useParams } from "react-router-dom"; 
import { useState,useEffect } from "react";
import { fetchShowDetails } from "../../services/api";

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

function ShowDetails() {
  // Use the useParams hook from React Router to get the show ID from the URL
  const { showId } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    // Fetch show details based on the showId
    const fetchShow = async () => {
      try {
        const data = await fetchShowDetails(showId); // Implement fetchShowDetails in your API service
        setShow(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchShow();
  }, [showId]);

  return (
    <div>
      {show && (
        <div>
          <h2>{show.title}</h2>
          <p>Seasons: {show.seasons}</p>
          <p>
            Genres:{" "}
            {show.genres.map((genreId) => genreMapping[genreId]).join(", ")}
          </p>
          <p>Description: {show.description}</p>
          <p>
            Last Updated: {new Date(show.updated).toLocaleDateString("en-GB")}
          </p>

          {/* Display the list of seasons and episodes here */}
          <h3>Seasons and Episodes</h3>
          <ul>
            {show.seasons.map((season) => (
              <li key={season.id}>
                Season {season.number} - {season.title}
                <ul>
                  {season.episodes.map((episode) => (
                    <li key={episode.id}>
                      Episode {episode.number} - {episode.title}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShowDetails;
