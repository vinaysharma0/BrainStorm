import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';

show = () => {
    alert('clicked')
}
const fields = ['Name','Email', 'College', 'Password']

class Register extends Component {
    render() {
        return (
            
            <ImageBackground source={require('./logo/login_background.png')} style={styles.backgroundImage}>
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../Components/logo/BRAINSTORM_logo.png')} />
                    </View>
                    <View>
                        {
                            fields.map((item) => {
                                return (
                                    <View>
                                        <Text style={{ textAlign: 'left', fontSize: 15 }}>{item}</Text>
                                        <TextInput placeholder={item} style={styles.textInput} />
                                    </View>
                                )
                            })

                        }
                    </View>
                    <View>
                        <TouchableHighlight underlayColor= 'grey' onPress={() => show()} style={styles.btn}>
                            <Text style={{color:'white', textAlign: 'center', paddingTop: 8, fontSize: 20 }}>Sign Up</Text>
                        </TouchableHighlight>
                        <Text>Already have an Account ?</Text>
                        <TouchableHighlight underlayColor= 'grey' onPress={() => show()} style={styles.btn}>
                            <Text style={{color:'white', textAlign: 'center', paddingTop: 8, fontSize: 20 }}>Login</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
            
        )
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 50,
        width: 300,
        borderColor: 'black',
        textAlign: 'center',
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1
    },
    btn: {
        backgroundColor: '#3399ff',
        height: 40,
        borderRadius: 10,
        width: 200,
        alignSelf: 'center',
        marginTop: 20,
        

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'

    }
})
export default Register
