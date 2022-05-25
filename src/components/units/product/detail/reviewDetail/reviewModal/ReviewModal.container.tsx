import ReviewModalPresenter from "./ReviewModal.presenter"
import { useQuery } from "@apollo/client"
import { FETCH_REVIEW } from './ReviewModal.queries';
import { FETCH_REVIEW_COMMENTS } from './comment/commentList/CommentList.queries';

export default function ReviewModalContainer(props:any){



    const {data : reviewData} = useQuery(FETCH_REVIEW,{
        variables:{
            reviewId:String(props.selectedId)
            // reviewId:"c3148468-f723-49bd-a6d7-2d226bd0ab8e"

            // reviewId:String(props.id)
            // reviewId:JSON.stringify(props.el.id)
            // reviewId:String(event.target as HTMLButtonElement).id
        }
    })

    console.log("reviewData", reviewData)

        
    const {data:commentData} = useQuery(FETCH_REVIEW_COMMENTS,{
        variables:{
            reviewId:String(props.selectedId)
            // reviewId:"c3148468-f723-49bd-a6d7-2d226bd0ab8e"
        }
    })
    console.log("commentData", commentData)
  



    return<ReviewModalPresenter
    showModal={props.showModal}
    handleOK={props.handleOK}
    handleCancel={props.handleCancel}
    onClickCloseModal={props.onClickCloseModal}
    id={props.id}
    // el={props.el}
    selectedId={props.selectedId}
    reviewData={reviewData}
    commentData={commentData}
    // isOpen={true}
    />
}