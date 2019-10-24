import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import fire from '../Config'
import { ScrollView, Text, Linking,Alert, View, StyleSheet, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import RNStyledDialogs from 'react-native-styled-dialogs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage'
class SideMenu extends Component {

  constructor() {
    super();
    
    this.state = {
      loading: false,
      name : ''
    }
  

    this.options = [
      {
        mainHeading: 'FAVOURITES',
        subOptions: [
          { img: require('../logo/notes.png'), secondaryHeading: 'My Subjects', navigationPath: 'MySubjects' },
          { img: require('../logo/downloads.png'), secondaryHeading: 'My Downloads', navigationPath: 'MyDownloads' },
        ],
      },
      {
        mainHeading: 'RESOURCES',
        subOptions: [

          { img: require('../logo/notes.png'), secondaryHeading: 'Notes', navigationPath: 'Notes' },
          { img: require('../logo/practical.png'), secondaryHeading: 'Practicle Files', navigationPath: 'PracticalFiles' },
          { img: require('../logo/quespaper.png'), secondaryHeading: 'Question Papers', navigationPath: 'QuesPaper' },
          { img: require('../logo/syllabus.png'), secondaryHeading: 'Syllabus', navigationPath: 'Syllabus' },
        ],
      },
      {
        mainHeading: 'OTHERS',
        subOptions: [
          { img: require('../logo/profile.png'), secondaryHeading: 'Profile', navigationPath: 'Profile' },
          { img: require('../logo/contact.png'), secondaryHeading: 'Contact Us', navigationPath: 'ContactUs' },
          { img: require('../logo/BRAINSTORM_logo2.png'), secondaryHeading: '*Free Consultancy', navigationPath: 'Consult' },
        ],
      },
    ];
  }

  getProfileData = () => {
    AsyncStorage.getItem("access_token")
    .then((token)=>{
        let userDetails = fire.database().ref('users/' + token)
        userDetails.on('value', (snapshot) => {
            let user = snapshot.val();
            this.setState({
                ...user
            })
          });
    })        
}

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };
  
  logout = ()=>RNStyledDialogs.Show({
    title: "BRAIN STORM !",
    description:"Glad you like BrainStorm! If you are up for it, we would like you to rate us.",
    positiveText: "LOG OUT",
    neutralText: "Close",
    negativeText : "RATE US",
    headerBackgroundColor:'#00b8ff',
    onPositive: () => { 
      AsyncStorage.removeItem('access_token')
      this.props.navigation.navigate('Login')
    },
    onNeutral: () => {null},
    // onCancellable:()=>{}
    // onNegative: () => { },
    onNegative: () => { Linking.openURL('http://google.com')},
  });
componentDidMount(){
  this.getProfileData()
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeaderContainer}>
          <Image style={styles.navImg} source={require('../logo/BRAINSTORM_logo.png')} />
        </View>
        <ScrollView>
          <View>
            {this.options.map((option, key) => (
              <View key={key}>
                <Text style={styles.mainHeading}>{option.mainHeading}</Text>
                {option.subOptions.map((item, key) => (
                  <TouchableHighlight underlayColor='lightgrey' key={key} style={styles.touch} onPress={this.navigateToScreen(item.navigationPath)}>
                    <View style={styles.secondaryHeading}>
                      <Image style={styles.img} source={item.img} />
                      <Text style={{ color: 'grey',padding:3 }}>
                        {item.secondaryHeading}
                      </Text>
                    </View>
                  </TouchableHighlight>
                ))}
              </View>
            ))}
            <TouchableHighlight underlayColor='lightgrey' style={styles.touch} onPress={() => Linking.openURL('http://google.com')}>
              <View style={styles.secondaryHeading}>
                <Image style={styles.img} source={require('../logo/share.png')} />
                <Text style={{ color: 'grey',padding:3 }}>
                  Share
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
        <TouchableHighlight underlayColor='tomato' style={styles.logoutBtn} onPress={this.logout}>
          <View style={styles.secondaryHeading}>
            <Text style={{ color: 'white' }}>
              Log Out
                </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.footerContainer}>
        <Text style={{textAlign:'center'}}>BrainStorm v0.0.0</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  logoutBtn: {
    backgroundColor: '#00b8ff',
    marginBottom: 30,
    alignSelf: 'center',
    borderRadius: 5
  },
  touch: {
    borderRadius: 10,
  },
  secondaryHeading: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  mainHeading: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#00b8ff',
  },
  HeaderContainer: {
    textAlignVertical: 'center',
    height: hp('20%'),
  },
  footerContainer: {
    backgroundColor: 'lightgrey',
    height: 20,

  },
  navImg: {
    position: 'absolute',
    left: 10,
    top: 20,
    width: wp('50'),
    height: hp('15%')
  },
  img: {
    height: 20,
    width: 20,
    marginRight: 10
  }
});

export default SideMenu