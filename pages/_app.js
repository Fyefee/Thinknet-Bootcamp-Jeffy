import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { PersistGate } from "redux-persist/integration/react";
import Head from 'next/head'

import store from "../redux/store/store";
import { persistor } from "../redux/store/store";

import "../styles/globals.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>Online Test Program</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
