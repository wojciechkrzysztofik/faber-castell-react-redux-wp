import { SELECT_SHOP } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case SELECT_SHOP: 
            return action.payload;
    }
    return state;
}