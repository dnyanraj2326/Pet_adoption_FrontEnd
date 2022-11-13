import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import Colors from '../constant/Colors'
import { useNavigation } from '@react-navigation/native';


const NewPets = [
    {
      id: 1,
      petName: "Tommy",
      age: "2 years old",
      distance: "2.5",
      gender: "Male",
      petUrl:
        "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      petName: "Chagu",
      age: "1.2 years old",
      distance: "2.2",
      gender: "Female",
      petUrl:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      petName: "Moti",
      age: "1 years old",
      distance: "2",
      gender: "Male",
      petUrl:
        "https://images.unsplash.com/photo-1629740067905-bd3f515aa739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  
    {
      id: 4,
      petName: "Moni",
      age: "2.5 years old",
      distance: "3",
      gender: "Female",
      petUrl:
        "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80",
    },
    {
      id: 5,
      petName: "Sunny",
      age: "2.2 years old",
      distance: "3.4",
      gender: "Female",
      petUrl:
        "https://images.unsplash.com/photo-1593768697824-f31b967e6c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      petName: "Rubbi",
      age: "1 years old",
      distance: "1",
      gender: "Female",
      petUrl:
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
const HomeCard = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
       
      {
        NewPets?.map((item,ind) => (
            <TouchableOpacity key={ind} activeOpacity={0.8} style={styles.cardSection}>
        <View style={styles.imgContainer}>
        <Image source={{uri:item.petUrl}} style={styles.petsImg} />
        </View>
        <View style={styles.textContainer}>
            <View style={styles.nameWithGender}>
                <Text style={styles.petName}>{item.petName}</Text>
                <Image source={item.gender == "Male" ? require("../assets/icon/maleIcon.png"): require("../assets/icon/femaleIcon.png")} style={styles.genderIcon} />
            </View>
            <View>
                <Text style={styles.petsAge}>{item.age}</Text>
            </View>
            <View style={styles.locationSection}>
                <View style={styles.leftLocationSection}>
                <Image source={require("../assets/icon/locatinIcon.png")} style={styles.locationIcon} />
                <Text style={styles.locationName}>Distance: </Text>
                </View>
                <View>
                <Text style={styles.locationValue}>{item.distance} km</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
        ))
      }
       
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({
    petsImg:{
        width:120,
        height:170,
        borderRadius:10
    },
    container:{
       
        flexDirection:'row'
    },
    cardSection:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:moderateScale(30),
    },
    textContainer:{
        // flexDirection:'row'
        backgroundColor:Colors.white,
        paddingHorizontal:moderateScale(15),
        elevation:2,
        shadowColor:Colors.para,
        borderTopRightRadius:10,
        borderBottomEndRadius:10

    },
    nameWithGender:{
        flexDirection:'row',
        alignItems:"center",
        paddingTop:moderateScale(10),
        paddingBottom:moderateScale(5),
        justifyContent:'space-between'
    },
    locationSection:{
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:moderateScale(10),
        paddingTop:moderateScale(5)
    },
    leftLocationSection:{
        flexDirection:'row',
        alignItems:'center',
        
    },
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
    petName:{
        fontSize:scale(20),
        fontFamily:'Poppins-Bold',
        color:Colors.primary
    },
    locationName:{
        fontSize:scale(13),
        fontFamily:'Poppins-SemiBold',
        color:Colors.black
    },
    petsAge:{
        fontSize:scale(13),
        fontFamily:'Poppins-SemiBold',
        color:Colors.para
    },
    locationValue:{
        fontSize:scale(13),
        fontFamily:'Poppins-SemiBold',
        color:Colors.primary,
        alignItems:'center'
    }
})