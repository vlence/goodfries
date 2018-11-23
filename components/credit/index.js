import React from 'react';
import PropTypes from 'prop-types';

import LinkBlank from '../link-blank';

const Credit = ({cite}) => (
  <p>
    <small>
      <i>
        The information in this page was compiled from
        {' '} <LinkBlank href={cite}>this site</LinkBlank>.
      </i>
    </small>
  </p>
);

Credit.propTypes = {
  cite: PropTypes.string.isRequired,
};

export default Credit;