import {StyleSheet, Text, View, Image, TouchableOpacity,ScrollView} from 'react-native';
import React,{useEffect,useState} from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import Request from 'axios';

const NgoSheltor = () => {
    const navigation = useNavigation();
    const [petOwnerData, setPetOwnerData] = useState([])
    

    const getData = async () => {
      Request.get(
        `http://192.168.0.105:8080/petOwner`)
        .then(res => {
          console.log("first",res.data)
          setPetOwnerData(res.data)
        })
        .catch(err => {
          console.log('Error Getting in Ngo Users api: ', err);
        });
    };

    useEffect(() => {
      getData()
    }, [])

  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            petOwnerData?.map((item,ind) => (
      <View style={styles.cardSection} key={String(ind)}>
        <TouchableOpacity activeOpacity={0.8} style={styles.ngoCard} onPress={() => navigation.navigate("NgoSheltorDetailsScreen",{
          ownNgoname:item?.ownNgoname,
          ownName:item?.ownName,
          address:item?.address,
          city:item?.city,
          state:item?.state,
          pincode:item?.pincode,
          ownImg:item?.ownImg[0],
          ownNum:item?.ownNum,
          sheltors:item?.sheltors,
          totalAvailablePets:item?.totalAvailablePets,
          adopted:item?.adopted
        })}>
          <Image
            source={{uri: item?.ownImg[0]}}style={styles.ngoImg}
          />
          <View style={styles.nameSection}>
            <Text style={styles.ngoName}>{item?.ownNgoname}</Text>
            <Text style={styles.founderName}>{item?.ownName}</Text>
          </View>
          <View style={styles.addressWithIcon}>
            <Image
              source={require('../assets/icon/locatinIcon.png')}
              style={styles.locationIcon}
            />
            <Text style={styles.addressText}>
            {item?.address}, {item?.city}, {item?.state}, {item?.pincode}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
       ))
      }
      </ScrollView>
    </View>
  );
};

export default NgoSheltor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    marginTop:moderateScale(10)
  },
  cardSection: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(50),
    paddingBottom:moderateScale(20)
  },
  ngoImg: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(50),
    alignSelf: 'center',
    marginTop: -50,
  },
  ngoCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    elevation: 9,
    paddingBottom: moderateScale(20),
    paddingHorizontal: moderateScale(30),
  },
  founderName: {
    fontSize: scale(11),
    fontFamily: 'Poppins-SemiBold',
    color: '#0081C9',
    textAlign: 'center',
  },
  ngoName: {
    fontSize: scale(18),
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
    textAlign: 'center',
  },
  nameSection: {
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  locationIcon: {
    width: 22,
    height: 22,
  },
  addressWithIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: moderateScale(5),
  },
  addressText: {
    fontSize: scale(12),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.para,
    textAlign: 'center',
    marginLeft: moderateScale(4),
  },
});
