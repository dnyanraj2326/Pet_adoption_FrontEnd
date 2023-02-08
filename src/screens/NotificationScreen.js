import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import menu from '../assets/icon/menu.png';
import redDot from '../assets/icon/redDot.png';
import profile from '../assets/images/profile.jpg';
import petsaddo from '../assets/images/petsaddo.png';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.notificationHed}>
        <View>
          <Text style={styles.textSty}>Notification</Text>
          <Text style={styles.subTextSty}>
            You have <Text style={{color: '#0081C9'}}>3 Notification</Text>{' '}
            today.
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.rightHedIcon}>
          <Image source={menu} style={{width: 18, height: 18}} />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text style={styles.dayHed}>Today</Text>
          <View>
          <TouchableOpacity activeOpacity={0.6} style={styles.notification_card}>
            <View style={styles.left_card_section}>
              <Image source={redDot} style={{width: 12, height: 12}} />
              <Image
                source={profile}
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 50,
                  marginLeft: moderateScale(8),
                }}
              />
              <View style={{marginLeft: moderateScale(8)}}>
                <Text style={styles.card_top_text}>
                  <Text style={styles.owner_name}>Vinod Korale </Text>New pets
                  added
                </Text>
                <Text style={styles.card_bottom_text}>
                  032 - Collections Pet's - 2 h ago
                </Text>
              </View>
            </View>
            <Image
              source={petsaddo}
              style={{width: 65, height: 65, borderRadius: 10}}
            />
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          </View>
          <View>
          <TouchableOpacity activeOpacity={0.6} style={styles.notification_card}>
            <View style={styles.left_card_section}>
              <Image source={redDot} style={{width: 12, height: 12}} />
              <Image
                source={profile}
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 50,
                  marginLeft: moderateScale(8),
                }}
              />
              <View style={{marginLeft: moderateScale(8)}}>
                <Text style={styles.card_top_text}>
                  <Text style={styles.owner_name}>Vinod Korale </Text>New pets
                  added
                </Text>
                <Text style={styles.card_bottom_text}>
                  032 - Collections Pet's - 2 h ago
                </Text>
              </View>
            </View>
            <Image
              source={petsaddo}
              style={{width: 65, height: 65, borderRadius: 10}}
            />
          </TouchableOpacity>
          {/* <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          /> */}
          </View>
        </View>
        <View>
          <Text style={styles.dayHed}>This Week</Text>
          <View>
          <View style={styles.notification_card}>
            <View style={styles.left_card_section}>
              <Image source={redDot} style={{width: 12, height: 12}} />
              <Image
                source={profile}
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 50,
                  marginLeft: moderateScale(8),
                }}
              />
              <View style={{marginLeft: moderateScale(8)}}>
                <Text style={styles.card_top_text}>
                  <Text style={styles.owner_name}>Vinod Korale </Text>New pets
                  added
                </Text>
                <Text style={styles.card_bottom_text}>
                  032 - Collections Pet's - 2 h ago
                </Text>
              </View>
            </View>
            <Image
              source={petsaddo}
              style={{width: 65, height: 65, borderRadius: 10}}
            />
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          </View>
          <View>
          <View style={styles.notification_card}>
            <TouchableOpacity activeOpacity={0.6} style={styles.left_card_section}>
              <Image source={redDot} style={{width: 12, height: 12}} />
              <Image
                source={profile}
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 50,
                  marginLeft: moderateScale(8),
                }}
              />
              <View style={{marginLeft: moderateScale(8)}}>
                <Text style={styles.card_top_text}>
                  <Text style={styles.owner_name}>Vinod Korale </Text>New pets
                  added
                </Text>
                <Text style={styles.card_bottom_text}>
                  032 - Collections Pet's - 2 h ago
                </Text>
              </View>
            </TouchableOpacity>
            <Image
              source={petsaddo}
              style={{width: 65, height: 65, borderRadius: 10}}
            />
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          </View>
          <View>
          <View style={styles.notification_card}>
            <View style={styles.left_card_section}>
              <Image source={redDot} style={{width: 12, height: 12}} />
              <Image
                source={profile}
                style={{
                  width: 47,
                  height: 47,
                  borderRadius: 50,
                  marginLeft: moderateScale(8),
                }}
              />
              <View style={{marginLeft: moderateScale(8)}}>
                <Text style={styles.card_top_text}>
                  <Text style={styles.owner_name}>Vinod Korale </Text>New pets
                  added
                </Text>
                <Text style={styles.card_bottom_text}>
                  032 - Collections Pet's - 2 h ago
                </Text>
              </View>
            </View>
            <Image
              source={petsaddo}
              style={{width: 65, height: 65, borderRadius: 10}}
            />
          </View>
          {/* <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  textSty: {
    color: Colors.black,
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: moderateScale(20),
  },
  subTextSty: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
    marginTop: moderateScale(5),
  },
  notificationHed: {
    marginVertical: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightHedIcon: {
    padding: 12,
    backgroundColor: '#85CDFD',
    borderRadius: 12,
  },
  dayHed: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
    marginTop: moderateScale(10),
  },
  notification_card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(5),
    marginVertical: moderateScale(15),
  },
  left_card_section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_top_text: {
    fontSize: 11,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
  },
  owner_name: {
    fontSize: 11,
    fontFamily: 'Poppins-SemiBold',
    color: '#0081C9',
  },
  card_bottom_text: {
    fontSize: 11,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
  },
});
