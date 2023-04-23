import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Request from 'axios';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getLocation();
    });
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            storeData(position?.coords?.longitude, position?.coords?.latitude);
            setLocation(position);
          },
          error => {
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };

  const storeData = async (longVal, latVal) => {
    console.log('long', longVal);
    try {
      const jsonValue = JSON.stringify(longVal);
      const jsonValue1 = JSON.stringify(latVal);
      await AsyncStorage.setItem('longVal', jsonValue);
      await AsyncStorage.setItem('latVal', jsonValue1);
    } catch (e) {
      console.log('Errorrr');
    }
  };

  const fieldReq = () => {
    Toast.show({
      type: 'info',
      text1: 'All field required ! 👋',
    });
  };

  const errorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'User is not found! 👋',
    });
  };

  const handleLogin = async () => {
    let body = {
      email: email,
      password: Password,
    };
    if (email == '' && Password == '') {
      fieldReq();
    } else {
      try {
        setLoading(true);
        Request.post(`http://192.168.0.105:8080/user/auth/login`, body)
          .then(res => {
            if (res.status == 200) {
              // console.log('first', res.data.token);
              AsyncStorage.setItem("token",res.data.token)
              AsyncStorage.setItem("userName",res.data.user.name)
              AsyncStorage.setItem("userEmail",res.data.user.email)
              AsyncStorage.setItem("userAddress",res.data.user.address)
              AsyncStorage.setItem("userPhone",JSON.stringify(res.data.user.phone))
              setLoading(false);
              navigation.replace('BottomNav');
            }
          })
          .catch(err => {
            errorToast();
            console.log('Error Getting in getData api: ', err);
            setLoading(false);
          });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View style={styles.loginSection}>
            <Image
              source={require('../assets/images/petsaddo.png')}
              style={styles.img}
            />
            <View style={styles.header}>
              <Text style={styles.hed}>Login Now</Text>
              <Text style={styles.para}>
                Please enter the details below to continue
              </Text>
            </View>
            <View style={styles.inputSection}>
              <TextInput
                placeholder="Enter your email id"
                keyboardType="email-address"
                style={styles.input}
                placeholderTextColor={Colors.para}
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                placeholder="Enter your Password"
                secureTextEntry={true}
                style={styles.input}
                placeholderTextColor={Colors.para}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity activeOpacity={0.5}>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
              <Text style={styles.btnText}>
                {loading ? (
                  <View style={styles.loadingSection}>
                    <ActivityIndicator size="large" color="red" />
                    <Text style={styles.loadingText}>Please Wait...</Text>
                  </View>
                ) : (
                  'Login'
                )}
              </Text>
            </TouchableOpacity>
            <View style={styles.account}>
              <Text style={styles.signupText}>Don't have an account!</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={styles.signupLink}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    flex: 1,
  },
  img: {
    width: 300,
    height: 200,
    alignSelf: 'center',
  },
  loginSection: {
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(15),
  },
  hed: {
    fontSize: scale(22),
    fontFamily: 'Poppins-Bold',
    lineHeight: scale(40),
    textAlign: 'center',
    color: Colors.hed,
    letterSpacing: scale(0.5),
  },
  para: {
    fontSize: scale(12),
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: scale(20),
    textAlign: 'center',
    color: Colors.para,
  },
  header: {
    marginTop: moderateScale(40),
  },
  input: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginTop: moderateScale(30),
    fontFamily: 'Poppins-SemiBold',
  },
  inputSection: {
    marginTop: moderateScale(40),
  },
  forgotPass: {
    textAlign: 'right',
    fontSize: scale(12),
    fontFamily: 'Poppins-SemiBold',
    lineHeight: scale(40),
    color: 'red',
  },
  btn: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(14),
    backgroundColor: Colors.para,
    borderRadius: 20,
    marginVertical: moderateScale(30),
  },
  btnText: {
    fontSize: scale(18),
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    color: Colors.white,
    letterSpacing: scale(0.5),
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(25),
  },
  signupLink: {
    marginLeft: moderateScale(5),
    fontSize: scale(13),
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: scale(20),
    textAlign: 'center',
    color: Colors.primary,
  },
  signupText: {
    fontSize: scale(13),
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: scale(20),
    textAlign: 'center',
    color: Colors.hed,
  },
  loadingText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginTop: 5,
    color: Colors.white,
  },
  loadingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
});
