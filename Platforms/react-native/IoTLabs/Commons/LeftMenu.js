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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


export default class TopMenu extends Component {
    componentWillMount(){
    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={styles.view}>

                <TouchableHighlight style={styles.container} onPress={() => this._reactInternalInstance._currentElement._owner._instance.setState({leftManu:false})}>
                     <Animatable.View animation="fadeIn" duration={500} style={styles.container}/>
                </TouchableHighlight>

                <Animatable.View animation="slideInLeft" duration={500} style={styles.innerContents}>
                    <Text style={styles.topText}>IoT Labs</Text>

                    <View style={styles.menuBar}>
                        <Text style={styles.topMenuText}>Menu</Text>
                    </View>

                    <View style={styles.margin} />
                    <TouchableHighlight onPress={() => this._reactInternalInstance._currentElement._owner._instance._reactInternalInstance._currentElement._owner._currentElement.props.changeComponent("Dashboard")}>
                        <View style={styles.menuButtom}>
                            <FontAwesome name="dashboard" size={GLOBAL.width*0.08} color="#04D6B2" style={{marginRight: GLOBAL.width *0.03}}/>
                            <Text style={styles.menuText}>Dashboard</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.underLine2} />

                    <TouchableHighlight onPress={() => this._reactInternalInstance._currentElement._owner._instance._reactInternalInstance._currentElement._owner._currentElement.props.changeComponent("Page1")}>
                        <View style={styles.menuButtom}>
                        <Entypo name="home" size={GLOBAL.width*0.08} color="#04D6B2" style={{marginRight: GLOBAL.width *0.03}}/>
                        <Text style={styles.menuText}>집(거실) 미세먼지</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._reactInternalInstance._currentElement._owner._instance._reactInternalInstance._currentElement._owner._currentElement.props.changeComponent("Page2")}>
                        <View style={styles.menuButtom}>
                            <Entypo name="home" size={GLOBAL.width*0.08} color="#04D6B2" style={{marginRight: GLOBAL.width *0.03}}/>
                            <Text style={styles.menuText}>집(안방) 미세먼지</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._reactInternalInstance._currentElement._owner._instance._reactInternalInstance._currentElement._owner._currentElement.props.changeComponent("Page3")}>
                        <View style={styles.menuButtom}>
                            <MaterialCommunityIcons name="temperature-celsius" size={GLOBAL.width*0.08} color="#04D6B2" style={{marginRight: GLOBAL.width *0.03}}/>
                            <Text style={styles.menuText}>집 온도/습도</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.underLine2} />

                    <TouchableHighlight onPress={() => this._reactInternalInstance._currentElement._owner._instance._reactInternalInstance._currentElement._owner._currentElement.props.changeComponent("Page4")}>
                        <View style={styles.menuButtom}>
                            <MaterialCommunityIcons name="filter-outline" size={GLOBAL.width*0.08} color="#04D6B2" style={{marginRight: GLOBAL.width *0.03}}/>
                            <Text style={styles.menuText}>외부1 미세먼지</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._reactInternalInstance._currentElement._owner._instance._reactInternalInstance._currentElement._owner._currentElement.props.changeComponent("Page5")}>
                        <View style={styles.menuButtom}>
                            <MaterialCommunityIcons name="filter-outline" size={GLOBAL.width*0.08} color="#04D6B2" style={{marginRight: GLOBAL.width *0.03}}/>
                            <Text style={styles.menuText}>외부2 미세먼지</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._reactInternalInstance._currentElement._owner._instance._reactInternalInstance._currentElement._owner._currentElement.props.changeComponent("Page6")}>
                        <View style={styles.menuButtom}>
                            <MaterialCommunityIcons name="temperature-celsius" size={GLOBAL.width*0.08} color="#04D6B2" style={{marginRight: GLOBAL.width *0.03}}/>
                            <Text style={styles.menuText}>외부 온도/습도</Text>
                        </View>
                    </TouchableHighlight>


                </Animatable.View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
        position:'absolute',
        top:0,
        left:0,
        width: GLOBAL.width,
        height:GLOBAL.height*1.03,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    container: {
        position:'absolute',
        top:0,
        left:0,
        width: GLOBAL.width,
        height:GLOBAL.height*1.03,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.4)',
    },
    innerContents: {
        position:'absolute',
        top:0,
        left:0,
        width: GLOBAL.width*0.7,
        height:GLOBAL.height*1.03,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    topText:{
        color:'#04D6B2',
        fontSize:GLOBAL.width*0.07,
        marginTop:GLOBAL.height*0.1,
        fontWeight: 'bold',
    },
    menuBar:{
        width: GLOBAL.width*0.7,
        height:GLOBAL.height*0.1,
        backgroundColor:'#04D6B2',
        marginTop:GLOBAL.height*0.07,
        marginBottom:GLOBAL.height*0.02,
        paddingLeft:GLOBAL.width*0.075,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    topMenuText:{
        color:'#fff',
        fontSize:GLOBAL.width*0.06,
        fontWeight: 'bold',
    },
    margin:{
        width: GLOBAL.width*0.7,
        marginTop:GLOBAL.height*0.005,
        marginBottom:GLOBAL.height*0.005,
    },
    underLine2:{
        width: GLOBAL.width*0.6,
        height:0.5,
        backgroundColor:'#ddd',
        marginTop:GLOBAL.height*0.02,
        marginBottom:GLOBAL.height*0.02,
    },
    menuButtom:{
        width: GLOBAL.width*0.5,
        paddingTop:GLOBAL.height*0.01,
        paddingBottom:GLOBAL.height*0.01,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection:'row'
    },
    menuText:{
        color:'#04D6B2',
        fontWeight: '400',
        fontSize:GLOBAL.width*0.04,
    },
});

module.exports = TopMenu;
