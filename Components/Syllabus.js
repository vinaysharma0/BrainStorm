import React, { Component } from 'react'
import { View, Image, Picker, StyleSheet, Text, TouchableOpacity } from 'react-native'

class Syllabus extends Component {

    render() {
        const semester = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th']
        const branch = ['CSE', 'CIVIL', 'EE', 'EEE', 'ECE', 'ME', 'AUTOMOBILE']
        const subjects = ['Empty']
        const Item = Picker.item
        return (
            <View>
                <View style={styles.head}>
                    <Image style={{ width: 100, height: 100, marginTop: 10, marginLeft: 10 }} source={require('./logo/syllabus.png')} />
                    <Text style={styles.heading1}>Check out the Syllabus !</Text>
                </View>
                <View>
                    <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
                        <Text style={styles.heading2}>SELECT SEMESTER</Text>
                        <Picker itemStyle={styles.picker}>
                            {
                                semester.map((item, key) => {
                                    return (<Item key={key} label={item} value={item} />);
                                })
                            }
                        </Picker>
                    </View>
                    <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
                        <Text style={styles.heading2}>SELECT BRANCH</Text>
                        <Picker style={styles.picker}>
                            {
                                branch.map((item, key) => {
                                    return (<Item key={key} label={item} value={item} />);
                                })
                            }
                        </Picker>
                    </View>
                    <View style={{ borderWidth: 1, margin: 5, borderRadius: 10 }}>
                        <Text style={styles.heading2}>SELECT SUBJECT</Text>
                        <Picker style={styles.picker}>
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
                        <Text style={{ fontFamily: "Comic Sans MS", fontSize: 20, color: 'white' }}>Get Syllabus !</Text>
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
        right: '10%',
        fontFamily: "Comic Sans MS",
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00b8ff',
        padding: 5,
        height: 40,
        borderRadius: 5
    },
    head: {
        height: 130,
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

export default Syllabus
