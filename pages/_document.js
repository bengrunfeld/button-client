import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Prompt:300,400,500,600&display=swap"
            rel="stylesheet"
          />
          <style>
            {`
            html {
              font-size: 10px;
            }

            html,
            body,
            h1,
            h2,
            h3,
            h4,
            h5,
            p,
            a,
            ul,
            li {
              margin: 0;
              padding: 0;
            }
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <meta name="author" content="Ben Grunfeld" />
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
