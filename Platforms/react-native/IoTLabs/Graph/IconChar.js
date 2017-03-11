/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
        value : this.props.value,
        color : this.props.color,

        padding : (GLOBAL.width - this.props.size)/2,
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
                height: this.state.size/5,
                marginTop: this.state.padding,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'#fff',
                flexDirection:'row',
            },
            leftLable:{
                width: this.state.size*0.35,
                height: this.state.size/5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:this.state.color,
            },
            rightLable:{
                width: this.state.size*0.65,
                height: this.state.size/5,
                alignItems: 'center',
                justifyContent: 'center',
            },
            Text:{
                color :'#000',
                fontSize : 20,
            },
            subText:{
                color :'#999',
                fontSize : 13,
                marginTop:5,
            },
        });
        return (
            <View style={styles.container}>

                <View style={styles.leftLable}>
                    <Entypo name="adjust" size={this.state.size*0.1} color="#fff"/>
                </View>
                <Animatable.View animation="bounceInRight"  style={styles.rightLable}>
                    <Text style={styles.Text}>{this.state.value}</Text>
                    <Text style={styles.subText}>{this.state.title}</Text>
                </Animatable.View>
            </View>
        );
    }
}

module.exports = RowGraph;
