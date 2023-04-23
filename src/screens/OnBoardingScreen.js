// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Button,
// } from 'react-native';
// import React from 'react';
// import Onboarding from 'react-native-onboarding-swiper';
// import {useNavigation} from '@react-navigation/native';
// import Colors from '../constant/Colors';

// const Skip = ({...props}) => (
//   <TouchableOpacity style={{marginLeft: 20}} {...props}>
//     <Text
//       style={{
//         color: Colors.hed,
//         fontSize: 17,
//         fontFamily: 'Montserrat-SemiBold',
//       }}>
//       Skip
//     </Text>
//   </TouchableOpacity>
// );
// const Next = ({...props}) => (
//   <TouchableOpacity style={{marginRight: 20}} {...props}>
//     <Text
//       style={{
//         color: Colors.hed,
//         fontSize: 17,
//         fontFamily: 'Montserrat-SemiBold',
//       }}>
//       Next
//     </Text>
//   </TouchableOpacity>
// );

// const Dot = ({selected}) => {
//   let backgroundColor;
//   backgroundColor = selected ? Colors.hed : Colors.para;
//   return (
//     <View
//       style={{
//         width: selected ? 20 : 7,
//         height: 7,
//         marginHorizontal: 3,
//         borderRadius: 10,
//         backgroundColor,
//       }}
//     />
//   );
// };

// const Done = ({...props}) => (
//   <TouchableOpacity style={{marginRight: 20,paddingHorizontal:20,paddingVertical:12,backgroundColor:Colors.primary,borderRadius:10}} {...props}>
//     <Text
//       style={{
//         color: Colors.hed,
//         fontSize: 17,
//         fontFamily: 'Montserrat-Bold',
//         letterSpacing:0.5
//       }}>
//       Finish
//     </Text>
//   </TouchableOpacity>
// );

// const OnBoardingScreen = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={{flex: 1, backgroundColor: Colors.primary}}>
//       <Onboarding
//         onSkip={() => navigation.navigate('Login')}
//         onDone={() => navigation.navigate('Login')}
//         SkipButtonComponent={Skip}
//         NextButtonComponent={Next}
//         DotComponent={Dot}
//         DoneButtonComponent={Done}
//         titleStyles={{
//           color: Colors.hed,
//           fontSize: 25,
//           fontFamily: 'Montserrat-SemiBold',
//         }}
//         subTitleStyles={{
//           color: Colors.hed,
//           fontSize: 14,
//           fontFamily: 'Poppins-SemiBold',
//         }}
//         pages={[
//           {
//             backgroundColor: '#fff',
//             image: (
//               <Image
//                 source={require('../assets/images/cat1.png')}
//                 style={{resizeMode: 'center', height: 500, marginTop:-100}}
//               />
//             ),
//             title: "ADOPT DON'T SHOP",
//             subtitle: 'Take me home with you, Give them a beautiful life with you',
//           },
//           {
//             backgroundColor: '#fff',
//             image: (
//               <Image
//                 source={require('../assets/images/dog1.jpg')}
//                 style={{resizeMode: 'center', height: 400}}
//               />
//             ),
//             title: 'Need You Love',
//             subtitle:
//               'Meet Daisy, a sweet and loving shelter pup who is still waiting for her forever home. Daisy, like so many other shelter pets, has so much love to give and deserves a chance at a happy life. Lets work together to give animals like Daisy the loving homes they deserve. ',
//           },
//           {
//             backgroundColor: '#fff',
//             image: (
//               <Image
//                 source={require('../assets/images/dog3.png')}
//                 style={{resizeMode: 'center', height: 400}}
//               />
//             ),
//             title: 'Onboarding',
//             subtitle: 'Done with React Native Onboarding Swiper',
//           },
//         ]}
//       />
//     </View>
//   );
// };

// export default OnBoardingScreen;

// const styles = StyleSheet.create({});
