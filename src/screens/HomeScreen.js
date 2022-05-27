//import * as React from 'react'
import { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  ScrollView,
} from 'react-native'
import todos from '../../assets/data/todos'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import RoutineButton from '../components/RoutineButton'
import TopBar from '../components/TopBar'

import Choose from '../components/Choose'
import Hours from '../components/Hours'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
function HomeScreen() {
  const navigation = useNavigation()
  const [isReady, setIsReady] = useState(false)

  const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundB: require('../../assets/fonts/NanumSquareRoundB.ttf'),
      Cafe24Ohsquareair: require('../../assets/fonts/Cafe24Ohsquareair.ttf'),
    })
  }

  return isReady ? (
    <View style={styles.container}>
      <TopBar />
      <Choose />
      <Hours />
      <View
        style={{
          marginTop: 16,
          borderBottomColor: '#C4C4C4',
          borderBottomWidth: 1,
        }}
      />
      <ScrollView contentContainerStyle={styles.routine}>
        <View style={styles.column1}>
          {todos.map((routine) => (
            <RoutineButton routine={routine} />
          ))}
        </View>
        <View style={styles.column2}>
          {todos.map((routine) => (
            <RoutineButton routine={routine} />
          ))}
        </View>
      </ScrollView>
    </View>
  ) : (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setIsReady(true)}
      onError={() => {}}
    />
  )
}

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    fontFamily: 'NanumSquareRoundB',
  },
  container: {
    paddingTop: 40,
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    fontFamily: 'NanumSquareRoundB',
  },
  routine: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  column1: { left: 18 },
  column2: { right: 18 },
})
export default HomeScreen
