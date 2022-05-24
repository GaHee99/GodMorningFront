import { images } from '../../images'
import { useState, useEffect } from 'react'
import { StyleSheet, Pressable, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Choose1 = () => {
  const [choose, setChoose] = useState({
    1: { id: '1', text: '홈' },
    2: { id: '2', text: '바보' },
    3: { id: '3', text: '신규' },
  })
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {Object.values(choose).map((item) => (
        <Pressable>
          <Text style={styles.text}>{item.text}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 80,
    left: 20,
  },
  text: {
    fontSize: 25,
    marginRight: 20,
  },
  Home: {},
})

export default Choose1
