import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-web'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import HomeScreen from './src/screens/HomeScreen'
export default function ApiScreen() {
  useEffect(() => {}, [])
  const navigation = useNavigation()
  const login = navigation.navigate('HomeScreen')
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
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {1 == 2 ? (
          console.log('false')
        ) : (
          <>
            <Text>gahee</Text>
            <Text>gayeon</Text>
          </>
        )}
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
