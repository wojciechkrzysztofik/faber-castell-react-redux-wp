import { combineReducers } from 'redux';
import ShopsListReducer from './reducer_shops_list';
import SelectedShopReducer from './reducer_selected_shop';

const rootReducer = combineReducers({
  shops: ShopsListReducer,
  selectedShop: SelectedShopReducer
});

export default rootReducer;