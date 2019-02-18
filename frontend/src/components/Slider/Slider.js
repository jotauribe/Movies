import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = styled.div`
  margin-top: ${props => props.itemSize / 2}%;
  width: 100%;

  .slider__inner {
    display: flex;
    width: 100%;
    transition: 450ms all;
  }
  .slider__inner:hover {
    transform: translateX(-${props => props.itemSize / 4}%);
  }

  .slider__inner.with-last-item-hovered:hover {
    transform: translateX(-${props => props.itemSize / 2}%);
  }
`;

const SliderItem = styled.div`
  --lateral-margin: 0.125em;
  --card-size: calc(${props => props.size}% - var(--lateral-margin));
  flex: 0 0 var(--card-size);
  margin: 0 0.125em 0 0.125em;
  transform-origin: center ${props => (props.isLastRowItem ? 'right' : 'left')};
  transition: 450ms all;

  &:hover {
    transform: ${props => props.isFirstRowItem && 'translateX(25%)'}
      ${props => props.isLastRowItem && 'translateX(50%)'} scale(1.5);
  }

  &:hover ~ .slider__item {
    transform: translateX(${props => (props.isFirstRowItem ? '75%' : '50%')});
  }

  & > * {
    pointer-events: none;
  }
`;

export default function SliderComponent({
  children,
  isFirstRowItem,
  isLastRowItem,
  itemSize,
  width
}) {
  const [isLastItemHovered, setLastItemHovered] = useState(false);

  const itemsPerRow = parseInt(width / 200);
  const isFirstItem = position => position === 0;
  const isLastItem = position => position === itemsPerRow - 1;
  const innerSliderClasses = ['slider__inner'];
  if (isLastItemHovered) innerSliderClasses.push('with-last-item-hovered');

  return (
    <Slider className={'slider'} itemSize={itemSize}>
      <div className={innerSliderClasses.join(' ')}>
        {React.Children.map(children, (child, index) => {
          const classes = ['slider__item'];
          if (isLastRowItem) classes.push('last');
          if (isFirstRowItem) classes.push('first');

          return (
            <SliderItem
              key={index}
              className={classes.join(' ')}
              size={itemSize}
              isFirstRowItem={isFirstItem(index)}
              isLastRowItem={isLastItem(index)}
              onMouseEnter={() => setLastItemHovered(isLastItem(index))}
              onMouseLeave={() => setLastItemHovered(false)}
            >
              {child}
            </SliderItem>
          );
        })}
      </div>
    </Slider>
  );
}
