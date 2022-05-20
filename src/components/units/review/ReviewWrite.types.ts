import { ChangeEvent } from 'react';
export interface IReviewWritePresenter{
    onChangeReviewTitle:(event: ChangeEvent<HTMLInputElement>) => void
    onChangeReviewContent:(event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: () => void
    onChangeImageFile: (imageUrl:string, index:number) => void
    imageFile:string[]
}