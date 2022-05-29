import ReviewWritePresenter from "./ReviewWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "./ReviewWrite.queries";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function ReviewWriteContainer() {
  const [createReview] = useMutation(CREATE_REVIEW);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const router = useRouter();

  const onChangeReviewTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeReviewDescription = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createReview({
        variables: {
          createReviewInput: {
            title: title,
            description: description,
            // 수정중
            // imageUrls: imageUrls,
            // productId: String(router.query.productId),
            // orderId:
          },
        },
      });

      Modal.success({ content: "리뷰 작성을 완료했습니다!" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      <ReviewWritePresenter
        onChangeReviewTitle={onChangeReviewTitle}
        onChangeReviewDescription={onChangeReviewDescription}
        onClickSubmit={onClickSubmit}
        // onChangeImageURL={onChangeImageURL}
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        onChangeReviewContent={function (
          event: ChangeEvent<HTMLTextAreaElement>
        ): void {
          throw new Error("Function not implemented.");
        }}
        imageFile={[]}
        setImageFile={undefined}
      />
    </div>
  );
}
