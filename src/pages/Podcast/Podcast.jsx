import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Podcast.css";

const Podcast = () => {
  const { id } = useParams();
  const goBack = useNavigate();

  const [podcast, setPodcast] = useState({});
  const [podcastSeason, setPodcastSeason] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        setLoading(true);
        const response = await fetchPodcastData(id);
        const data = await response.json();
        setPodcast(data);
        setPodcastSeason(data.seasons[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcast();
  }, [id]);

  const fetchPodcastData = async (id) => {
    try {
      const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch podcast data: ${error.message}`);
    }
  };

  const handleSelectSeason = (e) => {
    const selectedSeason = podcast.seasons.find(
      (season) => season.season === parseInt(e.target.value)
    );
    setPodcastSeason(selectedSeason);
  };

  if (loading)
    return (
      <div className="loading-message">
        <p>Loading...</p>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="podcast-container">
      <p className="back-link" onClick={() => goBack("/home")}>
        Back
      </p>
      <img
        src={podcastSeason.image}
        alt={podcast.title}
        className="showimage"
      />
      <div className="showdetails">
        <h2 className="showtitle">{podcast.title}</h2>
        <p className="showdescription">
          <span className="description">Description:</span>
          <br />
          {podcast.description}
        </p>
        <br />
        <div className="showseason">
          <label htmlFor="seasons" className="description">
            Seasons:
          </label>
          <select name="seasons" id="seasons" onChange={handleSelectSeason}>
            <option value="">Select a season</option>
            {podcast.seasons &&
              podcast.seasons.map((season) => (
                <option key={season.season} value={season.season}>
                  {season.title} (Season {season.season})
                </option>
              ))}
          </select>
        </div>
        <div className="show-episode">
          <h2 className="season-title">Season: {podcastSeason.season}</h2>
          <p className="episode-title">
            Episodes: {podcastSeason.episodes?.length || 0}
          </p>
          <br />
          <span className="episode-container">
            {podcastSeason.episodes &&
              podcastSeason.episodes.map((episode) => (
                <div key={episode.episode} className="episode-card">
                  <h3>{episode.title}</h3>
                  <p>Episode {episode.episode}</p>
                  <p>{episode.description}</p>
                  <audio controls src={episode.file}></audio>
                </div>
              ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
