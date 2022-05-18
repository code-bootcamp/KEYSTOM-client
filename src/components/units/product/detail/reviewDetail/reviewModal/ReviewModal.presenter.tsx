import * as B from "./ReviewModal.styles"
import Modal from 'antd/lib/modal/Modal';
import CommentListPage from "./comment/commentList/CommentList.container";
import CommentWritePage from './comment/commentWrite/index';
import {FETCH_COMMENTS} from './ReviewModal.queries'
import { useQuery } from "@apollo/client"

export default function ReviewModalPresenter(props:any){

    const {data} = useQuery(FETCH_COMMENTS)
    console.log(data)

    return(
        <div>
            {props.isOpen&&
            
            <Modal
            visible={true}
            centered
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            width= {"auto"}
            bodyStyle={{width:"100%", height:"auto", borderRadius:"30px",  padding:"0px" }}
            cancelButtonProps={{style:{display:"none"}}}
            okButtonProps={{style:{display:"none"}}}
            style={{ width:"100%", height:"auto", boxShadow:"0px 4px 20px rgba(0, 0, 0,0.2)", margin:"100px", borderRadius:"30px", overflow:"hidden"}}
            maskStyle={{width:"100%", height:"100%",background:"#000", opacity:0.5}}
            footer={null}
            zIndex={10}
            maskClosable={true}
            keyboard={true}
            closable={false}
            >
            <B.ModalDiv>
              
                    <B.ReviewImageWrapper>
                        <B.ReviewImage src="/images/review-modal.png"/>
                    </B.ReviewImageWrapper>
                    <B.ModalCancelBtn src='/images/close.png' />
                    <B.PreviewWrapper>
                        <B.PreviewWrapper>
                            <B.ImagePreviewWrapper>
                                <B.ImagePreview src='/images/review-preview.png'/>
                                <B.ImagePreview src='/images/review-preview.png'/>
                                <B.ImagePreview src='/images/review-preview.png'/>
                                <B.ImagePreview src='/images/review-preview.png'/>
                                <B.ImagePreview src='/images/review-preview.png'/>
            
                            </B.ImagePreviewWrapper>
                        </B.PreviewWrapper>
                    </B.PreviewWrapper>
                

                <B.ReviewWrapper>
                    <B.ReviewTitleDiv>
                        <B.ReviewTitle>리뷰 제목</B.ReviewTitle>
                        <B.ReviewTopWrapper>
                            <B.ReviewerProfile src="/images/profile.png"/>
                            <B.ReviewerText>김철수</B.ReviewerText>
                            <B.ReviewDate>2022/05/22</B.ReviewDate>
                            <B.ReviewLike>
                                <B.ReviewLikeIcon src='/images/review-like.png'/>
                                <B.ReviewLikeNum>12</B.ReviewLikeNum>
                            </B.ReviewLike>

                        </B.ReviewTopWrapper>

                    </B.ReviewTitleDiv>

                    <B.ReviewContentsDiv>
                        <B.ReviewContents>
                        리뷰 글이 계속 이어지게 주세요.
                        회색 영역 바깥으로 넘어가지 않게 부탁드립니다.
                        위로 20px, 좌우로 70px입니다!이번엔 생략하지 말고 쓴 내용이 전부 보이게요.
                        이렇게 길게 리뷰를 쓸 것 같진 않지만 만약 아래로 더 리뷰가 이어진다고 하면
                        텍스트 필드를 더 아래로 늘려주세요. 그 다음에 있는 컴포넌트하고 50px 차이나게 부탁드립니다!
                        리뷰가 짧아도 여기까지는 마지노선으로 유지해주세요!
                        </B.ReviewContents>
                    </B.ReviewContentsDiv>
                    <B.ReviewCommentWrapper>
                        <CommentWritePage/>
                    
                    <B.ReviewCommentListWrapper>
                        <B.CommentAllDiv>
                            <B.CommentAllText>댓글</B.CommentAllText>
                            <B.CommentAllNum>4</B.CommentAllNum>
                        </B.CommentAllDiv>

                          {data?.fetchComments.map((el:any)=>(
                            <div>
                                <CommentListPage el={el}/>
                            </div>
                          ))}
                    </B.ReviewCommentListWrapper>
                    </B.ReviewCommentWrapper>
                </B.ReviewWrapper>
            </B.ModalDiv>
            </Modal>
            
            }
        </div>
    )
}