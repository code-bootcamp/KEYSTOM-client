import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import AppLayout from "../src/components/commons/appLayout";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
