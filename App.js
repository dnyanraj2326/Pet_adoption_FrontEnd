import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from './src/constant/Colors'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'
import Toast from 'react-native-toast-message';


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content"/>
      <NavigationContainer>
          <AppNavigation />
      </NavigationContainer>
      <Toast />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})