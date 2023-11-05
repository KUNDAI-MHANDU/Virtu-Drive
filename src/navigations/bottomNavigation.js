import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Map from '../components/Map';
import DriverLicenseForm from '../components/DriversLicense';
import LearnersLicenseForm from '../components/LearnersLicense';
import VehicleLicenseApplicationForm from '../components/VehicleLicense';
import LicenceId from '../components/UploadDocuments';
import LicenceId2 from '../components/UploadDocument2';
import LicenceId3 from '../components/UploadDocument3';
import Pay1 from '../components/Pay1';
import Pay2 from '../components/Pay2';
import pay3 from '../components/pay3';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IDCard from '../components/id';
import DeleteAccountScreen from '../components/DeleteAccount';
import SignOutScreen from '../components/SignOut';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={StackNav} options={{ tabBarIcon: ({ color, size }) => (
      <Icon name="home" size={size} color={color} />
      ),
      headerShown: false }}/>
      <Tab.Screen name="Map" component={Map} options={{ tabBarIcon: ({ color, size }) => (
      <Icon name="map" size={size} color={color} />
      ),
      headerShown: false }}/>
      <Tab.Screen name="Profile" component={MyDrawer} options={{ tabBarIcon: ({ color, size }) => (
      <Icon name="user" size={size} color={color} />
      ),
      headerShown: false }}/>
    </Tab.Navigator>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName='Main home'>
      <Stack.Screen name="Main home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Licence Application" component={DriverLicenseForm}/>
      <Stack.Screen name="Learners Licence Application" component={LearnersLicenseForm}/>
      <Stack.Screen name="License Disk Application" component={VehicleLicenseApplicationForm}/>
      <Stack.Screen name='Upload Driving Licence Documents' component={LicenceId}/>
      <Stack.Screen name='Upload Documents For Learners' component={LicenceId2}/>
      <Stack.Screen name='Upload Documents For Licence Disc' component={LicenceId3}/>
      <Stack.Screen name="pay1" component={Pay1} options={{headerShown: false}}/>
      <Stack.Screen name="pay2" component={Pay2} options={{headerShown: false}}/>
      <Stack.Screen name="pay3" component={pay3} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}


function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile Page" component={Profile} />
      <Drawer.Screen name="Sign Out" component={SignOutScreen} />
      <Drawer.Screen name="Delete Account" component={DeleteAccountScreen} />
    </Drawer.Navigator>
  );
}


export default BottomTabNavigator;