import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters';

const NgoSheltorDetailsScreen = ({route}) => {
  const {
    ownName,
    ownNgoname,
    address,
    city,
    state,
    pincode,
    ownImg,
    ownNum,
    sheltors,
    totalAvailablePets,
    adopted,
  } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topCardSection}>
        <View style={styles.topCard}>
          <View style={styles.imgSection}>
            <Image
              source={{
                uri: ownImg,
              }}
              style={styles.ngoImg}
            />
          </View>
          <View style={styles.rightSectionContaint}>
            <View style={styles.petsNumSection}>
              <View style={styles.petsNumData}>
                <Text style={styles.petNumVal}>{adopted}+</Text>
                <Text style={styles.petNumTitle}>Adopted</Text>
              </View>
              <View style={styles.petsNumData}>
                <Text style={styles.petNumVal}>{totalAvailablePets}+</Text>
                <Text style={styles.petNumTitle}>Available</Text>
              </View>
              <View style={styles.petsNumData}>
                <Text style={styles.petNumVal}>{sheltors}</Text>
                <Text style={styles.petNumTitle}>Sheltors</Text>
              </View>
            </View>
            <View style={styles.btnCallMsgSection}>
              <TouchableOpacity style={styles.ngoCall}>
                <Text style={styles.ngoCallTextSty}>Call Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ngoMsg}>
                <Text style={styles.ngoMsgTextSty}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.ngoNames}>
          <Text style={styles.ngoName}>{ownNgoname}😎</Text>
          <Text style={styles.ngoOwner}>{ownName}</Text>
        </View>
        <View style={styles.addressWithIcon}>
          <Image
            source={require('../assets/icon/locatinIcon.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.addressText}>
            {address}, {city}, {state}, {pincode}
          </Text>
        </View>
      </View>
      {/* <View style={bottomSection}>
          <View>

          </View>
      </View> */}
    </View>
  );
};

export default NgoSheltorDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    paddingHorizontal: moderateScale(15),
    width: Dimensions.get('window').width,
  },
  ngoImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  topCardSection: {
    marginTop: moderateScale(10),
    backgroundColor: Colors.white,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(5),
    borderRadius: 12,
    elevation: 8,
  },
  topCard: {
    flexDirection: 'row',
  },
  petsNumSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width - 160,
    marginTop: moderateScale(5),
  },
  btnCallMsgSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
  },
  petNumVal: {
    fontSize: scale(14),
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
    textAlign: 'center',
  },
  petNumTitle: {
    fontSize: scale(12),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.hed,
    textAlign: 'center',
  },
  imgSection: {
    width: 100,
    marginRight: moderateScale(10),
  },
  ngoCall: {
    paddingHorizontal: moderateScale(22),
    paddingVertical: moderateScale(10),
    backgroundColor: Colors.primary,
    borderRadius: 12,
  },
  ngoCallTextSty: {
    fontSize: scale(12),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
    // textAlign: 'center',
  },
  ngoMsg: {
    paddingHorizontal: moderateScale(22),
    paddingVertical: moderateScale(10),
    backgroundColor: Colors.primary,
    borderRadius: 12,
  },
  ngoMsgTextSty: {
    fontSize: scale(12),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
  },
  ngoName: {
    fontSize: scale(18),
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
    // textAlign: 'center',
  },
  ngoOwner: {
    fontSize: scale(10),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
    lineHeight: 25,
  },
  ngoNames: {
    paddingTop: moderateScale(15),
    marginLeft: moderateScale(5),
  },
  locationIcon: {
    width: 22,
    height: 22,
  },
  addressWithIcon: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: moderateScale(5),
    width:Dimensions.get('window').width-60
  },
  addressText: {
    fontSize: scale(12),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.para,
    textAlign: 'center',
    marginLeft: moderateScale(4),
  },
});
