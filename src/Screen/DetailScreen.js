import * as React from 'react';
import { StyleSheet, Dimensions ,View,Animated,Text,TouchableWithoutFeedback} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import InforMovie from '../Components/InforMovie';
import ListVideo from '../Components/ListVideo';
import ListEpisode from '../Components/ListEpisode';
import StreamingScreen from '../Components/StreamingScreen';

import type, { Route, NavigationState } from 'react-native-tab-view/types';

type State = NavigationState<
  Route<{
    key: string,
    title: string,
  }>
>;

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class DetailScreen extends React.Component<*, State> {
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
_renderScene=({route})=>{
    switch(route.key){
        case 'article':
        return <InforMovie data={this.props.navigation.state.params.name}/>;
        case 'contacts':
        return <ListEpisode data='con cho'/>
        case 'albums':
        return <ListVideo data='con cho'/>
        default: return null;
    }
}
  render() {
    return (
        <View style ={{flex : 1}}>
        <View style={{flex:1, backgroundColor:'#000'}}>
        <StreamingScreen/>
        </View>
        <View style = {{flex:2 }}>
        <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
        </View>
        </View>
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
   height:50
},
  tab: {
    width: 120,
    alignItems:'center',
    justifyContent:'center'
  },
  indicator: {
    backgroundColor: '#FF9700',
  },
  label: {
    color: '#Fff',
    fontSize:18,
    fontWeight: '400',
   fontStyle:'normal',
    textAlign:'center'
  },
});