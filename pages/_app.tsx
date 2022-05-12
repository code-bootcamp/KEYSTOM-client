import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollo";
import ChatBotPage from "../src/components/commons/chatbot";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ApolloSetting>
                <Global styles={globalStyles} />
                <Layout>
                    <ChatBotPage></ChatBotPage>
                    <Component {...pageProps} />
                </Layout>
            </ApolloSetting>
        </RecoilRoot>
    );
}

export default MyApp;
