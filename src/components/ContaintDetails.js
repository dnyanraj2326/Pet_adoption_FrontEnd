import { StyleSheet, Text, View,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
import { moderateScale, scale } from 'react-native-size-matters'

const ContaintDetails = ({distance,petAge,petName,gender}) => {
  return (
    <View style={styles.containtDetails}>
     <View style={styles.infoPets}>
       <View style={styles.nameWithIcon}>
       <Text style={styles.petsName}>{petName}</Text>
        <TouchableOpacity style={styles.heartSection}>
          <Image
            source={require('../assets/icon/FillHeart.png')}
            style={styles.heartIcon}
          />
        </TouchableOpacity>
        </View>
        <View style={styles.addressWithIcon}>
        <Image
            source={require('../assets/icon/locatinIcon.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.addressStyle}>477 Washingtone Ave ({distance}km)</Text>
        </View>
     </View>
     <View style={styles.box}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.singleBox}>
            <Text style={styles.sex}>Sex</Text>
            <Text style={styles.genderTextSty}>{gender}</Text>
        </View>
        <View style={styles.singleBox}>
            <Text style={styles.sex}>Age</Text>
            <Text style={styles.genderTextSty}>{petAge}</Text>
        </View>
        <View style={styles.singleBox}>
            <Text style={styles.sex}>Breed</Text>
            <Text style={styles.genderTextSty}>Persian</Text>
        </View>
        </ScrollView>
     </View>
     <View style={styles.ownerSection}>
        <View style={styles.imgWithNames}>
        <Image
            source={require('../assets/images/profile.jpg')}
            style={styles.ownerImg}
          />
          <View style={styles.ownerInfo}>
            <Text style={styles.ownerNameText}>Omkar Kale</Text>
            <Text style={styles.ownerNgoText}>Pets Ego Owner</Text>
        </View>
        </View>
        <View style={styles.comunication}>
        <TouchableOpacity style={styles.phoneSection}>
        <Image
            source={require('../assets/icon/Phone.png')}
            style={styles.phoneIcon}
          />
        </TouchableOpacity>
          <TouchableOpacity style={styles.msgSection}>
          <Image
            source={require('../assets/icon/whatappIcon.png')}
            style={styles.msgIcon}
          />
          </TouchableOpacity>
        </View>
     </View>
    </View>
  )
}

export default ContaintDetails

const styles = StyleSheet.create({
    heartIcon:{
        width:22,
        height:22,
        tintColor:"red",
    },
    locationIcon:{
        width:22,
        height:22,
    },
    infoPets:{
        marginTop:moderateScale(10)
    },
    containtDetails:{
        backgroundColor:Colors.white,
        height:'100%',
        paddingHorizontal:moderateScale(15),
        borderRadius:30

    },
    petsName:{
        fontSize:scale(22),
        fontFamily:"Poppins-Bold",
        color:Colors.black
    },
    nameWithIcon:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    addressWithIcon:{
        flexDirection:"row",
        alignItems:'center'
    },
    addressStyle:{
        marginLeft:moderateScale(10),
        fontSize:scale(15),
        fontFamily:"Poppins-SemiBold",
        color:Colors.para
    },
    singleBox:{
        paddingVertical:moderateScale(15),
        paddingHorizontal:moderateScale(20),
        backgroundColor:"#EFF5F5",
        alignItems:'center',
        borderRadius:15,
        marginRight:moderateScale(15),
    },
    box:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        marginTop:moderateScale(30)
    },
    sex:{
        fontSize:scale(14),
        fontFamily:"Montserrat-Medium",
        color:Colors.para
    },
    genderTextSty:{
        fontSize:scale(16),
        fontFamily:"Poppins-SemiBold",
        color:Colors.black,
        marginTop:moderateScale(5)
    },
    ownerImg:{
        width:60,
        height:60,
        borderRadius:50
    },
    ownerSection:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:moderateScale(30),
        // marginHorizontal:moderateScale(20)
        padding:moderateScale(15),
        backgroundColor:Colors.gray,
        borderRadius:20,
        elevation:1
    },
    comunication:{
        flexDirection:"row",
        marginLeft:30
    },
    ownerNameText:{
        fontSize:scale(16),
        fontFamily:"Poppins-Bold",
        color:Colors.black,
    },
    ownerNgoText:{
        fontSize:scale(10),
        fontFamily:"Poppins-SemiBold",
        color:Colors.para,
    },
    ownerInfo:{
marginLeft:moderateScale(15)
    },
    phoneIcon:{
        width:25,
        height:25,
        tintColor:'red'
    },
    msgIcon:{
        width:25,
        height:25,
    },
    imgWithNames:{
        flexDirection:'row',
        alignItems:'center'
    },
    phoneSection:{
        padding:moderateScale(10),
        backgroundColor:"#FFBCBC",
        marginRight:moderateScale(10),
        borderRadius:15,
    },
    msgSection:{
        padding:moderateScale(10),
        backgroundColor:"#DEF5E5",
        borderRadius:15,

    }
})