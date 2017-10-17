import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShopsList } from '../actions/index';
import ShopButton from './shop_button';
import Map from './map';

class OnlineShops extends Component {
    renderShopButton(shop) {
        let logo = '';

        if(shop.acf.logo !== false) {
            logo = <img src={shop.acf.logo.sizes.thumbnail} alt={shop.title.rendered} />
        } else {
            logo = <span className="logo-placeholder">{shop.title.rendered}</span>;
        }

        return (
            <li className="btn-shop-online" key={shop.id}>
                <a target="_blank" href={shop.acf.url}>
                    {logo}
                </a>
            </li>
        );
    }

    render() {
        console.log('online shops: ', this.props)
        return (
            <div className="shops">
                <div className="shops__content">
                    <ul className="shops-online">
                        { this.props.onlineShops ? this.props.onlineShops.map(this.renderShopButton) : 'Ładowanie..' }
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        onlineShops: state.onlineShops
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchShopsList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlineShops);
