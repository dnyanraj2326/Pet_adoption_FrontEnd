import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import Colors from '../constant/Colors'

const PetsCard = () => {
  return (
    <View style={styles.container}>
     <View style={styles.petsCardSection}>
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.imgSection}>
            <Image source={{uri:"https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}} style={styles.img} />
            </View>
            <View style={styles.textContent}>
                <View style={styles.nameWithGender}>
                    <Text style={styles.petName}>Tommy</Text>
                    <Image source={require("../assets/icon/maleIcon.png")} style={styles.genderIcon} />
                </View>
                <Text style={styles.age}>2 years old</Text>
                <View style={styles.distance}>
                    <Image source={require("../assets/icon/locatinIcon.png")} style={styles.locationIcon} />
                    <Text style={styles.locationName}>Distance :</Text>
                    <Text style={styles.locationValue}> 2.9 km</Text>
                </View>
            </View>
        </TouchableOpacity>
     </View>
     
    </View>
  )
}

export default PetsCard

const styles = StyleSheet.create({
    genderIcon:{
        width:25,
        height:25,
        marginLeft:moderateScale(20),
        tintColor:Colors.primary
    },
    locationIcon:{
        width:20,
        height:20,
        marginRight:moderateScale(5),
        tintColor:Colors.primary
       
    },
    img:{
        width:"100%",
        height:130,
        resizeMode:'cover',
        borderRadius:18
    },
    nameWithGender:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    petsCardSection:{
        // width:130,
        backgroundColor:Colors.white,
        borderRadius:18,
        elevation:3,
        shadowColor:Colors.para
    },
    petName:{
        fontSize:scale(18),
        fontFamily:'Poppins-Bold',
        color:Colors.primary
    },
    age:{
        fontSize:scale(13),
        fontFamily:'Poppins-SemiBold',
        color:Colors.para
    },
    distance:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:moderateScale(10)
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
         marginTop:moderateScale(15)
    },
    textContent:{
        padding:10,
    },
    locationName:{
        fontSize:scale(12),
        fontFamily:'Poppins-SemiBold',
        color:Colors.black
    },
    locationValue:{
        fontSize:scale(12),
        fontFamily:'Poppins-SemiBold',
        color:Colors.primary,
        alignItems:'center'
    }
    
})