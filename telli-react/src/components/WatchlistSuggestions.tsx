import React, { useState, useEffect } from "react";

interface SuggestedMoviesProps {
  movieId: number;
}

const SuggestedMovies: React.FC<SuggestedMoviesProps> = ({ movieId }) => {
  const [suggestedMovies, setSuggestedMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      const apiKey = 'YOUR_API_KEY';
      const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`;
      
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setSuggestedMovies(data.results);
      } catch (error) {
        console.error('Error fetching similar movies:', error);
      }
    };

    fetchSimilarMovies();
  }, [movieId]);

  return (
    <div>
      <h3>Suggested Movies</h3>
      <ul>
        {suggestedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedMovies;