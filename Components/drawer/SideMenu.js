import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


class SideMenu extends Component {
  constructor() {
    super();
    this.options = [
      {
        mainHeading: 'FAVOURITES',
        subOptions: [
          { secondaryHeading: 'My Subjects', navigationPath: 'MySubjects' },
          { secondaryHeading: 'My Downloads', navigationPath: 'MyDownloads' },
        ],
        // images : [
        //   {subject : '../logo/syllabus.png'},
        //   {downloads : '../logo/downloads.png'},
        // ],
      },
      {
        mainHeading: 'RESOURCES',
        subOptions: [
          { secondaryHeading: 'Notes', navigationPath: 'Notes' },
          { secondaryHeading: 'Practicle Files', navigationPath: 'PracticalFiles' },
          { secondaryHeading: 'Question Papers', navigationPath: 'QuesPaper' },
          { secondaryHeading: 'Syllabus', navigationPath: 'Syllabus' },
        ],
        // images : [
        //   {notes : '../logo/syllabus.png'},
        //   {practical : '../logo/downloads.png'},
        //   {question : '../logo/syllabus.png'},
        //   {downloads : '../logo/downloads.png'},
        // ],
      },
      {
        mainHeading: 'OTHERS',
        subOptions: [
          { secondaryHeading: 'Profile', navigationPath: 'Profile' },
          { secondaryHeading: 'Share', navigationPath: 'Share' },
          { secondaryHeading: 'Contact Us', navigationPath: 'ContactUs' },
        ],
        // images : [
        //   {notes : '../logo/syllabus.png'},
        //   {practical : '../logo/downloads.png'},
        //   {question : '../logo/syllabus.png'},

        // ],
      },
    ];
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeaderContainer}>
          <Image style={styles.navImg} source={require('../logo/BRAINSTORM_logo.png')} />
        </View>
        <ScrollView>
          <View>
            {this.options.map((option, key) => (
              <View>
                <Text style={styles.mainHeading}>{option.mainHeading}</Text>
                {option.subOptions.map((item, key) => (
                  <TouchableHighlight underlayColor='lightgrey' style={styles.touch} onPress={this.navigateToScreen(item.navigationPath)}>
                    <View style={styles.secondaryHeading} key={key}>
                      <Text style={{ color: 'grey' }}>
                        {item.secondaryHeading}
                      </Text>
                    </View>
                  </TouchableHighlight>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={{ textAlign: 'center' }}>Brain Storm v 0.0.0</Text>
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
  touch: {
    borderRadius: 10,
  },
  secondaryHeading: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  mainHeading: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'skyblue',
  },
  HeaderContainer: {
    textAlignVertical: 'center',
    height: 200,
  },
  footerContainer: {
    backgroundColor: 'lightgrey',
    height: 20,

  },
  navImg: {
    position: 'absolute',
    left: 10,
    top: 40,
    width: 250,
    height: 100
  }
});

export default SideMenu;