import * as React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome } from '@expo/vector-icons'

import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MyRoutineScreen from './src/screens/MyRoutineScreen'

import MyRoutineScreen_save_task_toggle from './src/screens/MyRoutineScreen_save_task_toggle'
import MyRoutineScreen_save from './src/screens/MyRoutineScreen_save'
import MyPageScreen from './src/screens/MyPageScreen'
import NewScreen from './src/screens/NewScreen'
import PopularScreen from './src/screens/PopularScreen'

import OtherRoutineScreen from './src/screens/OtherRoutineScreen'
import OtherRoutineScreen_axios from './src/screens/OtherRoutineScreen_axios'
import ApiExercise from './src/screens/ApiExercise'

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      {/*  <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}

function HomeStackNaviator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Others" component={OtherRoutineScreen_axios} />
      <HomeStack.Screen name="Popular" component={PopularScreen} />
      <HomeStack.Screen name="New" component={NewScreen} />
    </HomeStack.Navigator>
  )
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'rgb(178, 171, 171)',
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNaviator}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={30} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="MyRoutine"
        component={MyRoutineScreen_save}
        options={{
          title: 'MyRoutine',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus" size={30} color={color} />
            //  <Image
            //  style={{ width: 25, height: 25 }}
            //   source={require('./assets/MorningLogo.png')}
            //  />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          title: 'MyRoutine',

          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={30} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
})

export default App
