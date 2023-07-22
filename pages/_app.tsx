import "../styles/globals.css";
import Navbar from "../components/navbar";
import Head from "next/head";
import type { AppProps } from "next/app";
import * as gtag from "../lib/gtag";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const description =
    "A discord.py bot developer and a full stack web developer using python";
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <section>
      <Head>
        <meta charSet="utf-8" />
        {/* <meta content="width=device-width, initial-scale=1.0" name="viewport" /> */}
        <meta name="author" content="Dhruva Shaw" />

        <meta property="og:title" content="Dhruva Shaw" />
        <meta property="og:type" content="Website" />
        <meta property="og:description" content={description} />
        <meta property="keywords" content="Dhruva Shaw, Dhruva, Shaw, developer, engineer, robotics, robotics engineer, discord, discord.py, cuber, lpu, cubing, electronics, ieee, arduino, esp32" />
        <meta
          property="og:image"
          itemProp="image"
          content="https://dhruvashaw.in/profile.png"
        />
        <meta property="og:image" content="https://dhruvashaw.in/profile.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://dhruvashaw.in" />
        <meta property="og:locale" content="en_us" />
        <meta property="og:locale" content="en" />

        <meta name="twitter:title" content="Dhruva Shaw" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://dhruvashaw.in/profile.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@DhruvaShaw" />

        <meta property="og:site_name" content="Dhruva Shaw" />
        <meta name="twitter:image:alt" content="Dhruva Shaw profile photo" />
        <meta property="og:image:alt" content="Dhruva Shaw profile photo" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Dhruva Shaw" />

        <meta name="distribution" content="global" />
        <meta name="theme-color" content="#0989d9" />
        <meta itemProp="name" content="Dhruva Shaw" />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="https://dhruvashaw.in/profile.png" />
        <meta name="author" content="Dhruva Shaw" />
        <meta name="copyright" content="Dhruva Shaw" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </section>
  );
}

export default MyApp;
