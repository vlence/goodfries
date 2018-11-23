import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: gold;
    padding: 0px 8px;
  }

  a {
    color: ${({theme}) => theme.colors.secondary};
    text-decoration: none;
  }
`;

export default GlobalStyles;