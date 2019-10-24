import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Image } from 'react-native-animatable';
import Navigator from './drawer'
import AsyncStorage from '@react-native-community/async-storage';


class SplashScreen extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        
        try {
            setTimeout(

                () => {
                    AsyncStorage.getItem('access_token').then((token)=>{
                    token!=null ?
                        this.props.navigation.navigate('MySubjects')
                    :
                        this.props.navigation.navigate('Login')}
                    
            )}, 2000)
        
        }
        catch{
            alert('There is something Wrong , Please try again !')
        }
    }
    
    render() {
        
        return (
            <View style={styles.viewStyles}>
                <Text style={styles.textStyles} animation="zoomIn">Brain Storm</Text>
                <Image style={styles.imgStyles} source={img_url} animation="fadeInUpBig"></Image>
                <Text animation="fadeInUpBig" style={{ position: 'absolute', bottom: '2%', color: '#00b8ff' }}>Let's Make Your Learning Easy !</Text>
            </View>
        );
    }
}

const img_url = require('./logo/BRAINSTORM_logo2.png')

const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    imgStyles: {
        position: 'absolute',
        top: '20%',
        alignItems: 'center',
    },
    textStyles: {
        position: 'absolute',
        bottom: '20%',
        color: 'lightgrey',
        fontSize: 40,
        fontWeight: 'bold'
    }
}

export default SplashScreen;