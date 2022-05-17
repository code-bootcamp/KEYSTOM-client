import { Fragment } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BestBoards.styles";
import { IBestBoards01UIProps } from "./BestBoards.types";

export default function BestBoards01UI(props: IBestBoards01UIProps) {
  return (
    <S.BestBoardWrapper>
      {props.bestBoards?.fetchBoardsOfTheBest.map((el: any, index: any) => (
        <Fragment key={el._id}>
          <S.BestBoard id={el._id} onClick={props.onClickBestBoard}>
            {index + 1}위 베스트 게시글
            <br /> 작성자 : {el.writer}
            <br /> 제목 : {el.title}
            <br /> 날짜 : {getDate(el.createdAt)}
          </S.BestBoard>
        </Fragment>
      ))}
    </S.BestBoardWrapper>
  );
}
