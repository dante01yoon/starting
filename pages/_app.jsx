import React from "react";
import "../src/styles/global.css";
import { ThemeProvider } from "@theme-ui/core";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}