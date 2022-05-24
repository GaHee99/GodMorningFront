import * as React from 'react'
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
import { Touchable } from 'react-native-web'
import Choose from '../components/Choose'
function NewScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TopBar />
      <Text>NewScreen</Text>
      <Choose />
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
  )
}
const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
  },
  container: {
    paddingTop: 40,
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
  },
  routine: {
    top: -10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  column1: { left: 18 },
  column2: { right: 18 },
})

export default NewScreen
