

import { useEffect, useState } from 'react';

const MovieApiData = () => {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api_key = import.meta.env.tmdb_api_key;

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      .then(response => {
        // Check if the response is good
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        // Pull JSON data from the response-- NOTE** DATA IS NOT PARSED YET!!
        return response.json();
      })
      .then(data => {
        // Set the movie data in state
        setMovieData(data);
      })
      .catch(error => {
        // Set the error in state
        setError(error.message);
      });
  }, []); // Empty array so the effect runs ONCE

  return (
    <div>
      {error ? (
        <p>Error fetching movie data: {error}</p>
      ) : (
        <div>
          <h2>Popular Movies</h2>
          <ul>
            {movieData &&
              movieData.results.map(movie => (
                <li key={movie.id}>
                  <h3>{movie.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    style={{ width: '300px', height: '450px' }}
                  />
                  <p>{movie.overview}</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieApiData;