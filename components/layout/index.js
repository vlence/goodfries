import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import MaxWidth from '../max-width';
import GlobalStyles from '../global-styles';
import Section from '../section';

const Wrapper = styled.div``;

const Layout = ({children}) => (
  <Wrapper>
    <MaxWidth>
      <Header />
      <Section>
        <main>{children}</main>
      </Section>
      <Footer />
    </MaxWidth>

    <GlobalStyles />
  </Wrapper>
);

export default Layout;