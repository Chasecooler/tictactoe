import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>

    <View style={{flexDirection: "row"}}>
      <View style={[styles.tile, (borderLeftWidth: 0, borderTopWidth: 0)]} />
      <View style={[styles.tile, ()]} />
      <View style={[styles.tile, ()]} />
    </View>

    <View style={{flexDirection: "row"}}>
      <View style={[styles.tile, ()]} />
      <View style={[styles.tile, ()]} />
      <View style={[styles.tile, ()]} />
    </View>

    <View style={{flexDirection: "row"}}>
      <View style={[styles.tile, ()]} />
      <View style={[styles.tile, ()]} />
      <View style={[styles.tile, ()]} />
    </View>


      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    borderWidth: 1,
    width: 100,
    height: 100,
  }
});
