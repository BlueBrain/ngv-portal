import Document, { Html, Head, Main, NextScript } from 'next/document'


class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&display=swap"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


export default AppDocument;
