import { gql, useQuery } from "@apollo/client";

const FETCH_USER = gql`
    query fetchUser($email: String!) {
        fetchUser(email: $email) {
            id
            email
            name
            nickName
            profileImage
            isAdmin
            address
        }
    }
`;

export default function TestPage() {
    const { data } = useQuery(FETCH_USER, {
        variables: {
            email: "123123123",
        },
    });
    console.log(data);

    return (
        <div>
            <button>조회</button>
        </div>
    );
}
