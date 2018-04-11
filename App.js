/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';
import { LoginButton,AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
//import GetData from './getData'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
  isLoading: false,
    }
}    
async onFacebook(){
this.setState ({
    isLoading: true
})
await LoginManager.logInWithReadPermissions(['public_profile', 'email'])
.then((result) => {
  if (result.isCancelled) {
    return Promise.reject(new Error('The user cancelled the request'));
  }

  console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
  // get the access token
  return  AccessToken.getCurrentAccessToken();
})
.then(data => {
    // create a new firebase credential with the token     
  const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        // login with credential
    return firebase.auth().signInWithCredential(credential);
    //return firebase.auth().signInAndRetrieveDataWithCredential(credential);
})
.then((currentUser) => {
      console.info(JSON.stringify(currentUser.toJSON()))
      GetData.getUserInfo(currentUser.uid, (user) =>{
      if (user){
        
      } else{
        let userinfo = {
          displayName: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
          uid: currentUser.uid,
          phoneNumber: "Chưa cập nhật",
          sex: 'Chưa cập nhật',
          birthday: 'Chưa cập nhật',							
        }
        GetData.setUserInfo(userinfo)
      }
    })		                   
                })   
.catch((error) => {
    console.log('hehe',error);
        alert(error);
  this.setState ({
      isLoading: false
  })
});
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        { !this.state.isLoading ? (<TouchableNativeFeedback  transparent onPress={() => this.onFacebook()}>
								<View>
									<Text style={{color: 'blue'}}>   Đăng nhập bằng Facebook</Text>
								</View>
        </TouchableNativeFeedback>) : (<Text>Dăng nhap thanh cong</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
