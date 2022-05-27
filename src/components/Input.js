import { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, Text, TextInput } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
const Input = ({ value, onChangeText, onSubmitEditing }) => {
  const [tasks, setTasks] = useState({})
  const [isReady, setIsReady] = useState(false)
  const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundB: require('../../assets/fonts/NanumSquareRoundB.ttf'),
      Cafe24Ohsquareair: require('../../assets/fonts/Cafe24Ohsquareair.ttf'),
    })
  }
  return isReady ? (
    <TextInput
      style={styles.input}
      placeholder="To do, 시간"
      maxLength={50}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      placeholderTextColor={'gray'}
    />
  ) : (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setIsReady(true)}
      onError={() => {}}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width - 25,
    fontSize: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 5,
    padding: 8,
    alignItems: 'center',
    fontFamily: 'Cafe24Ohsquareair',
  },
})

export default Input
