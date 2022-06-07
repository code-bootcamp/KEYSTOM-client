import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
// import {
//   IQuery,
//   IQueryFetchBoardsArgs,
// } from "../../../../commons/types/generated/types";

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables:any
  ) => void;
}

export interface IPaginations01UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
