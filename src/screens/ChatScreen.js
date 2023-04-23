import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import UserRequstedAdoptPetsInfo from '../components/UserRequstedAdoptPetsInfo';
import Request from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChatScreen = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserReqPet();
  }, []);

  const getUserReqPet = async () => {
    const usrPhone = await AsyncStorage.getItem('userPhone');
    try {
      const res = await Request.get(
        `http://192.168.0.105:8080/users/getUserById?phone=${usrPhone}`,
      );
      console.log('Responce', res.data.data);
      setUserData(res?.data.data);
    } catch (error) {
      console.log('Getting error in user adopted pets list', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.fishSection}>
      <View style={{alignItems:"center", marginTop:"50%"}}>
          <Text style={{fontSize:20, color:"black", fontFamily:"Poppins-Medium"}}>Coming Soon</Text>
        </View>
      </View> */}
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          fontFamily: 'Poppins-Medium',
          marginTop: moderateScale(5),
          marginBottom: moderateScale(10),
        }}>
        Adopted Pet's List
      </Text>
      {userData?.map((item, ind) => (
        <UserRequstedAdoptPetsInfo item={item} key={ind} />
      ))}
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:Colors.bg,
    backgroundColor: Colors.bg,
    paddingHorizontal: moderateScale(15),
    paddingTop: moderateScale(10),
  },
  fishSection: {
    marginHorizontal: moderateScale(15),
  },
});
