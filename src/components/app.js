import React, { Component } from 'react';
import MapWrapper from '../containers/map_wrapper';
import ShopsList from '../containers/shops_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <MapWrapper />
        <ShopsList />
      </div>
    );
  }
}
