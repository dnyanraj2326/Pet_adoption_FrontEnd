import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FaouriteCard from '../components/FaouriteCard';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import menu from '../assets/icon/menu.png';
import {useSelector} from 'react-redux';

const FaouriteScreen = () => {
  const [allFevData, setAllFevData] = useState([]);
  const fevStoreData = useSelector(state => state.reducer);

  useEffect(() => {
    setAllFevData(fevStoreData);
  }, [fevStoreData]);

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View>
          <Text style={styles.hedTextSty}>Favorite</Text>
          <Text style={styles.subTextSty}>
            You have all favorite pet's hear.
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.rightHedIcon}>
          <Image source={menu} style={{width: 18, height: 18}} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: moderateScale(100)}}>
          {allFevData.length !== 0 ? (
            allFevData?.map((item, ind) => <FaouriteCard item={item} key={String(ind)} />)
          ) : (
            <Text style={styles.dataNotFound}>Data Not Found</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default FaouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    backgroundColor: Colors.bg,
    paddingVertical: moderateScale(20),
  },
  hedTextSty: {
    color: Colors.black,
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  rightHedIcon: {
    padding: 12,
    backgroundColor: '#85CDFD',
    borderRadius: 12,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  subTextSty: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
    marginTop: moderateScale(5),
  },
  dataNotFound: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    marginTop: moderateScale(200),
    textAlign: 'center',
  },
});
