import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShopsList } from '../actions/index';
import ShopButton from './shop_button';
import Map from './map';

class StationaryShops extends Component {
    renderShopButton(shop) {
        return (
            <ShopButton
                key={shop.id}
                shopData={shop}
                />
        );
    }

    render() {
        return (
            <div className="shops">
                <div className="shops__content">
                    <div className="shops__content-map">
                        <Map />
                    </div>
                    <div className="shops__content-list">
                        <ul>
                            { this.props.stationaryShops ? this.props.stationaryShops.map(this.renderShopButton) : 'Ładowanie..' }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stationaryShops: state.stationaryShops
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchShopsList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StationaryShops);
