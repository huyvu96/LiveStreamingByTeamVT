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
import * as Animatable from 'react-native-animatable'
const { height, width } = Dimensions.get('window')
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
                <View style ={{flexDirection: 'row', justifyContent:'center', padding: height/80, position: 'absolute',
                        right: width /4,
                        left: width/4,
                        top: height/ 35,
                        zIndex:100
                        }}>
                    <TouchableOpacity onPress = {() => this.onChooseTab(1)}>
                        <View>
                            <Animatable.Text ref={text => this.Follow = text} style = {[{color: 'white', opacity: 0.54, fontSize: 15}, this.state.isFollow && {fontSize: 16}]}>Follow</Animatable.Text>
                        </View>
                    </TouchableOpacity>
                    <View style = {{width: 0.5, height: 5, backgroundColor:'white', margin: 5, alignSelf: 'center'}}></View>
                    <TouchableOpacity onPress = {() => this.onChooseTab(2)}>
                        <View>
                        <Animatable.Text ref={text => this.Popular = text} style = {[{color: 'white', opacity: 0.54,fontSize: 15}, this.state.isPopular && {opacity: 1,fontSize: 16}]}>Popular</Animatable.Text>
                        </View>
                    </TouchableOpacity>
                    <View style = {{width: 0.5, height: 5, backgroundColor:'white', margin: 5, alignSelf: 'center'}}></View>
                    <TouchableOpacity onPress = {() => this.onChooseTab(3)}>
                        <View>
                        <Animatable.Text ref={text => this.New = text}  style = {[{color: 'white', opacity: 0.54,fontSize: 15}, this.state.isNew && {fontSize: 16}]}>New</Animatable.Text>
                        </View>
                    </TouchableOpacity>
                </View>
                { this.state.isFollow && <View style = {{backgroundColor:'#2d3436', flex:1, alignItems: 'center', justifyContent:'center'}}>
                    <Text>Tab 1</Text>
                    </View>
                }
                { this.state.isPopular &&  <View style = {{backgroundColor:'#2d3436', flex:1, alignItems: 'center', justifyContent:'center'}}>
                    <Text>Tab 2</Text>
                </View>
                }
                { this.state.isNew && <View style = {{backgroundColor:'#2d3436', flex:1, alignItems: 'center', justifyContent:'center'}}>
                    <Text>Tab 3</Text>
                </View>
                }
            </View>
        );
    }
}
