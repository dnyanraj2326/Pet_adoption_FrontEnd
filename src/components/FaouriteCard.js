import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import Delete from '../assets/icon/deleteIcon.png';
import {useDispatch} from 'react-redux';
import {removeTOFevPets} from '../redux/action';

const FaouriteCard = ({item}) => {
  const dispatch = useDispatch();
  const fevPetRemove = item => {
    console.log(item);
    dispatch(removeTOFevPets(item));
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} style={styles.fevCard}>
        <View style={styles.leftSection}>
          <Image
            source={{
              uri: item?.petUrl[0],
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.rightCard}>
          <View style={styles.textWithIcon}>
            <View>
              <Text style={styles.petName}>{item?.petName}</Text>
              <Text style={styles.sheltorName}>
                {item?.ownDetails?.ownNgoname}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.heartSection}
              onPress={() => fevPetRemove(item?.petName)}>
              <Image source={Delete} style={styles.heartIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.smImgSection}>
            <View
              style={{
                padding: 2,
                backgroundColor: Colors.white,
                borderRadius: 50,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={styles.smImg}
              />
            </View>
            <View
              style={{
                padding: 2,
                backgroundColor: Colors.white,
                borderRadius: 50,
                marginLeft: -17,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={styles.smImg1}
              />
            </View>
            <View
              style={{
                padding: 2,
                backgroundColor: Colors.white,
                borderRadius: 50,
                marginLeft: -17,
              }}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={styles.smImg2}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FaouriteCard;

const styles = StyleSheet.create({
  fevCard: {
    width: '100%',
    height: 150,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    // justifyContent:'center',
    // alignItems:'center'
  },
  img: {
    width: 110,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  leftSection: {
    // borderRadius:20
  },
  petName: {
    fontSize: scale(20),
    fontFamily: 'Montserrat-Bold',
    color: Colors.hed,
  },
  sheltorName: {
    fontSize: scale(12),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.para,
  },
  rightCard: {
    marginLeft: moderateScale(15),
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  smImg: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'red',
  },
  smImg1: {
    width: 45,
    height: 45,
    borderRadius: 45,
    // marginLeft:-15,
    // zIndex:99,
    // padding:20,
    // backgroundColor:'red'
  },
  smImg2: {
    width: 45,
    height: 45,
    borderRadius: 45,
    // marginLeft:-15,
    zIndex: 9999,
  },
  smImgSection: {
    flexDirection: 'row',
  },
  heartIcon: {
    width: 30,
    height: 30,
    tintColor: 'red',
    marginTop: moderateScale(-20),
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
});
