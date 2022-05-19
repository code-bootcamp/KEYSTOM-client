import ReviewModalPresenter from "./ReviewModal.presenter"
import { useQuery } from "@apollo/client"
import { FETCH_REVIEW } from './ReviewModal.queries';
import { FETCH_REVIEW_COMMENTS } from './comment/commentList/CommentList.queries';

export default function ReviewModalContainer(props:any){
    
    const {data:commentData} = useQuery(FETCH_REVIEW_COMMENTS,{
        variables:{
            reviewId:String(props.selectedId)
        }
    })
    console.log("commentData", commentData)
  

    const {data : reviewData} = useQuery(FETCH_REVIEW,{
        variables:{
            reviewId:String(props.selectedId)
            // reviewId:String(props.id)
            // reviewId:JSON.stringify(props.el.id)
            // reviewId:String(event.target as HTMLButtonElement).id
        }
    })

    console.log("reviewData", reviewData)
    
    return<ReviewModalPresenter
    showModal={props.showModal}
    handleOK={props.handleOK}
    handleCancel={props.handleCancel}
    id={props.id}
    // el={props.el}
    selectedId={props.selectedId}
    reviewData={reviewData}
    commentData={commentData}

    />
}