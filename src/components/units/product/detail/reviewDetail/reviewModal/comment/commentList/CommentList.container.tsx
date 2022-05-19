import * as B from "./CommentList.styles"
import Reply from '../../ReviewReply';
import { useQuery } from "@apollo/client"


export default function CommentListPage(props:any){


    return(
        <B.CommentContainer  key={props.el.id}>
            
            <B.CommentWrapper>
                <B.CommentProfile></B.CommentProfile>
                    <B.CommentInner>
                        <B.CommentTop>
                            <B.CommentTopDiv>
                                <B.CommentWriter></B.CommentWriter>
                                <B.CommentCreatedAt>{props.el.createdAt}</B.CommentCreatedAt>
                            </B.CommentTopDiv>
                            
                            <B.CommentBtns>
                                <B.CommentEditBtn src="/images/edit.png"/>
                                <B.CommentDeleteBtn src="/images/delete.png"/>
                            </B.CommentBtns>
                        </B.CommentTop>
                        <B.CommentContents>{props.el.commentContent}</B.CommentContents>
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
        </B.CommentContainer>
    )
}