import "../styles/globals.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <section>
      <Navbar />
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
