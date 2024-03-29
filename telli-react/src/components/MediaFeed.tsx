import { useState, useEffect } from "react";

interface PopularMovie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  // Add other properties as needed
}
async function getPopularMovies() {
  const apiToken = import.meta.env.VITE_APP_API_TOKEN;
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export default function MediaFeed() {
  const [popularMovies, setPopularMovies] = useState<PopularMovie[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPopularMovies();
        setPopularMovies(response.results);
        console.log(popularMovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  
  return (
    <>
      <h1 className="movie-feed-title">Popular Movies</h1>
      <div className="movie-list-media-feed">
        {popularMovies.map((movie) => (
          <div key={movie.id} className="movie-item-media-feed">
            <a href={`/movie/${movie.id}`}>
              <img className="media-feed"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
