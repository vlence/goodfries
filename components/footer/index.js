import React from 'react';
import styled from 'styled-components';
import LinkBlank from '../link-blank';
import Contributors from '../contributors';

const Wrapper = styled.footer`
  text-align: center;
`;

const Footer = () => (
  <Wrapper>
    <p>
      <small>
        Hosted on {' '}
        <LinkBlank href="https://zeit.co/now">Now</LinkBlank>
      </small>

      <br />
      <small>
        Made by <LinkBlank href="https://about.me/vlence">Victor Basumatary</LinkBlank>
      </small>

      <br />
      <small>
        Ideas? Suggestions? {' '}
        <LinkBlank href="https://github.com/vlence/goodfries">Raise an issue or make a pull request!</LinkBlank>
      </small>
    </p>

    <p><Contributors /></p>
  </Wrapper>
);

export default Footer;