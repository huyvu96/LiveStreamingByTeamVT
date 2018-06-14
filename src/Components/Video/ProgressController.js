"use strict";
import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Animated, PanResponder, Slider, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

let radiusOfHolder = 5;
let radiusOfActiveHolder = 7;
class ProgressController extends Component {

    constructor(props, context, ...args) {
        super(props, context, ...args);
        this.state = {lineX: new Animated.Value(0), slideX: new Animated.Value(0)};
    }

    componentWillReceiveProps(nextProps) {
        if (!this.state.moving) {
            this.state.slideX.setValue(this.computeScreenX(nextProps.percent));
        }
    }

    computeScreenX(percent) {
        return percent * this.state.width / 100;
    }

    componentWillMount() {
        this.holderPanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                let {slideX} = this.state;
                this.setState({moving: true});
                slideX.setOffset(slideX._value);
                slideX.setValue(0);
            },
            onPanResponderMove: (e, gestureState) => {
                let totalX = this.state.slideX._offset + gestureState.dx;
                let newPercent = (totalX / this.state.width) * 100;
                this.notifyPercentChange(newPercent, false);
                Animated.event([
                    null, {dx: this.state.slideX}
                ])(e, gestureState);
            },
            onPanResponderRelease: (e, gesture) => {
                this.state.slideX.flattenOffset();
                let newPercent = (this.state.slideX._value / this.state.width) * 100;
                this.setState({moving: false});
                this.notifyPercentChange(newPercent, false);
            }
        });
    }

    notifyPercentChange(newPercent, paused) {
        let {onNewPercent} = this.props;
        if (onNewPercent instanceof Function) {
            onNewPercent(newPercent, paused);
        }
    }

    onLayout(e) {
        this.setState({width: e.nativeEvent.layout.width - (radiusOfHolder * 2)});
    }

    getHolderStyle() {
        let {moving, slideX, width} = this.state;

        if (width > 0) {
            var interpolatedAnimation = slideX.interpolate({
                inputRange: [0, width],
                outputRange: [0, width],
                extrapolate: "clamp"
            });  
           
            return [styles.holder, moving && styles.activeHolder,
                (slideX._value || moving) && {transform: [{translateX: interpolatedAnimation}]}
            ];           
        } else {
            return [styles.holder];
        }
    }

    onLinePressed(e) {
        let newPercent = (e.nativeEvent.locationX / this.state.width) * 100;
        this.notifyPercentChange(newPercent, false);
    }

    onPlayOrPause(){
        let newPercent = (this.state.slideX._value / this.state.width) * 100;
        this.notifyPercentChange(newPercent, true);
    }

    formatSeconds(seconds = 0) {
        let {duration = 0} = this.props;
        seconds = Math.min(Math.max(seconds, 0), duration);
        var minutes = seconds / 60;
        var remainingSeconds = seconds % 60;
        return _.padStart(minutes.toFixed(0), 2, 0) + ":" + _.padStart(remainingSeconds.toFixed(0), 2, 0);
    }

    render() {
        let {moving} = this.state;
        let {currentTime, duration, percent, paused} = this.props;
        return (  
            <View style={styles.view}>   
                <TouchableOpacity style={{padding:0, justifyContent: "center", alignItems: "flex-start", width:30, height:30}}
                    onPress={this.onPlayOrPause.bind(this)}>

                    {/* {paused?(<Image style={{padding:0, width:15, height:15}} source={require('../../res/images/start.png')}/>):
                        (<Image style={{padding:0, width:15, height:15}} source={require('../../res/images/stop_not_full_screen.png')}/>)
                    } */}
                </TouchableOpacity>

                <Text style={[styles.timeText, {marginRight: 10}]}>{this.formatSeconds(currentTime)}</Text>
                <View style={styles.barView}
                      onLayout={this.onLayout.bind(this)} {...this.holderPanResponder.panHandlers}>
                    <View style={{flex: 1, flexDirection: "row", top: moving ? radiusOfActiveHolder : radiusOfHolder}}>
                        <TouchableOpacity style={[styles.line, {flex: percent, borderColor: "blue"}]}
                                          onPress={this.onLinePressed.bind(this)}/>
                        <TouchableOpacity style={[styles.line, {flex: 100 - percent, borderColor: "white"}]}
                                          onPress={this.onLinePressed.bind(this)}/>
                    </View>
                    <Animated.View style={this.getHolderStyle()}/>
                </View>
                <Text style={[styles.timeText, {marginLeft: 10}]}>{this.formatSeconds(duration)}</Text>
            </View>
        );
    }
}

let height = 40;
let styles = StyleSheet.create({
    view: {flex: 1, flexDirection: "row", height, alignItems: "center"},
    barView: {flex: 1},
    timeText: {color: "white"},
    line: {borderWidth: 1, padding: 0},
    holder: {
        height: radiusOfHolder * 2,
        width: radiusOfHolder * 2,
        borderRadius: radiusOfHolder,
        backgroundColor: "white"
    },
    activeHolder: {
        height: radiusOfActiveHolder * 2,
        width: radiusOfActiveHolder * 2,
        borderRadius: radiusOfActiveHolder,
        backgroundColor: "white"
    }
});

ProgressController.propTypes = {
    paused:PropTypes.bool,
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    percent: PropTypes.number,
    onNewPercent: PropTypes.func
};

export default ProgressController;
