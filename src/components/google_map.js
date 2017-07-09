import React, { Component } from 'react';

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
          title: 'Hello World!'
        });
    }

    render() {
        return <div className="google-map" ref="map" />
    };
}

export default GoogleMap;