import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const UserListText = styled.div`
  color: #f1f1f1;
  font-size: 26px;
  padding-bottom: 20px;
`;

const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

const EmailText = styled.div`
  width: 600px;

  color: #f1f1f1;
  font-size: 26px;
  padding-bottom: 20px;
`;

const NameText = styled.div`
  width: 300px;

  color: #f1f1f1;
  font-size: 26px;
  padding-bottom: 20px;
`;

const NickNameText = styled.div`
  width: 600px;

  color: #f1f1f1;
  font-size: 26px;
  padding-bottom: 20px;
`;

const Line = styled.div`
  width: 95%;
  border-bottom: 1px solid #f1f1f1;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const UserEmail = styled.div`
  width: 600px;
  color: #f1f1f1;
  font-size: 18px;
`;

const UserName = styled.div`
  width: 350px;
  color: #f1f1f1;
  font-size: 18px;
`;

const UserNickName = styled.div`
  width: 700px;
  color: #f1f1f1;
  font-size: 18px;
`;

const DeleteButton = styled.button`
  cursor: pointer;
`;

const FETCH_USERS = gql`
  query fetchUsers {
    fetchUsers {
      email
      name
      nickName
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email)
  }
`;

export default function AdminCouponPage() {
  const { data, refetch } = useQuery(FETCH_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  const onClickDeleteUser = async (e: any) => {
    try {
      const deleteResult = await deleteUser({
        variables: {
          email: String(e.target.id),
        },
        refetchQueries: [
          {
            query: FETCH_USERS,
          },
        ],
      });
      console.log(deleteResult);
      console.log("타겟", e.target.id);
      alert("계정이 삭제되었습니다");
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  return (
    <Wrapper>
      <UserListText>유저 목록</UserListText>
      <UserListWrapper>
        <ListTextWrapper>
          <EmailText>Email</EmailText>
          <NameText>Name</NameText>
          <NickNameText>NickName</NickNameText>
        </ListTextWrapper>
        <Line />
        {data?.fetchUsers.map((el: any, idx: any) => (
          <>
            <UserList key={idx}>
              <UserEmail>{el.email}</UserEmail>
              <UserName>{el.name}</UserName>
              <UserNickName>{el.nickName}</UserNickName>
              <DeleteButton onClick={onClickDeleteUser} id={el.email}>
                삭제하기
              </DeleteButton>
            </UserList>
            <Line />
          </>
        ))}
      </UserListWrapper>
    </Wrapper>
  );
}
