import React, { Component } from 'react';
import {StatusBar,Keyboard ,View, Text, Dimensions, StyleSheet, ImageBackground, TouchableNativeFeedback, TouchableOpacity, Animated, LayoutAnimation, UIManager, KeyboardAvoidingView,Alert, ActivityIndicator } from "react-native"
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import Login from './LoginEmail';

import {connect} from 'react-redux';
import {
  LoginButton,
  AccessToken,
  LoginManager
} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import GetData from '../Database/getData';
import { loginFacebookThunk,userLoadingSuccess,userLoadingFail} from '../Redux/Action/actionLoginCreators';
import {
  NavigationActions
} from 'react-navigation';
const{height, width} = Dimensions.get('window');

class ScreenLogin extends Component {
  constructor(props) {
    super(props);
    this.state ={
        isInput: false
    }
}    

static navigationOptions = {
    header: null
}
componentWillMount() {
    this.loginHeight = new Animated.Value(130)
}
increaseHeightOfLogin = () => {
    Animated.timing(this.loginHeight, {
        toValue: height,
        duration: 500
    }).start(()=>{
        this.setState({
            isInput: true,
        })
    })
}
decreaseHeightOfLogin = () => {
    Keyboard.dismiss();
    Animated.timing(this.loginHeight, {
        toValue: 130,
        duration: 500
    }).start()
}
onFacebook(){
    console.log("Click button onFacebook")
  LoginManager.logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                return AccessToken.getCurrentAccessToken();
            })
            .then(data => {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                return firebase.auth().signInAndRetrieveDataWithCredential(credential);
            })
            .then((currentUser) => {
                GetData.getUserInfo(currentUser.user.uid, (user) => {
                    if (user) {
                      this.props.userLoadingSuccess(user);
                        //dispatch(userLoadingSuccess(user));
                        this.props.navigation.dispatch(NavigationActions.reset({
                          index: 0,
                          actions: [
                            NavigationActions.navigate({ routeName: 'TabBar'})
                          ]
                        })
                        )  
                   } else {
                        let userinfo = {
                            displayName: currentUser.user.displayName,
                            email: currentUser.user.email,
                            photoURL: currentUser.user.photoURL,
                            uid: currentUser.user.uid,
                            phoneNumber: "Chưa cập nhật",
                            sex: currentUser.additionalUserInfo.profile.gender,
                        }
                        GetData.setUserInfo(userinfo);
                        this.props.userLoadingSuccess(userinfo);
                        //dispatch(userLoadingSuccess(userinfo));
                        this.props.navigation.dispatch(NavigationActions.reset({
                          index: 0,
                          actions: [
                            NavigationActions.navigate({ routeName: 'TabBar'})
                          ]
                        })
                        )  
                    }
                })
            })
            .catch((error) => {
                this.props.userLoadingFail();
                console.log('hehe', error);
            });
}
render() {
  const headerTextOpacity = this.loginHeight.interpolate({
      inputRange: [130, height],
      outputRange: [1, 0]
  })
  const marginTop = this.loginHeight.interpolate({
      inputRange: [130, height],
      outputRange: [20, 100]
  })
  const headerBackArrowOpacity = this.loginHeight.interpolate({
      inputRange: [130, height],
      outputRange: [0, 1]
  })
  console.log(this.state.isInput)            
  

  return (
      // View lớn nhất
      <View style={{ flex: 1 }}>
            {/* <StatusBar
                backgroundColor="transparent"
                translucent = {true}
            /> */}
          <ImageBackground
              source={{uri:'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen3.jpg'}}
              style={{ flex: 1 }}
          >
              {/* View này là View trên */}
              <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignSelf: 'center'
              }}>
                  <Animatable.View
                      animation="zoomIn" interationCount={1}
                      style={{
                          backgroundColor: 'white',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 100,
                          width: 100
                      }}>
                      <Text style={{
                          fontSize: 26,
                          fontWeight: 'bold'
                      }}>iTV</Text>
                  </Animatable.View>
              </View>

              {/** BOTTOM HALF **/}
              <Animatable.View animation="slideInUp" interationCount={1}>
                  <Animated.View
                      style={{
                          height: this.loginHeight,
                          backgroundColor: 'white'
                      }}>
                      {/* Nút back */}
                      <Animated.View
                          style={{
                              position: 'absolute',
                              height: 60,
                              width: 60,
                              top: 15,
                              left: 25,
                              zIndex: 100,
                              opacity: headerBackArrowOpacity,
                              backgroundColor: 'transparent'
                          }}>
                          <TouchableOpacity
                              onPress={() => this.decreaseHeightOfLogin()}>
                              <Icon name="md-arrow-back" style={{ color: 'white', fontSize: 30, position: 'relative' }} />
                          </TouchableOpacity>
                      </Animated.View>
                      <Animated.View
                          style={{
                              position: 'absolute',
                              flex: 1,
                              opacity: headerBackArrowOpacity,
                              backgroundColor: 'transparent'
                          }}>
                          {/* View chính sign in sign up */}

                          <View style={{ flex: 1 }}>
                              {/* <ImageBackground
              source={{uri:'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen3.jpg'}}
                                  style={{
                                      flex: 1,
                                      height,
                                      width,
                                      top: 0,
                                      left: 0,
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                  }}
                              >
                                 
                              </ImageBackground> */}
                                                        <Login isInput = {this.state.isInput}/>  

                          </View>

                      </Animated.View>
                      {/* dòng chữ you need to login with facebook */}
                      {/* Biến mất dòng chữ */}
                      <Animated.View
                          style={{
                              opacity: headerTextOpacity,
                              alignItems: 'flex-start',
                              paddingHorizontal: 25,
                              marginTop: 25
                          }}
                      >
                          <Text style={{
                              fontSize: 24,
                              color: 'black',
                          }}>You need to sign in with facebook</Text>
                      </Animated.View>
                      {/* Button log in facebook */}
                      {/* Biến mất button */}

                      <Animated.View
                                style={{
                                    opacity: headerTextOpacity,
                                }}>                            
                                <TouchableNativeFeedback onPress={() => this.onFacebook()}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            height: 50,
                                            width: null,
                                            backgroundColor: '#4267B2',
                                            marginTop: 15,
                                            paddingHorizontal: 25,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            alignSelf: 'center'
                                        }}
                                    >
                                        <Icon name='logo-facebook' style={{
                                            fontSize: 30,
                                            color: 'white',
                                            alignSelf: 'center'
                                        }} />
                                        <Text style={{
                                            color: 'white',
                                            fontSize: 23,
                                            marginLeft: 20
                                        }}>Login with facebook</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </Animated.View>

                      {/*Ẩn nó đi xong cho nó hiện ra khi bấm vào Or connect */}
                      

                  </Animated.View>
                  {/* view social network */}
                  <View
                      style={{
                          height: 45,
                          backgroundColor: 'white',
                          alignItems: 'center',
                      }}
                  >
                      <TouchableOpacity
                          onPress={() => this.increaseHeightOfLogin()}
                      >
                          <Text style={{
                              color: '#5a7fdf',
                              fontWeight: 'bold',
                              fontSize: 18
                          }}>
                              Or connect using a social account
                              </Text>
                      </TouchableOpacity>
                  </View>
              </Animatable.View>
              {/* Nút forward */}
              {/* <Animated.View
                  style={{
                      position: 'absolute',
                      height: 60,
                      width: 60,
                      right: 10,
                      bottom: 30,
                      opacity: 1,
                      zIndex: 100,
                      backgroundColor: '#54575e',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                      opacity: headerBackArrowOpacity
                  }}>
                  <Icon name="md-arrow-forward" style={{ color: 'white', fontSize: 30 }} />
              </Animated.View> */}
          </ImageBackground>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
function mapStateToProps(state) {
    return { 
         inforUser: state.inforUser.inforUser,
         isLoading: state.inforUser.isLoading, 
         isFail: state.inforUser.isFail, 
    };
}

export default connect(mapStateToProps,{loginFacebookThunk,userLoadingSuccess,userLoadingFail})(ScreenLogin);