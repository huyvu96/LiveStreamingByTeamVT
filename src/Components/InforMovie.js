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
    Animated,
    StatusBar
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
const { height, width } = Dimensions.get('window');
import ListPeople from './ListPeople'
import styles from './../styles';
export default class InforMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFollow: false,
            isPopular: true,
            isNew: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
            <View style ={{padding: 10}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'white',fontSize:18}}>{this.props.data}</Text>
            <Text style={{color:'#1875D6',fontSize:18}}>1/1</Text>
            </View>
            <Text style={{color:'grey'}}>17-5-2018</Text>
            <Text style={{color:'white',fontSize:14, marginTop:3,marginBottom:3}}>Việt nam - 83 phút - Phụ đề</Text>
            <Text style={{color:'white',fontSize:13}}>Hành động - Trinh thám</Text>
            <Text style={{color:'grey'}}>Đường vắng, đêm trăng, 1 vụ tai nạn làm chết một cô gái và từ đó, cứ mỗi đêm trăng rằm người ta lại thấy cô gái ấy trở về. Bạn có tin trên đời này có ma? Bạn có tin vào luật nhân quả, sự trả thù cũa nhưng người chết không nhắm mắt? Còn bí mật kinh hoàng nào ẩn giấu sau nhưng vụ án ly kì này</Text>
            </View>
            <View>
            <Text style={{color:'white'}}>Diễn viên</Text>   
            <ListPeople/>
            </View>
            <View>
            <Text style={{color:'white'}}>Tác giả</Text>   
            <ListPeople/>
            </View>
            </ScrollView>
            </View>
        );
    }
}
