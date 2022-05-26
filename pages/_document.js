import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-[#12131d]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
