import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import {useNavigation, StackActions} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const signOutUser = async () => {
    try {
      AsyncStorage.removeItem('userName');
      AsyncStorage.removeItem('userEmail');
      AsyncStorage.removeItem('userAddress');
      AsyncStorage.removeItem('userPhone');
      AsyncStorage.removeItem("token");
      navigation.replace('Login');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      const usrName = await AsyncStorage.getItem('userName');
      const usrEmail = await AsyncStorage.getItem('userEmail');
      const usrAddress = await AsyncStorage.getItem('userAddress');
      const usrPhone = await AsyncStorage.getItem('userPhone');
      setUserName(usrName);
      setUserEmail(usrEmail);
      setUserAddress(usrAddress);
      setUserPhone(usrPhone);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20,
            paddingHorizontal: 30,
            marginBottom: 90,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icon/BackIcon.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 20,
            paddingHorizontal: 30,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            flex: 1,
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              }}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.camSection}>
            <TouchableOpacity style={styles.cameraSty}>
              <Image
                source={require('../assets/icon/camera.png')}
                style={styles.cameraIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 57}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
              }}>
              {userName}
            </Text>
          </View>
          <View style={{marginTop: 50}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#EEEEEE',
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 7,
              }}>
              <View style={{paddingRight: 15}}>
                <Image
                  source={require('../assets/icon/mobile.png')}
                  style={styles.mobileIcon}
                />
              </View>
              <View>
                <Text style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                  Phone Number
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingTop: 7,
                  }}>
                  + {userPhone}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#EEEEEE',
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 7,
                marginTop: 30,
              }}>
              <View style={{paddingRight: 15}}>
                <Image
                  source={require('../assets/icon/mail.png')}
                  style={styles.mailIcon}
                />
              </View>
              <View>
                <Text style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
                  Mail
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingTop: 7,
                  }}>
                  {userEmail}
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: 120}}>
            <TouchableOpacity
              style={styles.logoutSection}
              onPress={() => signOutUser()}>
              <Text style={styles.logoutTextSty}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  backIcon: {
    width: 22,
    height: 22,
  },
  cameraIcon: {
    width: 22,
    height: 22,
  },
  cameraSty: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 100,
  },
  camSection: {
    position: 'absolute',
    top: -70,
    left: '68%',
  },
  mailIcon: {
    width: 25,
    height: 25,
    tintColor: Colors.black,
  },
  mobileIcon: {
    width: 27,
    height: 27,
    tintColor: Colors.black,
  },
  profileImg: {
    width: 130,
    height: 130,
    borderRadius: 40,
    position: 'absolute',
    top: -85,
    left: '29%',
  },
  logoutSection: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  logoutTextSty: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});
