import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';


const UserMarker = ({ coordinate }) => (
  <Marker coordinate={coordinate} pinColor="blue" title="Your Location" />
);

export default function Map() {
  const [initialRegion, setInitialRegion] = useState({
    latitude: -26.19049065652052, // Default latitude for Johannesburg
    longitude: 28.013587145369865, // Default longitude for Johannesburg
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [userLocation, setUserLocation] = useState(null);

  const trafficDepartments = [
    { id: 1, latitude:-26.094141, longitude: 28.087502, title: 'Sandton Licensing and Testing Department' },
    { id: 2, latitude: -26.276851410576683, longitude: 27.888734486657892, title: 'Kliptown Testing Centre' },
    { id: 3, latitude: -25.981034230518556, longitude: 28.168227978981694, title: 'Midrand Licensing Department' },
    { id: 4, latitude: -25.647826071045397, longitude: 28.12784544033499, title: 'Akasia Testing Centre' },
    { id: 5, latitude: -26.091393898440586, longitude: 27.979991732654437, title: 'Randburg Testing Station2' },
    { id: 6, latitude: -26.241914815806766, longitude: 28.007397611520886, title: 'Xavier Junction Licence and Testing Centre' },
    { id: 7, latitude: -25.391016513828692, longitude: 28.252052138478547, title: 'Temba Driver’s Licence Testing Centre' },
    { id: 8, latitude: -25.727727570083637, longitude: 28.311361925278202, title: 'Waltloo Testing Station' },
    { id: 9, latitude: -26.180487942371244, longitude: 28.132548023165583, title: 'Bedfordview Testing Centre' },
    { id: 10, latitude: -26.18331557316821, longitude: 28.313840301220516, title: 'Benoni Testing Centre' },
    { id: 11, latitude: -26.223409473508593, longitude: 28.283594117461938, title: 'Boksburg Testing Centre' },
    { id: 12, latitude: -26.255539106515098, longitude: 28.360674057670632, title: 'Brakpan Testing Centre' },
    { id: 13, latitude: -26.22460277545633, longitude: 28.440940213164506, title: 'Ekurhuleni Drivers Licence Office' },
    { id: 14, latitude: -26.109170807444215, longitude: 28.22691504758239, title: 'Kempton Park Testing Centre' },
    { id: 15, latitude: -26.134362545908207, longitude: 28.147991044003163, title: 'Edenvale Testing Centre' },
    { id: 16, latitude: -26.030903970131995, longitude: 28.252059026854496, title: 'Tembisa Licensing Centre' },
    { id: 17, latitude: -26.33176419356612, longitude: 27.384598353082463, title: 'Carletonville Testing Centre' },
    { id: 18, latitude: -26.17585663107482, longitude: 27.901061400188542, title: 'Florida Driving Licence Testing Centre' },
    { id: 19, latitude: -26.494192922848963, longitude: 27.481797038518177, title: 'Fochville Testing Centre' },
    { id: 20, latitude: -26.157759419927945, longitude: 27.867982521976586, title: 'Roodepoort Testing Station' },
    { id: 21, latitude: -26.516909272705693, longitude: 28.3608775268721, title: 'Heidelberg Testing Centre' },
    { id: 22, latitude: -26.570531558623667, longitude: 28.017079298038652, title: 'Meyerton Licence Department2' },
    { id: 23, latitude: -26.67108077919627, longitude: 27.92897538946352, title: 'Vereeniging Testing Station' },
    { id: 24, latitude: -26.67933923663958, longitude:  27.834884805318243, title: 'VanderbijlPark Testing Station' },

  ];
  
  useEffect(() => {
    // Get the user's current location and update it in real-time
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.watchPositionAsync(
        { enableHighAccuracy: true, distanceInterval: 10 },
        (newLocation) => {
          const userRegion = {
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          };
          setInitialRegion(userRegion);
          setUserLocation(userRegion);
        }
      );
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={initialRegion}>
        {userLocation && <UserMarker coordinate={userLocation} />}
        {trafficDepartments.map((trafficDept) => (
          <Marker
            key={trafficDept.id}
            coordinate={{
              latitude: trafficDept.latitude,
              longitude: trafficDept.longitude,
            }}
            title={trafficDept.title}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
