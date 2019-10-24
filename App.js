import React, { Component } from 'react'
import { View, StatusBar, ImageBackground, StyleSheet, Image, Text } from 'react-native';
import Navigator from './Components/drawer/'
import Login from './Components/Login';
import Register from './Components/Register';
import { Provider } from 'react-redux'
import store from './store';
import MyDownloads from './Components/MyDownloads';
import SplashScreen from './Components/SplashScreen';
import Loader from './Components/loader'

export default class App extends Component {


  render() {
    

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#00b8ff" barStyle="light-content" />
          <Navigator />
          {/* <SplashScreen/>  */}
          {/* <ImageBackground source={require('./Components/logo/BRAINSTORM_logo2.png')} style={styles.backgroundImage} /> */}
          {/* <Loader/> */}
          {/* <Logout/> */}
        </View>
      </Provider>
    )

  }


}
const styles = StyleSheet.create({

  backgroundImage: {
    width: 180,
    height: 180,
    // flex: 1,
    zIndex: -100,
    resizeMode: 'cover',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -100 }],
    opacity: 0.3
  },
})

