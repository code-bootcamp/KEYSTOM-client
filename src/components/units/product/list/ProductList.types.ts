export interface IProductListPresenterProps {
    refetch: any;
    refetchProductCount: any;
    data: any;
    productCount: any;
    keyword: any;

    onChangeKeyword: (value: string) => void;

    onLoadMore: () => void;
    (event: MouseEvent<HTMLImageElement>);
}

export interface IProductListPresenterItemProps {}
