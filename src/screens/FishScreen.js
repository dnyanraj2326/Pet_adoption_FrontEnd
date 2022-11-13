import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
import { moderateScale } from 'react-native-size-matters'

const FishScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fishSection}>
      <View style={{alignItems:"center", marginTop:"50%"}}>
          <Text style={{fontSize:20, color:"black", fontFamily:"Poppins-Medium"}}>Coming Soon</Text>
        </View>
      </View>
    </View>
  )
}

export default FishScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg
    },
    fishSection:{
        marginHorizontal:moderateScale(15)
    }
})