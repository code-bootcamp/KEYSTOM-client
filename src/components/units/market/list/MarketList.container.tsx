import { gql, useQuery } from "@apollo/client";
import MarketListPresenter from "./MarketList.presenter";

const FETCH_USED_PRODUCTS = gql`
    query fetchUsedProducts {
        fetchUsedProducts {
            id
            sellTitle
            hopePrice
            method
            description
            createdAt
            seller
            usedProductTags {
                id
                tag
            }
        }
    }
`;

export default function MarketListContainer() {
    // const { data } = useQuery(FETCH_USED_PRODUCTS);
    // console.log(data);
    return <MarketListPresenter />;
}
