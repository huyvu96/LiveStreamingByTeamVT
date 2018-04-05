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
    TouchableNativeFeedback
} from 'react-native';
const { height } = Dimensions.get('window')
//const data = Array(20).fill().map((_, index) => ({ key: index }))
import styles from './../styles';
export default class Home extends Component {
    constructor(props) {
        super(props)
       

    }
    render() {
        return (
            <View style={styles.container}>
               <Text>Library</Text>
            </View>
            
        );
    }
}
