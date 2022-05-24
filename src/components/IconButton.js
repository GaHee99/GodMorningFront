import { images } from '../../images'
import { useState } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Button,
} from 'react-native'

const IconButton = ({ type, onPressOut, id }) => {
  const _onPressOut = () => {
    onPressOut(id)
  }

  return (
    <TouchableOpacity style={styles.iconbutton} onPressOut={_onPressOut}>
      <Image source={type} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
  },
})

export default IconButton
