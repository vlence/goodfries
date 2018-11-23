import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../../lib/media';

const Wrapper = styled.div`
  margin-bottom: 20px;

  ${media.desktop`
    padding-left: 4px;
  `}
`;

const Quote = styled.blockquote`
  margin: 0px;
  margin-bottom: 8px;
  padding: 4px 8px;
  border-left: 4px solid ${({theme}) => theme.colors.primaryDark};
`;

const Cite = styled.cite``;

const Blockquote = ({children, cite}) => (
  <Wrapper>
    <Quote>{children}</Quote>
    {
      !!cite && (
        <Cite>- {cite}</Cite>
      )
    }
  </Wrapper>
);

Blockquote.propTypes = {
  cite: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Blockquote;