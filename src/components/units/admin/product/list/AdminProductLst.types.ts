import { MouseEvent } from "react"

export interface IAdminProductListPresenterProps{
    data?:any
    onClickDelete:(event: MouseEvent<HTMLButtonElement>) => void
    moveToDetail:(event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLImageElement> | MouseEvent<HTMLDivElement>) => void
    moveToEdit:(event: MouseEvent<HTMLButtonElement>) => void
}