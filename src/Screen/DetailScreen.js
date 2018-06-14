import * as React from 'react';
import { StyleSheet, Dimensions, View, Animated, Text, TouchableWithoutFeedback,Image,ImageBackground } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import InforMovie from '../Components/TabView/InforMovie';
import ListVideo from '../Components/ListView/ListVideo';
import ListEpisode from '../Components/ListView/ListEpisode';
import LinearGradient from 'react-native-linear-gradient';
import { fetchingDataDetailMovieByID } from '../Redux/Action/actionGetDetailByID'; 
import { fetchingDataMoviebyCategory } from '../Redux/Action/actionGetMovieByCategory'; 

import type, { Route, NavigationState } from 'react-native-tab-view/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import axios from 'axios';
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
import Orientation from 'react-native-orientation'

type State = NavigationState<
  Route<{
    key: string,
    title: string,
  }>
  >;
  const { heightt, widtht } = Dimensions.get('window');

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class DetailScreen extends React.Component<*, State> {
  static title = 'Scrollable top bar';
  static backgroundColor = '#3f51b5';
  static appbarElevation = 0;

  state = {
    index: 0,
    routes: [
      { key: 'article', title: 'Thông tin' },
      { key: 'contacts', title: 'Danh sách' },
      { key: 'albums', title: 'Liên quan' },
      //{ key: 'chat', title: 'Bình luận' },
    ],
  };
  componentWillMount() {
    Orientation.lockToPortrait()
  }
  _handleIndexChange = index =>
    this.setState({
      index,
    });
  _renderLabel = ({ position, navigationState }) => ({ route, index }) => {
    const inputRange = navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? '#FF9700' : '#939393')
    );
    const color = position.interpolate({
      inputRange,
      outputRange,
    });
    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    );
  };
  _renderHeader = props => (
    <TabBar
      {...props}
      scrollEnabled
      renderLabel={this._renderLabel(props)}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
    />
  );
  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'article':
        return <InforMovie title={this.props.dataDetail.informovie[0].title}
          release_date={this.props.dataDetail.informovie[0].release_date}
          language={this.props.dataDetail.language}
          run_time={this.props.dataDetail.informovie[0].run_time}
          part={this.props.dataDetail.episodes.length}
          episode_number={this.props.dataDetail.informovie[0].episode_number}
          genres={this.props.dataDetail.genres}
          overview={this.props.dataDetail.informovie[0].overview}
          actor={this.props.dataDetail.actor} 
          director={this.props.dataDetail.director} />;
      case 'contacts':
        return <ListEpisode  dataEpi={this.props.dataDetail.episodes}
         title ={this.props.dataDetail.informovie[0].title} 
         imageEpi={this.props.dataDetail.informovie[0].poster_path}
         navigation={this.props.navigation}/>
      case 'albums':
        return <ListVideo loading={this.props.isLoadingPhimLe} 
        nameFecth={'Phim lẻ'}
        dataFecth={this.props.dataPhimLe}
        fectchData={this.props.fetchingDataMoviebyCategory}/>
      default: return null;
    }
  }
  componentDidMount() {
    this.props.fetchingDataDetailMovieByID(this.props.navigation.state.params.id);
  }
  render() {
    return (
      !this.props.dataDetail ? (<View style={[styles.viewAcdicator,{flex:1, backgroundColor:'#000'}]}><BarIndicator color='white' count={4} size={30}/></View>) : (<View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#000', padding:10}}>
        <ImageBackground source={{ uri: this.props.dataDetail.informovie[0].backdrop_path}} style={{height:null,width:null, flex:1}}>
        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.4)', 'rgba(0,0,0, 0.3)']} style={{height:null,width:null, flex:1,justifyContent: 'center',alignItems:'center'}}>
        <TouchableWithoutFeedback onPress = {()=>  this.props.navigation.navigate('VodScreen', {url: this.props.dataDetail.informovie[0].url_link, title:this.props.dataDetail.informovie[0].title})}>
          <View>
          <Ionicons name= 'ios-play-outline' style ={{alignSelf:'center',fontSize: 60,color:'white'}} />
          </View>
        </TouchableWithoutFeedback>
        </LinearGradient>
        </ImageBackground>
        </View>
        <View style={{ flex: 2 }}>
          <TabViewAnimated
            style={[styles.container, this.props.style]}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
          />
        </View>      
      </View>)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#151114',
    overflow: 'hidden',
    height: 50
  },
  tab: {
    width: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator: {
    backgroundColor: '#FF9700',
  },
  label: {
    color: '#Fff',
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center'
  },
});
function mapStateToProps(state) {
  return {
    dataDetail: state.getDetailMovie.dataDetail,
    isLoading: state.getDetailMovie.isLoading,
    error: state.getDetailMovie.error,
    dataPhimLe: state.getMovieByCategory.dataPhimLe,
    isLoadingPhimLe: state.getMovieByCategory.isLoadingPhimLe,
    errorPhimLe: state.getMovieByCategory.errorPhimLe,
  };
}

export default connect(mapStateToProps, { fetchingDataDetailMovieByID ,fetchingDataMoviebyCategory})(DetailScreen);