import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import store from "../store/index";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>NexusHub</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
