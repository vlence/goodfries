import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import MaxWidth from '../max-width';
import GlobalStyles from '../global-styles';

const Wrapper = styled.div``;

const Main = styled.main`
  padding-top: 8px;
`;

const Layout = ({children}) => (
  <Wrapper>
    <MaxWidth>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </MaxWidth>

    <GlobalStyles />
  </Wrapper>
);

export default Layout;