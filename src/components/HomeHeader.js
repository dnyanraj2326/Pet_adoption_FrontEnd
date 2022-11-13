import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale,scale} from 'react-native-size-matters'
import Colors from '../constant/Colors';


const HomeHeader = () => {
  return (
    <View>
      <View style={styles.homeHeaderSection}>
        <View style={styles.leftSection}>
          <Image
            source={require('../assets/images/profile.jpg')}
            style={styles.profileimg}
          />
          <View style={styles.middleSection}>
            <View style={styles.iconWithText}>
              <Text style={styles.locationText}>Location</Text>
              <Image
                source={require('../assets/icon/down.png')}
                style={styles.downImg}
              />
            </View>
            <Text style={styles.locOutText}>Baner Rd, Pune</Text>
          </View>
        </View>
       <TouchableOpacity activeOpacity={0.5} style={styles.btnNotification}>
       <Image
            source={require('../assets/icon/notification.png')}
            style={styles.notificationImg}
          />
       </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  profileimg:{
    width:50,
    height:50,
    borderRadius:50
  },
  leftSection:{
    flexDirection:'row',
    alignItems:'center'
  },
  iconWithText:{
    flexDirection:'row',
    alignItems:'center'
  },

  homeHeaderSection:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingBottom:moderateScale(10)
  },
  middleSection:{
    paddingLeft:moderateScale(20)
  },
  locationText:{
    fontSize: scale(13),
    fontFamily: 'Poppins-SemiBold',
    lineHeight: scale(20),
    textAlign: 'center',
    color: Colors.para,
  },
  downImg:{
    marginLeft:moderateScale(5),
    width:20,
    height:20,
  },
  locOutText:{
    fontSize: scale(14),
    fontFamily: 'Poppins-SemiBold',
    lineHeight: scale(20),
    textAlign: 'center',
    color: Colors.hed,
  },
  notificationImg:{
    width:20,
    height:20,
    // tintColor:Colors.black
  },
  btnNotification:{
    padding:moderateScale(15),
    backgroundColor:Colors.white,
    borderRadius:10
  }

});
