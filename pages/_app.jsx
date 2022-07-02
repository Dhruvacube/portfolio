import "../styles/globals.css";
import Navbar from "../components/navbar";
import Head from "next/head";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  const description = "A discord.py bot developer and a full stack web developer using python";

  return (
    <section>
      <Head>
        <meta charSet="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta name="author" content="Dhruva Shaw"/>
        <meta name="robots" content="NOINDEX, NOFOLLOW"/>
        <meta name="robots" content="NO INDEX, NO FOLLOW"/>
        <meta name="robots" content="NO-INDEX, NO-FOLLOW"/>

        <meta property="og:title" content="Dhruva Shaw"/>
        <meta property="og:type" content="Website"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" itemProp="image" content="https://dhruvashaw.pages.dev/profile.png"/>
        <meta property="og:image" content="https://dhruvashaw.pages.dev/profile.png"/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://dhruvashaw.pages.dev"/>
        <meta property="og:locale" content="en_us" />
        <meta property="og:locale" content="en" />

        <meta name="twitter:title" content="Dhruva Shaw"/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content="https://dhruvashaw.pages.dev/profile.png"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@DhruvaShaw"/>

        <meta property="og:site_name" content="Dhruva Shaw"/>
        <meta name="twitter:image:alt" content="Dhruva Shaw profile photo"/>
        <meta property="og:image:alt" content="Dhruva Shaw profile photo"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="apple-mobile-web-app-title" content="Dhruva Shaw"/>

        <meta name="distribution" content="global"/>
        <meta name="revisit-after" content="1 day"/>
        <meta name="theme-color" content="#0989d9"/>
        <meta itemProp="name" content="Dhruva Shaw"/>
        <meta itemProp="description" content={description}/>
        <meta itemProp="image" content="https://dhruvashaw.pages.dev/profile.png"/>
        <meta name="author" content="Dhruva Shaw"/>
        <meta name="copyright" content="Dhruva Shaw"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
