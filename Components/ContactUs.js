import React, { Component } from 'react'
import { View, Text, Picker, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import email from 'react-native-email'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            Name: '',
            College: '',
            Subject: '',
            Message: '',
        }
    }
    changeName = val => {
        this.setState({
            Name: val,
        })
    }
    changeCollege = val => {
        this.setState({
            College: val
        })
    }
    changeSubject = val => {
        this.setState({
            Subject: val
        })
    }
    changeMessage = val => {
        this.setState({
            Message: val
        })
    }
    handleEmail = () => {
        if((this.state.Name && this.state.College && this.state.Message)!=""){
        const to = ['vins.brainstorm@gmail.com'] // string or array of email addresses
        email(to, {
body: `Name : { ${this.state.Name} }
College : { ${this.state.College} }
Subject : { ${this.state.Subject} }
Message : { ${this.state.Message} }`
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(error)
          });
    }
    else{
    alert('Fill all the Mandatory Fields !')
    }
}

    render() {
        console.log(this.state)
        const subjects = ['Please Select Any....', 'Due to bug', 'Extra']
        const Item = Picker.Item
        return (


            <ScrollView>
                <View>
                    <Text style={styles.heading1}>FEEDBACK OR ANY ADVICE ?</Text>
                    <Text style={{ textAlign: 'center' }}>We are happy to improve , Please Drop us Mail</Text>
                </View>
                <View style={{ paddingLeft: 5 }}>

                    <View>
                        <Text style={styles.middle}>Name</Text>
                        <TextInput onChangeText={this.changeName} style={styles.textinput} />
                    </View>
                    <View>
                        <Text style={styles.middle}>College</Text>
                        <TextInput onChangeText={this.changeCollege} style={styles.textinput} />
                    </View>

                    <Text style={styles.middle}>Subject</Text>
                    <Picker onValueChange={this.changeSubject}
                        selectedValue={this.state.Subject}>
                        {
                            subjects.map((item, key) => {
                                return (<Item key={key} label={item} value={item} />);
                            })
                        }
                    </Picker>
                    <Text style={styles.middle}>Message</Text>
                    <TextInput onChangeText={this.changeMessage} multiline={true} numberOfLines={10} style={{ height: 100, borderColor: 'gray', textAlignVertical: 'top', borderWidth: 1 }} />
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={this.handleEmail} style={styles.button}>
                        <Text style={{ fontFamily: "Comic Sans MS", fontSize: 20, color: 'white'}}>Send Message</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft:5,paddingTop:20,flex:1,flexWrap:'wrap',flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Note : </Text><Text>If you want to upload screenshot. You can do it after you are redirected to Gmail.</Text>
                </View>
            </ScrollView>

        )
    }
}

const styles = {
    heading1: {
        fontSize: 20,
        fontFamily: "Comic Sans MS",
        textAlign: 'center',
        padding: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00b8ff',
        paddingTop: 8,
        height: hp('5'),
        borderRadius: 5
    },
    textinput: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        borderBottomWidth: 1
    },
    middle: {
        paddingTop: 30,
        fontFamily: "Comic Sans MS",
    },
    btn: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    }
}

export default ContactUs
