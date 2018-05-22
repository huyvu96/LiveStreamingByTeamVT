import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    LayoutAnimation,
    FlatList,
    ScrollView,
    Dimensions,
    Image,
    TouchableNativeFeedback,
    TouchableOpacity,
    Animated,
    StatusBar
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
const { height, width } = Dimensions.get('window');
import styles from './../styles';
export default class ListMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFollow: false,
            isPopular: true,
            isNew: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <Text style={{color:'white'}}>List phim liên quan</Text>
            </View>
        );
    }
}
