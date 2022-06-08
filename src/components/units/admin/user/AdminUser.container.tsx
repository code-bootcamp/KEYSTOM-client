import { useMutation, useQuery } from "@apollo/client";
import AdminUserPresenter from "./AdminUser.presenter";
import { FETCH_USERS, DELETE_USER } from './AdminUser.queries';
import {MouseEvent} from 'react';
import { Modal } from "antd";



export default function AdminUser() {
  const { data } = useQuery(FETCH_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  const onClickDeleteUser = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      if(event.target instanceof Element){
        await deleteUser({
          variables: {
            email: String(event.target.id),
          },
          refetchQueries: [
            {
              query: FETCH_USERS,
            },
          ],
        });
    }
      Modal.success({content:"계정이 삭제되었습니다"})
    } catch (error) {
      if(error instanceof Error ){
        Modal.error({content:error.message});
      }
    }
  };

  return (
   <AdminUserPresenter
   data={data}
   onClickDeleteUser={onClickDeleteUser}
   />
  );
}
