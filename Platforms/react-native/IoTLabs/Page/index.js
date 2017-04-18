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
import Page1s from '../Page/Page1';
import Page2s from '../Page/Page2';
import Page3s from '../Page/Page3';
import Page4s from '../Page/Page4';
import Page5s from '../Page/Page5';
import Page6s from '../Page/Page6';

var Index = React.createClass({
    componentWillMount(){
        setTimeout(() => this.changeComponent("Dashboard"), 100);
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
        else if(component == 'Page1') {
            return <Page1 changeComponent={this.changeComponent} />
        }
        else if(component == 'Page2') {
            return <Page2 changeComponent={this.changeComponent} />
        }
        else if(component == 'Page3') {
            return <Page3 changeComponent={this.changeComponent} />
        }
        else if(component == 'Page4') {
            return <Page4 changeComponent={this.changeComponent} />
        }
        else if(component == 'Page5') {
            return <Page5 changeComponent={this.changeComponent} />
        }
        else if(component == 'Page6') {
            return <Page6 changeComponent={this.changeComponent} />
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
var Page1 = React.createClass({render: function() {return (<Page1s/>)}})
var Page2 = React.createClass({render: function() {return (<Page2s/>)}})
var Page3 = React.createClass({render: function() {return (<Page3s/>)}})
var Page4 = React.createClass({render: function() {return (<Page4s/>)}})
var Page5 = React.createClass({render: function() {return (<Page5s/>)}})
var Page6 = React.createClass({render: function() {return (<Page6s/>)}})


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
