import { images } from '../../images'
import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Hours = () => {
  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal={true}>
      <Pressable
        style={[styles.button, { marginLeft: 20 }, styles.selectedButton]}
      >
        <Text style={[styles.text, { color: 'white' }]}>4시</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>5시</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>6시</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>7시</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>8시</Text>
      </Pressable>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,

    paddingBottom: 2,
    height: 45,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 35,
    //  backgroundColor: 'rgba(255, 249, 179, 0.82) 96.29%)',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  selectedButton: {
    //   backgroundColor: 'rgba(255, 249, 179, 0.82) 96.29%)',
    backgroundColor: '#C4C4C4',
  },
  text: {
    fontSize: 20,
    color: 'gray',
  },
})

export default Hours
