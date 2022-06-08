import { MouseEvent } from "react";

export interface IProductListPresenterProps {
    data: any;
    refetch: any;
    productCount: any;
    refetchProductCount: any;
    keyword: any;
    onChangeKeyword: (value: string) => void;
    onLoadMore: () => void;
    onClickMoveToDetail: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface IProductListPresenterItemProps {
    data: any;
    keyword: any;
    el: any;
    onClickMoveToDetail: (event: MouseEvent<HTMLImageElement>) => void;
}
