import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken {
        restoreAccessToken
    }
`;

export async function getAccessToken() {
    try {
        const graphQLClient = new GraphQLClient(
            "https://delifarm.site/graphql",
            {
                credentials: "include",
            }
        );
        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
        const newAccessToken = result.restoreAccessToken;
        return newAccessToken;
    } catch (error) {
    }
}
