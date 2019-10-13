import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Notes from '../Notes';
import QuesPaper from '../QuesPaper';
import PracticalFiles from '../PracticalFiles';
import Syllabus from '../Syllabus';
import ContactUs from '../ContactUs';
import SideMenu from './SideMenu'
import MyDownloads from '../MyDownloads';
import MySubjects from '../MySubjects';
import Profile from '../Profile'
import Share from '../Share'
import Login from '../Login';
import Register from '../Register';

export class NavigationDrawerStructure extends Component {

    toggleDrawer = () => {
        this.props.navigationProps.openDrawer();
    };

    render() {


        return (

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('../logo/drawer.png')}
                        style={{ width: 30, height: 40, marginLeft: 10 }}
                    />
                </TouchableOpacity>

                <Image
                    source={require('../logo/BRAINSTORM_logo2.png')}
                    style={styles.logo}
                />
            </View>
        )
    }
}
const MySubjects_ = createStackNavigator({
    First: {
        screen: MySubjects,
        navigationOptions: ({ navigation }) => ({
            title: 'My Subjects',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',
        }),
    },

});

const QuesPaper_ = createStackNavigator({
    Second: {
        screen: QuesPaper,
        navigationOptions: ({ navigation }) => ({
            title: 'Question Papers',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',
        }),
    },
});

const PracticalFiles_ = createStackNavigator({
    Third: {
        screen: PracticalFiles,
        navigationOptions: ({ navigation }) => ({
            title: 'Practical Files',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Syllabus_ = createStackNavigator({
    Fourth: {
        screen: Syllabus,
        navigationOptions: ({ navigation }) => ({
            title: 'Syllabus',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',
        }),
    },
})

const ContactUs_ = createStackNavigator({
    Fifth: {
        screen: ContactUs,
        navigationOptions: ({ navigation }) => ({
            title: 'Contact Us',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',
        }),
    },
})
const Profile_ = createStackNavigator({
    Sixth: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',
        }),
    },
})
const MyDownloads_ = createStackNavigator({
    Seventh: {
        screen: MyDownloads,
        navigationOptions: ({ navigation }) => ({
            title: 'My Downloads',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',
        }),
    },
})
const Notes_ = createStackNavigator({
    Eighth: {
        screen: Notes,
        navigationOptions: ({ navigation }) => ({
            title: 'Notes',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',

        }),
    },
})
const Share_ = createStackNavigator({
    Ninth: {
        screen: Share,
        navigationOptions: ({ navigation }) => ({
            title: 'Share',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',

        }),
    },
})
const Login_ = createStackNavigator({
    Tenth: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: 'Login',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',

        }),
    },
})

const Register_ = createStackNavigator({
    Eleventh: {
        screen: Register,
        navigationOptions: ({ navigation }) => ({
            title: 'Login',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',

        }),
    },
})
const DrawerNavigatorExample = createDrawerNavigator({
    MySubjects: { screen: MySubjects_ },
    Notes: { screen: Notes_, },
    QuesPaper: { screen: QuesPaper_ },
    PracticalFiles: { screen: PracticalFiles_ },
    Syllabus: { screen: Syllabus_ },
    ContactUs: { screen: ContactUs_ },
    Profile: { screen: Profile_ },
    MyDownloads: { screen: MyDownloads_ },
    Share: { screen: Share_ },
    Login: {screen: Login_},
    Register: {screen: Register_}

}, {
    initialRouteName: 'MySubjects',
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 150,
    drawerBackgroundColor: 'white',
    drawerType: 'back',

}
)

const SignedOut = createStackNavigator({
    Login:{
        screen:Login
    },
    Register:{
        screen:Register
    }
})
const styles = {
    logo: {
        width: 35,
        height: 35,
        marginLeft: 5,
        marginTop: 5,
        backgroundColor: 'black',
        position: 'absolute',
        left: Dimensions.get('window').width - 60,
    },
}
export default createAppContainer(DrawerNavigatorExample);
