import Layout from "@/components/commons/Layout";
import { LanguageProvider } from "@/context/LanguageProvider";
import { PageOffsetProvider } from "@/context/PageOffsetProvider";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    console.log(
      "%cPowered by %ctectify",
      "color: lightgrey; font-family:helvetica; font-size: 18px ;",
      "color: rgb(29,78,216); font-family:helvetica; font-size: 38px ; font-weight: bold;"
    );
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded ? (
        <PageOffsetProvider>
          <LanguageProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LanguageProvider>
        </PageOffsetProvider>
      ) : null}
    </>
  );
}
