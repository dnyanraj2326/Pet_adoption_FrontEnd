import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.categoriesSection}>
      <TouchableOpacity onPress={() => navigation.navigate('NgoSheltor')} style={styles.card}>
          <View style={styles.imgStyle}>
            <Image
              source={require('../assets/images/ngo.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.petsName}>NGO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DogScreen')} style={styles.card}>
          <View style={styles.imgStyle}>
            <Image
              source={require('../assets/images/dog.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.petsName}>Dog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CatScreen')}>
          <View style={styles.imgStyle}>
            <Image
              source={require('../assets/images/cat.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.petsName}>Cat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CowScreen')}>
          <View style={styles.imgStyle}>
            <Image
              source={require('../assets/images/cow.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.petsName}>Cow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('FishScreen')}>
          <View style={styles.imgStyle}>
            <Image
              source={require('../assets/images/fish.png')}
              style={styles.img}
            />
          </View>
          <Text style={styles.petsName}>Fish</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(30),
    marginTop:moderateScale(15)
  },
  categoriesSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
  card: {
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 50,
    // borderWidth:1,
    borderColor: Colors.hed,
    marginRight:moderateScale(20)
  },
  petsName: {
    marginVertical: moderateScale(8),
    fontSize: scale(13),
    fontFamily: 'Poppins-SemiBold',
    lineHeight: scale(20),
    textAlign: 'center',
    color: Colors.hed,
  },
  imgStyle: {
    padding: 8,
    backgroundColor: "#DEF5E5",
    borderRadius: 50,
  },
});
