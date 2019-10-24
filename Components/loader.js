import React, { Component } from 'react'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators'
import { StyleSheet, Text,Image ,  View } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen';
class Loader extends Component {
    state = {
        showIndicator: true,
    };
    render() {
        console.log(this.props,'props')
        return (
            <View style={{height:'100%'}}>
                <Image source = {require('../Components/logo/BRAINSTORM_logo2.png')} style={styles.img}/>
                <View style={styles.indicator}>   
                    <PulseIndicator waveFactor={8} size={70} color="#00b8ff" />
                    <Text>&nbsp;</Text>
                    <Text>Please Wait !</Text>
                </View>
                </View>
        )
    }
}




const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -30 }, { translateY: -1 }],
        alignSelf: 'center',
        flexDirection: 'column',
    },
    img:{
        position: 'absolute',
        top: '20%',
        alignSelf : 'center',
    }
});

export default Loader
