import { StyleSheet, Text, View,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import {moderateScale,scale} from 'react-native-size-matters'

const item =[
  {
    id:1,
    url:'../assets/images/petsCard1.png'
  },
  {
    id:2,
    url:'../assets/images/petsCard2.png'
  },
  {
    id:3,
    url:'../assets/images/petsCard3.png'
  },
  {
    id:4,
    url:'../assets/images/petsCard1.png'
  },
  {
    id:5,
    url:'../assets/images/petsCard2.png'
  },
]

const PetsSliderCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.petsCard}>
      <TouchableOpacity activeOpacity={0.5} style={styles.btnNotification}>
       <Image
            source={require('../assets/images/petsCard1.png')}
            style={styles.slideCardImg}
          />
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default PetsSliderCard

const styles = StyleSheet.create({
    
    slideCardImg:{
        width:'100%',
        height:170,
        borderRadius:20,
        
    },
    container:{
        marginTop:moderateScale(30) 
    },
    
    
})