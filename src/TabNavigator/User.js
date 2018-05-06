import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, Animated, StatusBar } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')
import style from '../TramStyle'
export default class User extends Component {
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
                    <Text style={{ color: 'white' }}>Trâm xinh đẹp</Text>
                </View>
            )
        }
        else if (this.state.activeIndex == 1) {
            return (
                <View style={style.viewMyVideo}>
                    <Text style={{ color: 'white' }}>Vũ xấu xa đối xử tệ bạc</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={style.container}>
                 {/* View header */}
                 <View style={style.viewHeader}>     
                     <Text style={{color:'#1e272e'}}>Tôi</Text>
                     <Text style={style.title}>Tôi</Text>
                     <TouchableOpacity>
                            <Icon name="md-person-add" style={style.icon} />
                    </TouchableOpacity>                                      
                </View>
                {/* View trên */}
                <View style={style.viewAbove}>
                    {/* View avatar */}
                    <View
                        style={style.viewAvatar}>
                        <Image
                            style={style.avatar}
                            source={{
                                uri: 'https://kenh14cdn.com/2017/pic-2-1506069691973.jpg'
                            }} />
                        {/* <TouchableOpacity>
                            <Icon name="md-person-add" style={style.icon} />
                        </TouchableOpacity> */}
                    </View>
                    {/* View link facebook và Instagram */}
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={style.name}>Bảo Trâm</Text>
                            <Image
                                style={style.gender}
                                source={{
                                    uri: 'http://lisatheroadwarrior.com/wp-content/uploads/2015/01/400px-Pink_Venus_symbol.svg_-e1422187145609.png'
                                }} />
                        </View>

                        <Text style={style.link}>Id: 123456</Text>
                    </View>
                </View>
                {/* View duoi */}
                <View style={style.viewBehind}>
                    <View style={style.viewVideoLike}>
                        <TouchableOpacity
                            onPress={() => this.segmentClicked(0)}
                            active={this.state.activeIndex == 0}
                        >
                            <View style={[this.state.activeIndex == 0 ? { backgroundColor: '#FF9700' } : {}, style.videoArea]} >
                                <Text style={style.text}>Theo dõi</Text>
                                <Text style={[style.number, style.numberViewUnder]}>0</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.segmentClicked(1)}
                            active={this.state.activeIndex == 1}
                        >
                            <View style={[this.state.activeIndex == 1 ? { backgroundColor: '#FF9700' } : {}, style.videoArea]}>
                                <View style={{ height: height / 13.5, width: width / 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={style.text}>Lịch sử</Text>
                                    <Text style={[style.number, style.numberViewUnder]}>0</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {this.renderSection()}
                </View>

            </View>
        );
    }

}
