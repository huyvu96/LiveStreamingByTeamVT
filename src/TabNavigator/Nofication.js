import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    Text,
    View,
    StatusBar,
    TouchableNativeFeedback
} from 'react-native';
const { height, width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'
//const data = Array(20).fill().map((_, index) => ({ key: index }))
import styleNotification from '../TramStyle';
export default class Nofication extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styleNotification.container}>
                <View style={styleNotification.viewAbove}>
                    {/* View header */}
                    <View style={styleNotification.viewHeader}>
                        <StatusBar
                            backgroundColor="#757575"
                            barStyle="light-content"
                        />
                        <View style={styleNotification.viewTitleHeader}>
                            <Text style={{ color: '#757575' }}>abcdef</Text>
                            <Text style={styleNotification.title}>Nhắn tin</Text>
                            <Icon name='md-chatbubbles' style={styleNotification.iconHeader} />
                        </View>
                    </View>
                    {/* View các button nhắn tin */}
                    <View style={[styleNotification.container, styleNotification.viewTitleHeader]}>
                        {/* Người theo dõi */}
                        <View style={styleNotification.viewFollower}>
                            <View style={[{ backgroundColor: '#1BA8FE' }, styleNotification.touchableNativeFeedback]}>
                                <TouchableNativeFeedback>
                                    <Icon name='md-people' style={styleNotification.iconInTouchableNativefeedback} />
                                </TouchableNativeFeedback>
                            </View>
                            <Text style={styleNotification.textNotification}>Ng the..</Text>
                        </View>
                        {/* Thích */}
                        <View>
                            <View style={[{ backgroundColor: '#DD4F43' }, styleNotification.touchableNativeFeedback]}>
                                <TouchableNativeFeedback>
                                    <Icon name='md-heart-outline' style={styleNotification.iconInTouchableNativefeedback} />
                                </TouchableNativeFeedback>
                            </View>
                            <Text style={styleNotification.textNotification}>Thích</Text>
                        </View>
                        {/* Tôi */}
                        <View>
                            <View style={[{ backgroundColor: '#819830' }, styleNotification.touchableNativeFeedback]}>
                                <TouchableNativeFeedback>
                                    <Icon name='ios-at-outline' style={styleNotification.iconInTouchableNativefeedback} />
                                </TouchableNativeFeedback>
                            </View>
                            <Text style={styleNotification.textNotification}>@Tôi</Text>
                        </View>
                        {/* Bình luận */}
                        <View style={{ marginRight: 30 }}>
                            <View style={[{ backgroundColor: '#AE6AB9' }, styleNotification.touchableNativeFeedback]}>
                                <TouchableNativeFeedback>
                                    <Icon name='md-text' style={styleNotification.iconInTouchableNativefeedback} />
                                </TouchableNativeFeedback>
                            </View>
                            <Text style={styleNotification.textNotification}>Bình luận</Text>
                        </View>
                    </View>
                </View>
                <View style={[{ backgroundColor: '#272822' }, styleNotification.container]}></View>
            </View>


        );
    }
}
