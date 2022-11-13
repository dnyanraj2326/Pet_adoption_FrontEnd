import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
import PetsCard from '../components/PetsCard'
import { moderateScale } from 'react-native-size-matters'

const DogScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.petsSection}> 
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    <PetsCard />
    </View>
    </ScrollView>
    </View>
  )
}

export default DogScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg
    },
    petsSection:{
        paddingHorizontal:moderateScale(15),
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
})