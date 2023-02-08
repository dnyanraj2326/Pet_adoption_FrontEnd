import { StyleSheet, Text, View,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import {moderateScale,scale} from 'react-native-size-matters'
import Swiper from 'react-native-swiper'
import Colors from '../constant/Colors'


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

const PetsSliderCard = () => {
  return (
    // <View style={styles.container}>
      <Swiper autoplay={true}  autoplayTimeout = {3.5} 
      dot = {<View style={{backgroundColor:Colors.para, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
      activeDot = {<View style={{backgroundColor:Colors.primary, width: 20, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
      <TouchableOpacity activeOpacity={0.9} style={styles.btnNotification}>
       <Image
            source={require('../assets/images/petsCard1.png')}
            style={styles.slideCardImg}
          />
       </TouchableOpacity>
       <TouchableOpacity activeOpacity={0.9} style={styles.btnNotification}>
       <Image
            source={require('../assets/images/petsCard2.png')}
            style={styles.slideCardImg}
          />
       </TouchableOpacity>
       <TouchableOpacity activeOpacity={0.9} style={styles.btnNotification}>
       <Image
            source={require('../assets/images/petsCard3.png')}
            style={styles.slideCardImg}
          />
       </TouchableOpacity>
       <TouchableOpacity activeOpacity={0.9} style={styles.btnNotification}>
       <Image
            source={require('../assets/images/petsCard2.png')}
            style={styles.slideCardImg}
          />
       </TouchableOpacity>
       </Swiper>
    // </View>
  )
}

export default PetsSliderCard

const styles = StyleSheet.create({
    
    slideCardImg:{
        width:'95%',
        height:170,
        borderRadius:20,
        alignSelf:'center',        
    },
    container:{
        marginTop:moderateScale(20),
        // flex:1
    },
//     petsCard:{
// flex:1
//     },
    btnNotification:{
      // flex:1
    }
    
    
})