import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput } from 'react-native'

const Input = ({ value, onChangeText, onSubmitEditing }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="To do, 시간"
      maxLength={50}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      placeholderTextColor={'gray'}
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
  },
})

export default Input
