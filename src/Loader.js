import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loader() {
  return (
    <LoaderWrapper>
      <LoaderComponent />
    </LoaderWrapper>
  );
}

const LoaderAnimation = keyframes`
    0%,
  100% {
    box-shadow: 0 -2.6em 0 0 rgba(114, 106, 149, .9), 1.8em -1.8em 0 0 rgba(114, 106, 149, .2), 2.5em 0 0 0 rgba(114, 106, 149, .2), 1.75em 1.75em 0 0 rgba(114, 106, 149, .2), 0 2.5em 0 0 rgba(114, 106, 149, .2), -1.8em 1.8em 0 0 rgba(114, 106, 149, .2), -2.6em 0 0 0 rgba(114, 106, 149, .5), -1.8em -1.8em 0 0 rgba(114, 106, 149, .7);
  }
  12.5% {
    box-shadow: 0 -2.6em 0 0 rgba(114, 106, 149, .7), 1.8em -1.8em 0 0 rgba(114, 106, 149, .9), 2.5em 0 0 0 rgba(114, 106, 149, .2), 1.75em 1.75em 0 0 rgba(114, 106, 149, .2), 0 2.5em 0 0 rgba(114, 106, 149, .2), -1.8em 1.8em 0 0 rgba(114, 106, 149, .2), -2.6em 0 0 0 rgba(114, 106, 149, .2), -1.8em -1.8em 0 0 rgba(114, 106, 149, .5);
  }
  25% {
    box-shadow: 0 -2.6em 0 0 rgba(114, 106, 149, .5), 1.8em -1.8em 0 0 rgba(114, 106, 149, .7), 2.5em 0 0 0 rgba(114, 106, 149, 95), 1.75em 1.75em 0 0 rgba(114, 106, 149, .2), 0 2.5em 0 0 rgba(114, 106, 149, .2), -1.8em 1.8em 0 0 rgba(114, 106, 149, .2), -2.6em 0 0 0 rgba(114, 106, 149, .2), -1.8em -1.8em 0 0 rgba(114, 106, 149, .2);
  }
  37.5% {
    box-shadow: 0 -2.6em 0 0 rgba(114, 106, 149, .2), 1.8em -1.8em 0 0 rgba(114, 106, 149, .5), 2.5em 0 0 0 rgba(114, 106, 149, .7), 1.75em 1.75em 0 0 rgba(114, 106, 149, .9), 0 2.5em 0 0 rgba(114, 106, 149, .2), -1.8em 1.8em 0 0 rgba(114, 106, 149, .2), -2.6em 0 0 0 rgba(114, 106, 149, .2), -1.8em -1.8em 0 0 rgba(114, 106, 149, .2);
  }
  50% {
    box-shadow: 0 -2.6em 0 0 rgba(114, 106, 149, .2), 1.8em -1.8em 0 0 rgba(114, 106, 149, .2), 2.5em 0 0 0 rgba(114, 106, 149, .5), 1.75em 1.75em 0 0 rgba(114, 106, 149, .7), 0 2.5em 0 0 rgba(114, 106, 149, .9), -1.8em 1.8em 0 0 rgba(114, 106, 149, .2), -2.6em 0 0 0 rgba(114, 106, 149, .2), -1.8em -1.8em 0 0 rgba(114, 106, 149, .2);
  }
  62.5% {
    box-shadow: 0 -2.6em 0 0 rgba(114, 106, 149, .2), 1.8em -1.8em 0 0 rgba(114, 106, 149, .2), 2.5em 0 0 0 rgba(114, 106, 149, .2), 1.75em 1.75em 0 0 rgba(114, 106, 149, .5), 0 2.5em 0 0 rgba(114, 106, 149, .7), -1.8em 1.8em 0 0 rgba(114, 106, 149, .9), -2.6em 0 0 0 rgba(114, 106, 149, .2), -1.8em -1.8em 0 0 rgba(114, 106, 149, .2);
  }
  75% {
    box-shadow: 0 -2.6em 0 0 rgba(114, 106, 149, .2), 1.8em -1.8em 0 0 rgba(114, 106, 149, .2), 2.5em 0 0 0 rgba(114, 106, 149, .2), 1.75em 1.75em 0 0 rgba(114, 106, 149, .2), 0 2.5em 0 0 rgba(114, 106, 149, .5), -1.8em 1.8em 0 0 rgba(114, 106, 149, .7), -2.6em 0 0 0 rgba(114, 106, 149, .9), -1.8em -1.8em 0 0 rgba(114, 106, 149, .2);
  }
  87.5% {
    box-shadow: 0 -2.6em 0 0 rgba(114, 106, 149, .2), 1.8em -1.8em 0 0 rgba(114, 106, 149, .2), 2.5em 0 0 0 rgba(114, 106, 149, .2), 1.75em 1.75em 0 0 rgba(114, 106, 149, .2), 0 2.5em 0 0 rgba(114, 106, 149, .2), -1.8em 1.8em 0 0 rgba(114, 106, 149, .5), -2.6em 0 0 0 rgba(114, 106, 149, .7), -1.8em -1.8em 0 0 rgba(114, 106, 149, .9);
  }
`;

const LoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  min-height: 250px;
`;

const LoaderComponent = styled.div`
  animation: ${LoaderAnimation} 1.1s infinite ease;
  border-radius: 50%;
  font-size: 1.1rem;
  height: 1em;
  margin: 0 auto;
  transform: translateZ(0);
  width: 1em;
}
`;

export default Loader;
