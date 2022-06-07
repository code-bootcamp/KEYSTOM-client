import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_OF_THE_BEST } from "./BestBoards.queries";
import BestBoards01UI from "./BestBoards.presenter";
// import { IQuery } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BestBoards01() {
  const router = useRouter();
  // API 요청
  const { data: bestBoards } = useQuery(
    FETCH_BOARDS_OF_THE_BEST
  );

  const onClickBestBoard = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  };

  return (
    <BestBoards01UI
      bestBoards={bestBoards}
      onClickBestBoard={onClickBestBoard}
    ></BestBoards01UI>
  );
}
