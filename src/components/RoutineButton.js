import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { BottomTabBar } from '@react-navigation/bottom-tabs'

const RoutineButton = ({ routine }) => {
  const navigation = useNavigation()
  const Title = routine.title
  const Timezone1 = routine.timezone1
  const Timezone2 = routine.timezone2
  const Todo_list = routine.Todo_list

  //여기 구림
  const calculate = (Timezone1, Timezone2) => {
    const hour1 = Timezone1[0]
    const minute1 = Number(Timezone1[2] + Timezone1[3])
    const hour2 = Timezone2[0]
    const minute2 = Number(Timezone2[2] + Timezone2[3])
    console.log(Timezone1, Timezone2)
    if (hour1 - hour2 === 0) {
      const executiontime = minute2 - minute1
      console.log(executiontime)
      return `${executiontime}`
    } else if (hour2 - hour1 > 0) {
      let executiontime
      if (minute1 - minute2 == 0) {
        executiontime = 60
      } else {
        executiontime = minute1 - minute2
      }
      return `${executiontime}`
    }
  }

  const id = routine.id
  const goTodoPage = () => {
    navigation.navigate('Others', { id })
  }
  return (
    <Pressable style={styles.container} onPress={goTodoPage}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          'rgba(184, 181, 255, 0.97) ',
          'rgba(210, 171, 217, 0.85) ',
          'rgba(248, 204, 187, 0.94) ',
          'rgba(255, 249, 179, 0.82) ',
        ]}
        style={styles.button}
      >
        <View
          style={{
            height: 110,
            width: 140,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
          }}
        >
          <Text style={styles.innertext}>
            {calculate(Timezone1, Timezone2) + '분'}
          </Text>
        </View>
      </LinearGradient>
      <View>
        <Text style={styles.routineName}>{Title}</Text>

        <Text style={styles.routineName}> 100</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {},

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
    borderRadius: 20,
    width: 160,
    height: 130,
  },
  innertext: {
    fontSize: 30,
    color: 'black',
  },
  routineName: {
    left: 35,
    fontSize: 16,
    fontWeight: '500',
    bottom: 15,
  },
})
export default RoutineButton
