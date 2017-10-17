import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Map extends Component {
    componentDidMount() {
        this.renderMap(this.props.shops[0].acf.address);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedShop.acf.address != undefined) {
            this.renderMap(nextProps.selectedShop.acf.address);
        }
    }

    renderMap(address) {
        let map = new google.maps.Map(this.refs.map, {
            zoom: 16,
            center: {
                lat: parseFloat('50.0468548'),
                lng: parseFloat('19.9348337')
            }
        });

        google.maps.event.addListenerOnce(map, 'idle', function() {
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var myOptions = {
                        zoom: 16,
                        center: results[0].geometry.location,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }
                    map = new google.maps.Map(document.getElementById("map"), myOptions);

                    var marker = new google.maps.Marker({
                       map: map,
                       position: results[0].geometry.location
                    });
                }
            });
        }.bind(address));


    }
  render() {
    return (
      <div className="google-map" ref="map" id="map" />
    );
  }
}

function mapStateToProps(state) {
    return {
        selectedShop: state.selectedShop,
        shops: state.stationaryShops
    };
}

export default connect(mapStateToProps)(Map);
