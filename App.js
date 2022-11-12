import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from './src/constant/Colors'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content"/>
      <NavigationContainer>
          <AppNavigation />
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})