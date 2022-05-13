import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function App() {
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
