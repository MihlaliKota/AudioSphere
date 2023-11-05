import { useState, useEffect } from "react";
// import { supabase } from "./supabase";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const { data, error } = await supabase.from("favorites").select("*");
      if (error) {
        console.error("Error fetching favorites:", error);
      } else {
        setFavorites(data);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <h3>{favorite.title}</h3>
          <p>Show: {favorite.show}</p>
          <p>Season: {favorite.season}</p>
          <button onClick={() => removeFromFavorites(favorite.id)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
