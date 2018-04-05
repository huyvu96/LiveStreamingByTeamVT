import React, { Component } from 'react';
import {View, Text, StatusBar,AsyncStorage} from 'react-native';
import configureStore from './Redux/Store/configStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {TabBar} from './Router';
import styles from './styles'
const {persistor, store} = configureStore()
//StatusBar.setHidden(true);
export default class App extends Component {
    constructor(props){
        super(props);    
      }
    render() {
        return (
            <Provider store = {store}>
                <PersistGate persistor={persistor}>
                <View style = {styles.container}>               
                <TabBar/>
                </View>
                </PersistGate>
            </Provider>
        );
    }
}