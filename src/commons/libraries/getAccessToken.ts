import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken {
        restoreAccessToken
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
        const newAccessToken = result.restoreAccessToken;
        console.log("새로운토큰", newAccessToken);
        return newAccessToken;
    } catch (error) {
        console.log("겟엑세스토큰 실패임");
    }
}
