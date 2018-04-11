import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';
import {connect} from 'react-redux';
class ReduxTest1 extends Component {
    state = {  }
    render() {
        return (
            <View style={styleController.controller}>
            <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
            <TouchableOpacity onPress= {() => this.props.dispatch({type : 'COLOR'})} style={styleController.button}>
                    <Text style={styleController.buttonText}>Change Color</Text>
                </TouchableOpacity>
            <View style={styleController.buttonContainer}>
                <TouchableOpacity onPress= {() => this.props.dispatch({type : 'UP'})} style={styleController.button}>
                    <Text style={styleController.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress= {() => this.props.dispatch({type : 'DOWN'})} style={styleController.button}>
                    <Text style={styleController.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}
function mapStateToProps(state){
    return{myValue: state.value}
}
export default connect(mapStateToProps)(ReduxTest1);
const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});