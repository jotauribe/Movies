import React from 'react';
import styled from 'styled-components';

const GalleryItem = styled.div`
  transition: 450ms all;

  & > * {
    width: 100%;
  }

  &:hover ~ .gallery-item {
    transition: 450ms all;
    transform: translate3d(50%, 0, 0);
  }

  &:hover {
    transform: scale(1.5);
    transform-origin: center center;
    z-index: 1;
  }
`;

const GalleryItemComponent = props => {
  return (
    <GalleryItem className={'gallery-item'} {...props}>
      {props.children}
    </GalleryItem>
  );
};

export default GalleryItemComponent;
