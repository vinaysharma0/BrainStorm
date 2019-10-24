import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TextInput, ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import fire from './Config';
import AsyncStorage from '@react-native-community/async-storage'
import Loader from './loader';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            loading: false,
        }

    }

    createAcc = () => this.props.navigation.navigate('Register')

    changeEmail = val => this.setState({ email: val })

    changePassword = val => this.setState({ password: val })

    handleSubmit = () => {
        if ((this.state.email && this.state.password) != "") {
            this.setState({
                loading: true
            })
            fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((user) => {
                    console.log('logged in')
                    console.log(user.user.uid);
                    AsyncStorage.setItem('access_token', user.user.uid)
                    this.setState({
                        loading: false
                    })
                    this.props.navigation.navigate('MySubjects')

                }
                )
                .catch((error) => {
                    this.setState({
                        loading: false
                    })
                    alert(error)
                })
        }
        else {
            alert('Fill all the Mandatory Fields !')
        }
    }

    render() {
        return (
            <>

                {
                    this.state.loading ? <Loader /> :


                        <ImageBackground source={require('./logo/login_background.png')} style={styles.backgroundImage}>
                            <ScrollView>

                                <View style={styles.container}>

                                    <View style={{ alignSelf: 'center' }}>
                                        <Image source={require('../Components/logo/BRAINSTORM_logo.png')} />
                                    </View>

                                    <View style={{ alignSelf: 'center' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Email</Text>
                                        <TextInput placeholder='Enter your Email' style={styles.textInput}
                                            onChangeText={this.changeEmail}
                                        />
                                    </View>
                                    <View style={{ alignSelf: 'center' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Password</Text>
                                        <TextInput secureTextEntry={true} placeholder='Enter your Password' style={styles.textInput}
                                            onChangeText={this.changePassword}
                                        />
                                    </View>
                                    <View>
                                        <TouchableOpacity underlayColor='grey' onPress={this.handleSubmit} style={styles.loginbtn}>
                                            <Text style={styles.loginbtnText}>Login</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{ paddingTop: 20 }}>
                                        <Text style={{ marginLeft: 10, alignSelf: 'center' }}>Don't have an Account ? </Text>
                                        <TouchableOpacity underlayColor='grey' onPress={this.createAcc} style={styles.singUpbtn}>
                                            <Text style={styles.signUpbtnText}>Create An Account</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </ImageBackground>

                }

            </>
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
    loginbtnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 8
    },
    signUpbtnText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 8
    },
    loginbtn: {
        backgroundColor: '#3399ff',
        height: 40,
        borderRadius: 10,
        width: 200,
        alignSelf: 'center',
        marginTop: 20
    },
    singUpbtn: {
        borderWidth: 2,
        height: 40,
        borderRadius: 10,
        width: 200,
        alignSelf: 'center',
        marginTop: 20
    },
    backgroundImage: {
        flexGrow: 1,
        resizeMode: 'cover',
    },
    container: {
        alignSelf: 'center',
    },
})
export default Login
