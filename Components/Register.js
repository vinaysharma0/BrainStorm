import React, { Component } from 'react'
import { Text, View,KeyboardAvoidingView, Image, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import fire from './Config';



class Register extends Component {
    constructor() {
        super()
    
        this.state = {
             email:'',
             password:''
        }
        this.fields = [{
            fieldName:'Name',
            method:this.changeName
        },
        {
            fieldName:'Email',
            method:this.changeEmail
        },
        {
            fieldName:'College',
            method:this.changeCollege
        },
        {
            fieldName:'Password',
            method:this.changePassword
        }]
    }

    changeEmail = val => {
        this.setState({
            email:val
        })
    }
    changePassword = val => {
        this.setState({
            password:val
        })
    }
    // changeEmail = val => {
    //     this.setState({
    //         email:val
    //     })
    // }
    // changePassword = val => {
    //     this.setState({
    //         password:val
    //     })
    // }

    handleSubmit = () => {
        console.log('function')
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>console.log('You are successfully registered!!'))
        .catch((error)=>console.log(error))
    }

    
    
    render() {
        console.log(this.state)
        return (
            
            <ImageBackground source={require('./logo/login_background.png')} style={styles.backgroundImage}>
                
                <View style={{ alignSelf: 'center' }}>
                    <KeyboardAvoidingView behavior = "position">
                    <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../Components/logo/BRAINSTORM_logo.png')} />
                    </View>
                    <View>
                        {
                            this.fields.map((item) => {
                                return (
                                    <View>
                                        <Text style={{ textAlign: 'left', fontSize: 15 }}>{item.fieldName}</Text>
                                        <TextInput placeholder={item.fieldName} style={styles.textInput}
                                        onChangeText={item.method}
                                         />
                                    </View>
                                )
                            })

                        }
                    </View>
                    <View>
                        <TouchableHighlight underlayColor= 'grey' 
                            onPress={this.handleSubmit}
                         style={styles.btn}>
                            <Text style={{color:'white', textAlign: 'center', paddingTop: 8, fontSize: 20 }}>Sign Up</Text>
                        </TouchableHighlight>
                        <Text>Already have an Account ?</Text>
                        <TouchableHighlight underlayColor= 'grey' onPress={() => show()} style={styles.btn}>
                            <Text style={{color:'white', textAlign: 'center', paddingTop: 8, fontSize: 20 }}>Login</Text>
                        </TouchableHighlight>
                    </View>
                    </KeyboardAvoidingView>
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
