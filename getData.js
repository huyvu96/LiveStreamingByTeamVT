import firebase from 'react-native-firebase';


class GetData {
    static setUserInfo(userinfo){
        firebase.database().ref().child(`User/${userinfo.uid}`).set(userinfo)
    }
    static getUserInfo(uid, callback){
        firebase.database().ref(`User/${uid}`).on('value', (userinfo) => {
          if(userinfo.exists())
            callback(userinfo.val())
           else
          callback(false)
        })
    }
    
  }
  module.exports = GetData;