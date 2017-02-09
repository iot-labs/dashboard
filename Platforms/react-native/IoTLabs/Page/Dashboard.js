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

import * as Animatable from 'react-native-animatable';
import TopMenu from '../Commons/TopMenu';


export default class Dashboard extends Component {
    componentWillMount(){
    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={styles.container}>
                <TopMenu/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

module.exports = Dashboard;
