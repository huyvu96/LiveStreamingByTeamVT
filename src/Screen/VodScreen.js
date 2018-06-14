/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeModules,
  processColor,
  TouchableOpacity,
  Image,
  StatusBar,TouchableWithoutFeedback,Dimensions
} from 'react-native';
import KSYVideo from 'react-native-ksyvideo';
import ProgressController from '../Components/Video/ProgressController';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get('window');
import Orientation from 'react-native-orientation'
export default class VodScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {showbar: true, 
        paused: false, 
        windowWidth: 0, 
        windowHeight: 0,
        duration: 0.0,
        currentTime: 0.0,
        isLoading:false,
      };
    }
    
    componentWillMount() {
      Orientation.lockToLandscape()
    }
    _onLayout(event) 
    {  
      let {x,y,width,height} = event.nativeEvent.layout;  
      this.setState({windowWidth:width, windowHeight:height});
    } 

    _onLoad(data){
      this.setState({ duration: data.duration, isLoading:true,showbar: !this.state.showbar});
    };

    _onProgress(data){
      if (this.state.showbar){
       this.setState({ currentTime: data.currentTime });
      }
    }
    
    onProgressChanged(newPercent, paused) {
        if (paused){
          this.setState({paused: !this.state.paused});
        }
        else if (newPercent >= 0)
        {
          let {duration} = this.state;
          if (duration > 0){
            let newTime = newPercent * duration / 100;
            this.setState({currentTime: newTime});
            this.video.seek(newTime);
          }
        }
    }

    getCurrentTimePercentage(currentTime, duration) {
        if (currentTime > 0) {
            return parseFloat(currentTime) / parseFloat(duration);
        } else {
            return 0.0;
        }
    }

    render() {
    const { params } = this.props.navigation.state;
    let {currentTime, duration, paused, windowHeight} = this.state;
    const completedPercentage = this.getCurrentTimePercentage(currentTime, duration) * 100;
    return (
        <View style={styles.container} onLayout={this._onLayout.bind(this)}>   

            <StatusBar
              hidden={!this.state.showbar}
              />
          
          <KSYVideo
              ref={(video)=>{this.video = video}}
              source={{uri: params.url}}
              timeout={{prepareTimeout:60, readTimeout:60}}
              paused={this.state.paused}
              playInBackground={true}
              controls={true}
              onTouch={()=>{
                              this.setState({showbar: !this.state.showbar}
                            )
                            }
                      }
               
              onLoad={this._onLoad.bind(this)}
              onEnd={()=>{this.props.navigation.goBack();console.log("JS onCompletion");}}
              onError={(data)=>{this.props.navigation.goBack();console.log("JS onError:" + data.error.what + data.error.extra);}}
              onProgress={this._onProgress.bind(this)}
              onReadyForDisplay = {(data)=>{console.log("JS Video render start");}}
              style={styles.fullScreen}
            />
        
          {!this.state.isLoading?(
            <View style={{height: 10, marginRight:10, alignSelf:'center'}}>
              <View style={{height:windowHeight, justifyContent:'center'}}>
                <BarIndicator color='white' count={4} size={30}/>
              </View>
            </View>):(null)}      
            {this.state.showbar?(
            <View style={{height: 10, marginLeft:10}}>
              <View style={{height:windowHeight}}>
              <TouchableWithoutFeedback onPress = {()=>  {Orientation.lockToPortrait(),
            this.props.navigation.goBack()}}>
              <View style = {{flexDirection:'row', alignItems:'center'}}>
              <Ionicons name= 'ios-arrow-back-outline' style ={{fontSize: height/15,color:'white'}} />
              <Text style = {{marginLeft: 5, color: 'white', fontSize:height/25}}>{"Bạn đang xem phim: "+params.title}</Text>
              </View>
        </TouchableWithoutFeedback>              
        </View>
            </View>):(null)}   
          {/* {this.state.showbar?(
            <View style={styles.controller}>
              <View style={styles.progressBar}>
                <ProgressController duration={duration}
                                    paused={this.state.paused}
                                    currentTime={currentTime}
                                    percent={completedPercentage}
                                    onNewPercent={this.onProgressChanged.bind(this)}/>
              </View>
            </View>):(null)} */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //justifyContent: 'space-between',
    backgroundColor: 'black',
  },

  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },

 controller: {
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },

  progressBar: {
    alignSelf: "stretch",
    margin: 30
  },
});
