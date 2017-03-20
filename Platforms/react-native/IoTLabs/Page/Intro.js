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
        GLOBAL.deta = {
            "airDust1": [
                { "hour" : 9, "value" : 32 },
                { "hour" : 10, "value" : 37 },
                { "hour" : 11, "value" : 41 },
                { "hour" : 12, "value" : 25 },
                { "hour" : 13, "value" : 22 },
                { "hour" : 14, "value" : 47 },
                { "hour" : 15, "value" : 58 },
                { "hour" : 16, "value" : 74 },
                { "hour" : 17, "value" : 120 },
                { "hour" : 18, "value" : 90 },
                { "hour" : 19, "value" : 78 }
            ],
            "airDust2": [
                { "hour" : 9, "value" : 82 },
                { "hour" : 10, "value" : 72 },
                { "hour" : 11, "value" : 60 },
                { "hour" : 12, "value" : 51 },
                { "hour" : 13, "value" : 43 },
                { "hour" : 14, "value" : 48 },
                { "hour" : 15, "value" : 72 },
                { "hour" : 16, "value" : 88 },
                { "hour" : 17, "value" : 85 },
                { "hour" : 18, "value" : 90 },
                { "hour" : 19, "value" : 78 }
            ],
            "temperature1": [
                { "hour" : 9, "value" : 23 },
                { "hour" : 10, "value" : 24 },
                { "hour" : 11, "value" : 26 },
                { "hour" : 12, "value" : 28 },
                { "hour" : 13, "value" : 30 },
                { "hour" : 14, "value" : 32 },
                { "hour" : 15, "value" : 31 },
                { "hour" : 16, "value" : 29 },
                { "hour" : 17, "value" : 27 },
                { "hour" : 18, "value" : 26 },
                { "hour" : 19, "value" : 23 },
            ],
            "temperature2": [
                { "hour" : 9, "value" : 21 },
                { "hour" : 10, "value" : 26 },
                { "hour" : 11, "value" : 28 },
                { "hour" : 12, "value" : 29 },
                { "hour" : 13, "value" : 30 },
                { "hour" : 14, "value" : 34 },
                { "hour" : 15, "value" : 31 },
                { "hour" : 16, "value" : 27 },
                { "hour" : 17, "value" : 25 },
                { "hour" : 18, "value" : 23 },
                { "hour" : 19, "value" : 21 }
            ],
            "humidity1": [
                { "hour" : 9, "value" : 65 },
                { "hour" : 10, "value" : 60 },
                { "hour" : 11, "value" : 58 },
                { "hour" : 12, "value" : 42 },
                { "hour" : 13, "value" : 36 },
                { "hour" : 14, "value" : 27 },
                { "hour" : 15, "value" : 28 },
                { "hour" : 16, "value" : 26 },
                { "hour" : 17, "value" : 39 },
                { "hour" : 18, "value" : 47 },
                { "hour" : 19, "value" : 59 }
            ],
            "humidity2": [
                { "hour" : 9, "value" : 72 },
                { "hour" : 10, "value" : 79 },
                { "hour" : 11, "value" : 93 },
                { "hour" : 12, "value" : 95 },
                { "hour" : 13, "value" : 91 },
                { "hour" : 14, "value" : 95 },
                { "hour" : 15, "value" : 92 },
                { "hour" : 16, "value" : 88 },
                { "hour" : 17, "value" : 85 },
                { "hour" : 18, "value" : 81 },
                { "hour" : 19, "value" : 83 }
            ]
        }
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
