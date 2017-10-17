import { FETCH_STATIONARY_SHOPS_LIST } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_STATIONARY_SHOPS_LIST:
            return action.payload.data;
    }
    return state;
}
