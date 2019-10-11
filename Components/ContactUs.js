import React, { Component } from 'react'
import { View, Text, Picker, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
class ContactUs extends Component {

    render() {
        const fields = ['NAME', 'COLLEGE']
        const subjects = ['Due to bug']
        const Item = Picker.item
        return (


            <ScrollView>
                <View>
                    <Text style={styles.heading1}>FEEDBACK OR ANY ADVICE ?</Text>
                    <Text style={{ textAlign: 'center' }}>We are happy to improve , Please Drop us Mail</Text>
                </View>
                <View style={{ paddingLeft: 5 }}>
                    {
                        fields.map((item) => {
                            return (
                                <View>
                                    <Text style={styles.middle}>{item}</Text>
                                    <TextInput style={styles.textinput} />
                                </View>
                            )
                        })
                    }
                    <Text style={styles.middle}>SUBJECT</Text>
                    <Picker>
                        {
                            subjects.map((item, key) => {
                                return (<Item key={key} label={item} value={item} />);
                            })
                        }
                    </Picker>
                    <Text style={styles.middle}>MESSAGE</Text>
                    <TextInput multiline={true} numberOfLines={10} style={{ height: 100, borderColor: 'gray', textAlignVertical: 'top', borderWidth: 1 }} />
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontFamily: "Comic Sans MS", fontSize: 20, color: 'white', marginTop: 3 }}>SEND MESSAGE</Text>
                    </TouchableOpacity>
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
        padding: 5,
        height: 40,
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
