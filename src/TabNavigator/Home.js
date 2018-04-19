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
import ListVideo from '../Components/ListVideo';
import SwiperLive from '../Components/SwiperLive';

//const data = Array(20).fill().map((_, index) => ({ key: index }))
import styles from './../styles';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFollow: false,
            isPopular: true,
            isNew: false,
        }
    }
    onChooseTab(tag){
        switch(tag){
            case 1:
            this.setState({
                isFollow: true,
                isPopular: false,
                isNew: false,
            })
            this.Follow.bounceIn(500);
            this.Follow.transitionTo({ opacity: 1 })
            this.New.transitionTo({opacity: 0.54})
            this.Popular.transitionTo({opacity: 0.54})
            console.log("Press is foloow")
            break;
            case 2:
            this.setState({
                isFollow: false,
                isPopular: true,
                isNew: false,
            })
            this.Popular.bounceIn(500);
            this.Follow.transitionTo({ opacity: 0.54 })
            this.New.transitionTo({opacity: 0.54})
            this.Popular.transitionTo({opacity: 1})
            console.log("Press is popular")
            break;  
            case 3:
            this.setState({
                isFollow: false,
                isPopular: false,
                isNew: true,
            })
            this.New.bounceIn(500);
            this.Follow.transitionTo({ opacity: 0.54 })
            this.New.transitionTo({opacity: 1})
            this.Popular.transitionTo({opacity: 0.54})
            console.log("Press is New")
            break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <StatusBar
                backgroundColor="#161823"
                translucent = {false}
            />
                <View style ={styles.viewHome}>
                    <TouchableOpacity onPress = {() => this.onChooseTab(1)}>
                        <View>
                            <Animatable.Text ref={text => this.Follow = text} style = {[styles.styleOnPress, this.state.isFollow && styles.styleUnPress]}>Theo dõi</Animatable.Text>
                        </View>
                    </TouchableOpacity>
                    <View style = {styles.styleDivide}></View>
                    <TouchableOpacity onPress = {() => this.onChooseTab(2)}>
                        <View>
                        <Animatable.Text ref={text => this.Popular = text} style = {[styles.styleOnPress, this.state.isPopular && styles.styleUnPress]}>Phổ biến</Animatable.Text>
                        </View>
                    </TouchableOpacity>
                    <View style = {styles.styleDivide}></View>
                    <TouchableOpacity onPress = {() => this.onChooseTab(3)}>
                        <View>
                        <Animatable.Text ref={text => this.New = text}  style = {[styles.styleOnPress, this.state.isNew && styles.styleUnPress]}>Mới nhất</Animatable.Text>
                        </View>
                    </TouchableOpacity>
                </View>
                { this.state.isFollow && <ListVideo />}
                { this.state.isPopular &&  <SwiperLive />}
                { this.state.isNew && <ListVideo/>}
            </View>
        );
    }
}
