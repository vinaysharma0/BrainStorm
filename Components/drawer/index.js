import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
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
import Loader from '../loader';
import SplashScreen from '../SplashScreen';
import Consult from '../Consult';

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
    MySubjects: {
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
    QuesPaper: {
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
    PracticalFiles: {
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
    Syllabus: {
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
    ContactUs: {
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
    Profile: {
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
    MyDownloads: {
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
    Notes: {
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
    Share: {
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
    Login: {
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
},{
    headerMode : 'none',

})

const Register_ = createStackNavigator({
    Register: {
        screen: Register,
        navigationOptions: ({ navigation }) => ({
            title: 'Register',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',
        }),
    },
},{
    headerMode : 'none',
})
const Loader_ = createStackNavigator({
    Loader: {
        screen: Loader,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',

        }),
    },
},{
    headerMode : 'none',
})
const SplashScreen_ = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#00b8ff',
            },
            headerTintColor: '#fff',

        }),
    },
},{
    headerMode : 'none',
})
const Consult_ = createStackNavigator({
    Consult: {
        screen: Consult,
        title: 'Consultancy',
        navigationOptions: ({ navigation }) => ({
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
    Consult: { screen: Consult_ },
    Register: {screen: Register_,navigationOptions: {
        drawerLockMode: 'locked-closed',
    }}, 
    Login: {screen: Login_,navigationOptions: {
        drawerLockMode: 'locked-closed',
    }},
    Loader: {screen: Loader_,navigationOptions: {
        drawerLockMode: 'locked-closed',
    }},
    SplashScreen: {screen: SplashScreen_,navigationOptions: {
        drawerLockMode: 'locked-closed',
    }},

}, {
    initialRouteName: 'SplashScreen',
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 170,
    drawerBackgroundColor: 'white',
    drawerType: 'back',

}
)
const styles = {
    logo: {
        width: 35,
        height: 35,
        marginLeft: 5,
        marginTop: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        position: 'absolute',
        left: Dimensions.get('window').width - 60,
    },
}
export default createAppContainer(DrawerNavigatorExample);
