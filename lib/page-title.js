const title = 'Good Fries';

/**
 * Creates the page title.
 * 
 * @param {string} extra Extra text for the page title
 */
const pageTitle = extra => {
  if (!!!extra) {
    return title;
  }
  
  if (typeof extra !== 'string') {
    throw new TypeError('extra must be string');
  }

  return title + ` | ${extra}`;
};

export default pageTitle;