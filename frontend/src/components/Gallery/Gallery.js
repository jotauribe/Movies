import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import Movie from '../Movie';
import Expandable from '../Expandable';
import GalleryItem from '../GalleryItem';
import { getFakedMovies } from '../../services/api';

const ExpandableMovieCard = Expandable(Movie);

const GalleryRow = styled.div`
  margin-top: ${props => props.margin}%;

  .gallery-row__inner {
    display: flex;
    width: 100%;
    transition: 450ms all;
    align-items: center;
  }
  .gallery-row__inner:hover {
    transform: translate3d(-${props => props.margin / 2}%, 0, 0);
  }
`;

class Gallery extends Component {
  componentDidMount() {
    this.updateGrid();
    window.addEventListener('resize', this.updateGrid);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateGrid);
  }

  updateGrid = () => {
    const windowWidth = document.documentElement.clientWidth;
    const itemsPerRow = parseInt(windowWidth / 200);

    this.setState(state => ({
      ...state,
      windowWidth,
      itemsPerRow
    }));
  };

  render() {
    const movies = getFakedMovies();
    const windowWidth = document.documentElement.clientWidth;
    const itemsPerRow = parseInt(windowWidth / 200);
    const rows = _.chunk(movies, itemsPerRow);
    const size = 100 / itemsPerRow;

    return (
      <div className="gallery" style={{ overflow: 'hidden' }}>
        {rows.map(row => (
          <GalleryRow margin={size / 2}>
            <div className="gallery-row__inner">
              {row.map(movie => (
                <ExpandableMovieCard {...movie} size={size} key={movie.id} />
              ))}
            </div>
          </GalleryRow>
        ))}
      </div>
    );
  }
}

export default Gallery;
