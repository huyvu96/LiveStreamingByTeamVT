import {
    USER_LOGOUT,
    USER_LOADING_SUCCESS,
    USER_LOADING_FAIL
} from './nameAction'
import GetData from '../../Database/getData';
import LoginFacebook from '../../Database/LoginFacebook';
import {
    LoginButton,
    AccessToken,
    LoginManager
} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import {
    NavigationActions
} from 'react-navigation';

export function userLoading() {
    return {
        type: USER_LOGOUT
    }
}
export function userLoadingSuccess(inforUser) {
    return {
        type: USER_LOADING_SUCCESS,
        inforUser
    }
}
export function userLoadingFail() {
    return {
        type: USER_LOADING_FAIL
    }
}

export function loginFacebookThunk() {
    return (dispatch) => {
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
                        dispatch(userLoadingSuccess(user));
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
                        dispatch(userLoadingSuccess(userinfo));
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
                dispatch(userLoadingFail());
                console.log('hehe', error);
            });
    }
}