import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
  UIManager,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  TouchableNativeFeedback
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../assets/login_bg.jpg');

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

const TabSelector = ({ selected }) => {
  return (
    <View style={styles.selectorContainer}>
      <View style={selected && styles.selected} />
    </View>
  );
};

TabSelector.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      fontLoaded: true,
      selectedCategory: 0,
      isLoading: false,
      isEmailValid: true,
      isPasswordValid: true,
      isConfirmationValid: true,
    };

    this.selectCategory = this.selectCategory.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
  }


  selectCategory(selectedCategory) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      selectedCategory,
      isLoading: false,
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  login() {
    Keyboard.dismiss();
    const {
      email,
      password,
    } = this.state;
    this.setState({ isLoading: true });
    // Simulate an API call
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        isLoading: false,
        isEmailValid: this.validateEmail(email) ,//|| this.emailInput.shake()
        isPasswordValid: password.length >= 8, //|| this.passwordInput.shake(),
      });
    }, 1500);
  }
  componentDidUpdate() {
    // if(this.props.isInput){
    //   this.emailInput.focus();
    // }
  }
  signUp() {
    Keyboard.dismiss();

    const {
      email,
      password,
      passwordConfirmation,
    } = this.state;
    this.setState({ isLoading: true });
    // Simulate an API call
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        isLoading: false,
        isEmailValid: this.validateEmail(email), //|| this.emailInput.shake(),
        isPasswordValid: password.length >= 8 ,//|| this.passwordInput.shake(),
        isConfirmationValid: password == passwordConfirmation, //|| this.confirmationInput.shake(),
      });
    }, 1500);
  }

  render() {
    const {
      selectedCategory,
      isLoading,
      isEmailValid,
      isPasswordValid,
      isConfirmationValid,
      email,
      password,
      passwordConfirmation,
    } = this.state;
    const isLoginPage = selectedCategory === 0;
    const isSignUpPage = selectedCategory === 1;
    console.log(this.props.isInput)

    return (
      <View style={styles.container}>
        <ImageBackground
          source={BG_IMAGE}
          style={styles.bgImage}
        >
          {this.state.fontLoaded ?
            <View>
              <KeyboardAvoidingView contentContainerStyle={styles.loginContainer} behavior='position'>
                <View style={styles.titleContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.titleText}>BAO</Text>
                  </View>
                  <View style={{ marginTop: -10, marginLeft: 10 }}>
                    <Text style={styles.titleText}>TRAMMM</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableNativeFeedback onPress={() => this.selectCategory(0)}>
                  <View
                      style={{flex:1}}                                            
                    >
                      <Text style={[styles.categoryText, isLoginPage && styles.selectedCategoryText]}>
                        Login</Text>
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback onPress={() => this.selectCategory(1)}>
                  <View
                      style={{flex:1}}                                            
                    >
                      
                      <Text style={[styles.categoryText, isSignUpPage && styles.selectedCategoryText]}>
                        Sign up</Text>
                    </View>
                  </TouchableNativeFeedback>
                  {/* <Button
                    transparent={true}
                    disabled={isLoading}
                    clear={false}
                    activeOpacity={0.7}
                    onPress={() => this.selectCategory(0)}
                    containerStyle={{ flex: 1 }}
                    //titleStyle={[styles.categoryText, isLoginPage && styles.selectedCategoryText]}
                    title='Login'
                    fontSize={23}
                    fontWeight='bold'
                    buttonStyle={{ marginRight: 60 }}
                  /> */}
                  {/* <Button
                    transparent={true}
                    disabled={isLoading}
                    clear={false}
                    activeOpacity={0.7}
                    onPress={() => this.selectCategory(1)}
                    containerStyle={{ flex: 1 }}
                    // titleStyle={[styles.categoryText, isSignUpPage && styles.selectedCategoryText]}
                    title='Sign up'
                    fontSize={23}
                    fontWeight='bold'
                  /> */}
                </View>
                <View style={styles.rowSelector}>
                  <TabSelector selected={isLoginPage} />
                  <TabSelector selected={isSignUpPage} />
                </View>
                <View style={styles.formContainer}>
                  <TextInput
                    value={email}
                    keyboardAppearance='light'
                    autoFocus={false}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType='next'
                    inputStyle={{ marginLeft: 10 }}
                    placeholder={'Email'}
                    style={{ marginTop: 5, borderBottomColor: 'rgba(0, 0, 0, 0.38)', height: 40, alignSelf: 'stretch' }}
                    ref={input => this.emailInput = input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={email => this.setState({ email })}
                    displayError={!isEmailValid}
                    errorMessage='Please enter a valid email address'
                  />
                  <TextInput
                    value={password}
                    keyboardAppearance='light'
                    autoFocus={false}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    returnKeyType={isSignUpPage ? 'next' : 'done'}
                    blurOnSubmit={true}
                    style={{ marginTop: 5, borderBottomColor: 'rgba(0, 0, 0, 0.38)', height: 40, alignSelf: 'stretch' }}
                    inputStyle={{ marginLeft: 10 }}
                    placeholder={'Password'}
                    ref={input => this.passwordInput = input}
                    onSubmitEditing={() => isSignUpPage ? this.confirmationInput.focus() : this.login()}
                    onChangeText={(password) => this.setState({ password })}
                    displayError={!isPasswordValid}
                    errorMessage='Please enter at least 8 characters'
                  />
                  {isSignUpPage &&
                    <TextInput
                      value={passwordConfirmation}
                      secureTextEntry={true}
                      keyboardAppearance='light'
                      autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='default'
                      returnKeyType={'done'}
                      blurOnSubmit={true}
                      style={{ marginTop: 5, borderBottomColor: 'rgba(0, 0, 0, 0.38)', height: 40, alignSelf: 'stretch' }}
                      inputStyle={{ marginLeft: 10 }}
                      placeholder={'Confirm password'}
                      ref={input => this.confirmationInput = input}
                      onSubmitEditing={this.signUp}
                      onChangeText={passwordConfirmation => this.setState({ passwordConfirmation })}
                      displayError={!isConfirmationValid}
                      errorMessage='Please enter the same password'
                    />}
                  <TouchableNativeFeedback
                  onPress={isLoginPage ? this.login : this.signUp}
                  >
                    <View
                      style={styles.loginButton}                                            
                    >
                      
                      <Text style={{
                        color: 'white',
                        fontSize: 20,
                      }}>{isLoginPage ? 'LOGIN' : 'SIGN UP'}</Text>
                    </View>
                  </TouchableNativeFeedback>
                  {/* <Button
                    buttonStyle={styles.loginButton}
                    containerStyle={{ marginTop: 32, flex: 0 }}
                    activeOpacity={0.8}
                    title={isLoginPage ? 'LOGIN' : 'SIGN UP'}
                    onPress={isLoginPage ? this.login : this.signUp}
                    titleStyle={styles.loginTextButton}
                    loading={isLoading}
                    disabled={isLoading}
                  /> */}
                </View>
                <View style={styles.helpContainer}>
                 <TouchableNativeFeedback >
                  <View
                      style={{backgroundColor: 'transparent'}}                                            
                    >                     
                      <Text style={{color: 'white', fontSize:18}}>
                      Need help ?</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </KeyboardAvoidingView>

            </View>
            :
            <Text>Loading...</Text>
          }
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowSelector: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectorContainer: {
    flex: 1,
    alignItems: 'center',
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'rgba(232, 147, 142, 1)',
    borderRadius: 10,
    height: 50,
    width: 200,
    alignItems:'center',
    justifyContent:'center'
  },
  signInButton: {
    backgroundColor: 'transparent',
    marginRight: 60

  },
  titleContainer: {
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH - 30,
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 23,
    //fontFamily: 'light',
    backgroundColor: 'transparent',
    opacity: 0.54,
    fontWeight:'bold'
  },
  selectedCategoryText: {
    opacity: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'regular',
  },
  helpContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});