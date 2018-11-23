import React from 'react';
import styled from 'styled-components';

const SectionDivider = styled.hr`
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  border-top: thin solid ${({theme}) => theme.colors.primaryDark};
  color: #333;
  text-align: center;

  :after {
    content: '🍟🍟🍟';
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: ${({theme}) => theme.colors.primary};
  }
`;

export default SectionDivider;