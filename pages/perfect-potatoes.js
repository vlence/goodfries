import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Lead from '../components/lead';
import Page from '../components/page';
import Credit from '../components/credit';
import Section from '../components/section';
import pageTitle from '../lib/page-title';
import LinkBlank from '../components/link-blank';
import Blockquote from '../components/blockquote';

export default () => (
  <Page>
    <Head>
      <title>{pageTitle('Perfect Potatoes')}</title>
    </Head>

    <Section>
      <Blockquote cite="Pretty much everyone in their mind">
        <Lead>Oh you just cut the potatoes and fry them.</Lead>
      </Blockquote>
    </Section>

    <h1>The Perfect Potato</h1>

    <p>
      Not all potatoes are made alike. Yes you read that right.
      The following potatoes are engineered for fries.
    </p>

    <ul>
      <li><LinkBlank href="https://en.wikipedia.org/wiki/Russet_Burbank">Russet Burbank</LinkBlank></li>
      <li><LinkBlank href="https://en.wikipedia.org/wiki/Maris_Piper">Maris Piper</LinkBlank></li>
    </ul>

    <p>
      Just when you thought you had the perfect potatoes, you couldn't be more wrong.
      There is more than meets the eye. Your potatoes must not be too wet or too dry.
    </p>

    <ol>
      <li>
        Concoct a weak brine solution: about 90g of salt dissolved in 1kg of water.
        Eliminate the potatoes that float in this solution. They're too wet.
      </li>

      <li>
        Concoct a strong brine solution: about 120g of salt dissolved in 1kg of water.
        Now place the potatoes that sank in the weak brine solution in this stronger
        brine solution. Eliminate the potatoes that sink in this solution. They're
        too dry.
      </li>
    </ol>

    <p>You have successfully sorted all the potatoes. <Link prefetch href="/"><a>Now make some fries</a></Link>.</p>

    <Credit cite="https://www.chefsteps.com/activities/finding-perfect-french-fry-potatoes" />
  </Page>
);