import * as B from "./CommentList.styles";

export default function CommentListPage(props: any) {
  console.log(props.el, "props.el");
  return (
    <B.CommentContainer key={props.el.id}>
      <B.CommentWrapper>
        <B.CommentProfile>{props.el?.user?.profileImage}</B.CommentProfile>
        <B.CommentInner>
          <B.CommentTop>
            <B.CommentTopDiv>
              <B.CommentWriter>{props.el?.user?.nickName}</B.CommentWriter>
              <B.CommentCreatedAt>
                | {props.el?.createdAt.slice(0, 10)}
              </B.CommentCreatedAt>
            </B.CommentTopDiv>

            <B.CommentBtns>
              <B.CommentEditBtn src="/images/comment/edit.png" />
              <B.CommentDeleteBtn src="/images/comment/delete.png" />
            </B.CommentBtns>
          </B.CommentTop>
          <B.CommentContents>{props.el?.content}</B.CommentContents>
          {/* <B.ReplyBtn> */}
          {/* <B.ReplyIcon src="/images/comment/reply.png" /> */}
          {/* </B.ReplyBtn> */}
        </B.CommentInner>
      </B.CommentWrapper>

      {/* {[0].map(el=>(
                        <div>
                            <Reply/>
                        </div>
            ))}      */}
    </B.CommentContainer>
  );
}
