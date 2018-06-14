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
import ListPeople from '../ListView/ListPeople';
import styles from '../../styles';
import moment from 'moment';
export default class InforMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFollow: false,
            isPopular: true,
            isNew: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
            <View style ={{padding: 10}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'white',fontSize:18}}>{this.props.title}</Text>
            <Text style={{color:'#1875D6',fontSize:18}}>{this.props.part+"/"+this.props.episode_number}</Text>
            </View>
            <Text style={{color:'grey'}}>{moment(this.props.release_date).format("DD/MM/YYYY")}</Text>
            <Text style={{color:'white',fontSize:14, marginTop:3,marginBottom:3}}>{this.props.language.map(e=> e.name_language + " - ") + this.props.run_time}</Text>
            <Text style={{color:'white',fontSize:13}}>{this.props.genres.map((e,i) => e.name_genre + "  ")}</Text>
            <Text numberOfLines={9} style={{color:'grey'}}>{this.props.overview}</Text>
            </View>
            <View>
            <Text style={{color:'white'}}>Diễn viên</Text>   
            <ListPeople data = {this.props.actor}/>
            </View>
            <View>
            <Text style={{color:'white'}}>Tác giả</Text>   
            <ListPeople data = {this.props.director}/>
            </View>
            </ScrollView>
            </View>
        );
    }
}
