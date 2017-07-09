import axios from 'axios';

const DATA_URL = 'https://gist.githubusercontent.com/kubalasecki/7b8d731b7f0a12387a96bc2c39037536/raw/639513f19d61a0b8e736c5328c0c3653d9d39109/example.json';

export const FETCH_SHOPS_LIST = 'FETCH_SHOPS_LIST';
export const SELECT_SHOP = 'SELECT_SHOP';

export function fetchShopsList() {
    console.log('action: fetch shops');
    const url = DATA_URL;
    const request = axios.get(url);

    return {
        type: FETCH_SHOPS_LIST,
        payload: request
    }
}

export function selectShop(state) {
    console.log('action: select shop');
    return {
        type: SELECT_SHOP,
        payload: state
    }
}