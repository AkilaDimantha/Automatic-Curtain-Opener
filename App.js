import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import WelcomScreen from './app/screens/WelcomScreen';
import WindowAdder from './app/screens/WindowAdder';
import Calibration from './app/screens/Calibration';
import WindowsList from './app/screens/WindowsList';
import Window from  './app/components/Window';
import WindowEditer from './app/screens/WindowEditer';
import SignInScreen from './app/screens/SignInScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style = {styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'SignInScreen'>
          <Stack.Screen options = {{headerShown: false}} name = 'SignInScreen' component={SignInScreen}/>
          <Stack.Screen options = {{headerShown: false}} name = 'Home' component={WelcomScreen}/>
          <Stack.Screen options = {{headerShown: false}} name = 'WindowAdder' component={WindowAdder}/>
          <Stack.Screen options = {{headerShown: false}} name = 'Calibration' component={Calibration}/>
          <Stack.Screen options = {{headerShown: false}} name = 'WindowsList' component={WindowsList}/>
          <Stack.Screen options = {{headerShown: false}} name = 'WindowEditer' component={WindowEditer}/>
          <Stack.Screen options = {{headerShown: false}} name = 'Window' component={Window}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>

    
    

    
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
})
