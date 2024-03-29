import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { Partytown } from "@builder.io/partytown/react";
const siteKey = process.env.SITE_KEY;

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
        <link
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          rel="stylesheet"
        />
        <Script strategy="beforeInteractive" id="theme-toggler">
          {`if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
          } else {
              document.documentElement.classList.remove('dark')
          }`}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2736810871076484"
          crossOrigin="anonymous"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          type="text/partytown"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
        defer
      />
      <body className="bg-white dark:text-white body-font dark:from-cyan-500 dark:to-slate-900	dark:via-slate-700 dark:bg-gradient-to-r">
        <div
          className="cf-turnstile"
          data-sitekey={siteKey}
          data-callback="javascriptCallback"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
