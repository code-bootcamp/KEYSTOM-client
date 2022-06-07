import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
// import {
//   IQuery,
//   IQueryFetchBoardsArgs,
//   IQueryFetchBoardsCountArgs,
// } from "../../../../commons/types/generated/types";

export interface ISearchbars01Props {
    refetch: (
        variables: any
    ) => void
    refetchBoardsCount: (
        variables: any
    ) => void
    onChangeKeyword: (value: string) => void;
}

export interface ISearchbars01UIProps {
    onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
