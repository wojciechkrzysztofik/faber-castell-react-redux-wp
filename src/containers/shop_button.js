import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectShop } from '../actions/index';

class ShopButton extends Component {
    render() {
        let gold = '';
        if(this.props.shopData.acf.gold === true) {
            gold = <span className="btn-shop__gold">Złoty Sklep</span>
        } else {
            gold = '';
        }

        return (
            <button
                className="btn-shop"
                onClick={() => this.props.selectShop(this.props.shopData)}>
                {gold}
                <span className="btn-shop__name">{this.props.shopData.title.rendered}</span>
                <span className="btn-shop__address">{this.props.shopData.acf.address}</span>
                <span className="btn-shop__address"><a href={this.props.shopData.acf.url} target="_blank">{this.props.shopData.acf.url}</a></span>
                <span className="btn-shop__competences">{this.props.shopData.acf.competences}</span>
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
