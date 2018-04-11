import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
//import { toggleIsAdding } from '../redux/actionCreators';

class Header extends Component {
    render() {
        const check = this.props.isAdding ? '-' : '+'
        return (
            <View style={styles.header}>
                <Text />
                <Text>MY WORDS</Text>
                <TouchableOpacity onPress={() => this.props.dispatch({type : 'ADDING'})}>
                    <Text>{check}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapStateToProps(state){
    return{isAdding: state.toggleIsAddingReducer.isAdding};
}
export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
    header: { 
        flex: 1, 
        backgroundColor: '#D9D9D9', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20 
    }
}); 