import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { StatusBar } from 'expo-status-bar'
import Todo from './Todo'
import todos from './assets/data/todos'
import { useNavigation, useRoute } from '@react-navigation/native'

function DetailsScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const TodoId = route.params?.id
  console.log(TodoId)
  const Todo_list = todos[TodoId].todo_list
  console.log(Todo_list)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {Todo_list.map((id) => (
        <Text style={{ fontSize: 30 }}>{id['content']}</Text>
      ))}
      <Text>Details Screen</Text>
    </View>
  )
}
export default DetailsScreen
