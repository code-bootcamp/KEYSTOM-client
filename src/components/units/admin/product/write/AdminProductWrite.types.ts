import { ChangeEvent, MouseEvent} from 'react';


export interface IUpdateVariables{
    productId: any
    title?: string
    description?: string
    price?: number
    // imageUrls?:string[]
    thumbnail?:string
    // productTags?:string[]
    data?: any

}


export interface IAdminWritePresenter{
    isEdit:boolean
    data?:any
    onChangeTitle:(event: ChangeEvent<HTMLInputElement>) => void
    // onChangeDescription: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void
    // onKeyUpHash:(event:any) => void
    // hashArr:string[]
    // onClickTagDelete:(event: MouseEvent<HTMLSpanElement>) => void
    
    editorRef:any
    uploadFile: () => void
    onChangeFileUrl: (fileUrl: any) => void
    description: string
    
    onClickUpdateProduct: (event: MouseEvent<HTMLButtonElement>) => void
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
}



