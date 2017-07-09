import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShopButton from './shop_button';
import { fetchShopsList } from '../actions/index';

class ShopsList extends Component {

    componentDidMount() {
        this.props.fetchShopsList();
    }

    renderShopButton(shop) {
        return (
            <ShopButton 
                shopData={shop} 
                key={`${shop.siec},${shop.adres}`} />
        );
    }

    render() { 
        return (
            <div>
                <h2>Shops list</h2>
                <ul>
                   {this.props.shops.map(this.renderShopButton)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({shops}) {
    return { shops };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchShopsList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopsList);