import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'

import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import TimePick from '../components/TimePick'
import todos from '../../assets/data/todos'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import axios from 'axios'
function OtherRoutineScreen_axios() {
  const navigation = useNavigation()
  const route = useRoute()
  const TodoId = route.params?.id
  //  console.log(TodoId)

  // const Todo_list = todos[TodoId].todo_list
  const [todos, setTodo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hoursRange, setHoursRange] = useState({
    1: { id: '1', text: '' },
    2: { id: '2', text: '' },
  })

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
        setTodo(response.data)
        // 데이터는 response.data 안에 들어있습니다.
        const currentTime = Object.assign({}, hoursRange)
        currentTime[1]['text'] = todos['startTime']
        currentTime[2]['text'] = todos['endTime']
        setHoursRange(currentTime)
      } catch (e) {
        setError(e)
        console.log(e)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])

  //go back ㅇ로
  const goBack = () => {
    navigation.goBack()
  }
  if (loading) return <Text>로딩중..</Text>
  if (error) return <Text>에러가 발생했습니다</Text>
  if (!todos) return null

  return (
    <LinearGradient
      colors={[
        'rgba(184, 181, 255, 0.97) ',
        'rgba(210, 171, 217, 0.85) ',
        'rgba(248, 204, 187, 0.94) ',
        'rgba(255, 249, 179, 0.82) ',
      ]}
      style={{
        width: '100%',
        height: '100%',
        paddingTop: 70,
        alignItems: 'center',
      }}
    >
      <View style={styles.topbar}>
        <FontAwesome onPress={() => goBack()} name="angle-left" size={40} />
        <Text style={{ fontSize: 35, fontWeight: '400' }}>
          {todos['title']}
        </Text>
        <FontAwesome name="bookmark" size={30} />
      </View>
      <View
        style={[
          styles.userInfo,
          {
            paddingHorizontal: 40,
            paddingVertical: 15,
            width: '100%',
          },
        ]}
      >
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome name="user" size={30} />
          <Text
            style={{
              marginLeft: 13,
              fontSize: 30,
              fontWeight: '400',
              marginBottom: 15,
            }}
          >
            게시자
          </Text>
        </View>
        <View style={[styles.timePick]}>
          {Object.values(hoursRange).map((item) => (
            <TimePick key={item.id} item={item} />
          ))}
          <FontAwesome
            style={{ left: 180 }}
            name="heart"
            size={30}
            color="rgb(255, 127, 127)"
          />
        </View>
      </View>
      <ScrollView>
        {todos['todo_list'].map((todo) => (
          <View style={styles.todocontainer}>
            <Text style={{ fontSize: 17 }}>{todo.content}</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  )
  {
    /*데이터 받아오는거
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     {Todo_list.map((id) => (
        <Text style={{ fontSize: 30 }}>{id['content']}</Text>
      ))}
      <Text>Details Screen</Text>
    </View>
  
  */
  }
}
const styles = StyleSheet.create({
  todo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timePick: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  topbar: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  userInfo: {},
  todocontainer: {
    margin: 5,
    height: 45,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: 'rgba(210, 171, 217, 0.85) ',
    borderRadius: 20,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 50,
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
export default OtherRoutineScreen_axios
