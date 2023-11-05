import React from 'react';
import {createStackNavigator} 
    from '@react-navigation/stack';
import OnboardingScreen1 from '../../screens/Onboarding1';
import OnboardingScreen2 from '../../screens/Onboarding2';
import OnboardingScreen3 from '../../screens/Onboarding3';
import LoginScreen from '../../screens/LoginScreen';
import SignupScreen from '../../screens/SignupScreen';
import BottomTabNavigator from './bottomNavigation';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const StackNavigator = () => {
    return(
    <Stack.Navigator initialRouteName='Screen1'>
        <Stack.Screen name="Screen1" component={OnboardingScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Screen2" component={OnboardingScreen2} options={{ headerShown: false }}/>
        <Stack.Screen name="Screen3" component={OnboardingScreen3} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={BottomTabNavigator}options={{headerShown: false}} />
      </Stack.Navigator>
    )
}

export default StackNavigator;