import React, { Component } from 'react';
import {View, Text, StatusBar,AsyncStorage} from 'react-native';
import store from './Redux/Store/configStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {TabBar, RootNavigator} from './Router';
import styles from './styles'
//const {persistor, store} = configureStore()
//StatusBar.setHidden(true);

export default class App extends Component {
    constructor(props){
        super(props);    
      }
    render() {
        return (
            <Provider store = {store}>
                {/* <PersistGate loading={null} persistor={persistor}> */}
                <RootNavigator/>
                {/* </PersistGate> */}
            </Provider>
        );
    }
}