import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-[#000000]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
