import { useNavigate } from "react-router-dom";
import "./Favorites.css";

const Favorites = () => {
  const goBack = useNavigate();

  return (
    <div>
      <p className="back-links" onClick={() => goBack("/home")}>
        Back
      </p>
      <h1>Favorite</h1>
    </div>
  );
};

export default Favorites;
