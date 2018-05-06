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
    ImageBackground,
    TextInput,
    StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import ListHashTag from '../Components/ListHashTag';
import LinearGradient from 'react-native-linear-gradient'
const { height } = Dimensions.get('window')
//const data = Array(20).fill().map((_, index) => ({ key: index }))
import styles from './../styles';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visiableSwiper: false,
            data: data
        }

    }
    componentDidMount() {
        //to fix react-native-swiper in android bug
        if (Platform.OS === 'android') {
            setTimeout(() => {
                this.setState({ visiableSwiper: true })
            }, 0)
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
            <View style ={{backgroundColor: 'transparent', alignItems:'center', justifyContent:'flex-start', flexDirection: 'row'}}> 
                <View style ={{backgroundColor: '#5B5D66',alignItems:'center', justifyContent:'center',flexDirection: 'row', borderRadius: height/35}}>
                <Icon name ='ios-search' style ={{fontSize: height/30, color: 'white', marginLeft: height/80}}/>
                <TextInput
                        underlineColorAndroid = 'transparent'
                        placeholder = 'Search video, music, challenges'
                        placeholderTextColor = 'white'
                        returnKeyType= 'search'
                        style ={{fontSize: height/ 50 ,paddingLeft: 10 ,flex:1,height: height/ 17, backgroundColor: 'transparent',  color: 'white'}}>
                </TextInput>
                <Icon name ='ios-close' style ={{fontSize: height/30, color: 'white', marginRight: height/80}}/>
                </View>
            </View>
                <View style={styles.container}>
                    <View style={styles.wraperSwiper1}>
                        {
                            this.state.visiableSwiper && <Swiper
                                style={styles.wrapperSwiper}
                                dot={<View style={{ backgroundColor: '#FFF', width: 5, height: 5, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                                activeDot={<View style={{ backgroundColor: '#e53935', width: 5, height: 5, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                                autoplay={true}>
                                <ImageBackground source={{ uri: 'https://pre00.deviantart.net/ff8b/th/pre/f/2017/192/5/c/dragon_ball_super_wallpaper___2_by_windyechoes-dbfvsvd.png' }} style={styles.slide}>
                                <LinearGradient colors={['rgba(0,0,0, 0.7)','rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)']}  style={styles.slide}/>
                                </ImageBackground>
                                <ImageBackground source={{ uri: 'https://pre00.deviantart.net/f426/th/pre/f/2017/201/2/7/son_goku_s_ultimate_limit_breaker_wallpaper_by_windyechoes-dbh398e.png' }} style={styles.slide}>
                                <LinearGradient colors={['rgba(0,0,0, 0.7)','rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)']}  style={styles.slide}/>
                                </ImageBackground>
                                <ImageBackground source={{ uri: 'https://pre00.deviantart.net/648f/th/pre/f/2017/192/7/a/dragon_ball_super_next_gen_group_wallpaper_by_windyechoes-dbfvor0.png' }} style={styles.slide}>
                                <LinearGradient colors={['rgba(0,0,0, 0.7)','rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)']}  style={styles.slide}/>
                                </ImageBackground>
                                <ImageBackground source={{ uri: 'https://pre00.deviantart.net/3bef/th/pre/f/2016/310/f/d/dragon_ball_super_wallpaper_vegito_vs_zamasu_by_windyechoes-danko3v.jpg' }} style={styles.slide}>
                                 <LinearGradient colors={['rgba(0,0,0, 0.7)','rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)']}  style={styles.slide}/>
                                </ImageBackground>
                            </Swiper>
                        }
                </View>
                       <ListHashTag data = {this.state.data}/>  
                    {/* <View style={styles.wraper2}>
                        <View style={styles.viewPage}>
                            <View style={styles.tron}></View>
                            <Text style={styles.titlePage}>Mới trong ngày</Text>
                        </View>
                    </View>
                    <View style={styles.wraper2}>
                        <View style={styles.viewPage}>
                            <View style={styles.tron}></View>
                            <Text style={styles.titlePage}>Thể loại được xem nhiều nhất</Text>
                        </View>
                        <ListGenres data = {this.state.data}/> 
                    </View>
                    <View style={styles.wraper2}>
                        <View style={styles.viewPage}>
                            <View style={styles.tron}></View>
                            <Text style={styles.titlePage}>Được xem nhiều nhất</Text>
                        </View>
                        <ListCommic data = {this.state.data}/> 
                    </View>
                    <View style={styles.wraper2}>
                        <View style={styles.viewPage}>
                            <View style={styles.tron}></View>
                            <Text style={styles.titlePage}>iBook tuyển chọn</Text>
                        </View>
                         <ListDetailCommic data = {this.state.data} /> 
                    </View>
                    <View style={styles.wraper2}>
                        <View style={styles.viewPage}>
                            <View style={styles.tron}></View>
                            <Text style={styles.titlePage}>iBook đoán bạn thích</Text>
                        </View>
                         <ListCommic data = {this.state.data}/> 
                    </View> */}
                </View>
            </ScrollView>            
            </View>
            
        );
    }
}
