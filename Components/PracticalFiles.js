import React, { Component } from 'react'
import { View, Picker, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class PracticalFile extends Component {
    constructor() {
        super()

        this.state = {
            semester: '',
            branch: '',
            subjects: ''

        }
    }

    render() {
        const semester = ['Please Select Any...', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th']
        const branch = ['Please Select Any...', 'CSE', 'CIVIL', 'EE', 'EEE', 'ECE', 'ME', 'AUTOMOBILE']
        const subjects = ['Please Select Any...', 'Empty']
        const Item = Picker.Item
        return (
            <View>
                <View style={styles.head}>
                    <Image style={{ width: wp('26'), height: hp('14'), marginTop: 10, marginLeft: 10 }} source={require('./logo/practical.png')} />
                    <Text style={styles.heading1}>Trying to find Practicals ?</Text>
                </View>
                <View>
                    <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
                        <Text style={styles.heading2}>SELECT SEMESTER</Text>
                        <Picker itemStyle={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ semester: itemValue })
                            }
                            selectedValue={this.state.semester}>
                            {
                                semester.map((item, key) => {
                                    return (<Item key={key} label={item} value={item} />);
                                })
                            }
                        </Picker>
                    </View>
                    <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
                        <Text style={styles.heading2}>SELECT BRANCH</Text>
                        <Picker style={styles.picker} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ branch: itemValue })
                        }
                            selectedValue={this.state.branch}>
                            {
                                branch.map((item, key) => {
                                    return (<Item key={key} label={item} value={item} />);
                                })
                            }
                        </Picker>
                    </View>
                    <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
                        <Text style={styles.heading2}>SELECT SUBJECT</Text>
                        <Picker style={styles.picker} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ subjects: itemValue })
                        }
                            selectedValue={this.state.subjects}>
                            {
                                subjects.map((item, key) => {
                                    return (<Item key={key} label={item} value={item} />);
                                })
                            }
                        </Picker>
                    </View>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button} title=''>
                        <Text style={{ fontFamily: "Comic Sans MS", fontSize: 20, color: 'white' }}>Get Practical Files !</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    heading1: {
        fontWeight: 'bold',
        fontSize: 25,
        position: 'absolute',
        top: '40%',
        right: '2%',
        fontFamily: "Comic Sans MS",
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00b8ff',
        paddingTop: 8,
        height: hp('5'),
        borderRadius: 5
    },
    head: {
        height: hp('20%'),
    },
    heading2: {
        fontSize: 10,
        paddingTop: 20,
        marginLeft: 10,
        fontFamily: "Comic Sans MS",
    },
    btn: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    }
});


