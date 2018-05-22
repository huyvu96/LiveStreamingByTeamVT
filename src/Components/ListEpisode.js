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
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './../styles';
import LinearGradient from 'react-native-linear-gradient'

import data from '../data';
export default class ListEpisode extends Component {
    _renderRecommend = ({ item }) => {
        return (
            <TouchableNativeFeedback>
                <View style = {{width: (width-(height/120 *6))/3, margin:height/120, borderRadius: height/100, overflow:'hidden'}}>
                <Image source={{uri: item.image}} style={styles.imageItemtopEpisode}/>
                <LinearGradient colors={['rgba(0,0,0, 0)','rgba(0, 0, 0, 0)', 'rgba(0,0,0, 0.1)']}  style={styles.imageItemtopEpisodeLinear}/>
                <View style ={styles.styleViewItemBottom}>
                    <Text numberOfLines={2} style ={styles.styleTextName}>Tập 1</Text>
                    <Text style ={[styles.styleTextName,{fontSize:height/50}]}>Thám tử Henrry</Text>
                </View>
                </View>              
            </TouchableNativeFeedback>  
        );
    }
    render() {
        return (
            <View style={styles.container}>
            <FlatList
            data={data}
            removeClippedSubviews={true}     
            horizontal={false}
            numColumns={3}
            automaticallyAdjustContentInsets={true}                  
            extraData= {this.state}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={this._renderRecommend}/>    
            </View>  
        );
    }
}
