import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'

export default function Todo({ todo }) {
  const navigation = useNavigation()
  const Title = todo.title
  const Timezone = todo.timezone
  const Todo_list = todo.todo_list
  const id = todo.id
  console.log(todo.id)
  const goTodoPage = () => {
    navigation.navigate('Details', { id })
  }

  {
    /*
     todo_list: [
      {
        post_no: "1",
        content: "명상",
        check_do: 0,
      },
    */
  }

  return (
    <Pressable style={styles.container} onPress={goTodoPage}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
        }}
      />
      <Text style={{ fontSize: 15, fontWeight: '600' }}>{Title}</Text>

      {/*todos 띄우기 
      {Todo_list.map((id) => (
        <Text style={{ fontSize: 30 }}>{id['content']}</Text>
      ))}
      */}
      {/*하나띄우기 
    <Text style={{ fontSize: 30 }}>{Todo_list[0]['content']}</Text>
     */}
    </Pressable>
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
