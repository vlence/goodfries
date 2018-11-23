import {css} from 'styled-components';

// Min width in px of different screen sizes
const sizes = {
  desktop: 1024,
  tablet: 760,
  phone: 320,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;