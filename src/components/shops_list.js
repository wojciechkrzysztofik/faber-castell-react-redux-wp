import React, { Component } from 'react';
import ShopButton from './shop_button';

export default class ShopsList extends Component {
    render() {
        return (
            <div>
                <h2>Shops list</h2>
                <ul>
                    <li><ShopButton /></li>
                    <li><ShopButton /></li>
                    <li><ShopButton /></li>
                    <li><ShopButton /></li>
                </ul>
            </div>
        );
    }
}