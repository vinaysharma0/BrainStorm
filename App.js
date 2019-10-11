import React, { Component } from 'react'
import { View, StatusBar, ImageBackground, StyleSheet, Image } from 'react-native';
import Navigator from './Components/drawer/'
import Login from './Components/Login';
import Register from './Components/Register';


export default class App extends Component {


  render() {


    return (

      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#00b8ff" barStyle="light-content" />
        <Navigator />
        {/* <ImageBackground source={require('./Components/logo/BRAINSTORM_logo2.png')} style={styles.backgroundImage} > */}{/* </ImageBackground> */}
        {/* <Register/> */}
        {/* <Login /> */}
      </View>
    )

  }


}
// const styles = StyleSheet.create({

//   backgroundImage: {
//     width: '100%',
//     height: '100%',
//     flex: 1,
//     resizeMode: 'cover',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -100 }, { translateY: -100 }],
//     opacity: 0.3
  // },
// })

