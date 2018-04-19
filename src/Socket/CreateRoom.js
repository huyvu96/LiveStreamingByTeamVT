import React, { Component } from 'react';
import { View, Text ,TouchableOpacity, Dimensions,TextInput,FlatList} from 'react-native';
import io from 'react-native-socket.io-client'
const {height, width} = Dimensions.get('window');
export default class CreateRoom extends Component {
    constructor(props) {
        super(props)
        e = this;
        this.socket = io("http://10.88.113.197:3000", {jsonp: false});
        this.state = {
            color: 'white',
            user: '',
            isLogin: false,
            dataUser: null,
            dataMess: null
        }
    }
    onCreateRoom(){
        this.socket.emit("CLIENT-CREATE-ROOM", this.state.user)
        this.props.navigation.navigate('Detail')
    }
    render() {
        return (
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <TextInput
                style ={{width: width/1.5, height: height/20, padding: 5, borderColor:'black',borderWidth: 1 }}
                onChangeText={(user) =>this.setState({user})}
                value ={this.state.user}
                />   
                <TouchableOpacity onPress ={()=>this.onCreateRoom()} >
                        <View style = {{backgroundColor: 'blue', width: width/1.5, height: height/20 ,alignItems:'center', justifyContent:'center'}}>
                        <Text style ={{color: 'white'}}>Create Room</Text>
                        </View>
                </TouchableOpacity> 
            </View>
        );
    }
}
