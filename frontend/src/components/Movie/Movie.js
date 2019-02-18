import React from 'react';
import styled from 'styled-components';

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Poster = styled.img`
  width: 100%;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  color: white;
  justify-content: flex-end;

  .movie-card__title {
    font-size: 1.25em;
    font-weight: 600;
  }
`;

const Overview = styled.p`
  font-size: 0.9em;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  max-height: 5.4rem;
  max-width: 100%;
`;

const Movie = ({
  id,
  poster,
  title,
  overview,
  release_date,
  style,
  className,
  ...otherProps
}) => {
  const classes = ['movie-card', className];

  return (
    <MovieCard
      className={classes.join(' ')}
      style={{ ...style }}
      {...otherProps}
    >
      <Poster className="movie-card__poster" src={poster} alt="poster" />
      <MovieInfo className="movie-card__information">
        <span className="movie-card__title">{title}</span>
        <i className="movie-card__release-date">{release_date}</i>
        <Overview className="movie-card__information">{overview}</Overview>
      </MovieInfo>
    </MovieCard>
  );
};

export default Movie;
