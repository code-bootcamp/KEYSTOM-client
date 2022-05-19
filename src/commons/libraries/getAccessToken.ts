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
        console.log("결과확인1");
        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
        console.log("결과확인2", result);

        const newAccessToken = result.restoreAccessToken;
        // const newAccessToken = result.restoreAccessToken.accessToken;
        // const newAccessToken = result;
        console.log(newAccessToken);
        // alert("새로운 엑세스 토큰이 발급!!!");

        return newAccessToken;
    } catch (error) {
        console.log("겟엑세스토큰 실패임");
    }
}
