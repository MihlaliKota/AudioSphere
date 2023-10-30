// import "./EpisodeList.css";

// const genres = {
//   1: "Personal Growth",
//   2: "True Crime and Investigative Journalism",
//   3: "History",
//   4: "Comedy",
//   5: "Entertainment",
//   6: "Business",
//   7: "Fiction",
//   8: "News",
//   9: "Kids and Family",
// };

// export default function EpisodeList({ shows }) {
//   if (!shows) {
//     return null;
//   }

//   return (
//     <div className="episode-list">
//       {shows.map((show) => (
//         <div key={show.id} className="episode">
//           <div className="episode-thumbnail">
//             <img src={show.thumbnail} alt={show.title} />
//           </div>
//           <div className="episode-details">
//             <h2>{show.title}</h2>
//             <p>
//               Genres: {show.genre.map((genreId) => genres[genreId]).join(", ")}
//             </p>
//             <p>Seasons: {show.seasons.length}</p>
//             <p>{show.description}</p>
//             <p>Last Updated: {show.updated}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
