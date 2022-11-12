import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors';
import {moderateScale} from 'react-native-size-matters'
import HomeHeader from '../components/HomeHeader';
import PetsSliderCard from '../components/PetsSliderCard';
import Categories from '../components/Categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeSection}>
      <HomeHeader />
      <PetsSliderCard />
      <Categories />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F9F9"
  },
  homeSection:{
    marginHorizontal:moderateScale(15),
    marginVertical:moderateScale(15)
  }
})