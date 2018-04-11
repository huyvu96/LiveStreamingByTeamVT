import firebase from 'react-native-firebase';


class GetData {
    static async setUserInfo(userinfo){
        await firebase.database().ref().child(`User/${userinfo.uid}`).set(userinfo)
    }
    static async getUserInfo(uid, callback){
      await firebase.database().ref(`User/${uid}`).on('value', (userinfo) => {
          if(userinfo.exists())
            callback(userinfo.val())
           else
          callback(false)
        })
    }
    
  }
  module.exports = GetData;