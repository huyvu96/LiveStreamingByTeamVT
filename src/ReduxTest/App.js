import React, { Component } from 'react'
import { View } from 'react-native';
import ReduxTest from './ReduxTest';
import {Provider} from 'react-redux';
import store from './Redux/store';
export default class App extends Component {
    state = {  }
    render() {
        return (
            <Provider store = {store}>
                <ReduxTest/>
            </Provider>
        );
    }
}