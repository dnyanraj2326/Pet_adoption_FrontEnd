import {View, Text,Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../constant/Colors';
import CatScreen from '../screens/CatScreen';
import CowScreen from '../screens/CowScreen';
import FishScreen from '../screens/FishScreen';
import SplashScreen from '../screens/SplashScreen';
import DetailsScreen from '../screens/DetailsScreen';


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
            headerTitleContainerStyle: {
              // marginVertical: 10,
            },
            headerStyle: {
              backgroundColor: Colors.white,
              // borderBottomColor: '#ffffff',
              // borderBottomWidth: 3,
            },
            
            tabBarLabel:() => {return null},
            tabBarStyle: {
              position: 'absolute',
              borderRadius: moderateScale(20),
              marginBottom: moderateScale(10),
              // bottom:10,
              marginHorizontal: moderateScale(10),
              height: verticalScale(65),
              style: {
                borderRadius: moderateScale(20),
              },
            },
            tabBarIcon: ({focused, size, color}) => {
              let IconName;
              if (route.name === 'HomeScreen') {
                IconName = focused ? FillHome : HomeIcon;
              } else if (route.name === 'FaouriteScreen') {
                IconName = focused ? FillHeart : Heart;
              } else if (route.name === 'ProfileScreen') {
                IconName = focused ? FillUser : User;
              } 
              // else if (route.name === 'accounts') {
              //   IconName = focused ? AccountsColor : accounts;
              // }
              return <Image source={IconName} style={{width:25, height:25}}/>;
            },
          })}>
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false,}}
          />
          <Tab.Screen
            name="FaouriteScreen"
            component={FaouriteScreen}
            options={{ headerShown: false,}}
          />
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false,}}
          />
          {/* <Tab.Screen
            name="accounts"
            component={Accounts}
            options={{title: 'Accounts', headerShown: false}}
          /> */}
        </Tab.Navigator>
      </>
    );
  };



  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="DogScreen" component={DogScreen} />
      <Stack.Screen name="CatScreen" component={CatScreen} />
      <Stack.Screen name="CowScreen" component={CowScreen} />
      <Stack.Screen name="FishScreen" component={FishScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
