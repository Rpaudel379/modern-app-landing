import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/main.css";
//import "bootstrap/dist/js/bootstrap";
//import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
