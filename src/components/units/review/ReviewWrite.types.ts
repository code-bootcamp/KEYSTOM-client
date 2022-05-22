import { ChangeEvent } from 'react';
export interface IReviewWritePresenter{
    onChangeReviewTitle:(event: ChangeEvent<HTMLInputElement>) => void
    onChangeReviewContent:(event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: () => void
    // onChangeImageURL: (imageUrl:string, idx:number) => void
    imageFile:string[]
    setImageFile:any
}