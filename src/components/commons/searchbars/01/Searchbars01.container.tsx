import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbars01.presenter";
import { ISearchbars01Props } from "./Searchbars01.types";
import _ from "lodash";

export default function Searchbars01(props: ISearchbars01Props) {
    // 검색 후 refetch -> 페이지는 1페이지 보여주고 0.2초 마다 디바운싱
    const getDebounce = _.debounce((data: string) => {
        props.refetch({ search: data, page: 1 });
        props.refetchBoardsCount({ search: data });
        props.onChangeKeyword(data);
    }, 200);

    function onChangeSearchbar(event) {
        getDebounce(event.target.value);
    }

    return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
