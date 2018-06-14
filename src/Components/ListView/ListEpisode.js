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
import LinearGradient from 'react-native-linear-gradient'

export default class ListEpisode extends Component {
    _renderRecommend = ({ item }) => {
        return (
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('VodScreen', {url: item.url_link, title: this.props.title})}>
                <View style = {{width: (width-(height/120 *6))/3, margin:height/120, borderRadius: height/100,borderColor:'white',borderWidth:height/1000, overflow:'hidden'}}>
                {/* <Image source={{uri: this.props.imageEpi}} style={styles.imageItemtopEpisode}/> */}
                {/* <LinearGradient colors={['rgba(0,0,0, 0)','rgba(0, 0, 0, 0)', 'rgba(0,0,0, 0.1)']}  style={styles.imageItemtopEpisodeLinear}/> */}
                <View>
                    <Text numberOfLines={2} style ={[styles.styleTextName,{textAlign:'center',fontSize:height/35}]}>{"Tập "+ item.part}</Text>
                    {/* <Text style ={[styles.styleTextName,{fontSize:height/50}]}>{this.props.title}</Text> */}
                </View>
                </View>              
            </TouchableNativeFeedback>  
        );
    }
    render() {
        return (
            <View style={styles.container}>
            <FlatList
            data={this.props.dataEpi}
            removeClippedSubviews={true}     
            horizontal={false}
            numColumns={3}
            automaticallyAdjustContentInsets={true}                  
            extraData= {this.state}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this._renderRecommend}/>    
            </View>  
        );
    }
}
