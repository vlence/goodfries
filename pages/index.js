import React from 'react';
import Head from 'next/head';
import pageTitle from '../lib/page-title';

export default () => (
  <React.Fragment>
    <Head>
      <title>{pageTitle('Instructions')}</title>
    </Head>

    <ol style={{fontStyle: 'italic'}}>
      <li>Provision potatoes. Duh.</li>
      <li>Wash potatoes. Duh.</li>
      <li>Peel potato skin. Duh.</li>
      <li>Slice potatoes into fingers. Duh.</li>
      <li>Heat (lots of) oil in pan. Duh.</li>
      <li>Fry potato fingers until crispy yellow. Duh.</li>
      <li>Pull them out and let them rest. Duh.</li>
      <li>Deep fry em' again for *le crunch&trade;. Duh.</li>
      <li>Add seasoning. Salt and pepper for the faint hearted.</li>
      <li>Serve it up.</li>
    </ol>
  </React.Fragment>
);