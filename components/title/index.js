import React from 'react';
import styled from 'styled-components';

import media from '../../lib/media';

const H1 = styled.h1`
  font-family: 'Pacifico', cursive;
  font-weight: normal;
  font-size: 40px;
  padding-top: 0.5em;

  ${media.tablet`
    font-size: 44px;
  `}

  ${media.desktop`
    font-size: 48px;
  `}
`;

const Title = () => <H1>🍟 Good Fries 🍟</H1>;

export default Title;