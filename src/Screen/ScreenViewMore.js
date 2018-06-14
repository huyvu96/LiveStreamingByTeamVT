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
import ListVideo from '../Components/ListView/ListVideo';
import { connect } from 'react-redux';
import { fetchingDataMoviebyCategory } from '../Redux/Action/actionGetMovieByCategory'; 
class ScreenViewMore extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {params} = this.props.navigation.state
        return (
            <View style={styleNotification.container}>
                {/* View header */}
                <View style={styleNotification.viewHeader}>  
                    <TouchableNativeFeedback onPress ={()=> this.props.navigation.goBack()}>
                        <View>
                        <Icon name= 'ios-arrow-back-outline' style ={{marginLeft: height/100,fontSize: height/20,color:'white'}} />
                        </View>
                    </TouchableNativeFeedback> 
                     <Text style={styleNotification.title}>{params.category}</Text>      
                     <Text style={{color:'#151114'}}>abc</Text>                                 
                </View>
                 {/* View các dòng thông báo */}
                 {
                    params.category === 'Phim lẻ' && <ListVideo loading={this.props.isLoadingPhimLe}
                    nameFecth={'Phim lẻ'}
                    dataFecth={this.props.dataPhimLe} 
                    fectchData={this.props.fetchingDataMoviebyCategory} />
                 }
                 {
                    params.category === 'Phim bộ' && <ListVideo loading={this.props.isLoadingPhimBo}
                    nameFecth={'Phim bộ'}
                    dataFecth={this.props.dataPhimBo} 
                    fectchData={this.props.fetchingDataMoviebyCategory} />
                 }
                 {
                    params.category === 'TV Show' && <ListVideo loading={this.props.isLoadingTVShow}
                    nameFecth={'TV Show'}
                    dataFecth={this.props.dataTVShow} 
                    fectchData={this.props.fetchingDataMoviebyCategory} />
                 }
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        dataPhimLe: state.getMovieByCategory.dataPhimLe,
        dataPhimBo: state.getMovieByCategory.dataPhimBo,
        dataTVShow: state.getMovieByCategory.dataTVShow,
        isLoadingPhimLe: state.getMovieByCategory.isLoadingPhimLe,
        isLoadingPhimBo: state.getMovieByCategory.isLoadingPhimBo,
        isLoadingTVShow: state.getMovieByCategory.isLoadingTVShow,
    };
  }
  
  export default connect(mapStateToProps, {fetchingDataMoviebyCategory})(ScreenViewMore);
