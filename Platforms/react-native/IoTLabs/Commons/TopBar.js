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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class TopMenu extends Component {
    componentWillMount(){
    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.sideArea} onPress={() => this._reactInternalInstance._currentElement._owner._instance.setState({leftManu:true})}>
                    <Text style={styles.topText}><MaterialCommunityIcons name="menu" size={GLOBAL.width*0.09} color="#fff"/></Text>
                </TouchableHighlight>

                <View style={styles.menuTextArea}>
                    <Text style={styles.topText}>IoT Labs</Text>
                </View>

                <View style={styles.sideArea}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: GLOBAL.width,
        height:GLOBAL.height*0.1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor:'#04D6B2',
        flexDirection:'row',
    },
    sideArea:{
        flex:1,
        height:GLOBAL.height*0.07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuTextArea: {
        flex:3,
        height:GLOBAL.height*0.07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText:{
        color:'#fff',
        fontSize:GLOBAL.width*0.05,
        fontWeight: '400',
    },
});

module.exports = TopMenu;
