import React from 'react';
import styled from 'styled-components';

const MovieCard = styled.div`
  --card-size: ${props => props.size}%;
  --lateral-margin: 0.125em;
  flex: 0 0 calc(var(--card-size) - var(--lateral-margin));
  display: flex;
  flex-direction: column;
  transition: 450ms all;
  position: relative;
  margin: 0 var(--lateral-margin) 0 var(--lateral-margin);

  &:hover ~ .movie-card {
    transition: 450ms all;
    transform: translate3d(50%, 0, 0);
  }
`;

const Poster = styled.img`
  width: 200px;
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
}) => (
  <MovieCard
    className={`movie-card ${className}`}
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

export default Movie;
