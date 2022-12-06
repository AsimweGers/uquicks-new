import React, { useEffect } from "react";
import "../styles/globals.scss";
import { Layout } from "../components";
import ScrollToTopButton from "../components/ScrollToTop";
import { useRouter } from "next/router";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

    return (
      <>
        <DefaultSeo {...SEO} />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
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
        <ScrollToTopButton />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
