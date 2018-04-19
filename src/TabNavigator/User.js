import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, Animated ,StatusBar} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get('window')
import style from '../TramStyle'
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    renderSection = () => {
        if (this.state.activeIndex == 0) {
            return (
                <View style={style.viewMyVideo} >
                    <Text style={{ color: 'black' }}>Trâm xinh đẹp</Text>
                </View>
            )
        }
        else if (this.state.activeIndex == 1) {
            return (
                <View style={style.viewMyVideo}>
                    <Text style={{ color: 'black' }}>Vũ xấu xa đối xử tệ bạc</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={style.container}>
                {/* View trên */}
                <StatusBar
                backgroundColor="#161823"
                translucent = {false}
            />
                <View style={style.viewAbove}>
                    {/* View avatar */}
                    <View
                        style={style.viewAvatar}>
                        <Image
                            style={style.avatar}
                            source={{
                                uri: 'https://kenh14cdn.com/2017/pic-2-1506069691973.jpg'
                            }} />
                        <TouchableOpacity>
                            <Icon name="md-person-add" style={[style.iconAdd, style.icon]} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="ios-more" style={[style.iconMore, style.icon]} />
                        </TouchableOpacity>
                    </View>
                    {/* View link facebook và Instagram */}
                    <View>
                        <Text style={style.name}>Bảo Trâm</Text>
                        <Text style={style.link}>Facebook: abcxyz</Text>
                        <Text style={style.link}>Instagram: abcxyz</Text>
                    </View>
                    <View style={style.line} />
                    {/* View theo dõi người theo dõi và lượt thích */}
                    <View
                        style={{
                            height: height / 9,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Text style={[style.number, style.numberViewAbove]}>0</Text>
                        <TouchableOpacity>
                            <Text style={style.text}>Theo dõi</Text>
                        </TouchableOpacity>
                        <Text style={[style.number, style.numberViewAbove]}>0</Text>
                        <TouchableOpacity>
                            <Text style={style.text}>Người theo dõi</Text>
                        </TouchableOpacity>
                        <Text style={[style.number, style.numberViewAbove]}>0</Text>
                        <TouchableOpacity>
                            <Text style={style.text}>Lượt thích</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* view dưới */}
                <View style={style.viewAbove}>
                    <View style={style.viewVideoLike}>
                        <TouchableOpacity
                            onPress={() => this.segmentClicked(0)}
                            active={this.state.activeIndex == 0}
                        >
                            <View style={[this.state.activeIndex == 0 ? { backgroundColor: '#FF9700' } : {}, style.videoArea]} >
                                    <Text style={style.text}>Video</Text>
                                    <Text style={[style.number, style.numberViewUnder]}>0</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.segmentClicked(1)}
                            active={this.state.activeIndex == 1}
                        >
                            <View style={[this.state.activeIndex == 1 ? { backgroundColor: '#FF9700' } : {}, style.videoArea]}>
                                <View style={{ height: height / 13.5, width: width / 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={style.text}>Thích</Text>
                                    <Text style={[style.number, style.numberViewUnder]}>0</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* View chứa Video và thích */}
                    {this.renderSection()}
                </View>
            </View>
        );
    }

}
