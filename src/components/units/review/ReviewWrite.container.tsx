import ReviewWritePresenter from "./ReviewWrite.presenter";
import { gql, useMutation } from "@apollo/client";

const CREATE_REVIEW = gql`
    mutation createReview($createReviewInput: CreateReviewInput!) {
        createReview(createReviewInput: $createReviewInput) {
            id
            reviewContent
            like
        }
    }
`;

export default function ReviewWriteContainer() {
    const [createReview] = useMutation(CREATE_REVIEW);

    const onClickSubmit = async () => {
        try {
            const result = await createReview({
                variables: {
                    createReviewInput: {},
                },
            });
            console.log(result);
            alert("성공");
        } catch (error) {
            alert("실패");
        }
    };

    return (
        <div>
            <button onClick={onClickSubmit}>상품등록</button>
            <ReviewWritePresenter></ReviewWritePresenter>;
        </div>
    );
}
