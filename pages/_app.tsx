import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import AppLayout from "../src/components/commons/appLayout";
import ApolloSetting from "../src/components/commons/apollo";
import { useEffect, useState } from "react";
import LandingAnimation from "../src/components/units/storeMain/LandingAnimation";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 4500);
  }, []);

  return (
    <RecoilRoot>
      <ApolloSetting>
        <AnimatePresence>
          <Global styles={globalStyles} />
          {loading && <LandingAnimation />}
          {!loading && (
            <Layout>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </Layout>
          )}
        </AnimatePresence>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
