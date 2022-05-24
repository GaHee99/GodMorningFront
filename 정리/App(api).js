import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function App() {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null)
        setUsers(null)
        // loading 상태를 true 로 바꿉니다.
        setLoading(true)
        const response = await axios.get(
          'http://3.38.227.105:8080/scrap/list?userId=109184494405102219759',
        )
        setUsers(response.data) // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])

  if (loading) return <Text>로딩중..</Text>
  if (error) return <Text>에러가 발생했습니다</Text>
  if (!users) return null
  return (
    <View style={styles.container}>
      {users.map((user) => (
        <Text key={user.question_id}>{user.answer}</Text>
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
