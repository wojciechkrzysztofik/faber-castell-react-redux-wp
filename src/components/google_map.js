import React, { Component } from 'react';
import _ from 'lodash';

class GoogleMap extends Component {
    componentDidMount() {
        this.renderMap();
    }

    componentWillReceiveProps() {
        this.renderMap();
    }

    renderMap() {
        let map = new google.maps.Map(this.refs.map, {
            zoom: 16,
            center: {
                lat: parseFloat(this.props.lat),
                lng: parseFloat(this.props.lon)
            }
        });

        let marker = new google.maps.Marker({
          position: {
            lat: parseFloat(this.props.lat),
            lng: parseFloat(this.props.lon)
          },
          map: map,
          title: this.props.name
        });

        let hours = _.mapValues(this.props.hours[0], function(value, key) {
            return 'value: ' + value + ' key: '+  key;
        });

        console.log(hours);

        let contentString = `<div>
            <h1>${this.props.name}</h1>
        </div>`;

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }

    render() {
        return <div className="google-map" ref="map" />
    };
}

export default GoogleMap;