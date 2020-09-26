import React from 'react';
import styled from 'styled-components';
import Quote from './Quote';

function App() {
  return (
    <AppStyled>
      <Header>Inspirational Quote</Header>
      <Quote />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  color: #656565;
  margin: 0 auto;
  max-width: 600px;
  min-height: 100vh;
  padding: 1rem;
`;

const Header = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 3.5rem;
  font-weight: normal;
  line-height: 1.1;
  margin-bottom: 70px;
  margin-top: 70px;
  text-align: center;
`;

export default App;
