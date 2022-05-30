import React, { useState } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import IconButton from './IconButton'
import { images } from '../../images'
import { LinearGradient } from 'expo-linear-gradient'
import Input from './Input'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
IconButton.defaultProps = {
  onPressOut: () => {},
}
const Task = ({ item, deleteTask, toggleTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(item.text)
  const [isReady, setIsReady] = useState(false)

  {
    /*const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundB: require('../../assets/fonts/NanumSquareRoundB.ttf'),
      Cafe24Ohsquareair: require('../../assets/fonts/Cafe24Ohsquareair.ttf'),
    })
  }
  */
  }
  const _handleUpdateButtonPress = () => {
    setIsEditing(true)
  }
  const _onSubmitEditing = () => {
    if (isEditing) {
      const editedTask = Object.assign({}, item, { text })
      setIsEditing(false)
      updateTask(editedTask)
    }
  }
  //  return isEditing ? ( 와 여기 오류있을것같음 if else 구문 들로 해야할것같음.. 글씨체 적용..
  return isEditing ? (
    <Input
      value={text}
      onChangeText={(text) => setText(text)}
      onSubmitEditing={_onSubmitEditing}
    />
  ) : (
    <View style={styles.container}>
      <IconButton
        type={item.completed ? images.completed : images.uncompleted}
        id={item.id}
        onPressOut={toggleTask}
      />
      <Text style={item.completed ? styles.completed : styles.text}>
        {item.text}
      </Text>
      {item.completed || (
        <IconButton type={images.edit} onPressOut={_handleUpdateButtonPress} />
      )}
      <IconButton type={images.delete} id={item.id} onPressOut={deleteTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: 'rgba(210, 171, 217, 0.85) ',
    borderRadius: 20,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 40,
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 17,
    flex: 1,
    color: 'black',
    fontFamily: 'NanumSquareRoundB',
  },
  completed: {
    fontSize: 20,
    flex: 1,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
})

export default Task
