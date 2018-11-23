import React from 'react';

const contributors = [
  'Desmond Rymbai',
  'Wantei Warjri',
  'Aldon Mylliem'
].join(', ');

const Contributors = () => (
  <small>
    <b>Contributors</b>: {contributors}
  </small>
);

export default Contributors;