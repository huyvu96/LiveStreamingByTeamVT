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
import styles from '../../styles';
export default class ListPeople extends Component {
    _renderRecommend = ({ item }) => {
        return (
            <TouchableNativeFeedback>
                <View style ={{alignItems:'center'}}>
                <Image source={{uri: "http://www.ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png"}} style={styles.avatarLarge}/>
                <Text  numberOfLines = {2} style ={styles.titlePeople}>{item.name_people}</Text>
                </View>              
            </TouchableNativeFeedback>  
        );
    }
    render() {
        return (
            <FlatList
            data={this.props.data}
            removeClippedSubviews={true}     
            contentContainerStyle={{padding:height/60}}       
            horizontal={true}
            //numColumns={2}
            ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 50,}}/>)}}
            automaticallyAdjustContentInsets={true}                  
            extraData= {this.state}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this._renderRecommend}/>
        );
    }
}
