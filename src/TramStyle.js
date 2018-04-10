import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    viewMyVideo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    viewAbove: {
        flex: 0.5,
        backgroundColor: "#757575"
    },
    viewAvatar: {
        paddingTop: 50,
        flexDirection: 'row'
    },
    avatar: {
        width: height / 7,
        height: height / 7,
        borderRadius: height / 7,
        resizeMode: 'cover',
        marginLeft: 23
    },
    icon: {
        color: 'white',
        fontSize: height / 23,
        marginTop: height / 68
    },
    iconAdd: {
        marginLeft: height / 3.5
    },
    iconMore: {
        marginLeft: height / 45
    },
    link: {
        color: 'white',
        fontSize: height / 45,
        marginLeft: height / 23
    },
    name: {
        color: 'white',
        fontSize: height / 27,
        marginLeft: height / 23,
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
        }
});