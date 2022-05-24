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
      <View style={styles.column1}>
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
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.text}>30분</Text>
          </View>
        </LinearGradient>
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
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.text}>30분</Text>
          </View>
        </LinearGradient>
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
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.text}>30분</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.column2}>
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
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.text}>30분</Text>
          </View>
        </LinearGradient>
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
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.text}>30분</Text>
          </View>
        </LinearGradient>
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
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.text}>30분</Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,

    borderRadius: 8,
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
})
