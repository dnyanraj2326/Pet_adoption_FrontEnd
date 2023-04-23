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
      distance: "2.5 Km",
      gender: "Male",
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      ownDetails: {
        ownName: 'Vishal',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl:
        ["https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",]
    },
    {
      id: 2,
      petName: "Chagu",
      age: "1.2 years old",
      distance: "2.2 Km",
      gender: "Female",
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      ownDetails: {
        ownName: 'Vishal',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl:
        ["https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",]
    },
    {
      id: 3,
      petName: "Moti",
      age: "1 years old",
      distance: "2 Km",
      gender: "Male",
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      ownDetails: {
        ownName: 'Vishal',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl:
        ["https://images.unsplash.com/photo-1629740067905-bd3f515aa739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",]
    },
  
    {
      id: 4,
      petName: "Moni",
      age: "2.5 years old",
      distance: "3 Km",
      gender: "Female",
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      ownDetails: {
        ownName: 'Vishal',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl:
        ["https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80",]
    },
    {
      id: 5,
      petName: "Sunny",
      age: "2.2 years old",
      distance: "3.4 Km",
      gender: "Female",
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      ownDetails: {
        ownName: 'Vishal',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl:
        ["https://images.unsplash.com/photo-1593768697824-f31b967e6c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",]
    },
    {
      id: 6,
      petName: "Rubbi",
      age: "2 years old",
      distance: "1 Km",
      gender: "Female",
      category: 'Cow',
      about:
        'A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.',
      address: 'Baner,pune',
      breed: 'heifer',
      ownDetails: {
        ownName: 'Vijay Singh',
        ownNgoname: 'Jeevraksha Animal',
        ownImg: 'https://www.w3schools.com/w3images/avatar2.png',
        ownNum: '6585258875',
      },
      petUrl:[
        "https://images.unsplash.com/photo-1604165094771-7af34f7fd4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
        "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
        "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
        "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
        "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
        "https://images.unsplash.com/photo-1477936432016-8172ed08637e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
        "https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
        "https://images.unsplash.com/photo-1568393691080-d016376b767d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
      ]
        
    },
  ];
const HomeCard = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
       
      {
        NewPets?.map((item,ind) => (
            <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen",{
              petUrl: item.petUrl,
              petName: item.petName,
              petAge: item.age,
              gender: item.gender,
              distance: item.distance,
              ownDetails:item.ownDetails,
              about:item.about,
              breed:item.breed,
              address:item.address,
              item:item
            })} key={ind} activeOpacity={0.8} style={styles.cardSection}>
        <View style={styles.imgContainer}>
        <Image source={{uri:item.petUrl[0]}} style={styles.petsImg} />
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
                <Text style={styles.locationValue}>{item.distance}</Text>
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