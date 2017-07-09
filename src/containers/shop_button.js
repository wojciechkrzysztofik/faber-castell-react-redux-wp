import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectShop } from '../actions/index';

class ShopButton extends Component {
    render() {
        return (
            <button 
                className="btn-shop"
                onClick={() => this.props.selectShop(this.props.shopData)}>
                {this.props.shopData.adres}
            </button>
        );
    }
}

function mapStateToProps({selectedShop}) {
    return { selectedShop };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectShop }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopButton);