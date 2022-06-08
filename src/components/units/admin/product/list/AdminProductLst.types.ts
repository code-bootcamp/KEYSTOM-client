import { MouseEvent } from "react"

export interface IAdminProductListPresenterProps{
    data?:any
    onClickDelete:(event: MouseEvent<HTMLButtonElement>) => void
    moveToDetail:(event: MouseEvent<HTMLImageElement>) => void
    moveToEdit:(event: MouseEvent<HTMLButtonElement>) => void
}