import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import TextInputField from '../components/TextInputField';
import { useNavigation } from '@react-navigation/native';

const UserInfoPersonal = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{marginTop: moderateScale(30)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.stepSection}>
            <Text style={styles.stepStyle}>Step's</Text>
            <Text style={styles.stepNumStyle}>2/3</Text>
          </View>
          <View style={{marginTop: moderateScale(20)}}>
            <TextInputField
              label="Current Address"
              placeholder="Enter your current address"
            />
            <TextInputField
              label="Perment Address"
              placeholder="Enter your Perment Address"
              keyboardType="number-pad"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{width: '48%'}}>
                <TextInputField label="City" placeholder="City" />
              </View>
              <View style={{width: '48%'}}>
                <TextInputField label="State" placeholder="State" />
              </View>
            </View>
            <TextInputField label="Professional" placeholder="Ex. Business " />
            <TextInputField label="Identity" placeholder="Ex. Aadhar number " />
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: "space-between",
        }}>
        <TouchableOpacity activeOpacity={0.7} style={styles.nextBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.nextBtnStyle}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.nextBtn} onPress={() => navigation.navigate("UserInfoDetail3")}>
          <Text style={styles.nextBtnStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInfoPersonal;

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
    // marginRight: moderateScale(10),
    // position:'absolute',
    // bottom:30,
    // marginLeft:moderateScale(20),
    width: '35%',
    marginTop: moderateScale(30),
  },
});
