import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  Animated
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
const { height, width } = Dimensions.get('window');
import styles from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'
import ListCanlendar from '../ListView/ListCanlendar';
import data from '../../dataCanlendar';
export default class SwiperLive extends Component {
  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={0}
      >
        <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('StreamingScreen', { url: 'http://192.168.1.22:5080/live/test.m3u8' })}>
          <View style={{ flex: 1 }}>
            <Image source={{ uri: 'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen1.jpg' }} style={styles.imagePopular} />
            <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)']} style={styles.imagePopularLinear} />
            <View style={styles.viewiTV}>
              <Text style={styles.styleTextiTV}>iTV</Text>
              <Text style={styles.styleTextDesiTV}>Mời bạn chạm vào màn hình để xem video trực tiếp</Text>
            </View>
            <View style={styles.viewChat}>
              <Text style={styles.styleTextChat}>Đang chiếu: Captain American 1</Text>
            </View>
            <View style={styles.viewFuntionVideo}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/QUu-7yt4PPkkpsA7TpMs0MFAXzrW-fiWIlKlwu7obhpKO9fd393OV32dm-XrvntvMnM=s128' }} style={styles.avatarLarge}></Image>
            </View>
          </View>
        </TouchableNativeFeedback>
        <View style={{ flex: 1 }}>
          <ListCanlendar data={data} />
        </View>
        {/* {data.map((e, i) =>
                  <View key = {'key' + i }style = {{height: height, width: width}}>
                  <Image source={{uri: e.image}} style={styles.imagePopular}/>
                  <LinearGradient colors={['rgba(0,0,0, 0.7)','rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)']}  style={styles.imagePopularLinear}/>

                  <View style ={styles.viewChat}>
                    <Text style ={styles.styleTextChat}>Đang chiếu: Chương trình ca nhạc</Text>
                    <Text style ={styles.styleTextChat}>Giờ: 8h30 - 9h</Text>
                  </View>
                  <View style ={styles.viewFuntionVideo}>
                       <Image source={{uri: 'https://lh3.googleusercontent.com/QUu-7yt4PPkkpsA7TpMs0MFAXzrW-fiWIlKlwu7obhpKO9fd393OV32dm-XrvntvMnM=s128'}}  style = {styles.avatarLarge}></Image>
                       <Ionicons name="ios-heart" style={styles.styleIconFuntionVideo}/>
                       <Text style ={styles.styleTextFuntionVideo}>1025</Text>
                       <Ionicons name="ios-chatbubbles" style={styles.styleIconFuntionVideo} />
                       <Text style ={styles.styleTextFuntionVideo}>1025</Text>
                       <Ionicons name="ios-star" style={styles.styleIconFuntionVideo} />
                       <Text style ={styles.styleTextFuntionVideo}>1025</Text>
                  </View>
                  </View>)    
                } */}
      </Swiper>
    );
  }
}
