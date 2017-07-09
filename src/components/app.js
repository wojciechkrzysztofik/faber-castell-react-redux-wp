import React, { Component } from 'react';
import Map from './map';
import ShopsList from './shops_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <ShopsList />
      </div>
    );
  }
}
