import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator}from 'react-navigation-tabs'



import {createAppContainer, createSwitchNavigator} from 'react-navigation'
export default class App extends React.Component {
render(){
  return (
    <View style={styles.container}>
      
   <AppContainer />
    </View>
  );
}
}


const BottomTab=createBottomTabNavigator({
  e:{screen:e},
a:{screen:a}
})

const AppContainer=createAppContainer(BottomTab)


