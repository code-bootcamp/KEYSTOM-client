import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, restoreAccessTokenLoadable } from "../store";

export default function ApolloSetting(props: any) {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
        aaa.toPromise().then((newAccessToken) => {
            setAccessToken(newAccessToken);
        });
    }, []);

    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
        if (graphQLErrors) {
            for (const err of graphQLErrors) {
                if (err.extensions.code === "UNAUTHENTICATED") {
                    getAccessToken().then((newAccessToken) => {
                        setAccessToken(newAccessToken);

                        operation.setContext({
                            headers: {
                                ...operation.getContext().headers,
                                Authorization: `Bearer ${newAccessToken}`,
                            },
                        });

                        return forward(operation);
                    });
                }
            }
        }
    });

    const uploadLink = createUploadLink({
        uri: "https://delifarm.site/graphql",

        headers: { Authorization: `Bearer ${accessToken}` },
        credentials: "include",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([errorLink, uploadLink]),
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
