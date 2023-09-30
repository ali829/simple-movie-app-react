// 53513f53
// http://www.omdbapi.com/?s=spiderman&apikey=53513f53
import { useEffect, useState } from "react";
import "./app.css";
import SearchBar from "./components/SearchBar.jsx";
import { MovieCard } from "./components/MovieCard";

export default function App() {
  const API_URL = "http://www.omdbapi.com/";
  const API_KEY = "53513f53";
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getMoviesByTerm();
  }, []);
  const getMoviesByTerm = async (term = "batman") => {
    const response = await fetch(`${API_URL}?s=${term}&apikey=${API_KEY}`);
    let data = await response.json();
    setMovies(data.Search);
  };

  return (
    <>
      <h1 className="app-title">Flip Film</h1>
      <SearchBar handleSearch={getMoviesByTerm} />

      {movies?.length > 0 ? (
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieCard key={movie.Title} movie={movie} />
          ))}
        </div>
      ) : (
        <h1 className="empty">Not Found...</h1>
      )}
    </>
  );
}
