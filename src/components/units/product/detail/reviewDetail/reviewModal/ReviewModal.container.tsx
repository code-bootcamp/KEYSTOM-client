import ReviewModalPresenter from "./ReviewModal.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_REVIEW } from "./ReviewModal.queries";
import { FETCH_REVIEW_COMMENTS } from "./comment/commentList/CommentList.queries";
import { IReviewModalContainerProps } from "./ReviewModal.types";

export default function ReviewModalContainer(
    props: IReviewModalContainerProps
) {
    const { data: reviewData } = useQuery(FETCH_REVIEW, {
        variables: {
            reviewId: String(props.selectedId),
        },
    });

    const { data: commentData } = useQuery(FETCH_REVIEW_COMMENTS, {
        variables: {
            reviewId: String(props.selectedId),
        },
    });

    return (
        <ReviewModalPresenter
            showModal={props.showModal}
            handleOK={props.handleOK}
            handleCancel={props.handleCancel}
            onClickCloseModal={props.onClickCloseModal}
            selectedId={props.selectedId}
            reviewData={reviewData}
            commentData={commentData}
        />
    );
}
