import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';

import {Signup} from './src/screens';
import { Tabs } from './src/navigation/Tabs';
// import {LogBox} from "react-native";

// LogBox.ignoreLogs([
// "exported from 'deprecated-react-native-prop-types'.",
// ])



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions= {{
          headerShown: false
        }}
      >
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Screen name='Home' component ={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
