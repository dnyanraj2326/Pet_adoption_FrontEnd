import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import Colors from '../constant/Colors'
import { useNavigation } from '@react-navigation/native';


const NewPets = [
    {
        _id:"6435acdca1179c866a3f032c",
        petName:"lussy",
        age:"2 years old",
        type:"Small",
        gender:"Female",
        category:"Dog",
        about:"A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
        address:"Sihagad ,pune",
        breed:"Bully Kutta",
        distance:"5 km",
        ownDetails:{
            ownName:"Anil",
            ownNgoname:"Karma foundation",
            ownImg:"https://www.w3schools.com/howto/img_avatar.png",
            ownNum:"6585258875",
    
        },
        petUrl:[
            "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvZ3N8ZW58MHx8MHx8&w=1000&q=80",
            "https://i.pinimg.com/236x/06/33/ec/0633ecf9213d311ac1df45d21391af91.jpg",
            "https://images.unsplash.com/photo-1572566830488-069bcc7fbcec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoVoCNfv8DJXXFbLScj3_uNWBh05dBfoZ2hjraAHK1Nt7NjcOUV_yF5RfflrcwCARSNY&usqp=CAU",
            "https://media.istockphoto.com/id/157603001/photo/cute-beagle-at-park.jpg?b=1&s=170667a&w=0&k=20&c=PIjshQZ8kJW-xdfb7kYJG-4ykn5__W1Gc-IZ_fhYQpg=",
        ],
        videoUrl:'https://youtu.be/bF_fwOwbhAU'
    
    },
    {
        id:2,
        petName:"Ash",
        age:"1.3 years old",
        type:"Small",
        gender:"Female",
        category:"Cow",
        about:"A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
        address:"Baner,pune",
        breed:"heifer",
        distance:"2 km",
        ownDetails:{
            ownName:"Vishal",
            ownNgoname:"Jeevraksha Animal",
            ownImg:"https://www.w3schools.com/howto/img_avatar.png",
            ownNum:"6585258875",
    
        },
        petUrl:[
            "https://images.unsplash.com/photo-1599307848808-fb36c798ee87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwY293fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "https://qph.cf2.quoracdn.net/main-qimg-7ee01f538c39aef698bc7756995bdb45-lq",
            "https://previews.123rf.com/images/kuroi/kuroi1311/kuroi131100026/24059028-calf-of-an-indian-cow-two-weeks-old-haridvar-india-.jpg",
            "https://thumbs.dreamstime.com/b/indian-cow-calf-cattle-farm-look-camera-171692491.jpg",
            "https://thumbs.dreamstime.com/b/little-baby-cow-natural-photos-beautiful-view-calf-farm-171693369.jpg",
        ]
    
    },
    {
        id:3,
        petName:"Rose",
        age:"1.5 years old",
        type:"Small",
        gender:"Female",
        category:"Dog",
        about:"A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
        address:"Sihagad ,pune",
        breed:"Himalayan Sheepdog",
        distance:"3.3 km",
        ownDetails:{
            ownName:"Sunil",
            ownNgoname:"Paws care",
            ownImg:"https://www.w3schools.com/w3images/avatar2.png",
            ownNum:"6585258875",
    
        },
        petUrl:[
            "https://images.unsplash.com/photo-1537123547273-e59f4f437f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
            "https://media.istockphoto.com/id/498090113/photo/poodle-plays-at-park.jpg?s=170667a&w=0&k=20&c=Xqbz4e4HRAYMRqwYz3YSd3uOdLgjjz2Aw1rHxCe4k28=",
            "https://images.unsplash.com/photo-1561438774-1790fe271b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcHB5JTIwZG9nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "https://st2.depositphotos.com/1029251/49364/i/600/depositphotos_493641482-stock-photo-bichon-frise-week-old-bichon.jpg",
            "https://st2.depositphotos.com/1029251/49363/i/600/depositphotos_493639914-stock-photo-bichon-frise-week-old-bichon.jpg",
    
        ]
    
    },
    
    {
        id:4,
        petName:"lussy",
        age:"2 years old",
        type:"Small",
        gender:"Female",
        category:"Cat",
        about:"A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
        address:"Sihagad ,pune",
        breed:"Maine Coon",
        distance:"2 km",
        ownDetails:{
            ownName:"Anil",
            ownNgoname:"Karma foundation",
            ownImg:"https://www.w3schools.com/w3images/avatar2.png",
            ownNum:"6585258875",
    
        },
        petUrl:[
            "https://i.pinimg.com/originals/e9/96/61/e99661721e1c294498b723009aaf2064.jpg",
            "https://live.staticflickr.com/4010/4453646076_a819636c69_c.jpg",
            "https://www.ephotozine.com/resize/2018/19/xlrg/227767_1526009792.jpg?RTUdGk5cXyJFAQgJSEc4egtnfAYYGkVUGwBdOh80SxgRBAAhdSMKY1dhB2osTU0LIjUVDw==",
            "https://thumbs.dreamstime.com/b/feral-indian-cat-staring-camera-roof-house-feral-indian-cat-128551342.jpg",
            "https://thumbs.dreamstime.com/b/indian-cat-nature-photography-90912378.jpg",
        ]
    
    },
    
    {
        id:5,
        petName:"Sunny",
        age:"0.5 years old",
        type:"Small",
        gender:"Female",
        category:"Cow",
        about:"A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
        address:"Sihagad ,pune",
        breed:"heifer",
        distance:"2 km",
        ownDetails:{
            ownName:"Rushikesh",
            ownNgoname:"Goshala",
            ownImg:"https://www.w3schools.com/howto/img_avatar.png",
            ownNum:"6585258875",
    
        },
        petUrl:[
            "https://i.insider.com/5f96ec874743a3001216b9bc?width=809&format=jpeg",
            "https://media.istockphoto.com/id/1319467946/photo/young-black-and-white-cow-heifer-in-a-meadow-looking-in-the-camera.jpg?b=1&s=170667a&w=0&k=20&c=I6PiKwCmZZDr5buXiupUkGRgO9RRfzC9uEU7kNGCcmg=",
            "https://i.pinimg.com/originals/e7/c2/05/e7c2056e8436b7a3e9ef92f21af974cf.jpg",
            "https://media.istockphoto.com/id/1299816142/photo/pretty-cow-black-and-white-gentle-surprised-look-pink-nose-in-front-of-a-blue-cloudy-sky.jpg?b=1&s=170667a&w=0&k=20&c=Spd-Vodhl8-qiAz9QdTvAJgTYQB1mZu9edwczQvmolw=",
            "https://media.istockphoto.com/id/1333720104/photo/mature-cow-black-and-white-curious-gentle-surprised-look.jpg?b=1&s=170667a&w=0&k=20&c=TKHwk5PeD2OlKL4575We82bObU38TFLyQcFjpC5w4XY=",
    
        ]
    
    
    },
    {
        id:6,
        petName:"Rani",
        age:"3 years old",
        type:"Medium",
        gender:"Female",
        category:"Cow",
        about:"A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
        address:"Baner,pune",
        breed:"heifer",
        distance:"5 km",
        ownDetails:{
            ownName:"Vishal",
            ownNgoname:"Jeevraksha Animal",
            ownImg:"https://www.w3schools.com/w3images/avatar2.png",
            ownNum:"6585258875",
    
        },
        petUrl:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk27yfkzlnIxxjoybSblR60e4Dr43KwJ8GUJqr2kt23DfgyB9xg-OeGmVt88nl9jGyQ3M&usqp=CAU",
            "https://media.istockphoto.com/id/1392919360/photo/cow-portrait-a-cute-and-young-red-bovine-with-white-blaze-and-black-nose-and-friendly.jpg?b=1&s=170667a&w=0&k=20&c=vlmAhq-HOQJTOwY7ZMKbHpFk4Zy_rb2M_41q29lrxv0=",
            "https://media.istockphoto.com/id/1345643663/photo/jersey-cow-headshot-looking-friendly-blue-cloudy-background.jpg?b=1&s=170667a&w=0&k=20&c=9Fhf8H7yY-EdGNikWIZ5HdqfQOCVbximfqM-wSn8rO0=",
            "https://media.istockphoto.com/id/139894880/photo/how-now-brown-cow.jpg?s=612x612&w=0&k=20&c=-__uKhXyqUntp33RrTUTMcEANxB9YWKQPchl6ObJr0s=",
            "https://media.istockphoto.com/id/1355062980/photo/jersey-cow-calf-headshot-yellow-ear-tags-black-nose-caramel-brown-coat-looking-cute-and.jpg?s=612x612&w=0&k=20&c=g4UgZ2zQjSme9Z3jfLjULXYs0Lp_Ws4u4QNiVhw1PGE=",
        ]
    
    },
    {
        id:7,
        petName:"kanil",
        age:"2 years old",
        type:"Small",
        gender:"Female",
        category:"Cat",
        about:"A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
        address:"Pinpari, pune",
        breed:"Siamese",
        distance:"9 km",
        ownDetails:{
            ownName:"Vishal ",
            ownNgoname:"Animal Rescure Trust",
            ownImg:"https://www.w3schools.com/w3images/avatar2.png",
            ownNum:"6585258875",
    
        },
        petUrl:[
            "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/08/08/2528443-bengal.png",
            "https://media-be.chewy.com/wp-content/uploads/2019/07/24115655/spotted-cat-breed-bengal-1024x576.jpg",
            "https://excitedcats.com/wp-content/uploads/2020/09/Spotted-Cat.jpg",
            "https://cdn.shopify.com/s/files/1/0079/6708/0512/files/16d0b978ece1b14e3f25b88ad959e5da_large.jpg?v=1548236306",
            "https://excitedcats.com/wp-content/uploads/2020/09/Spotted-Cat.jpg",
        ],
        videoUrl:'https://youtu.be/bF_fwOwbhAU'
    
    },
    {
        id:8,
        petName:"Aldoii",
        age:"3 years old",
        type:"Medium",
        gender:"Female",
        category:"Cat",
        about:"A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
        address:"Banner,pune",
        breed:"Bombay",
        distance:"7 km",
        ownDetails:{
            ownName:"Vishal ",
            ownNgoname:"Animal Rescure Trust",
            ownImg:"https://www.w3schools.com/howto/img_avatar.png",
            ownNum:"6585258875",
    
        },
        petUrl:[
            "https://thumbs.dreamstime.com/b/indian-cat-nature-photography-90912378.jpg",
            "https://thumbs.dreamstime.com/b/cat-walk-not-interested-anything-no-76859698.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFyPXTMErxh56zx9R2kxRYZH6Jl9RUiVsU8KKVJSGGuO_OYLv7-YpfORHKamJbSB9a8c&usqp=CAU",
            "https://i.pinimg.com/736x/62/e8/65/62e865d66b007fe8525c8a6dcef22484.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNo4iCYoze_ktbXlYBuJL0hDWY00wHUaejo-mHWgxHS_jqV_y0F2bYelVVZSdTW3gpG0&usqp=CAU",
        ]
    
    },
    {
        id:9,
        petName:"Rocky",
        age:"2 years old",
        type:"Small",
        gender:"Male",
        category:"Dog",
        about:"The German Shepherd or Alsatian is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. It was originally bred as a herding dog, for herding sheep. ",
        address:"Pimpari,pune",
        breed:"German Shepherd",
        distance:"2 km",
        ownDetails:{
            ownName:"Vinod",
            ownNgoname:"SAahas for Animals",
            ownImg:"https://www.w3schools.com/w3images/avatar2.png",
            ownNum:"6585258875",
    
        },
        petUrl:[
            "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg",
            "https://cdn.shopify.com/s/files/1/0894/7020/files/German-Shepherd_480x480.jpg?v=1627467664",
            "https://media-be.chewy.com/wp-content/uploads/2021/05/11162926/German-Shepherd-1358309706-1024x591.jpg",
            "https://www.insidedogsworld.com/wp-content/uploads/2017/06/German-Shepherd-Standard-Coat-GSC-1000x575-1-1-1-1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UmvSKxEvcL2aM5yTLAQ4vnNImj_YVH9N33SwcVH5jiNZB6EEK4qXC8Hlcfuse_hBz6M&usqp=CAU",
        ]
    
    },
    {
        id:10,
        petName:"Nrry",
        age:"2 years old",
        type:"Small",
        gender:"Female",
        category:"Cat",
        about:"A dog is a domestic mammal of the family Canidae and the order Carnivora. Its scientific name is Canis lupus familiaris. Dogs are a subspecies of the gray wolf, and they are also related to foxes and jackals. Dogs are one of the two most ubiquitous and most popular domestic animals in the world.",
        address:"Sihagad ,pune",
        breed:"Siamese",
        distance:"6 km",
        ownDetails:{
            ownName:"Rushi",
            ownNgoname:"Vrundavan ",
            ownImg:"https://www.w3schools.com/w3images/avatar2.png",
            ownNum:"6585258875",
    
    
        },
        petUrl:[
            "https://thumbs.dreamstime.com/b/indian-cuty-cat-pic-home-animal-love-168016710.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1a/Indian_Cat_pic.jpg",
            "https://c8.alamy.com/comp/2BFDNF3/portrait-of-indian-cat-2BFDNF3.jpg",
            "https://www.petsworld.in/blog/wp-content/uploads/2017/08/stray-cat-2.jpg",
            "https://www.shutterstock.com/image-photo/indian-billi-breed-known-common-260nw-1792626598.jpg",
        ]
    
    },
  ];
  
const RecommendedPets = () => {
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

export default RecommendedPets

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