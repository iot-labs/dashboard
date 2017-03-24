/**
 * Bar chart component.
 * It has been made into components so that it can be easily used on other screens.
 * Sample :
        <BarGraph size={GLOBAL.width*0.9}
           maxdeta={120}
           deta=""
           title="타이틀"
        />
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
import Entypo from 'react-native-vector-icons/Entypo';


export default class RowGraph extends Component {
    state = {
        size : this.props.size,
        title : this.props.title,
        deta : this.props.deta,
        maxdeta : this.props.maxdeta,

        padding : (GLOBAL.width - this.props.size)/2,
        inView : this.props.size-(GLOBAL.width - this.props.size),
    }
    componentWillMount(){
        console.log("??="+this.state.deta.length);
    }
    componentDidMount(){
    }
    barDate(){
        var i = 1;
        return this.state.deta.map(p => {
            if(i%2==0){
                var color = '#04D6B2'
            }
            else{
                var color = '#26e8d4'
            }
            i++
            return (
                <Animatable.View animation="fadeInUp" key={p.hour} delay={i*75} style={{
                height:this.state.size/2,
                alignItems: 'center',
                justifyContent: 'flex-end',
                }}>
                    <Text>{p.value}</Text>
                    <View style={{width:this.state.inView/this.state.deta.length, height:p.value/this.state.maxdeta*(this.state.size/2)*0.9, backgroundColor:color}}/>
                    <Text>{p.hour}</Text>

                </Animatable.View>
            )
        })
    }
    render() {
        const styles = StyleSheet.create({
            container1: {
                width: this.state.size,
                //height: this.state.size/5,
                marginTop: this.state.padding,
                padding:this.state.padding,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'#fff',
            },
            container2: {
                width: this.state.size,
                //height: this.state.size/5,
                marginTop: this.state.padding,
                padding:this.state.padding,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor:'#fff',
                flexDirection:'row',
            },
            Text:{
                color :'#999',
                fontSize : 20,
            },
        });
        return (
            <View style={styles.container1}>
                <View>
                    <Text style={styles.Text}>{this.state.title}</Text>
                </View>
                <View style={styles.container2}>
                <View/>

                {this.barDate()}

                <View/>
                </View>
            </View>
        );
    }
}

module.exports = RowGraph;
