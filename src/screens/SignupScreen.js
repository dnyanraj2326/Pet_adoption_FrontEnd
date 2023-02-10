import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const [focus, setFocus] = useState(false);
  let customStyle = focus ? styles.borderSTyle : styles.input;
  const navigation = useNavigation();
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
            secureTextEntry={true}
            style={customStyle}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
          />
          <TextInput
            placeholder="Mobile Number"
            secureTextEntry={true}
            style={customStyle}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
          />
          <TextInput
            placeholder="Email Id"
            secureTextEntry={true}
            style={customStyle}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={customStyle}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={customStyle}
            placeholderTextColor={Colors.para}
            onFocus={() => setFocus(true)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signupTextSty}>Signup</Text>
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
    paddingVertical: moderateScale(30),
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
    marginTop: moderateScale(30),
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
});
