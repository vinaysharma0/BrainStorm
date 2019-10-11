import React, { Component } from 'react'
import { Text, View, Image, TextInput, ImageBackground, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Navigate from './drawer/index'

show = () => {
    alert('clicked')
}



class Login extends Component {
    render() {
        return (

            <ImageBackground source={require('./logo/login_background.png')} style={styles.backgroundImage}>
                <View style={{ alignSelf: 'center' }}>

                    <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../Components/logo/BRAINSTORM_logo.png')} />
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Email</Text>
                        <TextInput placeholder='Enter your Email' style={styles.textInput} />
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Password</Text>
                        <TextInput secureTextEntry={true} placeholder='Enter your Password' style={styles.textInput} />
                    </View>
                    <View>
                        <TouchableHighlight underlayColor='grey' onPress={() => show()} style={styles.login}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ marginLeft: 10, alignSelf: 'center' }}>Don't have an Account ? </Text>
                        <TouchableHighlight underlayColor='grey' style={styles.login}>
                            <Text style={styles.btnText}>Create An Account</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 80,
        width: 300,
        borderColor: 'black',
        textAlign: 'center',
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 8
    },
    login: {
        backgroundColor: '#3399ff',
        height: 40,
        borderRadius: 10,
        width: 200,
        alignSelf: 'center',
        marginTop: 20
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    }
})
export default Login
