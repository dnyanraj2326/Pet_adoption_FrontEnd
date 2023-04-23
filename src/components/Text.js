import { StyleSheet, Text, TouchableOpacity, View ,Image,FlatList} from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import Colors from '../constant/Colors'
import * as Animatable from 'react-native-animatable';

{/* <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',}}>
      {
        loading&&(
          <View style={{flexDirection:"row",alignItems:'center',justifyContent:'center',paddingHorizontal:30,paddingVertical:15,backgroundColor:Colors.gray,borderRadius:10,zIndex:99}}>
          <ActivityIndicator size="large" color="red" />
          <Text style={{marginLeft:10,fontSize:20,fontFamily:"Poppins-Bold",marginTop:5}}>Please Wait...</Text>
          </View>
        )
      }
      </View> */}
const NewPets = [
    {
      id: 1,
      petName: "Tommy",
      age: "0.4 years old",
      distance: "2.5",
      gender: "Male",
      petUrl: "https://mcmscache.epapr.in/post_images/website_350/post_15673607/thumb.jpg",
    },
    {
      id: 2,
      petName: "Julie",
      age: "0.8 years old",
      distance: "2.2",
      gender: "Female",
      petUrl: "https://images.unsplash.com/photo-1587559045816-8b0a54d1fbd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      petName: "Raja",
      age: "1.3 years old",
      distance: "2",
      gender: "Male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDKI4PJWfWJ8r4oVlDcgc0Sz1LMy0PrV27w&usqp=CAU",
    },
  
    {
      id: 4,
      petName: "Kallu",
      age: "2.1 years old",
      distance: "3",
      gender: "male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMmpBQokmm5vZLpkj4TGcOk5SkJMXwOBSgQ&usqp=CAU",
    },
    {
      id: 5,
      petName: "lora",
      age: "0.6 years old",
      distance: "3.4",
      gender: "Female",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1t7CJQtL1acpPI9wysgK7NwnRsx_2mYWug&usqp=CAU",
    },
    {
      id: 100,
      petName: "Baber",
      age: "1.6 years old",
      distance: "8.8",
      gender: "Male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhGu_v2sk2gVnHWROdoFVVJAmd3nQaxza0SlAPN5SuGCHI98hEv0IZav0LgR4kGwMUWk&usqp=CAU",
    },
    {
      id: 6,
      petName: "Jasmine",
      age: "0.4 years old",
      distance: "7",
      gender: "Female",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKSFCd-BJ0SzRgo96gIKX4Fm6xEBOOZhylw&usqp=CAU",
    },
    {
      id: 7,
      petName: "Azam",
      age: "1 .9years old",
      distance: "10",
      gender: "Male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmK8IOJCPWrhu-L5VmfQw2fJvJxYnwEcDeCfFuxhEwmIWQ2CJ4qqgRfAS_KjHwTcmeBKA&usqp=CAU",
    },
    {
      id: 8,
      petName: "Tiger",
      age: "1 years old",
      distance: "9",
      gender: "Male",
      petUrl: "https://t4.ftcdn.net/jpg/04/39/56/13/360_F_439561312_YhlnuDFoD2M0ZDzAWDJ0i5juxtEaw21K.jpg",
    },
    {
      id: 9,
      petName: "Sophie",
      age: "1.1 years old",
      distance: "5.8",
      gender: "Female",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtV3tikNyTK5GUrPl7yYY-ziYedslor2DO-Q&usqp=CAU",
    },
    {
      id: 10,
      petName: "Bittu",
      age: "1.6 years old",
      distance: "8.6",
      gender: "Male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0RAxAA8Op0-9z4f4ddN3Baf60ato89d6nw&usqp=CAU",
    },
    {
      id: 11,
      petName: "kitty",
      age: "0.4 years old",
      distance: "6",
      gender: "Female",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfYla-yQeExNOaQ0HKxzViCUdKjPggfQDpg&usqp=CAU",
    },
    {
      id: 12,
      petName: "Chitty",
      age: "0.7 years old",
      distance: "9.8",
      gender: "Female",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQks-mHo5r7EhHkjknZhfAk4f3oZYLCR6TAqQ&usqp=CAU",
    },
    {
      id: 13,
      petName: "Max",
      age: "1.8 years old",
      distance: "8.5",
      gender: "Male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6CGu6hUXBqopN69HXIrJikYFDGWgsOsxQQ&usqp=CAU",
    },
    {
      id: 14,
      petName: "Lola",
      age: "4 years old",
      distance: "7",
      gender: "Female",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbP2_7mS2wpLpSUCc5vnumaSN5JPQq__pgdw&usqp=CAU",
    },
    {
      id: 15,
      petName: "Sonaya",
      age: "1.3 years old",
      distance: "3",
      gender: "Male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMmpBQokmm5vZLpkj4TGcOk5SkJMXwOBSgQ&usqp=CAU",
    },
    {
      id: 16,
      petName: "Robert",
      age: "0.8 years old",
      distance: "6",
      gender: "Male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVfhclSF8TPMG3g0UyT367DxyJo8DGN-0fw&usqp=CAU",
    },
    {
      id: 17,
      petName: "Tara",
      age: "0.5 years old",
      distance: "8",
      gender: "Female",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS171hOXSk0PxxWjRJwgFr9z9uUeViCi--6Ow&usqp=CAU",
    },
    {
      id: 18,
      petName: "Bala",
      age: "1.8 years old",
      distance: "10",
      gender: "Male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bedmiqQoPgU7qmHktu6QbmapXU04v08RKxwqxv-ET7XkAiez4DcHrXNZUYpN6z0HAvQ&usqp=CAU",
    },
    {
      id: 19,
      petName: "Robine",
      age: "2 years old",
      distance: "5",
      gender: "Male",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6ebAieYFCsllnf7KuISLh0HEPn9EmirAQQ&usqp=CAU",
    },
    {
      id: 20,
      petName: "Sara",
      age: "0.9 years old",
      distance: "6",
      gender: "Female",
      petUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrila2EQG5R64IFYw7rXoNWe0151kGTwPut3fndrHS4ebcML3WMHib97qkOkg0UG4ae-Y&usqp=CAU",
    },
  ];
const PetsCard = () => {
  return (
    <View
     style={styles.container}>
      <FlatList
        data={NewPets}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        // numColumns={2}
        renderItem={({ item,index }) => (
        <Animatable.View 
        animation={'fadeInDown'}
        duration={1000}
        delay={index*300}
        style={styles.petsCardSection}>
          <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.imgSection}>
              <Image source={{uri:item.petUrl}} style={styles.img} />
              </View>
              <View style={styles.textContent}>
                  <View style={styles.nameWithGender}>
                      <Text style={styles.petName}>{item.petName}</Text>
                      <Image source={item.gender == "Male" ? require("../assets/icon/maleIcon.png"): require("../assets/icon/femaleIcon.png")} style={styles.genderIcon} />
                  </View>
                  <Text style={styles.age}>{item.age}</Text>
                  <View style={styles.distance}>
                      <Image source={require("../assets/icon/locatinIcon.png")} style={styles.locationIcon} />
                      <Text style={styles.locationName}>Distance :</Text>
                      <Text style={styles.locationValue}> {item.distance} km</Text>
                  </View>
              </View>
          </TouchableOpacity>
       </Animatable.View>
        )}
        numColumns={2}
        keyExtractor={item => item.id}
      />
       
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
    imgSection:{

    },
    img:{
        width:"100%",
        height:130,
        // resizeMode:"contain",
        borderRadius:18
    },
    nameWithGender:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    petsCardSection:{
        flex:1,
        backgroundColor:Colors.white,
        borderRadius:18,
        elevation:3,
        shadowColor:Colors.para,
        marginBottom:moderateScale(10),
        marginHorizontal:5
        
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
        // flexDirection:'row',
        // justifyContent:'space-between',
        // flexWrap:'wrap',
        flex:1,
         marginTop:moderateScale(15),
         width:'100%'
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
    },
    list: {
      // flex: 1,
      flexDirection: 'column',
      // margin:2
      // justifyContent:'space-between',
      // flexWrap: 'wrap',
    }
    
})