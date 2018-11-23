import React from 'react';
import styled from 'styled-components';
import Title from '../title';

const Wrapper = styled.header`
  margin-bottom: 28px;
`;

const Header = () => <Wrapper><Title /></Wrapper>;

export default Header;