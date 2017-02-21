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
    AppState
} from 'react-native';

import * as Animatable from 'react-native-animatable'

GLOBAL.width = Dimensions.get("window").width;
GLOBAL.height = Dimensions.get("window").height;

//console.log(Platform.OS);
if(Platform.OS == "ios"){
    var heights = GLOBAL.height;
}
else{
    var heights = GLOBAL.height*1.03;
}

export default class Intro extends Component {
    state = {
        animation : 'slideInRight',
        duration : 10000
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={styles.container}>
                <Animatable.Image style={styles.IntroView} source={require('../image/Intro_bg.jpg')} animation={this.state.animation} duration={this.state.duration}/>
                <View style={styles.black_bg}>
                    <Text style={styles.text1}>IoT Labs</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    IntroView: {
        width : GLOBAL.width*1.6,
        height : heights,
    },
    black_bg : {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width : GLOBAL.width,
        height : heights,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left : GLOBAL.width*0.3,
    },
    text1:{
        fontSize: GLOBAL.width*0.1,
        fontWeight:'bold',
        color:'#fff',
    },
});

module.exports = Intro;
