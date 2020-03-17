import Document, { Head, Main, NextScript } from 'next/document';
import '../scss/style.scss';
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js'></script>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'></script>
          <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'></script>
        </body>
      </html>
    );
  }
}
