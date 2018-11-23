import React from 'react';
import {ThemeProvider} from 'styled-components';

import theme from '../lib/theme';
import typography from '../lib/typography';

const Decorator = Story => {
  typography.injectStyles();
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

export default Decorator;