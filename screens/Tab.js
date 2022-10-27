import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Flex from './Flex';
import Todo from './Todo';
import Cart from './Cart';
import { Entypo } from '@expo/vector-icons'; 

const Tab = () => {
    const Tab=createBottomTabNavigator();
  return (
   <Tab.Navigator
   screenOptions={{tabBarActiveTintColor:"orange",
tabBarInactiveTintColor:"grey",
}}
   >
    <Tab.Screen name='Home' component={Flex} options={{
      tabBarIcon: ({ color, size }) => (
        <Entypo name="shop" size={24} color="gray" />
      )}} ></Tab.Screen>
    <Tab.Screen name='Todo' component={Todo} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Entypo name="add-to-list" size={24} color="grey" />
      )}}></Tab.Screen>
    <Tab.Screen name='Cart' component={Cart} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Entypo name="shopping-cart" size={24} color="grey" />
      )}}/>
   </Tab.Navigator>
  )
}

export default Tab

const styles = StyleSheet.create({})