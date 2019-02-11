import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Expandable = Target => {
  const ExpandableTarget = styled(Target)`
    transform-origin: center left;
    &:hover {
      transform: scale(1.5);
    }
  `;

  return class extends Component {
    componentDidMount() {
      this.updatePosition();

      window.addEventListener('resize', () => this.updatePosition);
    }

    handleEvent = event => {
      this.setState(
        state => ({ ...state, hover: true }),
        () => console.log(this.state)
      );
    };

    handleMouseLeave = event => {
      this.setState(state => ({ ...state, hover: false }));
    };

    updatePosition = () => {
      const node = ReactDOM.findDOMNode(this);
      const position = node.getBoundingClientRect();
      const marginRight = parseFloat(window.getComputedStyle(node).marginRight);
      const marginLeft = parseFloat(window.getComputedStyle(node).marginLeft);
      const isAtRightEdge =
        position.right >= document.documentElement.clientWidth - marginRight;
      const isAtLeftEdge = position.left <= marginLeft;

      this.setState(
        (state, props) => ({
          ...state,
          isAtLeftEdge,
          isAtRightEdge
        }),
        () =>
          console.log(this.state, {
            marginRight,
            marginLeft,
            position,
            windowW: document.documentElement.clientWidth
          })
      );
    };

    render() {
      return (
        <ExpandableTarget
          {...this.props}
          onMouseEnter={this.handleEvent}
          onMouseLeave={this.handleMouseLeave}
          atRightEdge={''}
          atLeftEdge={''}
        />
      );
    }
  };
};

export default Expandable;
