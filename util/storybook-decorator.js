import React from 'react';
import typography from '../lib/typography';


const Decorator = Story => {
  typography.injectStyles();
  return <Story />;
};

export default Decorator;