import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DogScreen from '../screens/DogScreen';
import FaouriteScreen from '../screens/FaouriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FillHome from '../assets/icon/FillHome.png';
import HomeIcon from '../assets/icon/HomeIcon.png';
import FillHeart from '../assets/icon/FillHeart.png';
import Heart from '../assets/icon/Heart.png';
import User from '../assets/icon/User.png';
import FillUser from '../assets/icon/FillUser.png';
import BookMFill from '../assets/icon/BookMFill.png';
import BookM from '../assets/icon/BookM.png';
import PlayFill from '../assets/icon/PlayFill.png';
import Play from '../assets/icon/play.png';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import CatScreen from '../screens/CatScreen';
import CowScreen from '../screens/CowScreen';
import FishScreen from '../screens/FishScreen';
import SplashScreen from '../screens/SplashScreen';
import DetailsScreen from '../screens/DetailsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import UserInformationForm from '../screens/UserInformationForm';
import UserInfoPersonal from '../screens/UserInfoPersonal';
import UserInfoDetail3 from '../screens/UserInfoDetail3';
import SignupScreen from '../screens/SignupScreen';
import PetImgGallery from '../screens/PetImgGallery';
import ChatScreen from '../screens/ChatScreen';
import PlayScreen from '../screens/PlayScreen';
import NgoSheltor from '../screens/NgoSheltor';
import NgoSheltorDetailsScreen from '../screens/NgoSheltorDetailsScreen';
import Lottie from 'lottie-react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  const BottomNav = () => {
    return (
      <>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: '#252D6E',
            tabBarInactiveTintColor: Colors.black,
            tabBarActiveBackgroundColor: Colors.white,
            tabBarShowLabel: true,
            tabBarItemStyle: {
              margin: 5,
              borderRadius: 15,
            },
            headerTitleContainerStyle: {},
            headerStyle: {
              backgroundColor: Colors.white,
            },

            tabBarLabel: () => {
              return null;
            },
            tabBarStyle: {
              position: 'absolute',
              borderRadius: moderateScale(20),
              marginBottom: moderateScale(10),
              marginHorizontal: moderateScale(10),
              height: verticalScale(65),
              style: {
                borderRadius: moderateScale(20),
              },
            },
            // tabBarIcon: ({focused, size, color}) => {
            //   let IconName;
            //   if (route.name === 'HomeScreen') {
            //     IconName = focused ? FillHome : HomeIcon;
            //   } else if (route.name === 'FaouriteScreen') {
            //     IconName = focused ? FillHeart : Heart;
            //   } else if (route.name === 'ProfileScreen') {
            //     IconName = focused ? FillUser : User;
            //   } else if (route.name === 'ChatScreen') {
            //     IconName = focused ? ChatFill : Chat;
            //   } else if (route.name === 'PlayScreen') {
            //     IconName = focused ? PlayFill : Play;
            //   }
            //   return (
            //     <Image source={IconName} style={{width: 25, height: 25}} />
            //   );
            // },
          })}>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false,
              tabBarIcon:({focused}) => (
                <View style={{alignItems:"center",justifyContent:'center'}}>
                  <Image source={focused ? FillHome:HomeIcon} resizeMode='contain' style={{width:27,height:27}}/>
                </View>
              )
            }}
          />
          <Tab.Screen
            name="FaouriteScreen"
            component={FaouriteScreen}
            options={{headerShown: false,
              tabBarIcon:({focused}) => (
                <View style={{alignItems:"center",justifyContent:'center'}}>
                  <Image source={focused ? FillHeart:Heart} resizeMode='contain' style={{width:27,height:27}}/>
                </View>
              )
            }}
          />
          <Tab.Screen
            name="PlayScreen"
            component={PlayScreen}
            options={{headerShown: false,
              tabBarIcon:({focused}) => (
                <View style={{alignItems:"center",justifyContent:'center',marginTop:-80}}>
                  <Lottie source={require('../assets/lottiFiles/playIcon.json')} autoPlay loop style={{width:120,height:120}}/>
                </View>
              )
            }}
          />
          <Tab.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{headerShown: false,
              tabBarIcon:({focused}) => (
                <View style={{alignItems:"center",justifyContent:'center'}}>
                  <Image source={focused ? BookMFill:BookM} resizeMode='contain' style={{width:30,height:30}}/>
                </View>
              )
            }}
          />
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false,
              tabBarIcon:({focused}) => (
                <View style={{alignItems:"center",justifyContent:'center'}}>
                  <Image source={focused ? FillUser:User} resizeMode='contain' style={{width:27,height:27}}/>
                </View>
              )
            }}
          />
        </Tab.Navigator>
      </>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="DogScreen" component={DogScreen} />
      <Stack.Screen name="CatScreen" component={CatScreen} />
      <Stack.Screen name="CowScreen" component={CowScreen} />
      <Stack.Screen name="FishScreen" component={FishScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen
        name="UserInformationForm"
        component={UserInformationForm}
      />
      <Stack.Screen name="UserInfoPersonal" component={UserInfoPersonal} />
      <Stack.Screen name="UserInfoDetail3" component={UserInfoDetail3} />
      <Stack.Screen name="PetImgGallery" component={PetImgGallery} />
      <Stack.Screen name="NgoSheltor" component={NgoSheltor} />
      <Stack.Screen
        name="NgoSheltorDetailsScreen"
        component={NgoSheltorDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
