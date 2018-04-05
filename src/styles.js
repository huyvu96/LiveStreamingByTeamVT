import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const imageWidth = width;
export const imageHeight = (imageWidth / 500) *330;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2d3436',
    },
    containerE: {
        backgroundColor: 'transparent',
        flex: 1,
    },
    wraperSwiper1: {
        height: height / 3.5,
        backgroundColor: '#FFF'
    },
    wraper1: {
        height: undefined,
        backgroundColor: '#FFF'
    },
    wraper2: {
        marginTop: 5,
        height: undefined,
        backgroundColor: '#FFF'
    },
    wrapperSwiper: {
        //backgroundColor: '#FFF',
        height: height / 3.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wraperDiscover: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: undefined,
        backgroundColor: '#FFF'
    },
    slide: {
        //alignSelf: 'stretch',
        height: height / 3.5,
        width: null,
        position: 'relative',
        resizeMode: 'cover'
    },
    image: {
        //alignSelf: 'stretch',
        height: height / 5.5,
        width: null,
        // position: 'relative',
        resizeMode: 'cover'
    },
    viewPage: {
        flexDirection: 'row',
        marginTop: height / 50,
        alignItems: 'center'
    },
    viewPage1: {
        //flexDirection: 'row',
        marginTop: height / 50,
        alignItems: 'center',
        marginBottom: height / 50
    },
    titlePage: {
        fontSize: height / 40,
        fontWeight: 'normal',
        marginLeft: height / 60,
        color: 'black'
    },
    titlePage1: {
        fontSize: height / 50,
        fontWeight: 'normal',
        marginLeft: height / 60,
        color: 'black',
        textAlign: 'center'
    },
    tron: {
        backgroundColor: '#d35400',
        height: height / 30,
        width: height / 120,
        //borderRadius: height/30
    },
    tron1: {
        backgroundColor: '#d35400',
        height: height / 13,
        width: height / 13,
        borderRadius: height / 13
    },
    tron2: {
        backgroundColor: '#9C44A9',
        height: height / 13,
        width: height / 13,
        borderRadius: height / 13
    },
    viewItemTop: {
        padding: height / 60,
        flexDirection: 'row'
    },
    imageItemtop: {
        //alignSelf: 'stretch',
        height: height / 5,
        width: height / 7,
       // position: 'relative',
        resizeMode: 'cover',
    },
    viewItemTop1: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 5,
        flex: 1
    },
    viewItemTop2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height / 100,
        alignItems:'center',
    },
    titleViewTop1: {
        fontSize: height / 50,
        fontWeight: 'normal',
        color: 'black',
        marginBottom: height / 100,
    },
    titleViewTop2: {
        fontSize: height / 60,
        fontWeight: 'normal',
        color: 'black',
        marginLeft: height / 100
    },
    inforViewTop1: {
        fontSize: height / 60,
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: 'grey',
        textAlign: 'left'
    },
    viewGenres: {
        borderRadius: height / 30,
        borderWidth: 1,
        borderColor: '#d35400',
        alignItems: 'center',
        margin: height / 45
    },
    titleItemTop2: {
        fontSize: height / 60,
        // color: "#d35400",
        textAlign: 'center',
        backgroundColor: '#d35400',
        //height: undefined,
        // width: undefined,
        marginRight: height / 120,
        color: '#FFF',
        padding: height / 120,
        borderRadius: height / 120,
        //textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    titleItemTop3: {
        fontSize: height / 60,
        color: "#d35400",
        textAlign: 'center',
        //backgroundColor: '#d35400',
        //height: undefined,
        // height: height/60,
        marginRight: height / 120,
        //color: '#FFF',
        padding: height / 120,
        borderRadius: height / 120,
        borderWidth: 1,
        borderColor: '#d35400',
        textAlign: 'center',
        //textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    icon:{
        fontSize: height / 35,
        color: 'grey'
    },
    icon1: {
        fontSize: height / 35,
        color: '#d35400'
    },
    titleTacgia: {
        fontSize: height / 60,
        marginLeft : height /120,
        color: 'grey',
        //alignSelf: 'center', 
        textAlign: 'left',
        flexWrap: 'wrap'       
    },
    titleCommic: {
        fontSize: height / 50,
        fontWeight: 'normal',
        color: 'black',
        marginBottom: height / 100,
    }
});