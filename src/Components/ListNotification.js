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
    Animated
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
const { height, width } = Dimensions.get('window');
import styles from './../TramStyle';
import dataNotification from '../dataTram';
export default class ListNotification extends Component {
    _renderRecommend = ({ item }) => {
        return (
            <TouchableNativeFeedback>
                <View style={{flexDirection:'row', alignItems:'center', padding: 5}}>
                    <View style={{marginLeft:5}} >
                        <Image source={{ uri: item.image }} style={{ height: 80, width: 80 }} />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: 20, color:'white' }}>{item.title}</Text>
                        <Text style={{ fontSize: 20, color:'white' }}>{item.description}</Text>
                        <Text style={{ fontSize: 20, color:'white' }}>{item.time}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
    render() {
        return (
            <FlatList
                data={dataNotification}
                removeClippedSubviews={true}
                //contentContainerStyle={{padding:height/60}}       
                horizontal={false}
                //ItemSeparatorComponent={() => { return (<View style={{ width: height / 50, }} />) }}
                automaticallyAdjustContentInsets={true}
                extraData={this.state}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={this._renderRecommend} />
        );
    }
}
