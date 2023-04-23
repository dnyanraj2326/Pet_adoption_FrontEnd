import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DeleteIcon from '../assets/icon/deleteIcon.png';
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters';

const UserRequstedAdoptPetsInfo = ({item}) => {
  console.log("first,item",item.petUrl[0])
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: item.petUrl[0],
          }}
          style={styles.imgStyle}
        />
        <View style={styles.rightSection}>
          <Text style={styles.orgName}>{item?.ownDetails?.ownNgoname}</Text>
          <Text style={styles.ownerName}>{item?.ownDetails?.ownName}</Text>
          <View style={styles.dateWithStatus}>
            <Text style={styles.date}>{item?.date}</Text>
            {/* <Text style={styles.status}>Pending</Text> */}
          </View>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusStyle}>Pending</Text>
        </View>
      </View>
    </View>
  );
};

export default UserRequstedAdoptPetsInfo;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: moderateScale(5),
    width: Dimensions.get('window').width - 35,
    elevation: 8,
    marginBottom:moderateScale(15)
  },
  rightSection: {
    marginLeft: moderateScale(10),
    width: Dimensions.get('window').width - 160,
  },
  orgName: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Bold',
    color: Colors.black,
    lineHeight: moderateScale(25),
  },
  ownerName: {
    fontSize: scale(12),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.hed,
    lineHeight: moderateScale(15),
  },
  date: {
    fontSize: scale(13),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.hed,
  },
  dateWithStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  status: {
    fontSize: scale(13),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.hed,
  },
  statusStyle: {
    fontSize: scale(12),
    fontFamily: 'Poppins-Bold',
    color: Colors.black,
    lineHeight: moderateScale(15),
    letterSpacing: 0.3,
  },
  statusContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#B0DAFF',
    paddingHorizontal: moderateScale(10),
    borderTopEndRadius: 12,
    paddingVertical: moderateScale(3),
    // shadowColor: '#e3e3e3',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.17,
    // shadowRadius: 3.05,
    elevation: 4,
  },
});
