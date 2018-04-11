import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,FlatList  } from 'react-native';
import ReduxTest1 from './ReduxTest1'
import {connect} from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';
class ReduxTest extends Component {
    getWordList() {
        const { myFilter, myWords } = this.props;
        if (myFilter === 'MEMORIED') return myWords.filter(e => e.memorized);
        if (myFilter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);
        return myWords;
    }
    render() {
        const color = this.props.myColor ? 'yellow':'white'
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
             <Header /> 
            <View style={{ flex: 10 }}>
                { this.props.IsAdding ? <Form /> : null }
                <FlatList 
                    data={this.getWordList()}
                    renderItem={({ item }) => <Word myWord={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <Filter />
        </View>
        );
    }
}
function mapStateToProps(state){
    return { myFilter: state.fillterStatusReducer.filterStatus,
        myWords: state.myWordReducer,
        IsAdding: state.toggleIsAddingReducer.isAdding}
}
export default connect(mapStateToProps)(ReduxTest);
const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
});

