import {
    LoginButton,
    AccessToken,
    LoginManager
} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

async function LoginFacebook() {
    try {
        const result = LoginManager.logInWithReadPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
                return Promise.reject(new Error('The user cancelled the request'));
        }
        console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
        const tokenData = await AccessToken.getCurrentAccessToken();
        if (!tokenData) {
            throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
          }
        const credential = firebase.auth.FacebookAuthProvider.credential(tokenData.accessToken);
        const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
        return currentUser.user;
    } catch (e){
        console.log(e);
        return e
    }
   
    // await LoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => {
    //         if (result.isCancelled) {
    //             return Promise.reject(new Error('The user cancelled the request'));
    //         }
    //         console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
    //         return AccessToken.getCurrentAccessToken();
    //     })
    //     .then(data => {
    //         const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    //         console.log('Fetch current', firebase.auth().signInWithCredential(credential))
    //         return firebase.auth().signInWithCredential(credential);
    //     });
}
export default LoginFacebook;