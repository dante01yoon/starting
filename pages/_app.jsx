import React from "react";
import "../src/styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}