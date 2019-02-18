import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Movie from '../Movie';
import Slider from '../Slider';
import { getFakedMovies } from '../../services/api';

function Gallery(props) {
  const documentWidth = useDocumentWidth();

  const movies = getFakedMovies();
  const itemsPerRow = parseInt(documentWidth / 200);
  const rowItemSize = 100 / itemsPerRow;
  const rows = _.chunk(movies, itemsPerRow);

  return (
    <div className="gallery" style={{ overflow: 'hidden', width: '100%' }}>
      {rows.map(row => (
        <Slider itemSize={rowItemSize} width={documentWidth}>
          {row.map((movie, index) => (
            <Movie {...movie} />
          ))}
        </Slider>
      ))}
    </div>
  );
}

function useDocumentWidth() {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    const handleResize = () => setWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return width;
}

export default Gallery;
