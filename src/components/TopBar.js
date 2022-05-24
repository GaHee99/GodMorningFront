import React from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'

const TopBar = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={{ height: 20, width: 20 }}
          source={require('../../assets/MorningLogo.png')}
        />
        <Text
          style={{
            left: 8,
            color: 'black',
            fontWeight: '600',
            fontSize: 20,
          }}
        >
          GOD[T] Morning
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: '#C4C4C4',
          borderBottomWidth: 1,
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    left: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    justifyContent: 'flex-start',
    fontWeight: '600',
  },
})

export default TopBar
