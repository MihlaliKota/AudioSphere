import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Podcast = () => {
  const [podcast, setPodcast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [podcastSeason, setPodcastSeason] = useState({});
  const { id } = useParams();
  const goBack = useNavigate();

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://podcast-api.netlify.app/id/${id}`
        );
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

  function handleSelectSeason(e) {
    setPodcastSeason(podcast.seasons[parseInt(e.target.value-1)]);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p onClick={() => goBack("/")}>Back</p>
      <img src={podcast.image} alt={podcast.title} className="show-image" />
      <div className="show-details">
        <h2 className="show-title">{podcast.title}</h2>
        <p className="show-description">
          <span className="maindesign">Description:</span>
          {podcast.description}
        </p>
        <div className="show-season">
          <label className="maindesign" htmlFor="seasons">
            Seasons:
          </label>
          <select name="seasons" id="seasons" onChange={handleSelectSeason}>
            <option value="">Select a season</option>
            {podcast?.seasons &&
              podcast.seasons.map((option) => (
                <option key={option.season} value={option.season}>
                  {option.title} (Season {option.season})
                </option>
              ))}
          </select>
        </div>
        <div>
          <h2>Season: {podcastSeason.season}</h2>
          <p>Episodes: {podcastSeason.episodes?.length}</p>
        </div>
        <div>
          {podcastSeason?.episodes &&
            podcastSeason.episodes.map((episode) => (
              <div key={episode.episode}>
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
                <audio controls src={episode.file}></audio>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
