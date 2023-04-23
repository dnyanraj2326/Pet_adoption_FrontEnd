import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Modal from 'react-native-modal';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import Share from 'react-native-share';
import { useNavigation } from '@react-navigation/native';

const PlayScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModelVisible, setIsModelVisible] = useState(false);
  const navigation = useNavigation()

  const pauseVideo = index => {
    if (selectedIndex == -1) {
      setSelectedIndex(index);
    } else {
      setSelectedIndex(-1);
    }
  };

  const toggalModal = () => {
    setIsModelVisible(!isModelVisible);
  };
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden/> */}
      <Modal
        onBackdropPress={() => setIsModelVisible(false)}
        onBackButtonPress={() => setIsModelVisible(false)}
        isVisible={isModelVisible}
        swipeDirection="down"
        onSwipeComplete={toggalModal}
        animationIn="fadeInUpBig"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}>
        <View style={styles.modelContent}>
          <View style={styles.barIcon} />
          <View style={styles.modalTextContent}>
            <View style={styles.userNameNdIcon}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={styles.profileIcon}
              />
              <View style={styles.textContainer}>
                <Text style={styles.userNameTextSty}>Karuna Wadekar</Text>
                <Text style={styles.userNgoTextSty}>Karma Foundation</Text>
              </View>
            </View>
            <View style={styles.hashTagSection}>
              <Text style={styles.hashTagText}>#DogLover</Text>
              <Text style={styles.hashTagText}>#puppy</Text>
              <Text style={styles.hashTagText}>#instadog</Text>
              <Text style={styles.hashTagText}>#dogstagram</Text>
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.descHedStyle}>Discription</Text>
              <Text style={styles.desctextStyle}>
                GiftedChat depends on other packages and some needs a boost,
                please vote for PRs will improve it, thanks, Gifted Chat uses
                onLayout to determine the height of the chat container. To
                trigger onLayout during your tests, you can run the following
                bits of code.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={[
          require('../assets/videos/v1.mp4'),
          require('../assets/videos/v2.mp4'),
          require('../assets/videos/v3.mp4'),
          require('../assets/videos/v4.mp4'),
          require('../assets/videos/v5.mp4'),
          require('../assets/videos/v7.mp4'),
          require('../assets/videos/v8.mp4'),
        ]}
        onScroll={e => {
          setSelectedIndex(
            e.nativeEvent.contentOffset.y.toFixed(0) /
              Dimensions.get('window').height,
          );
        }}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
              }}>
              <Video
                paused={selectedIndex.toFixed(0) == index ? false : true}
                source={item}
                resizeMode="cover"
                repeat={true}
                style={{
                  height: Dimensions.get('window').height,
                  width: Dimensions.get('window').width,
                }}
              />
              <TouchableOpacity
                style={styles.pauseBtn}
                onPress={() => pauseVideo(index)}>
                {selectedIndex == -1 && (
                  <Image
                    source={require('../assets/icon/pauseBtn.png')}
                    style={styles.pauseIcon}
                  />
                )}
              </TouchableOpacity>
              <View style={styles.rightSideBar}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("NgoSheltorDetailsScreen")}>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.profileIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image
                    source={require('../assets/icon/fireIcon.png')}
                    style={styles.likeBtn}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    const options = {
                      url:'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                      message:"Download Pet App now and hopes you love this app"
                    }
                    Share.open(options);
                  }}>
                  <Image
                    source={require('../assets/icon/shareIcon.png')}
                    style={styles.likeBtn}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={toggalModal}>
                  <Image
                    source={require('../assets/icon/bookmark.png')}
                    style={styles.likeBtn}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pauseBtn: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  pauseIcon: {},
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  rightSideBar: {
    position: 'absolute',
    bottom: 200,
    right: 10,
    height: 230,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  likeBtn: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modelContent: {
    backgroundColor: '#ffffff',
    minHeight: moderateScale(400),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: moderateScale(10),
  },
  barIcon: {
    width: moderateScale(60),
    height: moderateScale(6),
    backgroundColor: '#bbb',
    alignSelf: 'center',
    borderRadius: 5,
  },
  userNameTextSty: {
    fontSize: scale(18),
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
  },
  userNameNdIcon: {
    flexDirection: 'row',
    // justifyContent:"center",
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  textContainer: {
    marginLeft: moderateScale(10),
  },
  userNgoTextSty: {
    fontSize: scale(10),
    fontFamily: 'Poppins-SemiBold',
    color: '#0081C9',
  },
  modalTextContent: {
    paddingHorizontal: moderateScale(10),
  },
  descContainer: {
    marginVertical: moderateScale(10),
  },
  descHedStyle: {
    fontSize: scale(16),
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
  },
  desctextStyle: {
    fontSize: scale(12),
    fontFamily: 'Poppins-Normal',
    color: Colors.para,
    marginTop: moderateScale(5),
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  hashTagSection: {
    flexDirection: 'row',
    marginVertical: moderateScale(5),
  },
  hashTagText: {
    fontSize: scale(12),
    fontFamily: 'Poppins-Normal',
    color: Colors.para,
    marginTop: moderateScale(5),
    lineHeight: 20,
    letterSpacing: 0.5,
    marginRight: moderateScale(4),
  },
});
