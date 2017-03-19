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
    BackAndroid,
    Dimensions
} from 'react-native';

import Intros from '../Page/Intro';
import Dashboards from '../Page/Dashboard';

var Index = React.createClass({
    componentWillMount(){
        setTimeout(() => this.changeComponent("Dashboard"), 500);
    },
    getInitialState: function() { return {componentSelected: 'Intro'}},
    changeComponent: function(component) {this.setState({componentSelected: component})},
    renderComponent: function(component) {
        if(component == 'Intro') {
            return <Intro changeComponent={this.changeComponent} />
        }
        else if(component == 'Dashboard') {
            return <Dashboard changeComponent={this.changeComponent} />
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
var Dashboard = React.createClass({render: function() {return (<Dashboards/>)}})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F4F8',
    },
});

module.exports = Index, {
    width: '',
    height: '',
    deta:'',
};
