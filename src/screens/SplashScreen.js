import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation,StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
const navigation = useNavigation();

  useEffect(() => {
      
    setTimeout(async() => {
      const token = await AsyncStorage.getItem("token");
      console.log("Token",token)
      if(token==undefined){
       navigation.replace("Login")
      }else{
        navigation.replace("BottomNav")
      }
    }, 2000);
  
  }, [])

  
  
  return (
    <View style={{flex:1}}>
      <Image source={require("../assets/images/cat1.png")} style={{width:"100%", height:"100%"}} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})