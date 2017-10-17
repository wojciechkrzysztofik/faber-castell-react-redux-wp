import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShopsList } from '../actions/index';
import { fetchOnlineShopsList, fetchStationaryShopsList } from '../actions/index';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #0c3312;
    color: #fff;
    font-family: Arial;
    padding: 60px;
    width: 810px;
    height: 800px;
`;

class App extends Component {
  componentDidMount() {
      this.props.fetchOnlineShopsList();
      this.props.fetchStationaryShopsList();
  }

  render() {
    return (
        <div className="home">
            <img src="images/logo.jpg" className="home-link" />
            <div>
                <Link className="btn-category" to="/online">Sklepy <strong>online</strong></Link>
                <Link className="btn-category" to="/stationary">Sklepy <strong>stacjonarne</strong></Link>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        onlineShops: state.onlineShops,
        stationaryShops: state.stationaryShops,
    };
}

function mapDispatchToProps(dispatch) {
  return {
      fetchShopsList: bindActionCreators(fetchShopsList, dispatch),
      fetchOnlineShopsList: bindActionCreators(fetchOnlineShopsList, dispatch),
      fetchStationaryShopsList: bindActionCreators(fetchStationaryShopsList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
