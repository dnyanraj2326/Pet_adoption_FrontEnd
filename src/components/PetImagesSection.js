import { StyleSheet, Text, View,Image,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PetImagesSection = ({petUrl}) => {
    const {width,height} = Dimensions.get('screen')
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("PetImgGallery",{
        petUrl:petUrl,
      })}>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <Image
              source={{uri: petUrl[0]}}
              style={{width: 250, height:100,resizeMode:'cover',borderRadius:20}}
            />
            <Image
              source={{uri: petUrl[1]}}
              style={{width:100, height:100,resizeMode:'cover',borderRadius:20}}
            />
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:10}}>
            <Image
              source={{uri: petUrl[3]}}
              style={{width: 100, height:170,resizeMode:'cover',borderRadius:20}}
            />
            <View style={{flexDirection:'column',justifyContent:'space-between'}}>
            <Image
              source={{uri: petUrl[8]}}
              style={{width:250, height:80,resizeMode:'cover',borderRadius:20}}
            />
            <Image
              source={{uri: petUrl[9]}}
              style={{width:250, height:80,resizeMode:'cover',borderRadius:20}}
            />
            </View>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PetImagesSection

const styles = StyleSheet.create({
    container:{
    },
    card:{
        // flex:1,
        height:300,
        width:'100%',
        // backgroundColor:'red',
        justifyContent:'center'
    }
})