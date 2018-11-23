import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: 'Pacifico', cursive;
  font-weight: normal;
  font-size: 44px;
  padding-top: 0.5em;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Title = () => <H1>Good Fries 🍟</H1>;

export default Title;