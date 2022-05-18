import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken {
        restoreAccessToken {
            accessToken
        }
    }
`;

export async function getAccessToken() {
    try {
        const graphQLClient = new GraphQLClient(
            // "https://backend06.codebootcamp.co.kr/graphql",
            "https://antipiebse.shop/graphql",
            { credentials: "include" }
        );
        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
        console.log("토큰 잘왔냐?", result);
        const newAccessToken = result.restoreAccessToken.accessToken;

        return newAccessToken;
    } catch (error) {
        console.log(error instanceof Error);
    }
}
