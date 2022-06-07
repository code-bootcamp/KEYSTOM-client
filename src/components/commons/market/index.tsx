import MarketListContainer from '../../units/market/list/MarketList.container';
import { withAuth } from '../hocs/withAuth';

function MarketList() {
    return <MarketListContainer />;
}

export default withAuth(MarketList);
