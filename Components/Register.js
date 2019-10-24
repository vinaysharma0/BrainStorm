import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, Image, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import fire from './Config';
import { registrationComplete } from './../actions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from './loader';

class Register extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            college: '',
            name: '',
            branch: '',
            semester: '',
            loading: false,
        }
        this.fields = [{
            fieldName: 'Name',
            method: this.changeName
        },
        {
            fieldName: 'Email',
            method: this.changeEmail
        },
        {
            fieldName: 'College',
            method: this.changeCollege
        },
        {
            fieldName: 'Branch',
            method: this.changeBranch
        },
        {
            fieldName: 'Semester',
            method: this.changeSemester
        },
        {
            fieldName: 'Password',
            method: this.changePassword
        },
        ]
    }

    changeEmail = val => {
        this.setState({
            email: val
        })
    }
    changePassword = val => {
        this.setState({
            password: val
        })
    }
    changeName = val => {
        this.setState({
            name: val
        })
    }
    changeCollege = val => {
        this.setState({
            college: val
        })
    }
    changeSemester = val => {
        this.setState({
            semester: val
        })
    }
    changeBranch = val => {
        this.setState({
            branch: val
        })
    }

    handleSubmit = () => {
        console.log('function')
        const {name,email,college,branch,semester,password} = this.state
        if ((email && password && branch && semester&& semester && college && name)!="") {
            this.setState({
                loading:true
            })
                fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((user) => {
                        this.setState({
                            loading:false
                        })
                        console.log(user.user.uid)
                        const {name, college, branch, semester} = this.state
                        fire.database().ref('users/' + user.user.uid).set({
                             name,
                             college,
                             branch,
                             semester
                          });
                        AsyncStorage.setItem('access_token',user.user.uid)
                        this.props.navigation.navigate('MySubjects')
                        this.props.registrationComplete(this.state)

                    })
                    .catch((err) => {
                        this.setState({
                            loading:false
                        })
                     alert(err)
                    }
                    )

       
        }

        else {
            alert('Fill all the Mandatory Fields !')
        }


    }
    login = () => {
        this.props.navigation.navigate('Login')
    }


    render() {
        console.log(this.props)
        return (
            <>
{
    this.state.loading ? <Loader /> : <ImageBackground source={require('./logo/login_background.png')} style={styles.backgroundImage}>

    <ScrollView showsVerticalScrollIndicator={true}
        automaticallyAdjustContentInsets={true}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps="always">
        <KeyboardAvoidingView behavior="padding">
            <View style={{ alignSelf: 'center' }}>

                <View style={{ alignSelf: 'center' }}>
                    <Image style={{ height: 150, width: 200, }} source={require('../Components/logo/BRAINSTORM_logo.png')} />
                </View>
                <View>
                    {
                        this.fields.map((item, key) => {
                            return (
                                <View key={key}>
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
                    <TouchableOpacity underlayColor='grey'
                        onPress={this.handleSubmit}
                        style={styles.signUpbtn}>
                        <Text style={{ color: 'white', textAlign: 'center', paddingTop: 8, fontSize: 20 }}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop:10,alignSelf:'center'}}>Already have an Account ?</Text>
                    <TouchableOpacity underlayColor='grey' onPress={this.login} style={styles.loginbtn}>
                        <Text style={{ color: 'black', textAlign: 'center', paddingTop: 8, fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>

</ImageBackground>
                }
            </>

        )
    }
}
const styles = StyleSheet.create({
    textInput: {
        textTransform: 'uppercase',
        height: 40,
        width: 300,
        borderColor: 'black',
        textAlign: 'center',
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1
    },
    signUpbtn: {
        backgroundColor: '#3399ff',
        height: 40,
        borderRadius: 10,
        width: 200,
        alignSelf: 'center',
        marginTop: 20,
    },
    loginbtn:{
        borderWidth :2,
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

const mapDispatchToProps = dispatch => ({
    registrationComplete: (user) => dispatch(registrationComplete(user))
})

export default connect(null, mapDispatchToProps)(Register)
