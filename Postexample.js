import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

useEffect(() => {}, [])
export default function Postexample() {
  axios
    .post('http://3.38.14.254/routine/create', {
      firstName: 'Fred',
      lastName: 'Flintstone',
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })

  return (
    <View style={styles.container}>
      <Button title="Click to make a Post request" onPress={postExample} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
