import React, { useState } from 'react';
import Modal from './Modal';
import moviesStyles from './Movies.module.css';

const MoviesGrid = ({ movies }) => {
  const [modalMovie, setModalMovie] = useState(undefined);

  return (
    <div>
      <Modal modalMovie={modalMovie} setModalMovie={setModalMovie} />
      {movies.length ? (
        <div className={moviesStyles.grid}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={moviesStyles.movieCard}
              onClick={() => setModalMovie(movie)}
            >
              <h3 className={moviesStyles.movieTitle}>
                {movie.original_title}
              </h3>

              <div className={moviesStyles.movieRating}>
                <span className={moviesStyles.movieRatingScore}>
                  {movie.vote_average}
                </span>
              </div>

              {movie.backdrop_path !== null ? (
                <div className={moviesStyles.moviePosterWrapper}>
                  <img
                    alt={`${movie.title} promotional poster`}
                    className={moviesStyles.moviePoster}
                    src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path}`}
                  />
                </div>
              ) : (
                <div className={moviesStyles.noPreviewFound}>
                  <h2>No Poster Found</h2>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <h3>No Movies Found</h3>
      )}
    </div>
  );
};

export default MoviesGrid;
