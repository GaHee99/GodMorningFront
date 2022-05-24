import { images } from '../../images'
import { useState, useEffect } from 'react'
import { StyleSheet, Pressable, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Choose1 = () => {
  const [choose, setChoose] = useState({
    1: { id: '1', text: '홈1' },
    2: { id: '2', text: '인기1' },
    3: { id: '3', text: '신규1' },
  })
  const navigation = useNavigation()
  const onpress = () => {
    console.log('pressed')
    console.log(key)
  }
  return (
    <View style={styles.container}>
      {Object.values(choose).map((item) => {
        const textStyles = [styles.text]
        const touchableStyles = [styles.touchableDay]
        return (
          <Pressable key={item.id} onPress={onpress(key)}>
            <Text style={styles.text}>{item.text}</Text>
          </Pressable>
        )
      })}
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
