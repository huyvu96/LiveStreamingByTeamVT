import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    Text,
    View,
    StatusBar,
    TouchableNativeFeedback
} from 'react-native';
const { height, width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'
//const data = Array(20).fill().map((_, index) => ({ key: index }))
import styleNotification from '../TramStyle';
import ListNotification from '../Components/ListView/ListNotification';
export default class Nofication extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styleNotification.container}>
                {/* View header */}
                <View style={styleNotification.viewHeader}>   
                    <Text style={{color:'#151114'}}>abc</Text>                 
                     <Text style={styleNotification.title}>Thông Báo</Text>      
                     <Text style={{color:'#151114'}}>abc</Text>                                 
                </View>
                 {/* View các dòng thông báo */}
                    <ListNotification/>
            </View>
        );
    }
}
