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
import styles from './../styles';
import data from '../data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'

export default class SwiperLive extends Component {
    render() {
        return (
            <Swiper  
                 loop = {false}
                 showsPagination={false} 
                 index={0}
                 >
                  {data.map((e, i) =>
                  <View key = {'key' + i }style = {{height: height, width: width}}>
                  <Image source={{uri: e.image}} style={styles.imagePopular}/>
                  <LinearGradient colors={['rgba(0,0,0, 0.7)','rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)']}  style={styles.imagePopularLinear}/>

                  <View style ={styles.viewChat}>
                    <Text style ={styles.styleTextChat}>Vũ: Đẹp quá z</Text>
                    <Text style ={styles.styleTextChat}>Trâm: Đẹp đẹp</Text>
                    <Text style ={styles.styleTextChat}>Bông gòn: Yêu mất rồi</Text>
                    <Text style ={styles.styleTextChat}>Cô bé: Khu vực chat</Text>
                    <Text style ={styles.styleTextChat}>Cô bé: Khu vực chat</Text>
                  </View>
                  <View style ={styles.viewFuntionVideo}>
                       <Image source={{uri: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/29197246_2062594664016900_292927065248317668_n.jpg?_nc_cat=0&oh=b7c11a8b1c650a76934fd68b52a1d416&oe=5B75F3A6'}}  style = {styles.avatarLarge}></Image>
                       <Ionicons name="ios-heart" style={styles.styleIconFuntionVideo}/>
                       <Text style ={styles.styleTextFuntionVideo}>1025</Text>
                       <Ionicons name="ios-chatbubbles" style={styles.styleIconFuntionVideo} />
                       <Text style ={styles.styleTextFuntionVideo}>1025</Text>
                       <Ionicons name="ios-star" style={styles.styleIconFuntionVideo} />
                       <Text style ={styles.styleTextFuntionVideo}>1025</Text>
                  </View>
                  </View>)    
                }
            </Swiper>
        );
    }
}
