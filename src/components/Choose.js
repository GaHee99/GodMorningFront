import { images } from '../../images'
import { useState, useEffect } from 'react'
import { StyleSheet, Pressable, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Choose = () => {
  const [homeSelected, setHomeSelected] = useState(true)
  const [popularSelected, setPopularSelected] = useState(false)
  const [newSelected, setNewSelected] = useState(false)
  const navigation = useNavigation()
  const HomePressed = () => {
    //setPopularSelected(false)
    //  setNewSelected(false)
    //  setHomeSelected(true)
    navigation.navigate('HomeScreen')
  }

  const PopularPressed = () => {
    // setHomeSelected(false)
    // setNewSelected(false)
    // setPopularSelected(true)
    navigation.navigate('Popular')
  }
  const NewPressed = () => {
    // setHomeSelected(false)
    // setPopularSelected(false)
    // setNewSelected(true)
    navigation.navigate('New')
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={HomePressed}>
        {homeSelected ? (
          <Text
            style={[
              styles.text,
              styles.Home,
              {
                color: 'black',
                marginRight: 30,
                marginLeft: 30,
              },
            ]}
          >
            홈
          </Text>
        ) : (
          <Text
            style={[
              styles.text,
              styles.Home,
              {
                marginRight: 30,
                marginLeft: 30,
                color: 'gray',
              },
            ]}
          >
            홈
          </Text>
        )}
      </Pressable>
      <Pressable onPress={PopularPressed}>
        {popularSelected ? (
          <Text style={[styles.text, { color: 'black' }]}>인기</Text>
        ) : (
          <Text style={[styles.text, { color: 'gray' }]}>인기</Text>
        )}
      </Pressable>
      <Pressable onPress={NewPressed}>
        {newSelected ? (
          <Text style={[styles.text, { color: 'black' }]}>신규</Text>
        ) : (
          <Text style={[styles.text, { color: 'gray' }]}>신규</Text>
        )}
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 80,
  },
  text: {
    fontSize: 25,
    marginRight: 20,
  },
  Home: {},
})

export default Choose
