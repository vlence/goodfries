import {ServerStyleSheet} from 'styled-components';
import {TypographyStyle, GoogleFont} from 'react-typography';
import Document, { Head, Main, NextScript } from 'next/document';

import typography from '../lib/typography';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <html lang="en-us">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
          <meta name="description" content="French Fries. They better be good..." />

          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}