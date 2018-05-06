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
import data from '../data';
export default class ListVideo extends Component {
    _renderRecommend = ({ item }) => {
        return (
            <TouchableNativeFeedback>
                <View style = {{width: width/2}}>
                <Image source={{uri: item.image}} style={styles.imageItemtop}/>
                <View style ={styles.styleViewItemBottom}>
                    <Image source={{uri: 'https://lh3.googleusercontent.com/QUu-7yt4PPkkpsA7TpMs0MFAXzrW-fiWIlKlwu7obhpKO9fd393OV32dm-XrvntvMnM=s128'}} style = {styles.avatarSmall}></Image>
                    <Text style ={styles.styleTextName}>Phim truyện</Text>
                </View>
                <View style ={styles.styleViewItemTop}>
                     <Ionicons
                  name="ios-contact-outline" style={styles.styleIconItemTop} />
                    <Text style ={styles.styleTextNumPerson}>1025</Text>
                </View>
                </View>              
            </TouchableNativeFeedback>  
        );
    }
    render() {
        return (
            <FlatList
            data={data}
            removeClippedSubviews={true}     
            //contentContainerStyle={{padding:height/60}}       
            horizontal={false}
            numColumns={2}
            ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 50,}}/>)}}
            automaticallyAdjustContentInsets={true}                  
            extraData= {this.state}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={this._renderRecommend}/>
        );
    }
}
