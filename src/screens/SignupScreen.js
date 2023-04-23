import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import axios from 'axios';

const SignupScreen = () => {
  const [focus, setFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [fevPetName, setFevPetName] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const fieldReq = () => {
    Toast.show({
      type: 'info',
      text1: 'All field required ! 👋',
    });
  };

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'User created successfully! 👋',
    });
  };

  const handleCreateUser = async () => {
    const body = {
      name: userName,
      email: email,
      password: password,
      phone: mobile,
      address: address,
      answer: fevPetName,
    };
    if (
      email == '' &&
      password == '' &&
      userName == '' &&
      mobile == '' &&
      address == '' &&
      fevPetName == ''
    ) {
      fieldReq();
    } else {
      try {
        setLoading(true);
        axios
          .post('http://192.168.0.105:8080/user/auth/register', body)
          .then(res => {
            if (res.status == 201) {
              successToast();
              navigation.navigate('Login');
              setLoading(false);
            }
            setLoading(false);
            console.log("Somthing wrong")
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.signupHed}>
          <Text style={styles.signUpTextSty}>Signup Now</Text>
          <Text style={styles.signupTextPara}>
            Hello,I guess you are new around here, You can start using the
            application after sign up.
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
            onChangeText={text => setUserName(text)}
          />
          <TextInput
            placeholder="Mobile Number"
            style={styles.input}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
            onChangeText={text => setMobile(text)}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder="Email Id"
            style={styles.input}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            placeholder="Address"
            style={styles.input}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
            onChangeText={text => setAddress(text)}
          />
          <TextInput
            placeholder="Favorite Pet Name"
            style={styles.input}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
            onChangeText={text => setFevPetName(text)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.signupBtn}
            // onPress={() => navigation.navigate('Login')}
            onPress={() => handleCreateUser()}>
            {/* <Text style={styles.signupTextSty}>Signup</Text> */}
            <Text style={styles.signupTextSty}>
              {loading ? (
                <View style={styles.loadingSection}>
                  <ActivityIndicator size="large" color="red" />
                  <Text style={styles.loadingText}>Please Wait...</Text>
                </View>
              ) : (
                'Signup'
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.account}>
          <Text style={styles.signupText}>Already have account!</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    paddingHorizontal: moderateScale(20),
    flex: 1,
  },
  signupHed: {
    paddingVertical: moderateScale(15),
  },
  signUpTextSty: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: Colors.hed,
    marginBottom: moderateScale(10),
  },
  signupTextPara: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.para,
  },
  input: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginTop: moderateScale(20),
    fontFamily: 'Poppins-SemiBold',
  },
  borderSTyle: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginTop: moderateScale(30),
    fontFamily: 'Poppins-SemiBold',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  signupTextSty: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: Colors.white,
  },
  signupBtn: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(14),
    borderRadius: 14,
    backgroundColor: Colors.para,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(60),
    // marginBottom:30
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(25),
  },
  loginLink: {
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
