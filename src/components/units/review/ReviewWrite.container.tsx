import ReviewWritePresenter from "./ReviewWrite.presenter";
import { useMutation, gql, useQuery, useApolloClient } from '@apollo/client';
import { CREATE_REVIEW } from "./ReviewWrite.queries";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../commons/store/index';

const FETCH_ORDER = gql`
  query fetchOrder($orderId: String!){
    fetchOrder(orderId: $orderId){
      id
      price
      product{
        id
        title
        price
        thumbnail
      }
    }
  }
`

const FETCH_PRODUCT = gql`
  query fetchProduct($productId:String!){
    fetchProduct(productId: $productId){
      id
      title
      price
      thumbnail
    }
  }
`

export default function ReviewWriteContainer() {
  const router = useRouter();
  const [createReview] = useMutation(CREATE_REVIEW);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [accessToken, ] = useRecoilState(accessTokenState);

  //   const {data} = useQuery(FETCH_PRODUCT,{
  //   variables:{
  //     productId:String(router.query.review)
  //   }
  // })
  // const {data} = useQuery(FETCH_ORDER,{
  //   variables:{
  //     orderId:String(router.query.review)
  //   }
  // })



  console.log("router라우터", router)
  // console.log("상품데이터", data)
  const client = useApolloClient();

  const onChangeReviewTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeReviewDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  // const onChangeImageURL = (fileUrl: string, index: number) => {
  //   const newFile = [...imageUrls];
  //   // newFile[index] = fileUrl;
  //   setImageUrls(newFile);
  // }

  const onClickSubmit = async () => {
    try {

      // const orderData = await client.query({
      //   query: FETCH_ORDER,
      //   variables:{
      //     orderId:String(router.query.review)
      //   },
      //   context: {
      //     headers: {
      //       Authorization: `Bearer ${accessToken}`,
      //     },
      //   },
      // })

      // console.log("orderData", orderData)
    
      const result = await createReview({
        variables: {
          createReviewInput: {
            title,
            description,
            imageUrls,
            orderId: router.query.review
          },
        },
      });

      Modal.success({ content: "리뷰 작성을 완료했습니다!" });
      router.push("/mypage")
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
        // onChangeReviewContent={function (
        //   event: ChangeEvent<HTMLTextAreaElement>
        // ): void {
        //   throw new Error("Function not implemented.");
        // }}
        // imageFile={[]}
        // setImageFile={undefined}
        // data={data}
      />
    </div>
  );
}
