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
    Platform,
    BackAndroid
} from 'react-native';

import Intros from '../Page/Intro';

var Index = React.createClass({
    componentWillMount(){
        //setTimeout(() => this.changeComponent("CardList"), 2000);
    },
    getInitialState: function() { return {componentSelected: 'Intro'}},
    changeComponent: function(component) {this.setState({componentSelected: component})},
    renderComponent: function(component) {
        if(component == 'Intro') {
            return <Intro changeComponent={this.changeComponent} />
        }
    },
    /*전체 감싸는 페이지*/
    render: function() {
        return (
            <View style={styles.container}>
                {this.renderComponent(this.state.componentSelected)}
            </View>
        );
    }
});

var Intro = React.createClass({render: function() {return (<Intros/>)}})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = Index, {
    server: '',
    ///server: 'http://localhost:8080/celebq/',
    //server: 'https://www.celebq.com/',
    uid: '',
    email: '',
};