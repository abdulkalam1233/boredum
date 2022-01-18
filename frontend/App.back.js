// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   ActivityIndicator,
//   Alert,
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   // DebugInstructions,
//   Header,
//   // LearnMoreLinks,
//   // ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   loaderComponent: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   horizontal: {
//     flexDirection: 'row',
//     padding: 10,
//     justifyContent: 'space-around',
//   },
//   button: {
//     width: '1%',
//   },
// });

// const DATA = [{
//   id: 1,
//   title: "Kalam",
// }]

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const renderItem = (item) => {
//     return (<Text>item.title</Text>)
//   }
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             <Text>Hello world!!!</Text>
//           </Section>
//           <View style={[styles.loaderComponent, styles.horizontal]}>
//             <ActivityIndicator />
//             <ActivityIndicator size="large" />
//             <ActivityIndicator size="small" color="red" />
//           </View>
//         </View>
//         <Button
//           onPress={() => Alert.alert('Button with adjusted color pressed')}
//           title={'Magic'}
//           color={'red'}
//           style={styles.button}
//           // disabled={true}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {AuthNavigator} from './app/navigators/AuthNavigator';
// import AppInputText from './app/components/AppInputText.js';
// import ImageInputList from './app/components/ImageInputList.js';
// import ImageInput from './app/components/ImageInput.js';
// import CardDetailsScreen from './app/screens/CardDetailsScreen.js';
// import CardScreen from './app/screens/CardScreen.js';
// import LoginScreen from './app/screens/LoginScreen.js';
// import MessagesScreen from './app/screens/MessagesScreen.js';
// import RegisterScreen from './app/screens/RegisterScreen.js';
// import ViewImageScreen from './app/screens/ViewImageScreen.js';
// import WelcomeScreen from './app/screens/WelcomeScreen.js';

const App = () => {
  // return <ViewImageScreen />;
  // return <CardScreen />;
  // return (
  //   <CardDetailsScreen
  //     title={'Shirt for sale'}
  //     subtitle={'$100'}
  //     image={require('./app/assets/shirt.png')}
  //   />
  // );
  // return <MessagesScreen />;
  // return <AppInputText icon="email" placeholder="email" />;
  // return <LoginScreen />;
  // return <RegisterScreen />
  // const [imageUris, setImageUris] = React.useState([]);
  // return (
  //   // <ImageInput imageUri={imageUris} onChangeImage={uri => setImageUri(uri)} />
  //   <ImageInputList
  //     imageUris={imageUris}
  //     onRemoveImage={index => {
  //       setImageUris(
  //         imageUris.filter((url, indx) => {
  //           if (indx !== index) {
  //             return url;
  //           }
  //         }),
  //       );
  //     }}
  //     onAddImage={uri => {
  //       setImageUris([...imageUris, uri]);
  //     }}
  //   />
  // );

  return <NavigationContainer>{AuthNavigator()}</NavigationContainer>;
};

export default App;
