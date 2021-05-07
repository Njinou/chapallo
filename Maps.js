import React, {useState, useEffect} from 'react';
import {StyleSheet,PermissionsAndroid,Button} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Maps = () => {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    const  GetPermissionLocation =()=> {
      Geolocation.getCurrentPosition((pos) => {
        console.log(pos);
        const crd = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        });
      }).catch((err) => {
        console.log(err);
      });

    }
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then(granted => {
        if (granted) {
           GetPermissionLocation();
        }
      });
    } else {
      GetPermissionLocation();
    }

  }, []);

  return (
    <MapView
      style={styles.map}
      initialRegion={position}
      region={position}
      showsUserLocation={true}
      onRegionChange={ (newRegion) => console.log(newRegion)}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Maps;