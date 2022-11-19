import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
import { moderateScale } from 'react-native-size-matters'

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSty}>Notification</Text>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    textSty:{
        color:Colors.black,
        fontSize:22,
        fontFamily:'Montserrat-Bold',
        textAlign:'center',
        marginTop:moderateScale(15)
    },
    container:{
    //     flexDirection:'row',
    // justifyContent:'center',
    // alignItems:"center",
    // marginTop:moderateScale(15),
    flex:1,
    backgroundColor:Colors.bg,
    }
})