/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    TouchableHighlight
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Entypo from 'react-native-vector-icons/Entypo';


export default class RowGraph extends Component {
    componentWillMount(){        console.log(this.state);
    }
    componentDidMount(){
    }
    render() {
        const styles = StyleSheet.create({
        });
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

module.exports = RowGraph;
