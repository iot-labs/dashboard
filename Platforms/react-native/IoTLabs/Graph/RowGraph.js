/**
 * Line chart component.
 * It has been made into components so that it can be easily used on other screens.
 * Sample : <RowGraph size={GLOBAL.width*0.9} title="타이틀" value1={72} maxValue={100}/>
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    AsyncStorage,
    Platform,
    AppState,
    TouchableHighlight
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Entypo from 'react-native-vector-icons/Entypo';


export default class RowGraph extends Component {
    state = {
        size : this.props.size,
        title : this.props.title,
        subTitle : this.props.subTitle,
        maxValue : this.props.maxValue,
        value1 : this.props.value1,

        padding : (GLOBAL.width - this.props.size)/2,
        colorBar : this.props.value1 / this.props.maxValue * 100 * ((this.props.size-(GLOBAL.width - this.props.size))/100),
    }
    componentWillMount(){
        console.log(this.state);
    }
    componentDidMount(){
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                width: this.state.size,
                //height: this.state.size,
                marginTop: this.state.padding,
                padding: this.state.size * 0.05,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'#fff',
            },
            topLable:{
                width: this.state.size - this.state.padding*2,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection:'row',
                padding: this.state.size * 0.02,
                marginBottom: this.state.size*0.08,
            },
            Text:{
                color :'#999',
                fontSize : 20,
            },
            midLable:{
                width: this.state.size - this.state.padding*2,
                alignItems: 'flex-end',
                justifyContent: 'center',
            },
            bottomLable:{
                width: this.state.size - this.state.padding*2,
                height: this.state.size*0.025,
                backgroundColor:'#f9f9f9',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection:'row',
            },
            bottomLable_colorBar:{
                width: this.state.colorBar,
                height: this.state.size*0.025,
                backgroundColor:'#04D6B2',
            },
        });
        return (
            <View style={styles.container}>

                <View style={styles.topLable}>
                    <Entypo name="adjust" size={this.state.size*0.1} color="#ccc"/>
                    <Text style={styles.Text}>{this.state.title}</Text>
                </View>

                <View style={styles.midLable}>
                    <Text>{this.state.value1} / {this.state.maxValue}</Text>
                </View>

                <View style={styles.bottomLable}>
                    <Animatable.View animation="bounceIn" style={styles.bottomLable_colorBar}/>
                </View>
            </View>
        );
    }
}

module.exports = RowGraph;
