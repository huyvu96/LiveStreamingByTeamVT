import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,TouchableNativeFeedback,Image,Dimensions } from 'react-native';
const { height } = Dimensions.get('window')
import styleList from '../TramStyle'
export default class ListCanlendar extends Component {
    state = {  }
    _renderRecommend = ({ item }) => {
        return (
            <TouchableNativeFeedback>
                <View style={{flexDirection:'row', margin:height/100, flex:1}}>
                <Text  numberOfLines = {1} style ={[styles.titleCommic,{flex: 3, alignSelf:'center',textAlign:'center'}]}>{item.time}</Text>
                <Text  numberOfLines = {2} style ={[styles.titleCommic,{flex: 7, fontStyle:'italic'}]}>{item.name}</Text>
                </View>              
            </TouchableNativeFeedback>  
        );
    }
    render() {
        return (
            <View style={{flex:1}}>      
                <View style={styleList.viewHeader}>   
                    <Text style={[styleList.title,{fontSize:height/40}]}>Kênh phim</Text>                 
                     <Text style={styleList.title}>Lịch chiếu</Text>      
                     <Text style={[styleList.title,{fontSize:height/40}]}>16-5-2018</Text>                                 
                </View>        
                <FlatList
                 data={this.props.data}
                 removeClippedSubviews={true}     
                // contentContainerStyle={{padding:height/60}}       
                 //horizontal={true}
                // ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 80,}}/>)}}
                 automaticallyAdjustContentInsets={true}                  
                 extraData= {this.state}
                 showsVerticalScrollIndicator={false}
                 keyExtractor={(item) => item.name}
                 renderItem={this._renderRecommend}/>
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
        fontSize: height / 35,
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