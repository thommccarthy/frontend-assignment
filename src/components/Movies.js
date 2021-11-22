import React, { useEffect } from 'react';
import MoviesGrid from './MoviesGrid.js';
import moviesStyles from './Movies.module.css';

const Movies = ({
  movies,
  latestMovies,
  searchTerm,
  showLatest,
  setShowLatest,
}) => {
  useEffect(() => {
    if (searchTerm) {
      setShowLatest(false);
    } else {
      setShowLatest(true);
    }
  }, [searchTerm, setShowLatest]);

  return (
    <div>
      <div>
        {showLatest ? (
          <h2 className={moviesStyles.resultsHeader}>Latest Movies</h2>
        ) : (
          <h2 className={moviesStyles.resultsHeader}>
            Results for '{searchTerm}'
          </h2>
        )}
      </div>
      <MoviesGrid movies={showLatest ? latestMovies : movies} />
    </div>
  );
};

export default Movies;
