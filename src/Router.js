import { StackNavigator, TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Dimensions} from 'react-native';
import React, { Component } from 'react';

import Home from './TabNavigator/Home';
import Discover from './TabNavigator/Discover';
import Live from './TabNavigator/Library';
import User from './TabNavigator/User';
import Nofication from './TabNavigator/Nofication'
const{height, width} = Dimensions.get('window');

export const TabBar = TabNavigator({
    Home:{ 
        screen: Home,
        navigationOptions:{
            //tabBarLabel: 'Accout',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                  name="ios-camera-outline" style={{fontSize:height/20, color: tintColor}}
                />
              ),
        }
    },
    Discover: {
        screen: Discover,
        navigationOptions:{
           // tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-planet-outline' style={{fontSize: height/20, color: tintColor}}/>
              ),
        }
    },
    Live: {
        screen: Live,
        navigationOptions: {
           // tabBarLabel: 'Map',
            tabBarIcon: (
                <Ionicons name= 'md-aperture' style ={{alignSelf:'center',textAlign:'center',fontSize: height/25, color:  'rgba(255, 255, 255, 1.0)', borderLeftColor: '#00cec9' ,borderRightColor: '#d63031',borderLeftWidth:3 ,borderRightWidth: 3, borderRadius: height/40}}/>
            ),
        }
    },
    Nofication:{
        screen: Nofication,
        navigationOptions:{
            //tabBarLabel: 'Order',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                  name="ios-notifications-outline" style={{fontSize: height/22, color: tintColor}}
                />
              ),
        }
    },
    User:{
        screen: User,
        navigationOptions:{
            //tabBarLabel: 'Order',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                  name="ios-contact-outline" style={{fontSize: height/25, color: tintColor}}
                />
              ),
        }
    },
},
{   
    initialRouteName: 'Home',
    lazyLoad: false,
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition : 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: 'transparent',
            borderTopColor: 'white',
            borderTopWidth: 0.2,
            height : height/ 15,
           // position: 'absolute',
            //right: 0,
            //left: 0,
            //bottom: 0,
            //zIndex:200,
            elevation: 0
        },
        inactiveTintColor: '#636e72',
        activeTintColor: 'white',
        indicatorStyle: {
            backgroundColor :'transparent',
            width: height/ 20,
        },
        pressColor: '#ffff',
        tabStyle :{
            borderTopColor: 'white',
            borderTopWidth: 0.18,
            backgroundColor: 'transparent',

        }
        //pressOpacity: 100,
    }
}
)