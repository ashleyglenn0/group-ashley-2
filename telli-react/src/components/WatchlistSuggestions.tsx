import React, { useState, useEffect } from "react";

interface SuggestedMoviesProps {
  tmdbId: number;
}

const SuggestedMovies: React.FC<SuggestedMoviesProps> = ({ tmdbId }) => {
  const [suggestedMovies, setSuggestedMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchSimilarMovies() {
      const url = `https://api.themoviedb.org/3/movie/${tmdbId}/similar?language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGU2NTJhODNlYzkwNzcxZTdkZWQ4YWEwMmMyMDJkYSIsInN1YiI6IjY1YWQ1OWJiMTU4Yzg1MDBhYzFiZTEyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nA96D4cB1ZUGNw42oU3Ah6NVMuQhb2WTlIehZJskGDg'
        }
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setSuggestedMovies(json.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchSimilarMovies();
  }, [tmdbId]);

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