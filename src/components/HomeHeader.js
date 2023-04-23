import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Request from 'axios';

const HomeHeader = () => {
  const navigation = useNavigation();
  const [latData, setlatData] = useState();
  const [longData, setlongData] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState()
  const [state, setState] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const longVal = await AsyncStorage.getItem('longVal');
        const latVal = await AsyncStorage.getItem('latVal');
        if (longVal !== null && latVal !== null) {
          setlatData(JSON.parse(latVal));
          setlongData(JSON.parse(longVal));
        }
      } catch (e) {
        // error reading value
        console.log(e);
      }
    };

    console.log('-->', address);
    getData();
  }, []);

  useEffect(() => {
    getAddress();
  }, [latData, longData]);

  const getAddress = () => {
    // `https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat=${latData}&lng=${longData}`,
    if (latData != undefined && longData != undefined) {
      Request.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latData}&longitude=${longData}&localityLanguage=IN`,
        // {
        //   headers: {
        //     'X-RapidAPI-Key':
        //       'c8a209300dmsh7faeb752ca93a74p1a69c7jsn2d8f6533a48b',
        //     'X-RapidAPI-Host':
        //       'address-from-to-latitude-longitude.p.rapidapi.com',
        //   },
        // },
      )
        .then(res => {
          // console.log('res', res?.data?.principalSubdivision);
          setAddress(res?.data?.locality);
          setCity(res?.data?.city);
          setState(res?.data?.principalSubdivision)
        })
        .catch(err => {
          console.log('Error Getting in Location api: ', err);
        });
    }
  };

  // console.log('-->', address?.split(' ').slice(0, 2).join(' '));

  // console.log(`lang${longData} and lat ${latData}`);
  return (
    <View>
      <View style={styles.homeHeaderSection}>
        <View style={styles.leftSection}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('ProfileScreen')}
            style={{
              borderWidth: 2,
              borderColor: Colors.primary,
              borderRadius: 50,
            }}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              }}
              style={styles.profileimg}
            />
          </TouchableOpacity>
          <View style={styles.middleSection}>
            <View style={styles.iconWithText}>
              <Text style={styles.locationText}>Location</Text>
              <Image
                source={require('../assets/icon/down.png')}
                style={styles.downImg}
              />
            </View>
            <Text style={styles.locOutText}>
              {address}, {city}, {state}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnNotification}
          onPress={() => navigation.navigate('NotificationScreen')}>
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
  profileimg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  homeHeaderSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: moderateScale(10),
    width: '100%',
  },
  middleSection: {
    paddingLeft: moderateScale(10),
  },
  locationText: {
    fontSize: scale(13),
    fontFamily: 'Poppins-SemiBold',
    lineHeight: scale(20),
    textAlign: 'center',
    color: Colors.para,
  },
  downImg: {
    marginLeft: moderateScale(5),
    width: 20,
    height: 20,
  },
  locOutText: {
    fontSize: scale(12),
    fontFamily: 'Poppins-SemiBold',
    lineHeight: scale(20),
    color: Colors.hed,
    width: 220,
  },
  notificationImg: {
    width: 20,
    height: 20,
    // tintColor:Colors.black
  },
  btnNotification: {
    padding: moderateScale(15),
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
});
