import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Colors from '../constant/Colors';
import {moderateScale} from 'react-native-size-matters';

const PetImgGallery = ({route}) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const bottomRef = useRef();
  const topRef = useRef();
  const {petUrl} = route.params;
  const {height, width} = Dimensions.get('screen');

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        ref={topRef}
        onScroll={e => {
          const index = (e.nativeEvent.contentOffset.x / width).toFixed(0);
          setSelectIndex(index);
          bottomRef.current.scrollToIndex({animated: true, index: index});
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={petUrl}
        renderItem={({item, ind}) => {
          return (
            <Image
              source={{uri: item}}
              style={{width: width, height: height}}
            />
          );
        }}
      />
      <View style={{position: 'absolute', bottom: 40}}>
        <FlatList
          horizontal
          pagingEnabled
          ref={bottomRef}
          initialScrollIndex={selectIndex}
          showsHorizontalScrollIndicator={false}
          data={petUrl}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: moderateScale(10),
                }}
                onPress={() => {
                  setSelectIndex(index),
                    topRef.current.scrollToIndex({
                      animated: true,
                      index: index,
                    });
                }}>
                <Image
                  source={{uri: item}}
                  style={{
                    width: selectIndex == index ? 90 : 70,
                    height: selectIndex == index ? 90 : 70,
                    borderRadius: 20,
                    borderColor: Colors.white,
                    borderWidth: selectIndex == index ? 2 : 1,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default PetImgGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainImg: {
    // flex:1,
    // width:'100%',
    // height:'100%'
  },
});
