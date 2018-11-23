import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';

const Div = styled.div`
  padding: 0px 4px;
  margin: auto;
  width: 100%;
  max-width: 1024px;
`;

const Layout = ({children}) => (
  <Div>
    <Header />
    <main>{children}</main>
    <Footer />
  </Div>
);

export default Layout;