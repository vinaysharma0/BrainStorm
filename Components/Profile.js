import React, { Component } from 'react'
import { View, TextInput, Image, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fire from './Config';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            college: '',
            branch: '',
            semester: '',
            editable: false,
            backgroundColor: 'lightgrey',
            borderBottomColor: '',
            borderBottomWidth: 0
        }
    }
    handleEdit = () => {
        this.setState({
            ...this.state,
            editable: true,
            backgroundColor: 'white',
            borderBottomColor: 'black',
            borderBottomWidth: 1
        })
    }
    handleSave = () => {
        console.log('start')
        this.setState({
            editable: false,
            backgroundColor: 'lightgrey',
            borderBottomColor: '',
            borderBottomWidth: 0
        }, () => {
            const { name, college, branch, semester } = this.state
            AsyncStorage.getItem('access_token')
                .then((token) => {
                    fire.database().ref('users/' + token).update({
                        name,
                        college,
                        branch,
                        semester
                    });
                })
            console.log('end')
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

    changeBranch = val => {
        this.setState({
            branch: val
        })
    }
    changeSemester = val => {
        this.setState({
            semester: val
        })
    }

    getProfileData = () => {
        AsyncStorage.getItem("access_token")
            .then((token) => {
                let userDetails = fire.database().ref('users/' + token)
                userDetails.on('value', (snapshot) => {
                    let user = snapshot.val();
                    this.setState({
                        ...this.state,
                        ...user
                    })
                });
            })
    }
componentDidMount(){
    this.getProfileData();
}
    
    render() {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={true}
                    automaticallyAdjustContentInsets={false}
                    keyboardDismissMode='on-drag'
                    keyboardShouldPersistTaps="always">
                    <View style={styles.heading}>
                        <Image style={{ height: 100, width: 100 }} source={require('./logo/profile_icon.png')}></Image>
                    </View>

                    <Text style={styles.middle}>Name</Text>
                    <View style={{ borderRadius: 10, marginLeft: 5, backgroundColor: this.state.backgroundColor, borderBottomColor: this.state.borderBottomColor }}>
                        <TextInput value={this.state.name} onChangeText={this.changeName} editable={this.state.editable} style={styles.textinput, { borderBottomWidth: this.state.borderBottomWidth }} />
                    </View>

                    <Text style={styles.middle}>College</Text>
                    <View style={{ borderRadius: 10, marginLeft: 5, backgroundColor: this.state.backgroundColor, borderBottomColor: this.state.borderBottomColor }}>
                        <TextInput value={this.state.college} onChangeText={this.changeCollege} editable={this.state.editable} style={styles.textinput, { borderBottomWidth: this.state.borderBottomWidth }} />
                    </View>

                    <Text style={styles.middle}>Branch</Text>
                    <View style={{ borderRadius: 10, marginLeft: 5, backgroundColor: this.state.backgroundColor, borderBottomColor: this.state.borderBottomColor }}>
                        <TextInput value={this.state.branch} onChangeText={this.changeBranch} editable={this.state.editable} style={styles.textinput, { borderBottomWidth: this.state.borderBottomWidth }} />
                    </View>

                    <Text style={styles.middle}>Semester</Text>
                    <View style={{ borderRadius: 10, marginLeft: 5, backgroundColor: this.state.backgroundColor, borderBottomColor: this.state.borderBottomColor }}>
                        <TextInput value={this.state.semester} onChangeText={this.changeSemester} editable={this.state.editable} style={styles.textinput, { borderBottomWidth: this.state.borderBottomWidth }} />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, alignSelf: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={this.handleEdit}>
                            <Text style={{ fontFamily: "Comic Sans MS", fontSize: 20, color: 'white' }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handleSave} style={styles.button}>
                            <Text style={{ fontFamily: "Comic Sans MS", fontSize: 20, color: 'white' }}>Save</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = {
    button: {
        alignItems: 'center',
        backgroundColor: '#00b8ff',
        paddingTop: 8,
        marginRight: 10,
        height: hp('5'),
        width: wp('30'),
        borderRadius: 5
    },
    heading: {
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10
    },
    textinput: {
        height: 50,
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 15,
        alignSelf: 'center'
    },
    middle: {
        paddingTop: 30,
        paddingLeft: 5,
        fontFamily: "Comic Sans MS",
    },
}

const mapStateToProps = state => ({
    userInfo: state.userData
})

export default connect(mapStateToProps, null)(Profile)
