import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
import ImgDetails from '../components/ImgDetails'
import ContaintDetails from '../components/ContaintDetails'
import { moderateScale } from 'react-native-size-matters'

const DetailsScreen = ({route}) => {
    const {petUrl, petName, petAge, gender, distance} = route.params;
  return (
    <View style={styles.container}>
      <View>
        <ImgDetails petUrl={petUrl}/>
      </View>
      <View style={styles.containt}>
        <ContaintDetails petName={petName} petAge={petAge} gender={gender} distance={distance}/>
      </View>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg
    },
    containt:{
        position:'absolute',
        width:"100%",
        height:'100%',
        marginTop:320,
        zIndex:2,
        // borderRadius:20
        // paddingHorizontal:moderateScale(15)
    }
})