import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Postexample() {
  const data = {
    id: 15,
    title: 'gahee',
    create_date: '20220531',
    startTime: '10',
    endTime: '11',
    todo_list: null,
  }

  const postExample = () => {
    axios({
      method: 'POST',
      url: 'http://3.38.14.254/routine/create',
      data: {
        id: 1,
        title: 'monday',
        create_date: '20220531',
        startTime: '10',
        endTime: '11',
        todo_list: null,
      },
      validateStatus: (status) => {
        return true //  나는  항상  진실로 돌아오고 있습니다.  당신 은 할 수 있습니다       받은 상태 에 따라  } , } ) . _  _ 잡기 ( 오류 => {
      },
    })
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
      .catch((error) => {
        console.log('Api call error')
        alert(error.message)
      })
  }

  {
    /*const postExample = () => {
    axios
      .post('http://3.38.14.254/routine/create', {
        id: 15,
        title: 'gahee',
        create_date: '20220531',
        startTime: '10',
        endTime: '11',
        todo_list: null,
      })
      .then(function (response) {
        console.log('response', response)
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(
            'The request was made and the server responded with a status code',
          )
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('엘스이프 1 ')
          console.log(error.request)
        } else {
          console.log('마지막 엘스')
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }
*/
  }

  return (
    <View style={styles.container}>
      <Button title="Click to make a Post request" onPress={postExample} />
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
