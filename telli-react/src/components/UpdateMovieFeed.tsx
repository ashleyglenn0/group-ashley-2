import { useState } from 'react';
import MovieApiData from './MovieApiData';

function MovieFeed({ movieData }) {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  return (
    <div>
      {selectedMovieId ? (
        <MovieApiData movieId={selectedMovieId} />
      ) : (
        movieData.map(movie => (
          <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          </div>
        ))
      )}
    </div>
  );
}

export default MovieFeed;