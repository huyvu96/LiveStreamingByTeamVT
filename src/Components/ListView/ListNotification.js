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
import styles from '../../TramStyle';
import dataNotification from '../../dataTram';
export default class ListNotification extends Component {
    _renderRecommend = ({ item }) => {
        return (
            <TouchableNativeFeedback>
                <View style={{flexDirection:'row', alignItems:'center', margin: height/120,borderRadius: height/120, borderWidth:0.8, borderColor:'white', padding: height/120}}>
                    <View>
                        <Image source={{ uri: item.image }} style={{ height: height/10, width:  height/10 }} />
                    </View>
                    <View style={{ marginLeft: height/100 }}>
                        <Text style={{ fontSize: height/40, color:'white' }}>{item.title}</Text>
                        <Text style={{ fontSize: height/45, color:'white' }}>{item.description}</Text>
                        <Text style={{ fontSize: height/45, color:'white' }}>{item.time}</Text>
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
                ItemSeparatorComponent={() => { return (<View style={{ width: height / 50, }} />) }}
                automaticallyAdjustContentInsets={true}
                extraData={this.state}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={this._renderRecommend} />
        );
    }
}
