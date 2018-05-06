import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Dimensions } from 'react-native';
import React, { Component } from 'react';

import Home from './TabNavigator/Home';
import Discover from './TabNavigator/Discover';
import Live from './TabNavigator/Library';
import User from './TabNavigator/User';
import Nofication from './TabNavigator/Nofication'
import ScreenLogin from './Screen/ScreenLogin';
const { height, width } = Dimensions.get('window');

export const TabBar = TabNavigator({
    Home: {
        screen: Home,
       
    },
    Discover: {
        screen: Discover,
       
    },
    Nofication: {
        screen: Nofication,
       
    },
    User: {
        screen: User,
       
    },
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              switch(routeName){
                  case 'Home':
                  iconName = focused ? (<Ionicons name= 'ios-sync-outline' style ={{alignSelf:'center',textAlign:'center',fontSize: height/25, color:  tintColor, borderLeftColor: '#00cec9' ,borderRightColor: '#d63031',borderLeftWidth:3 ,borderRightWidth: 3, borderRadius: height/40}}/>):(<Ionicons
                    name="ios-sync-outline" style={{fontSize: height/25, color: tintColor}}
                  />);
                  break;
                  case 'Discover':
                  iconName = focused ? (<Ionicons name= 'ios-aperture-outline' style ={{alignSelf:'center',textAlign:'center',fontSize: height/25, color:  tintColor, borderLeftColor: '#00cec9' ,borderRightColor: '#d63031',borderLeftWidth:3 ,borderRightWidth: 3, borderRadius: height/40}}/>):(<Ionicons
                    name="ios-aperture-outline" style={{fontSize: height/25, color: tintColor}}
                  />);              break;
                  case 'Nofication':
                  iconName = focused ? (<Ionicons name= 'ios-alert-outline' style ={{alignSelf:'center',textAlign:'center',fontSize: height/25, color:  tintColor, borderLeftColor: '#00cec9' ,borderRightColor: '#d63031',borderLeftWidth:3 ,borderRightWidth: 3, borderRadius: height/40}}/>):(<Ionicons
                    name="ios-alert-outline" style={{fontSize: height/25, color: tintColor}}
                  />);              break;
                  case 'User':
                  iconName = focused ? (<Ionicons name= 'ios-contact-outline' style ={{alignSelf:'center',textAlign:'center',fontSize: height/25, color:  tintColor, borderLeftColor: '#00cec9' ,borderRightColor: '#d63031',borderLeftWidth:3 ,borderRightWidth: 3, borderRadius: height/40}}/>):(<Ionicons
                    name="ios-contact-outline" style={{fontSize: height/25, color: tintColor}}
                  />);              break;
              }
              return iconName;
            },
        }),
        initialRouteName: 'Home',
        lazyLoad: false,
        swipeEnabled: false,
        animationEnabled: false,
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            style: {
                backgroundColor: '#000',
                borderTopColor: 'white',
                borderTopWidth: 0.18,
                height: height / 15,
                // position: 'absolute',
                // right: 0,
                // left: 0,
                // bottom: 0,
                // zIndex:200,
                //elevation: 0
            },
            inactiveTintColor: '#636e72',
            activeTintColor: 'white',
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
            pressColor: '#ffff',
            // tabStyle :{
            //     borderTopColor: 'white',
            //     borderTopWidth: 0.18,
            //     backgroundColor: 'transparent',

            // }
            //pressOpacity: 100,
        }
    }
)
export const RootNavigator = StackNavigator({
    TabBar: { screen: TabBar },
    ScreenLogin: { screen: ScreenLogin },
    Nofication:{screen:Nofication}
},
    {
        initialRouteName: "Nofication",
        headerMode: "none",
    }

)

