import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,TouchableNativeFeedback,Image,Dimensions } from 'react-native';
const { height } = Dimensions.get('window')

export default class ListCommicH extends Component {
    state = {  }
    _renderRecommend = ({ item }) => {
        return (
            <TouchableNativeFeedback>
                <View style = {{width: height/7}}>
                <Image source={{uri: item.image}} style={styles.imageItemtop}/>
                {/* <Text  numberOfLines = {2} style ={styles.titleCommic}>{item.name}</Text> */}
                </View>              
            </TouchableNativeFeedback>  
        );
    }
    _renderHashTag = ({ item }) => {
        return (
            <View style={styles.wraper2}>
                <View style={styles.viewPage}>
                    <Text style={styles.tron}>#</Text>
                    <Text style={styles.titlePage}>{item.name}</Text>
                    <Text style={[styles.titlePage,{fontSize:height/50}]}>(Đang chiếu: Phim truyền hình)</Text>
                </View>
                <FlatList
                 data={item.data}
                 removeClippedSubviews={true}     
                 contentContainerStyle={{padding:height/60}}       
                 horizontal={true}
                 ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 80,}}/>)}}
                 automaticallyAdjustContentInsets={true}                  
                 extraData= {this.state}
                 showsHorizontalScrollIndicator={false}
                 keyExtractor={(item) => item.image}
                 renderItem={this._renderRecommend}/>
            </View>
        );
    }
    render() {
        return (
            <View>
                <FlatList
                 data={this.props.data}
                 removeClippedSubviews={true}     
                // contentContainerStyle={{padding:height/60}}       
                 //horizontal={true}
                 ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 80,}}/>)}}
                 automaticallyAdjustContentInsets={true}                  
                 extraData= {this.state}
                 showsHorizontalScrollIndicator={false}
                 keyExtractor={(item) => item.name}
                 renderItem={this._renderHashTag}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageItemtop: {
        //alignSelf: 'stretch',
        height: height / 5,
        width: height / 7,
       // position: 'relative',
        resizeMode: 'cover',
    },
    titleCommic: {
        fontSize: height / 60,
        fontWeight: 'normal',
        color: 'white',
        marginBottom: height / 100,
    },
    wraper2: {
        marginTop: 5,
        height: undefined,
        backgroundColor: '#000'
    },
    viewPage: {
        flexDirection: 'row',
        marginTop: height / 50,
        alignItems: 'center'
    },
    tron: {
        backgroundColor: 'transparent',
        fontSize: height/40,
        fontWeight: 'bold',
        color: '#d35400',
        marginLeft: height/80
        //borderRadius: height/30
    },
    titlePage: {
        fontSize: height / 40,
        fontWeight: 'normal',
        marginLeft: height / 60,
        color: 'white'
    },
});