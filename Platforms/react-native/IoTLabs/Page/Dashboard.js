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
    ScrollView
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import TopBar from '../Commons/TopBar';
import RowGraph from '../Graph/RowGraph';
import IconChar from '../Graph/IconChar';
import BarGraph from '../Graph/BarGraph';


export default class Dashboard extends Component {
    componentWillMount(){
    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={styles.container}>
                <TopBar/>
                <ScrollView>
                <BarGraph size={GLOBAL.width*0.9}
                          maxdeta={120}
                          deta={GLOBAL.deta.airDust1}
                          title="타이틀123"
                />
                <RowGraph size={GLOBAL.width*0.9} title="타이틀556" value1={72} maxValue={100}/>
                <IconChar size={GLOBAL.width*0.9} title="타이틀" value={72} color="#2FA6D9"/>
                <IconChar size={GLOBAL.width*0.9} title="타이틀" value={72} color="#04D6B2"/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F2F4F8',
    },
});

module.exports = Dashboard;
