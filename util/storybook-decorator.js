import React from 'react';
import typography from '../lib/typography';
import {ThemeProvider} from 'styled-components';
import theme from '../lib/theme';

const Decorator = Story => {
  typography.injectStyles();
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

export default Decorator;