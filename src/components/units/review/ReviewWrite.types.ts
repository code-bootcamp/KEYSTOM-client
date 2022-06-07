import { ChangeEvent } from 'react';
export interface IReviewWritePresenter{
    onChangeReviewTitle:(event: ChangeEvent<HTMLInputElement>) => void
    onChangeReviewDescription:(event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: () => void
    description:string
    setImageUrls:any
    imageUrls:any
    data:any
    customData:any

}
