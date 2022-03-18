import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screen/homepage";
import IssScreen from "./screen/iss";
import MeteorsScreen from "./screen/meteor";

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomeScreen" screenOptions={{headerShown : false }}> 
        <Stack.Screen name = "HomeScreen" component = {HomeScreen}  />
        <Stack.Screen name = "Meteor Screen" component = {MeteorsScreen}  />
        <Stack.Screen name = "ISS Screen" component = {IssScreen}  />  
      </Stack.Navigator>
    </NavigationContainer>
  );
 }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
