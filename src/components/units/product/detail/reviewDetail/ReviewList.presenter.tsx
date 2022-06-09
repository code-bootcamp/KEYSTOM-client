import * as A from "./ReviewList.styles";
import { MouseEvent, useState } from "react";
import ReviewModalContainer from "./reviewModal/ReviewModal.container";
import { IReviewDetailPresenterProps } from "./ReviewList.types";

export default function ReviewDetailPresenter(
    props: IReviewDetailPresenterProps
) {
    const [isOpen, setIsOpen] = useState(false);

    const [selectedId, setSelectedId] = useState("");

    const showModal = (event: MouseEvent<HTMLImageElement>) => {
        if (event.target instanceof Element) setSelectedId(event.target.id);
        setIsOpen(true);
    };

    const handleOK = () => {
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const onClickCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <A.Wrapper>
                <A.AllReviewsDiv>
                    <A.AllText>Reviews</A.AllText>
                    <A.AllNum>{props.data?.fetchReviews.length}</A.AllNum>
                </A.AllReviewsDiv>

                <A.ReviewWrapper>
                    {props.data?.fetchReviews.map((el: any) => (
                        <A.ReviewDiv key={el.id}>
                            <A.ReviewImage
                                src={`https://storage.googleapis.com/${el.thumbnail}`}
                                onClick={showModal}
                                id={el.id}
                            />
                            <A.ReviewBottom>
                                <A.ReviewTop>
                                    <A.LikeDiv>
                                        <A.ReviewLikeImage src="/images/review/like.png" />
                                        <A.ReviewLikeNum>123</A.ReviewLikeNum>
                                    </A.LikeDiv>
                                    <A.Reviewer>
                                        <A.ReviewSmallText>
                                            {el.user.nickName}
                                        </A.ReviewSmallText>{" "}
                                        |
                                        <A.ReviewCreatedAt>
                                            {el.createdAt.slice(0, 10)}
                                        </A.ReviewCreatedAt>
                                    </A.Reviewer>
                                </A.ReviewTop>
                                <A.BottomDiv>
                                    <A.ReviewTitle>{el.title}</A.ReviewTitle>
                                    <A.Contents>{el.description}</A.Contents>
                                </A.BottomDiv>
                            </A.ReviewBottom>
                            {isOpen && (
                                <ReviewModalContainer
                                    showModal={showModal}
                                    handleOK={handleOK}
                                    handleCancel={handleCancel}
                                    onClickCloseModal={onClickCloseModal}
                                    el={el}
                                    selectedId={selectedId}
                                />
                            )}
                        </A.ReviewDiv>
                    ))}
                </A.ReviewWrapper>
            </A.Wrapper>
        </>
    );
}
