import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'

export default function Todo({ todo }) {
  const Title = todo.title
  const Timezone = todo.timezone
  const Todo_list = todo.todo_list
  //const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, fontWeight: '600' }}>{Title}</Text>

      {/*todos 띄우기 
      {Todo_list.map((id) => (
        <Text style={{ fontSize: 30 }}>{id['content']}</Text>
      ))}
      */}
      {/*하나띄우기 
    <Text style={{ fontSize: 30 }}>{Todo_list[0]['content']}</Text>
     */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 150,
    margin: 10,
  },
  image: {
    width: '70%',
    height: '70%',
    borderRadius: 25,
  },
})
