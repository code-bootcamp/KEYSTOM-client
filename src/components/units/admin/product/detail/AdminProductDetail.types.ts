import { MouseEvent } from "react"

export interface IAdminProductDetailContainerProps{
    productData?:any
}

export interface IAdminProductDetailPresenterProps{
    productData?:any
    data?:any
    onClickDeleteProduct:(event: MouseEvent<HTMLButtonElement>) => void
    moveToEditProduct:() => void
    moveToList:() => void
}