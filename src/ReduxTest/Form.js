import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
//import { toggleIsAdding, addWord } from '../redux/actionCreators';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        };
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const { en, vn } = this.state;
        this.props.dispatch({type: 'ADDED',en, vn});
        //this.props.toggleIsAdding();
        this.setState({
            en:'',
            vn:''
        })
        this.props.dispatch({type: 'ADDING'})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text })}
                    placeholder="English word"
                />
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text })}
                    placeholder="Meaning"
                />
                <TouchableOpacity onPress={this.onAdd}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapStateToProps(state){
    return{isAdding: state.isAdding};
}
export default connect(null)(Form);

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 150,
        height: 40,
        backgroundColor: '#E4F6D4',
        margin: 10,
        paddingHorizontal: 10
    }
});