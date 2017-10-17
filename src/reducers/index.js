import { combineReducers } from 'redux';
import ShopsListReducer from './reducer_shops_list';
import OnlineShopsListReducer from './reducer_online_shops_list';
import StationaryShopsListReducer from './reducer_stationary_shops_list';
import SelectedShopReducer from './reducer_selected_shop';

const rootReducer = combineReducers({
  onlineShops: OnlineShopsListReducer,
  stationaryShops: StationaryShopsListReducer,
  selectedShop: SelectedShopReducer,
});

export default rootReducer;
