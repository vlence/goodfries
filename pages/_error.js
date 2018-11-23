import React from 'react';
import Link from 'next/link';

import Page from '../components/page';

const ErrorPage = () => (
  <Page>
    <h1>Hold it right there</h1>

    <p>
      You're lost! No worries. {' '}
      <Link prefetch href="/"><a>Make some fries.</a></Link>
    </p>
  </Page>
);

export default ErrorPage;