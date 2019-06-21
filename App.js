/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timer from './components/Timer';

type Props = {};
export default class App extends Component<Props> {

  state={timer:985412}
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={this.state.timer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
    paddingTop: 130,
  }
 
 
});
