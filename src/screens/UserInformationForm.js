import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import TextInputField from '../components/TextInputField';
import {useNavigation} from '@react-navigation/native';

const UserInformationForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.hedStyle}>
            <Text style={styles.userInformationForm}>User Information</Text>
            <Text style={styles.userInfoPara}>
              All info fill the form and submit it
            </Text>
          </View>
          <View style={styles.stepSection}>
            <Text style={styles.stepStyle}>Step's</Text>
            <Text style={styles.stepNumStyle}>1/3</Text>
          </View>

          <View style={{marginTop: moderateScale(20)}}>
            <TextInputField
              label="User Name"
              placeholder="Enter your full name"
            />
            <TextInputField
              label="Mobile Number"
              placeholder="Enter your mobie No"
              keyboardType="number-pad"
            />
            <TextInputField label="Email Id" placeholder="Enter your Email" />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{width: '48%'}}>
                <TextInputField label="Birth Date" placeholder="01/01/1998" />
              </View>
              <View style={{width: '48%'}}>
                <TextInputField label="Gender" placeholder="Select" />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.nextBtn}
          onPress={() => navigation.navigate('UserInfoPersonal')}>
          <Text style={styles.nextBtnStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInformationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: moderateScale(20),
  },
  hedStyle: {
    marginTop: moderateScale(40),
  },
  userInformationForm: {
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    color: Colors.hed,
    marginBottom: moderateScale(5),
    marginTop: moderateScale(10),
  },
  userInfoPara: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.para,
  },
  stepStyle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
  },
  stepSection: {
    marginVertical: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepNumStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
    marginLeft: moderateScale(10),
  },
  nextBtnStyle: {
    fontSize: scale(17),
    fontFamily: 'Montserrat-Bold',
    color: Colors.white,
  },
  nextBtn: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(13),
    borderRadius: 14,
    backgroundColor: Colors.para,
    flexDirection: 'row',
    justifyContent: 'center',
    // marginRight:moderateScale(10),
    // position:'absolute',
    // bottom:30,
    // marginLeft:moderateScale(20),
    width: '35%',
    marginTop: moderateScale(40),
  },
});
