import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import Colors from '../constant/Colors'
import PetsCard from '../components/PetsCard'

const CowScreen = () => {
  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.petsSection}>
        <PetsCard />
    </View>
      </ScrollView>
  </View>
  )
}

export default CowScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg
    },
    petsSection:{
        marginHorizontal:moderateScale(15)
    }
})