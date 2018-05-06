import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161823"
    },
    // màn hình User
    viewMyVideo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#161823'
    },
    viewAbove: {
        flex: 0.35,
       // backgroundColor: "#1e272e",
        alignItems:'center',
        justifyContent:'center'
    },
    viewBehind: {
        flex: 0.65,
        backgroundColor: "#1e272e"
    },
    viewAvatar: {
        flexDirection: 'row'
    },
    avatar: {
        width: height / 7,
        height: height / 7,
        borderRadius: height / 7,
        resizeMode: 'cover',
    },
    gender: {
        width: height / 30,
        height: height / 30,
        resizeMode: 'cover',
        marginLeft: 10,
        alignSelf:'center'
    },
    icon: {
        color: 'white',
        fontSize: height / 23,
      
    },        
    link: {
        color: 'white',
        fontSize: height / 45,
        textAlign:'center',
    },
    name: {
        textAlign:'center',        
        color: 'white',
        fontSize: height / 27,
        marginTop: height / 68,
        fontFamily: 'bold'
    },
    line: {
        height: 1,
        backgroundColor: 'white',
        marginRight: height / 23,
        marginLeft: height / 23,
        marginTop: height / 34
    },
    number: {
        color: 'white',
        fontSize: height / 34,
        fontFamily: 'bold'
    },
    numberViewAbove: {
        marginLeft: height / 23
    },
    numberViewUnder: {
        marginLeft: height / 68
    },
    text: {
        color: 'white',
        fontSize: height / 45,
        marginLeft: height / 136,
        fontFamily: 'bold'
    },
    viewVideoLike: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A2D2E'
    },
    videoArea: {
        height: height / 13.5,
        width: width / 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    // Màn hình nhắn tin
    textNotification: {
        color: 'white',
        fontSize: height / 45,
        fontFamily: 'bold',
        marginTop: height / 45
    },
    viewHeader: {
        height: height / 15,
        //elevation: height / 341,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding: height/120,
        //marginTop: height / 50,        
    },
    viewTitleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: height / 30,
        color: 'white'
    },
    iconHeader: {
        fontSize: height / 24,
        color: 'white',
        marginRight: height / 34
    },
    viewFollower: {
        marginLeft: 40
    },
    touchableNativeFeedback: {
        height: height / 15, 
        width: height / 15, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    iconInTouchableNativefeedback: {
        fontSize: height / 24,
        color: 'white',
    }
});