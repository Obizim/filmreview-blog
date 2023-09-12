import Layout from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="rgba(0, 0, 0, 1)"></meta>
        <meta content="Film Blog" name="description"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Film Blog"></meta>
        <meta property="og:description" content="A mini blog site."/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Film Blog" />
        <meta name="twitter:title" content="Film Blog"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:description" content="A mini blog site."></meta>
        <title>FIlm Blog</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
