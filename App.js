import React from 'react';
import {NavigationContainer} 
  from '@react-navigation/native'
import StackNavigator 
  from './src/navigations/Navigator';
import { Provider } from 'react-redux';
import { Store } from './Redux/store';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  )
}
export default App;