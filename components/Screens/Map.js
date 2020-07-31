import React from 'react';
import { Dimensions, Component, StyleSheet, View, Text, TouchableHighlight, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { observer, inject } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome';


@inject('store')
@observer

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.props.store.getMapData();
  }
  
  render() {
      return(
      <>
      <StatusBar backgroundColor= '#151F2A' />
        <View style={styles.mapBttnContainer}>
          <TouchableHighlight onPress={() => alert('To Do')}>
            <Text style={styles.btn}>All Dives</Text>
          </TouchableHighlight>

          <Text style={styles.btn}> | </Text>

          <TouchableHighlight onPress={() => alert('To Do')}>
            <Text style={styles.btn}>My Dives</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.mapContainer}>
          <MapView
            ref={mapview => this.props.store.mapview = mapview}
            provider={PROVIDER_GOOGLE}
            style={styles.mapImage}
            customMapStyle={mapDarkStyle}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 100,
              longitudeDelta: 100,
            }}
          >
            {this.props.store.features.map((feature, index) => <Marker
              key={index}
              coordinate={{
                latitude: feature.geometry.coordinates[1],
                longitude: feature.geometry.coordinates[0],
              }}
            >
              <Icon name='flag' size={28} color='red'/>
              <Callout style={{width: 200}}>
                <Text>{feature.properties.SiteName}</Text>
                <TouchableHighlight onPress={() => alert('TODO')}>
                  <Text style={{color: '#39A3F4', fontSize: 15, alignSelf: 'center'}}> Learn More </Text>
                </TouchableHighlight>
              </Callout>
            </Marker>)}
          </MapView>
      </View> 
    </>
    );
  }
}
const styles= StyleSheet.create({
  mapBttnContainer: {
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: '#151F2A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  btn: {
    color: '#39A3F4', 
    fontSize: 20,
  },
  mapContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapImage: {
    ...StyleSheet.absoluteFillObject,
  },
});


const mapDarkStyle= [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]