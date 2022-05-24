import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Todo from '../Todo'
import todos from '../assets/data/todos'
import { useNavigation } from '@react-navigation/native'

export default function App() {
  // const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: '600', left: 30 }}>
        HomePage
      </Text>

      <View style={styles.todo}>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
        {/*   <Pin
        pin={{
          title: 'title',
          image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
        }}
      />
      */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    borderWidth: 1,
  },
  todo: {
    padding: 5,
  },
})
