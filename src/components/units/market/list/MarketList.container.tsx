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

    return <MarketListPresenter />;
}
