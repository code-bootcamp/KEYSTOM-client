import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MarketListContainer from "../../src/components/units/market/list/MarketList.container";

function MarketList() {
    return <MarketListContainer />;
}

export default withAuth(MarketList);
