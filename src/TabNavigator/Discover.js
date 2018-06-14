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
    StatusBar
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import ListHashTag from '../Components/ListView/ListHashTag';
import LinearGradient from 'react-native-linear-gradient'
const { height, width } = Dimensions.get('window')
import axios from 'axios';
import { baseURL } from '../Database/getAPI';
import { connect } from 'react-redux';
import { fetchingDataMoviebyCategory } from '../Redux/Action/actionGetMovieByCategory';
import { fetchingDataDetailMovieByID } from '../Redux/Action/actionGetDetailByID';
import { fetchingDataTopMovieByCategory } from '../Redux/Action/actionGetTopMovieByCategory';
import {fetchingDataMoviebyCategoryMain} from '../Redux/Action/actionGetMovieByCategoryMain';
import styles from './../styles';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
class Discover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visiableSwiper: false,
        }

    }
    componentDidMount() {
        //to fix react-native-swiper in android bug
        if (Platform.OS === 'android') {
            setTimeout(() => {
                this.setState({ visiableSwiper: true })
            }, 0)
        }
        this.props.fetchingDataMoviebyCategoryMain(1, 'Phim lẻ');
        this.props.fetchingDataMoviebyCategoryMain(1, 'Phim bộ');
        this.props.fetchingDataMoviebyCategoryMain(1, 'TV Show');
        this.props.fetchingDataTopMovieByCategory('Phim lẻ');
    }
    render() {
        console.log("Discover "+this.props.dataPhimLeMain);
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <View style={{
                        padding: height / 120, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', position: 'absolute',
                        left: 0,
                        top: 0,
                        zIndex: 100
                    }}>
                        <Icon name='ios-search' style={{ fontSize: height / 20, color: 'white' }} />
                        <Text style={{
                            marginLeft: height / 120, fontSize: height / 40, padding: 5, alignSelf: 'stretch', color: 'white', textAlign: 'center', height: height / 20
                            , borderRadius: height / 20, borderColor: 'white', borderWidth: 0.8, flex: 1
                        }}>Search video, channel for you</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.wraperSwiper1}>
                            {
                                this.props.dataTop.length ? (this.state.visiableSwiper && <Swiper
                                    style={styles.wrapperSwiper}
                                    dot={<View style={{ backgroundColor: '#FFF', width: 5, height: 5, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                                    activeDot={<View style={{ backgroundColor: '#e53935', width: 5, height: 5, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                                    autoplay={true}>
                                    {/* { this.props.dataTop.map((e,i)=>{
                                        <View  key={i} style={{height:null, width:null}}>
                                        <Image  source={{ uri: e.backdrop_path}} style={styles.slide}>
                                        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']} style={styles.slide} />
                                     </Image>
                                        </View>
                                     
                                    })                                        
                                    } */}
                                    <ImageBackground source={{ uri: this.props.dataTop[0].backdrop_path }} style={styles.slide}>
                                        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']} style={styles.slide} />
                                    </ImageBackground>
                                    <ImageBackground source={{ uri: this.props.dataTop[1].backdrop_path }} style={styles.slide}>
                                        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']} style={styles.slide} />
                                    </ImageBackground>
                                    <ImageBackground source={{ uri: this.props.dataTop[2].backdrop_path }} style={styles.slide}>
                                        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']} style={styles.slide} />
                                    </ImageBackground>
                                    <ImageBackground source={{ uri: this.props.dataTop[3].backdrop_path }} style={styles.slide}>
                                        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']} style={styles.slide} />
                                    </ImageBackground>
                                    <ImageBackground source={{ uri: this.props.dataTop[4].backdrop_path }} style={styles.slide}>
                                        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']} style={styles.slide} />
                                    </ImageBackground>
                                </Swiper>) : (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                            }
                        </View>
                        <View style={styles.wraper2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.viewPage}>
                                    <Text style={styles.tron}>#</Text>
                                    <Text style={styles.titlePage}>Phim lẻ</Text>
                                </View>
                                <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ScreenViewMore',{category:'Phim lẻ'})}>
                                    <View style={styles.viewPage}>
                                        <Text style={[styles.tron, { fontWeight: '200', fontSize: height / 40 }]}>Xem thêm</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            {
                                this.props.isLoadingPhimLeMain ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                                    : (<ListHashTag data={this.props.dataPhimLeMain} navigation={this.props.navigation} />)
                            }
                        </View>
                        <View style={styles.wraper2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.viewPage}>
                                    <Text style={styles.tron}>#</Text>
                                    <Text style={styles.titlePage}>Phim bộ</Text>
                                </View>
                                <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ScreenViewMore',{category:'Phim bộ'})}>
                                    <View style={styles.viewPage}>
                                        <Text style={[styles.tron, { fontWeight: '200', fontSize: height / 40 }]}>Xem thêm</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            {
                                this.props.isLoadingPhimBoMain ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                                    : (<ListHashTag data={this.props.dataPhimBoMain} navigation={this.props.navigation} />)
                            }
                        </View>
                        <View style={styles.wraper2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.viewPage}>
                                    <Text style={styles.tron}>#</Text>
                                    <Text style={styles.titlePage}>TV Show</Text>
                                </View>
                                <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ScreenViewMore',{category:'TV Show'})}>
                                    <View style={styles.viewPage}>
                                        <Text style={[styles.tron, { fontWeight: '200', fontSize: height / 40 }]}>Xem thêm</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            {
                                this.props.isLoadingTVShowMain ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                                    : (<ListHashTag data={this.props.dataTVShowMain} navigation={this.props.navigation} />)
                            }
                        </View>        
                    </View>
                </ScrollView>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        dataPhimLeMain: state.getMovieByCategoryMain.dataPhimLeMain,
        dataPhimBoMain: state.getMovieByCategoryMain.dataPhimBoMain,
        dataTVShowMain: state.getMovieByCategoryMain.dataTVShowMain,
        isLoadingPhimLeMain: state.getMovieByCategoryMain.isLoadingPhimLeMain,
        isLoadingPhimBoMain: state.getMovieByCategoryMain.isLoadingPhimBoMain,
        isLoadingTVShowMain: state.getMovieByCategoryMain.isLoadingTVShowMain,
        errorPhimLeMain: state.getMovieByCategoryMain.errorPhimLeMain,
        errorPhimBoMain: state.getMovieByCategoryMain.errorPhimBoMain,
        errorTVShowMain: state.getMovieByCategoryMain.errorTVShowMain,
        dataradi: state.getDetailMovie.data,
        dataTop: state.getTopMovie.dataTop
    };
}

export default connect(mapStateToProps, { fetchingDataMoviebyCategory, 
    fetchingDataDetailMovieByID, 
    fetchingDataTopMovieByCategory,
    fetchingDataMoviebyCategoryMain })(Discover);
