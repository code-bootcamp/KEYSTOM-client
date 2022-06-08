import ReviewWritePresenter from "./ReviewWrite.presenter";
import { useMutation, gql, useQuery, useApolloClient } from "@apollo/client";
import { CREATE_REVIEW } from "./ReviewWrite.queries";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/store/index";

const FETCH_ORDER = gql`
  query fetchOrder($orderId: String!) {
    fetchOrder(orderId: $orderId) {
      id
      price
      product {
        id
        title
        price
        thumbnail
      }
    }
  }
`;

const FETCH_CUSTOM = gql`
  query fetchCustom($productId: String!) {
    fetchCustom(productId: $productId) {
      id
      space
      enter
      esc
      rest
    }
  }
`;

export default function ReviewWriteContainer() {
  const router = useRouter();
  const [createReview] = useMutation(CREATE_REVIEW);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_ORDER, {
    variables: {
      orderId: String(router.query.review),
    },
  });

  const { data: customData } = useQuery(FETCH_CUSTOM, {
    variables: {
      productId: String(data?.fetchOrder?.product?.id),
    },
  });

  useApolloClient();

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
      await createReview({
        variables: {
          createReviewInput: {
            title,
            description,
            imageUrls,
            orderId: router.query.review,
          },
        },
      });

      Modal.success({ content: "리뷰 작성을 완료했습니다!" });
      router.push("/mypage");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      <ReviewWritePresenter
        onChangeReviewTitle={onChangeReviewTitle}
        onChangeReviewDescription={onChangeReviewDescription}
        description={description}
        onClickSubmit={onClickSubmit}
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        data={data}
        customData={customData}
      />
    </div>
  );
}
