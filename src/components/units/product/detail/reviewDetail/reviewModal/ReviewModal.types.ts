import { MouseEvent } from "react";

export interface IReviewModalContainerProps {
    el: any;

    selectedId: string;
    id: string;

    handleOK: () => void;
    handleCancel: () => void;
    onClickCloseModal: () => void;

    showModal: (event: MouseEvent<HTMLImageElement>) => void;

    // selectedId
    // reviewData
    // commentData
}

export interface IReviewModalPresenterProps {
    reviewData: any;
    commentData: any;

    id: string;
    selectedId: string;

    handleOK: () => void;
    handleCancel: () => void;
    onClickCloseModal: () => void;

    showModal: (event: MouseEvent<HTMLImageElement>) => void;
}
