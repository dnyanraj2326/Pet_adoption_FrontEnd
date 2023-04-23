import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import TextInputField from '../components/TextInputField';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Toast from 'react-native-toast-message';


const UserInfoPersonal = ({route}) => {
const {userName,mobileNo,emailId,birthDate,gender,petId} = route.params
    const navigation = useNavigation()
    const [curAddress, setCurAddress] = useState('')
    const [permentAddress, setPermentAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [professional, setProfessional] = useState('')
    const [identity, setIdentity] = useState('')

    console.log("first",userName,mobileNo,emailId,birthDate,gender)

    const fieldReq = () => {
      Toast.show({
        type: 'info',
        text1: 'All field required ! 👋',
      });
    };

  const onSubmitData = async() => {
    const data = {
  "pet_id":petId,
  "userName":userName,
  "mobileNumber":mobileNo,
  "email":emailId,
  "gender":gender,
  "dateOfBirth":birthDate,
  "currentAddress":curAddress,
  "permentAddress":permentAddress,
  "city":city,
  "state":state,
  "professional":professional,
  "identity":identity
    }
if(userName =='' && mobileNo == '' && emailId == '' && gender == '' && birthDate == '' && curAddress == '' && permentAddress == '' && city == '' && state == '' && professional == '' && identity == ''){
  fieldReq();
}else{
 try {
  const res = await axios.get("http://192.168.0.105:8080/users",data)
  console.log("res",res)
 } catch (error) {
  console.log(error)
 }
}
  }
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
              onChangeText={() => setCurAddress(Text)}
              value={curAddress}
            />
            <TextInputField
              label="Perment Address"
              placeholder="Enter your Perment Address"
              keyboardType="number-pad"
              onChangeText={() => setPermentAddress(Text)}
              value={permentAddress}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{width: '48%'}}>
                <TextInputField label="City" placeholder="City" onChangeText={() => setCity(Text)}
              value={city}/>
              </View>
              <View style={{width: '48%'}}>
                <TextInputField label="State" placeholder="State" onChangeText={() => setState(Text)}
              value={state}/>
              </View>
            </View>
            <TextInputField label="Professional" placeholder="Ex. Business " onChangeText={() => setProfessional(Text)}
              value={professional}/>
            <TextInputField label="Identity" placeholder="Ex. Aadhar number " onChangeText={() => setIdentity(Text)}
              value={identity}/>
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
        <TouchableOpacity activeOpacity={0.7} style={styles.nextBtn} onPress={onSubmitData}>
          <Text style={styles.nextBtnStyle}>Submit</Text>
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
