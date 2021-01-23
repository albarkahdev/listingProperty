import React, {Component} from 'react';
import {View} from 'react-native';

import ListProperty from './src/scenes/ListProperty/ListProperty'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <ListProperty />
      </View>
    );
  }
};
