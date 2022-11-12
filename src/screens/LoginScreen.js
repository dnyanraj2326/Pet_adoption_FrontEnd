import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
              placeholder="Enter your mobile number"
              keyboardType={'phone-pad'}
              style={styles.input}
              placeholderTextColor={Colors.hed}
            />
            <TextInput
              placeholder="Enter your Password"
              secureTextEntry={true}
              style={styles.input}
              placeholderTextColor={Colors.hed}
            />
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.forgotPass}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
            <View style={styles.account}>
                <Text style={styles.signupText}>Don't have an account!</Text>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.signupLink}>Signup</Text>
                </TouchableOpacity>
                </View>          
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  img: {
    // width:'100%',
    // height:'50%',
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
    letterSpacing:scale(0.5)
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
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    marginTop: moderateScale(30),
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
  btn:{
    paddingHorizontal:moderateScale(20),
    paddingVertical:moderateScale(14),
    backgroundColor:Colors.para,
    borderRadius:20,
    marginVertical:moderateScale(30)
  },
  btnText:{
    fontSize: scale(18),
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    color: Colors.white,
    letterSpacing:scale(0.5)
  },
  account:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:moderateScale(25)
  },
  signupLink:{
    marginLeft:moderateScale(5),
    fontSize: scale(13),
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: scale(20),
    textAlign: 'center',
    color: "red",
  },
  signupText:{
    fontSize: scale(13),
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: scale(20),
    textAlign: 'center',
    color: Colors.hed,
  }
});
