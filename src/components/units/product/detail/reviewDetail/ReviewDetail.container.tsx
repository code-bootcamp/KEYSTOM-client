import * as A from './ReviewDetail.styles'

export default function ReviewDetail(){

    return(
        <div>
            <A.AllReviewsDiv>
                <A.AllText>리뷰 수</A.AllText>
                <A.AllNum>NN</A.AllNum>
            </A.AllReviewsDiv>

            <A.ReviewWrapper>
            {[0,1,2,3].map((el)=>(
         
                    <A.ReviewDiv>
                        <A.ReviewImage>커스텀 키보드 이미지</A.ReviewImage>
                        <A.ReviewRight>
                            <A.ReviewTop>
                                <A.ReviewTopTop>
                                    <A.ReviewTitle>리뷰 제목</A.ReviewTitle>
                                  
                                </A.ReviewTopTop>
                            </A.ReviewTop>
                            <A.ReviewBottom>
                                <A.Contents>contents</A.Contents>
                                <A.BottomDiv>
                                    <A.BottomText>
                                        <A.Reviewer>
                                            <A.ReviewSmallTitle>리뷰어</A.ReviewSmallTitle>
                                            <A.ReviewSmallText>김철수</A.ReviewSmallText>
                                        </A.Reviewer>
                                        <A.ReviewDate>
                                            <A.ReviewSmallTitle>작성 날짜</A.ReviewSmallTitle>
                                            <A.ReviewSmallText>2022/05/10</A.ReviewSmallText>
                                        </A.ReviewDate>
                                    </A.BottomText>
                                    <A.LikeDiv>
                                        <div>좋아요</div>
                                        <span>NN</span>
                                    </A.LikeDiv>
                                </A.BottomDiv>
                          
                            </A.ReviewBottom>
                        </A.ReviewRight>
                    </A.ReviewDiv>
            ))}     
                </A.ReviewWrapper>

        </div>
    )
}