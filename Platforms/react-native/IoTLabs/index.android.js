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
    Dimensions
} from 'react-native';
import Index from './Page/index';

export default class IoTLabs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Index/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -Dimensions.get("window").height * 0.03
  },
});

AppRegistry.registerComponent('IoTLabs', () => IoTLabs);
