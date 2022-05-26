import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function ApiExercise() {
  const [todos, setTodo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null)
        setTodo(null)
        // loading 상태를 true 로 바꿉니다.
        setLoading(true)
        const response = await axios.get(
          'http://3.38.14.254/todo/list?id=1&create_date=20220523',
        )
        setTodo(response.data) // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e)
        console.log(e)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])

  if (loading) return <Text>로딩중..</Text>
  if (error) return <Text>에러가 발생했습니다</Text>
  if (!todos) return null

  console.log(todos['todo_list'])
  return (
    <View style={styles.container}>
      {todos['todo_list'].map((todo) => (
        <Text>{todo.content}</Text>
      ))}
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
