import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';

const ImgDetails = ({petUrl}) => {
  return (
    <View style={styles.imgSection}>
      <View>
        <Image
          source={{
            uri: petUrl,
          }}
          style={styles.mainImg}
        />
      </View>
      <View style={styles.iconSection}>
        <TouchableOpacity style={styles.leftICon}>
          <Image
            source={require('../assets/icon/BackIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftICon}>
          <Image
            source={require('../assets/icon/Dots.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImgDetails;

const styles = StyleSheet.create({
  mainImg: {
    width: '100%',
    height: 380,
    resizeMode: 'cover',
  },
  imgSection: {
    // flex:1
  },
  iconSection: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  leftICon: {
    padding: moderateScale(7),
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
});
