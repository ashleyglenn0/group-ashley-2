

import { useEffect, useState } from 'react';

const MovieApiData = () => {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'fae46c29ceeaecf4154856d4ac887a0a';

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => {
        // Check if the response is good
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        // Parse the JSON data from the response
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
        //ternary above for possible errors- if true, return inside <p> element
        <p>Error fetching movie data: {error}</p>
      ) : (
        //stringify json object, null, spacing for results set to 3
        <pre>{JSON.stringify(movieData, null, 3)}</pre>
      )}
    </div>
  );
};

export default MovieApiData;
 
 
  