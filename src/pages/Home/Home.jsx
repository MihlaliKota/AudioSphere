import { useState, useEffect } from "react";
// import { fetchShows } from "../../services/api";
import CarouselSlide from "../../components/Carousel/Carousel";
import "./Home.css";
import { Link } from "react-router-dom";

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

function Home() {
  const [data, setData] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://podcast-api.netlify.app/shows");
        const data = await response.json();
        setPodcasts(data);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + " ...";
    }
    return description;
  };

  function sort(e) {
    const { value } = e.target;
    if (value === "za") {
      const orderZA = podcasts
        .slice()
        .sort((a, b) => b.title.localeCompare(a.title));

      setPodcasts(orderZA);
    }
    if (value === "az") {
      const orderAZ = podcasts
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));

      setPodcasts(orderAZ);
    }

    if (value === "ascending") {
      const ascending = podcasts
        .slice()
        .sort((a, b) => new Date(a.updated) - new Date(b.updated));

      setPodcasts(ascending);
    }

    if (value === "descending") {
      const descending = podcasts
        .slice()
        .sort((a, b) => new Date(b.updated) - new Date(a.updated));

      setPodcasts(descending);
    }
  }

  function search(e) {
    const { value } = e.target;
    setPodcasts(() => {
      return data.filter((podcast) => {
        return podcast.title?.toLowerCase().includes(value.toLowerCase());
      });
    });
  }

  return (
    <>
      <CarouselSlide />

      <div>
        <label htmlFor="sort">Sort Podcasts:</label>
        <select id="sort" onChange={sort}>
          <option value="">Sorted by</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="ascending">Ascending Order</option>
          <option value="descending">Descending Order</option>
        </select>
      </div>

      <div>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" onChange={search} />
      </div>
      <div className="main-container">
        {podcasts?.length > 0 &&
          podcasts.map((show) => (
            <div key={show.id} className="show-card">
              <Link to={`/podcast/${show.id}`}>
                <img src={show.image} alt={show.title} className="show-image" />
                <div className="show-details">
                  <h2 className="show-title">{show.title}</h2>
                  <p className="show-season">
                    <span className="maindesign">Seasons:</span> {show.seasons}
                  </p>
                  <p className="show-genre">
                    <span className="maindesign">Genres: </span>
                    {show.genres
                      .map((genreId) => genreMapping[genreId])
                      .join(", ")}
                  </p>
                  <p className="show-description">
                    <span className="maindesign">Description:</span>
                    {truncateDescription(show.description, 150)}
                  </p>
                  <p className="show-update">
                    <span className="maindesign">Updated:</span>{" "}
                    {new Date(show.updated).toLocaleDateString("en-GB")}
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
