import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const StartPage = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='grey' />
    </View>
  )
}

export default StartPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
})