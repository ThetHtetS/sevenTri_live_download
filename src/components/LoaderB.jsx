import React from 'react';
import styled from 'styled-components';

const LoaderB = () => {
  return (
    <div className='opacity-100'>
        <StyledWrapper>
            <figure>
                <div style={{'--i': 1}} />
                <div style={{'--i': 2}} />
                <div style={{'--i': 3}} />
                <div style={{'--i': 4}} />
                <div style={{'--i': 5}} />
                <div style={{'--i': 6}} />
                <div style={{'--i': 7}} />
                <div style={{'--i': 8}} />
                <div style={{'--i': 9}} />
                <div style={{'--i': 10}} />
                <div style={{'--i': 11}} />
                <div style={{'--i': 12}} />
            </figure>
        </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  @media (prefers-reduced-motion) {
  }

  figure {
    --size: 30vmin;
    --duration: 4s;
    --direction: 1;
    --pull: -1.25;
    perspective: 30rem;
    display: grid;
    grid-template-areas: "figure";
    place-items: center;
    inline-size: var(--size);
    aspect-ratio: 1;
    animation: spin var(--duration) ease-in-out infinite;
  }

  figure > * {
    --radius: calc(var(--size) / 2);
    --deg: calc(var(--i) * (360deg / 12));
    --hs: 46 87%;
    --transform-start: translate3d(
        calc(cos(var(--deg)) * var(--radius)),
        calc(sin(var(--deg)) * var(--radius)),
        0
      )
      rotate(calc(var(--deg)));
    grid-area: figure;
    background-color: hsl(var(--hs) var(--l, 44%));
    inline-size: calc(var(--size) / 4);
    aspect-ratio: 1;
    clip-path: polygon(25% 25%, 100% 50%, 25% 75%, 0% 50%);
    transform: var(--transform-start);
    transform-style: preserve-3d;
    animation: diamonds var(--duration) cubic-bezier(0.87, 0, 0.13, 1) infinite;
  }

  figure:nth-child(2) {
    --size: 30vmin;
    --direction: -1;
    --l: 70%;
  }

  figure:nth-child(3) {
    --size: 55vmin;
    --pull: -1.125;
    --l: 80%;
  }

  @keyframes spin {
    0%,
    25% {
      transform: scaleX(var(--direction)) rotate(0);
    }

    75%,
    100% {
      transform: scaleX(var(--direction)) rotate(1turn);
    }
  }

  @keyframes diamonds {
    0%,
    20% {
      transform: var(--transform-start);
    }

    50% {
      clip-path: polygon(75% 25%, 100% 50%, 75% 75%, 0% 50%);
      transform: translate3d(
          calc(cos(var(--deg)) * var(--radius) * var(--pull)),
          calc(sin(var(--deg)) * var(--radius) * var(--pull)),
          5rem
        )
        rotate(calc(var(--deg) + 90deg));
    }
  }`;

export default LoaderB;
