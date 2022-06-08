import * as S from "./AdminUser.styles"
import { IAdminUserPresenterProps } from "./AdminUser.types";

export default function AdminUserPresenter(props: IAdminUserPresenterProps) {


  return (
    <S.Wrapper>
      <S.UserListText>Fetch Users</S.UserListText>
      <S.UserListWrapper>
        <S.ListTextWrapper>
          <S.EmailText>Email</S.EmailText>
          <S.NameText>Name</S.NameText>
          <S.NickNameText>NickName</S.NickNameText>
        </S.ListTextWrapper>
        <S.Line />
        {props.data?.fetchUsers.map((el: any, idx: any) => (
          <>
            <S.UserList key={idx}>
              <S.UserEmail>{el.email}</S.UserEmail>
              <S.UserName>{el.name}</S.UserName>
              <S.UserNickName>{el.nickName}</S.UserNickName>
              <S.DeleteButton
              onClick={props.onClickDeleteUser} id={el.email}>
                Delete User
              </S.DeleteButton>

            </S.UserList>
            <S.Line />
          </>
        ))}
      </S.UserListWrapper>
    </S.Wrapper>
  );
}
