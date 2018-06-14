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
export default class ListVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            page: 1,
            refreshing: false,
        };
    }

    componentDidMount() {
          this.makeRemoteRequest();
    }

     makeRemoteRequest = async () => {
            const { page } = this.state;
            //console.log("con cho ne"+ page)
             await setTimeout(()=>{
                this.props.fectchData(page, this.props.nameFecth);
            }, 1000);
            setTimeout(()=>{
                    this.setState({
                        data: page === 1 ? this.props.dataFecth : [...this.state.data, ...this.props.dataFecth],
                    });
                }, 1500);
    };

    handleMore = ()=>{
        this.setState({
            page: this.state.page + 1
        }, ()=>{
            this.makeRemoteRequest();
        })
    }
    _renderRecommend = ({ item }) => {
        return (
            <TouchableNativeFeedback>
                <View style={{ width: (width - (height / 120 * 4)) / 2, margin: height / 120, borderRadius: height / 100, overflow: 'hidden' }}>
                    <Image source={{ uri: item.poster_path }} style={styles.imageItemtop} />
                    <LinearGradient colors={['rgba(0,0,0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0,0,0, 0.1)']} style={styles.imageItemtopLinear} />
                    <View style={styles.styleViewItemBottom}>
                        {/* <Text numberOfLines={2} style={styles.styleTextName}>{item.title}</Text> */}
                        {/* <Text style={[styles.styleTextName, { fontSize: height / 50 }]}>Việt Nam / 17-05-2016</Text> */}
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
    renderFooter = () => {
        // if (!this.props.loading) return null;
        return (
            this.props.loading ? (null) : (<View style={[styles.viewAcdicator,{height: undefined,paddingVertical: 20}]}><BallIndicator color='white'  size={30} /></View>   
        ) );
    };
    render() {
        return (
            <View  style={styles.container}>
                <FlatList
                  //  ref={listvideo}
                    data={this.state.data}
                    removeClippedSubviews={true}
                    //  contentContainerStyle={{padding:height/60}}       
                    horizontal={false}
                    numColumns={2}
                    //ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 50,}}/>)}}
                    ListFooterComponent={this.renderFooter}
                    automaticallyAdjustContentInsets={true}
                    //extraData={this.state}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this._renderRecommend} 
                    onEndReached={this.handleMore}
                    onEndReachedThreshold={0.2}/>
            </View>

        );
    }
}
