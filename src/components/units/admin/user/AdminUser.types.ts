import {MouseEvent} from 'react';
export interface IAdminUserPresenterProps{
    data?:any
    onClickDeleteUser:(event: MouseEvent<HTMLButtonElement>) => void
}