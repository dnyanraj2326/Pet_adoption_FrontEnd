import {StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';
import React, {useRef,useState} from 'react';
import Video from 'react-native-video';
import { moderateScale, scale } from 'react-native-size-matters';

const PetsVideos = () => {
  let windowWidth = Dimensions.get('window').width;
  const [isPlay, setIsPlay] = useState(false);
  const player = useRef(null);
  return (
    <View style={styles.container}>
      <Text style={styles.aboutHed}>Pet's Video</Text>
        <Video
          // controls={true}
          source={require('../assets/videos/dog1.mp4')}
          onBuffer={() => {}}
          onError={() => {}}
          resizeMode="cover"
          paused={isPlay}
          ref={player}
          onLoad={() => {
            player.current.seek(0);
          }}
          style={{
            height: 200,
            width: '100%',
            borderRadius: 10,
            // marginTop:moderateScale(10)
          }}
        />
    </View>
  );
};

export default PetsVideos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     marginBottom:moderateScale(10)
  },
  aboutHed: {
    fontSize: scale(20),
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
    marginBottom:moderateScale(10),
    marginVertical:moderateScale(25)
  },
});
