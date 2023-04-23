import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import {useNavigation} from '@react-navigation/native';
import Request from 'axios';

const Sheltors = () => {
  const navigation = useNavigation();
  const [petOwnerData, setPetOwnerData] = useState([]);

  const getData = async () => {
    Request.get(`http://192.168.0.105:8080/petOwner`)
      .then(res => {
        //   console.log("first",res.data)
        setPetOwnerData(res.data);
      })
      .catch(err => {
        console.log('Error Getting in Pets owner api: ', err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {petOwnerData?.map((item, ind) => (
        <TouchableOpacity
          key={String(ind)}
          activeOpacity={0.7}
          style={styles.card}
          onPress={() =>
            navigation.navigate('NgoSheltorDetailsScreen', {
              ownNgoname: item?.ownNgoname,
              ownName: item?.ownName,
              address: item?.address,
              city: item?.city,
              state: item?.state,
              pincode: item?.pincode,
              ownImg: item?.ownImg[0],
              ownNum: item?.ownNum,
              sheltors: item?.sheltors,
              totalAvailablePets: item?.totalAvailablePets,
              adopted: item?.adopted,
            })
          }>
          <Image
            source={{
              uri: item?.thumbnail[0],
            }}
            style={styles.topImg}
          />
          <View style={styles.selterDetails}>
            <Image
              source={{
                uri: item?.ownImg[0],
              }}
              style={styles.personImg}
            />
            <View style={styles.textContainer}>
              <Text style={styles.nameTextSty}>{item?.ownName}</Text>
              <Text style={styles.sheltorTextSty}>{item?.ownNgoname}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {/* <TouchableOpacity activeOpacity={0.7} style={styles.card}>
        <Image source={{uri:'https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} style={styles.topImg} />
        <View style={styles.selterDetails}>
        <Image source={{uri:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} style={styles.personImg} />
        <View style={styles.textContainer}>
            <Text style={styles.nameTextSty}>Anita Tiwari</Text>
            <Text style={styles.sheltorTextSty}>Karma Foundation</Text>
        </View>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default Sheltors;

const styles = StyleSheet.create({
  container: {
    // width:'100%'
    flexDirection: 'row',
    alignItems: 'center',
  },
  topImg: {
    width: '100%',
    height: 120,
    borderRadius: 20,
  },
  card: {
    width: 300,
    // height:300,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 20,
    marginRight: 20,
  },
  personImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  selterDetails: {
    flexDirection: 'row',
    marginTop: moderateScale(10),
    alignItems: 'center',
  },
  nameTextSty: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: Colors.hed,
  },
  sheltorTextSty: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.para,
  },
  textContainer: {
    marginLeft: moderateScale(10),
  },
});
