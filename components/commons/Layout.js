import Head from "next/head";
import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>On My Way | Transfers</title>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="Best Cancún transfers" />
        <meta name="viewport" content="width=device-width, minimal-ui" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
