import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="/favicon.ico" rel="apple-touch-icon" />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
        <Script strategy="beforeInteractive" id="theme-toggler">
          {`if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
          } else {
              document.documentElement.classList.remove('dark')
          }`}
        </Script>
      </Head>
      <body className="bg-white dark:text-white body-font dark:from-cyan-500 dark:to-slate-900	dark:via-slate-700 dark:bg-gradient-to-r">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}