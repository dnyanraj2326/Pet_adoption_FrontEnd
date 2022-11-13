import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters'
import HomeHeader from '../components/HomeHeader';
import PetsSliderCard from '../components/PetsSliderCard';
import Categories from '../components/Categories';
import HomeCard from '../components/HomeCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeSection}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
      <PetsSliderCard />
      <Categories />
      <View>
        <Text style={styles.subTitle}>Recommended</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HomeCard/>
        <HomeCard/>
        </ScrollView>
      </View>
      <View style={styles.newArrivalCard}>
        <Text style={styles.subTitle}>New Arrival</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HomeCard/>
        </ScrollView>
      </View>
      </ScrollView>
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
    marginVertical:moderateScale(15),
    flex:1
  },
  subTitle:{
    fontSize:scale(20),
        fontFamily:'Montserrat-Bold',
        color:Colors.black,
        marginBottom:moderateScale(20),
        lineHeight:40

  },
  newArrivalCard:{
    marginTop:moderateScale(30)
  }
})