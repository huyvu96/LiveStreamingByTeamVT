import React, { Component } from 'react';
import { View, Text ,TouchableOpacity, Dimensions,TextInput,FlatList} from 'react-native';
import io from 'react-native-socket.io-client'
const {height, width} = Dimensions.get('window');
export default class SocketDemo extends Component {
    constructor(props) {
        super(props)
        e = this;
        this.socket = io("http://10.88.113.197:3000", {jsonp: false});
        this.state = {
            color: 'white',
            user: '',
            isLogin: false,
            dataUser: null,
            dataMess: null,
            dataRoom: null,
            nameRoom: ''
        }
        this.socket.on("Server-Send-Color", function(data){
            e.setState({
                color: data
            });
        });
        this.socket.on("Error", (data)=>{
            e.setState({
                isLogin: data
            })
        })
        this.socket.on("Successful", (data)=>{
            e.setState({
                isLogin: data
            })
        })
        this.socket.on("SEVER-SEND-ARRUSER", (data)=>{
            e.setState({
                dataUser: data
            })
        })
        this.socket.on("SEVER-SEND-ARRMESS", (data)=>{
            e.setState({
                dataMess: data
            })
        })
        this.socket.on("SEVER-SEND-ROOM", (data)=>{
            e.setState({
                dataRoom: data
            })
        })
        this.socket.on("SEVER-SEND-NAME-ROOM", (data)=>{
            e.setState({
                nameRoom: data
            })
        })
    }
    onRegisterUser(){
        this.socket.emit('REGISTER-USER', this.state.user)
        this.setState({user:''})
    }
    onSendMessage(){
        this.socket.emit('USER-SEND-MESSAGE', this.state.user)
        this.setState({user:''})
    }
    onLogout(){
        this.socket.emit('USER-SEND-LOGOUT')
        e.setState({
            isLogin: false
        })
    }
    render() {
        const isLogin = this.state.isLogin ? ('Send') : ('Register')
        return (
            <View style={{flex: 1}}>
                <View style = {{flex: 3, backgroundColor: 'black', flexDirection:'row'}}>
                <View style ={{flex: 4}}>
                <FlatList
                 style ={{flex:1}}
                 data={this.state.dataMess}
                 removeClippedSubviews={true}     
                 horizontal={false}
                 ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 80,}}/>)}}
                 automaticallyAdjustContentInsets={true}                  
                 extraData= {this.state}
                 keyExtractor={(item) => item.name}
                 renderItem={({item}) => <Text style={{textAlign: 'center', color:'white', fontSize: 20}}>{item.name +": " + item.mess}</Text>}
                 />
                 <FlatList
                 style ={{flex:1}}
                 data={this.state.dataRoom}
                 removeClippedSubviews={true}     
                 horizontal={false}
                 ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 80,}}/>)}}
                 automaticallyAdjustContentInsets={true}                  
                 extraData= {this.state}
                 keyExtractor={(item) => item}
                 renderItem={({item}) => <Text style={{textAlign: 'center', color:'white', fontSize: 20}}>{item}</Text>}
                 />
                </View>
                <View style ={{flex: 1, backgroundColor:'pink', alignItems:'center'}}>
                <Text>User</Text>
                <FlatList
                 data={this.state.dataUser}
                removeClippedSubviews={true}     
                horizontal={false}
                ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 80,}}/>)}}
                automaticallyAdjustContentInsets={true}                  
                extraData= {this.state}
                keyExtractor={(item) => item}
                renderItem={({item}) => <Text style={{textAlign: 'center', color:'white', fontSize: 20}}>{item}</Text>}
                />
                </View>
                </View>
                <View style = {{flex: 1,backgroundColor: 'white', alignItems:'center'}}>
                <TextInput
                style ={{width: width/1.5, height: height/20, padding: 5, borderColor:'black',borderWidth: 1 }}
                onChangeText={(user) =>this.setState({user})}
                value ={this.state.user}
                />   
                <TouchableOpacity onPress = {() => {this.state.isLogin ? (this.onSendMessage()): (this.onRegisterUser())}}>
                        <View style = {{backgroundColor: 'blue', width: width/1.5, height: height/20 ,alignItems:'center', justifyContent:'center'}}>
                        <Text style ={{color: 'white'}}>{isLogin}</Text>
                        </View>
                </TouchableOpacity> 
                {this.state.isLogin ? ( <TouchableOpacity onPress = {() => this.onLogout()}>
                     <View style = {{backgroundColor: 'red', width: width/1.5, height: height/20 ,alignItems:'center', justifyContent:'center'}}>
                     <Text style ={{color: 'white'}}>LOGOUT</Text>
                     </View>
                     </TouchableOpacity> ) : (null)}        
                </View> 
            </View>
        );
    }
}
