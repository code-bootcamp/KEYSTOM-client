import * as B from "./CommentList.styles"
import Reply from '../../ReviewReply';


export default function CommentListPage(props:any){

   

    return(
        <>
        
        <B.CommentWrapper>
            <B.CommentProfile></B.CommentProfile>
                <B.CommentInner>
                    <B.CommentTop>
                        <B.CommentTopDiv>
                            <B.CommentWriter>댓쓴이1</B.CommentWriter>
                            <B.CommentCreatedAt>2022/05/10</B.CommentCreatedAt>
                        </B.CommentTopDiv>
                        
                        <B.CommentBtns>
                            <B.CommentEditBtn src="/images/edit.png"/>
                            <B.CommentDeleteBtn src="/images/delete.png"/>
                        </B.CommentBtns>
                    </B.CommentTop>
                    <B.CommentContents>{props.el.comentContent}</B.CommentContents>
                    <B.ReplyBtn>
                        <B.ReplyIcon src="/images/commentwrite.png"/>
                    </B.ReplyBtn>
                </B.CommentInner>
                {[0].map(el=>(
                    <div>
                        <Reply/>
                    </div>
                ))}     

        </B.CommentWrapper>
        
        
        </>
    )
}