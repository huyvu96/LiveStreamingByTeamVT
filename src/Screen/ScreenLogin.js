import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,Alert, ActivityIndicator
} from 'react-native';

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

class ScreenLogin extends Component {
  constructor(props) {
    super(props)

}
onFacebook(){
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
    return (
      <View style={styles.container}>
       { !this.props.isLoading && <View style = {styles.container}>
       <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <TouchableNativeFeedback  transparent onPress={() => this.onFacebook()}>
								<View>
									<Text style={{color: 'blue'}}>Login with Facebook</Text>
								</View>
        </TouchableNativeFeedback>
       </View>
      }
       {
      this.props.isLoading && <ActivityIndicator color= 'black'/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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