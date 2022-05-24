import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Alert,
  Image,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-web'
export default function Mypage() {
  useEffect(() => {}, [])
  const navigation = useNavigation()
  const login = () => {
    navigation.navigate('Root')
  }
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
        <Pressable
          onPress={login}
          style={{
            height: 50,
            width: 250,
            borderRadius: 10,

            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'gray', fontSize: 20 }}>Mypage</Text>
        </Pressable>
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
