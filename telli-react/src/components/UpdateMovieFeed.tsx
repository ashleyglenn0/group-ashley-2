import { useNavigate } from 'react-router-dom';
import MovieApiData from './MovieApiData';

function MovieFeed({ movieData }) {
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div>
      {movieData.map(movie => (
        <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieFeed;