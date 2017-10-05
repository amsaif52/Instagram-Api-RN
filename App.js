import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Instagram from './src/Instagram'

export default class App extends React.Component {
  render() {
    return (
      <Instagram/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
