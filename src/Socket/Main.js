import React, { Component } from 'react';
import { View, Text ,TouchableOpacity, Dimensions,TextInput,FlatList} from 'react-native';
import io from 'react-native-socket.io-client';
import CreateRoom from './CreateRoom';
import SocketDemo from './SocketDemo'
import{StackNavigator} from 'react-navigation';
const {height, width} = Dimensions.get('window');
const Root = StackNavigator({
    Home: {screen: CreateRoom},
    Detail: {screen: SocketDemo},
},{
    initialRouteName: "Home",
    headerMode: "none",
})
export default class Main extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Root/>
            </View>
        );
    }
}
