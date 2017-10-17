import axios from 'axios';

//const DATA_URL = 'https://gist.githubusercontent.com/kubalasecki/7b8d731b7f0a12387a96bc2c39037536/raw/639513f19d61a0b8e736c5328c0c3653d9d39109/example.json';
const DATA_URL = 'https://appslabs.pl/mapapp/wp-json/wp/v2/posts?categories=';

export const FETCH_SHOPS_LIST = 'FETCH_SHOPS_LIST';
export const FETCH_ONLINE_SHOPS_LIST = 'FETCH_SHOPS_LIST';
export const FETCH_STATIONARY_SHOPS_LIST = 'FETCH_STATIONARY_SHOPS_LIST';
export const SELECT_SHOP = 'SELECT_SHOP';

export function fetchShopsList(category) {
    const url = `${DATA_URL}${category}`;
    const request = axios.get(url);

    return {
        type: FETCH_SHOPS_LIST,
        payload: request
    }
}

export function fetchOnlineShopsList() {
    console.log('action - fetch online shops')
    const url = `${DATA_URL}3`;
    const request = axios.get(url);

    return {
        type: FETCH_ONLINE_SHOPS_LIST,
        payload: request
    }
}

export function fetchStationaryShopsList() {
    console.log('action - fetch stationary shops')
    const url = `${DATA_URL}2`;
    const request = axios.get(url);

    return {
        type: FETCH_STATIONARY_SHOPS_LIST,
        payload: request
    }
}

export function selectShop(state) {
    return {
        type: SELECT_SHOP,
        payload: state
    }
}
