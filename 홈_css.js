import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
export default function ApiScreen() {
  useEffect(() => {}, [])
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          'rgba(184, 181, 255, 0.97) ',
          'rgba(210, 171, 217, 0.85) ',
          'rgba(248, 204, 187, 0.94) ',
          'rgba(255, 249, 179, 0.82) ',
        ]}
        style={styles.button}
      >
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 100,
    borderRadius: 30,
  },
})
