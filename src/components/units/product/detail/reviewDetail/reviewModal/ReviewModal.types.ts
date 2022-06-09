import { MouseEvent } from "react";

export interface IReviewModalContainerProps {
    el: any;

    selectedId: string;

    handleOK: () => void;
    handleCancel: () => void;
    onClickCloseModal: () => void;

    showModal: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface IReviewModalPresenterProps {
    reviewData: any;
    commentData: any;

    // id: string;
    selectedId: string;

    handleOK: () => void;
    handleCancel: () => void;
    onClickCloseModal: () => void;

    showModal: (event: MouseEvent<HTMLImageElement>) => void;
}
