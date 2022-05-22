import ReviewWritePresenter from "./ReviewWrite.presenter";
import {  useMutation } from "@apollo/client";
import { CREATE_REVIEW, CREATE_REVIEW_IMAGE } from './ReviewWrite.queries';
import { useState, ChangeEvent } from 'react';
import { Modal } from "antd";



export default function ReviewWriteContainer() {
    const [createReview] = useMutation(CREATE_REVIEW);
    const [createReviewImage] = useMutation(CREATE_REVIEW_IMAGE)
    const [reviewTitle, setReviewTitle] = useState("")
    const [reviewContent, setReviewContent] = useState("")
    const [imageFile, setImageFile] = useState<string[]>([])

    const onChangeReviewTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setReviewTitle(event.target.value)
    }


    const onChangeReviewContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setReviewContent(event.target.value)
    }


    // const onChangeImageURL = (imageUrl:string, idx:number) => {
    //     let imageList = [...imageFile]
    //     // imageList[idx] = imageUrl
    //     // const nowImageUrl = URL.createObjectURL(imageList[idx])

    //     if(imageList.length > 8){
    //         imageList = imageList.slice(0,8)
    //     }
    //     setImageFile(imageList)
    // }


    
    const onClickSubmit = async () => {
        try {
            const result = await createReview({
                variables: {
                    createReviewInput: {
                        reviewTitle,
                        reviewContent,
                        productId:"123",
                        email:"dalkom@aaa.com"
                    },
                },
            });

            const resultImg = await createReviewImage({
                variables:{
                    reviewImageUrl:"/",
                    reviewId:"391700a1-2aca-4643-9f09-a9aa50eb870a"
                }
            })

            console.log("결과", result, "이미지결과", resultImg);
            Modal.success({content:"리뷰 작성을 완료했습니다!"})
        } catch (error:any) {
            Modal.error({content:error.message})
        }
    };

    return (
        <div>
            {/* <button onClick={onClickSubmit}>상품등록</button> */}
            <ReviewWritePresenter 
            onChangeReviewTitle={onChangeReviewTitle}
            onChangeReviewContent={onChangeReviewContent}
            onClickSubmit={onClickSubmit}
            // onChangeImageURL={onChangeImageURL}
            imageFile={imageFile}
            setImageFile={setImageFile}
            />
        </div>
    );
}
