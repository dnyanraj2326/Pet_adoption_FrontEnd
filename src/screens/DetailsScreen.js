import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../constant/Colors';
import ImgDetails from '../components/ImgDetails';
import ContaintDetails from '../components/ContaintDetails';
import {moderateScale} from 'react-native-size-matters';
import PetImagesSection from '../components/PetImagesSection';

const DetailsScreen = ({route}) => {
  const {
    petUrl,
    petName,
    petAge,
    gender,
    distance,
    ownDetails,
    about,
    breed,
    address,
    item,
  } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}> */}
      <View style={{flex: 1}}>
        <View>
          <ImgDetails petUrl={petUrl} />
        </View>
        <View style={styles.containt}>
          <ContaintDetails
            petName={petName}
            petAge={petAge}
            gender={gender}
            distance={distance}
            petUrl={petUrl}
            ownDetails={ownDetails}
            about={about}
            breed={breed}
            address={address}
            item={item}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  containt: {
    // position:'absolute',
    width: '100%',
    flex: 1,
    marginTop: -30,
    zIndex: 1,
    // borderRadius:20
    // paddingHorizontal:moderateScale(15)
  },
});
