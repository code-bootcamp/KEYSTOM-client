import * as B from "./ReviewModal.styles"
import Reply from "./ReviewReply"

export default function ReviewModalPresenter(){


    return(
        <B.ReviewModalWrapper>
            <B.ModalDiv>
                <B.ReviewImage>
                    <B.ImagePreviewWrapper>
                        <B.ImagePreview></B.ImagePreview>
                        <B.ImagePreview></B.ImagePreview>
                        <B.ImagePreview></B.ImagePreview>
                        <B.ImagePreview></B.ImagePreview>
                        <B.ImagePreview></B.ImagePreview>
                    </B.ImagePreviewWrapper>
                </B.ReviewImage>

                <B.ReviewWrapper>
                    <B.ReviewTitleDiv>
                        <B.ReviewTitle>리뷰 제목</B.ReviewTitle>
                        <B.ReviewTopWrapper>
                            <B.ReviewerProfile></B.ReviewerProfile>
                            <B.ReviewerText>김철수</B.ReviewerText>
                            <B.ReviewDate>2022/05/22</B.ReviewDate>
                            <B.ReviewLike>
                                <B.ReviewLikeIcon></B.ReviewLikeIcon>
                                <B.ReviewLikeNum>nn</B.ReviewLikeNum>
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
                        <B.ReviewCommentWriteWrapper>
                            <B.CommentInput placeholder="댓글 작성하기"/>
                            <B.CommentBtn>작성하기</B.CommentBtn>
                        </B.ReviewCommentWriteWrapper>
                    
                    <B.ReviewCommentListWrapper>
                        <B.CommentAllDiv>
                            <B.CommentAllText>댓글</B.CommentAllText>
                            <B.CommentAllNum>4</B.CommentAllNum>
                        </B.CommentAllDiv>

                          {[0,1].map(el=>(
                            <div>

                            
                                <B.CommentWrapper>
                                     <B.CommentProfile></B.CommentProfile>
                                         <B.CommentInner>
                                             <B.CommentTop>
                                                 <B.CommentTopDiv>
                                                     <B.CommentWriter>댓쓴이1</B.CommentWriter>
                                                     <B.CommentCreatedAt>2022/05/10</B.CommentCreatedAt>
                                                 </B.CommentTopDiv>
                                                
                                                 <B.CommentBtns>
                                                     <B.CommentEditBtn>E</B.CommentEditBtn>
                                                     <B.CommentDeleteBtn>X</B.CommentDeleteBtn>
                                                 </B.CommentBtns>
                                             </B.CommentTop>
                                             <B.CommentContents>정말 알고 싶었던 정보였어요!</B.CommentContents>
                                             <B.ReplyBtn>
                                                <B.ReplyIcon src="/images/commentwrite.png"/>
                                            </B.ReplyBtn>
                                         </B.CommentInner>
                                 </B.CommentWrapper>

                                 {[0].map(el=>(
                                    <div>
                                        <Reply/>
                                    </div>
                                 ))}
                            </div>
                          ))}

                   

                    </B.ReviewCommentListWrapper>
                    </B.ReviewCommentWrapper>
                </B.ReviewWrapper>
            </B.ModalDiv>
        </B.ReviewModalWrapper>
    )
}