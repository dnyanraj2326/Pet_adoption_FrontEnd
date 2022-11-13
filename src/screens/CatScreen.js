import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
import { moderateScale } from 'react-native-size-matters'
import PetsCard from '../components/PetsCard'

const CatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.petsSection}>
        <PetsCard />
    </View>
    </View>
  )
}

export default CatScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg
    },
    petsSection:{
        marginHorizontal:moderateScale(15)
    }
})