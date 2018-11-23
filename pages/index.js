import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Section from '../components/section'
import Page from '../components/page';
import Blockquote from '../components/blockquote';
import LinkBlank from '../components/link-blank';
import Lead from '../components/lead';
import pageTitle from '../lib/page-title';

export default () => (
  <Page>
    <Head>
      <title>{pageTitle('Instructions')}</title>
    </Head>

    <Section>
      <Blockquote cite="Sir Isaac Newton">
        <Lead>
          Fries. No discussion.
        </Lead>
      </Blockquote>
    </Section>

    <h1>Instructions</h1>

    <ol>
      <li>Provision the <Link prefetch href="/perfect-potatoes"><a>perfect potatoes</a></Link></li>
      <li>Slice potatoes into fingers</li>
      <li>Submerge potato fingers in water or weak brine solution</li>
      <li>Dry potato fingers</li>
      <li>Heat oil in pan</li>
      <li>Fry potato fingers until soft inside</li>
      <li>Pull them out and let them cool</li>
      <li>Deep fry again until crispy</li>
      <li>Add seasoning (salt and pepper are standard)</li>
    </ol>
  </Page>
);