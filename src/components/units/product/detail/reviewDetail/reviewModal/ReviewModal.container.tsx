import ReviewModalPresenter from "./ReviewModal.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_REVIEW } from "./ReviewModal.queries";
import { FETCH_REVIEW_COMMENTS } from "./comment/commentList/CommentList.queries";

export default function ReviewModalContainer(props: any) {
    const { data: reviewData } = useQuery(FETCH_REVIEW, {
        variables: {
            reviewId: String(props.selectedId),
        },
    });

    console.log("reviewData", reviewData);

    const { data: commentData } = useQuery(FETCH_REVIEW_COMMENTS, {
        variables: {
            reviewId: String(props.selectedId),
        },
    });
    console.log("commentData", commentData);

    return (
        <ReviewModalPresenter
            showModal={props.showModal}
            handleOK={props.handleOK}
            handleCancel={props.handleCancel}
            onClickCloseModal={props.onClickCloseModal}
            id={props.id}
            selectedId={props.selectedId}
            reviewData={reviewData}
            commentData={commentData}
        />
    );
}
