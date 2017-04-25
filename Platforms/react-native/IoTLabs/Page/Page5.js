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
import LeftMenu from '../Commons/LeftMenu';
import TopBar from '../Commons/TopBar';
import RowGraph from '../Graph/RowGraph';
import IconChar from '../Graph/IconChar';
import BarGraph1 from '../Graph/BarGraph1';
import BarGraph2 from '../Graph/BarGraph2';


export default class Dashboard extends Component {
    state = {
        type: this.props.type,
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    leftMenu(){
        if(this.state.leftManu){
            return (<LeftMenu/>);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TopBar/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <IconChar size={GLOBAL.width*0.9} title="외부1 온도" value={27.5} color="#04D6B2"/>
                    <RowGraph size={GLOBAL.width*0.9} title="외부1 미세먼지 지수" value1={24} maxValue={100} color="#04D6B2"/>
                </ScrollView>
                {this.leftMenu()}
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
