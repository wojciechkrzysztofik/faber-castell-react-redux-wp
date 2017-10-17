import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShopsList } from '../actions/index';

class Home extends Component {
  render() {
    return (
        <div className="home"></div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchShopsList }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);
