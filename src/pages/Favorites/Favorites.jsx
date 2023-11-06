// import { useState, useEffect } from "react";

// const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);
//   const [sortedFavorites, setSortedFavorites] = useState([]);
//   const [sortOrder, setSortOrder] = useState("az");
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchFavorites();
//   }, []);

//   useEffect(() => {
//     sortFavorites();
//   }, [favorites, sortOrder]);

//   const fetchFavorites = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("favorites")
//         .select("*")
//         .eq("user_id", user?.id);
//       if (error) {
//         console.error("Error fetching favorites:", error);
//       } else {
//         setFavorites(data);
//       }
//     } catch (error) {
//       console.error("Error fetching favorites:", error);
//     }
//   };

//   const sortFavorites = () => {
//     const sorted = [...favorites];
//     if (sortOrder === "az") {
//       sorted.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (sortOrder === "za") {
//       sorted.sort((a, b) => b.title.localeCompare(a.title));
//     } else if (sortOrder === "ascending") {
//       sorted.sort((a, b) => new Date(a.updated) - new Date(b.updated));
//     } else if (sortOrder === "descending") {
//       sorted.sort((a, b) => new Date(b.updated) - new Date(a.updated));
//     }
//     setSortedFavorites(sorted);
//   };

//   const removeFromFavorites = async (favoriteId) => {
//     try {
//       const { error } = await supabase
//         .from("favorites")
//         .delete()
//         .eq("id", favoriteId);
//       if (error) {
//         console.error("Error removing from favorites:", error);
//       } else {
//         setFavorites(favorites.filter((fav) => fav.id !== favoriteId));
//       }
//     } catch (error) {
//       console.error("Error removing from favorites:", error);
//     }
//   };

//   useEffect(() => {
//     const session = supabase.auth.session();
//     setUser(session?.user || null);
//   }, []);

//   return (
//     <div>
//       <h2>My Favorites</h2>
//       <div>
//         <label htmlFor="sort">Sort Favorites: </label>
//         <select
//           id="sort"
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//         >
//           <option value="az">A-Z</option>
//           <option value="za">Z-A</option>
//           <option value="ascending">Ascending Order</option>
//           <option value="descending">Descending Order</option>
//         </select>
//       </div>
//       {sortedFavorites.map((favorite) => (
//         <div key={favorite.id}>
//           <h3>{favorite.title}</h3>
//           <p>Show: {favorite.show}</p>
//           <p>Season: {favorite.season}</p>
//           <button onClick={() => removeFromFavorites(favorite.id)}>
//             Remove from Favorites
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Favorites;
