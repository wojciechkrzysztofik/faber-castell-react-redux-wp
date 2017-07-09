import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';

class MapWrapper extends Component {
    render() {
        console.log('map reloaded');
        if(this.props.selectedShop.length == 0) {
            return <div>Select a shop to display.</div>
        }

        return (
            <div>
                <div ref="map" />
                <GoogleMap lat={this.props.selectedShop.latitude} lon={this.props.selectedShop.longitude} />
                <div>{this.props.selectedShop.adres}</div>
            </div>
        );
    }
}

function mapStateToProps({selectedShop}) {
    return { selectedShop };
}

export default connect(mapStateToProps)(MapWrapper);