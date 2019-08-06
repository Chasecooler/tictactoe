import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button, } from 'react-native';
import {MaterialCommunityIcons as Icon } from "react-native-vector-icons";

export default class App extends React.Component {

  constructor(props) {
    super(props);
// gameState
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      // current player
      currentPlayer: 1,

    }
  }

  ComponentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({gameState:
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    
    });
  }

  // Returns 1 if Player 1 won, -1 if Player 2 won, or a 0 if no one has won,
  render() {
    return (
    <View style={styles.container}>

    <View style={{flexDirection: "row"}}>
      <View style={[styles.tile, (borderLeftWidth: 0, borderTopWidth: 0, )]} />
      <View style={[styles.tile, (borderTopWidth: 0, )]} />
      <View style={[styles.tile, (borderTopWidth: 0, borderRightWidth: 0, )]} />
    </View>

    <View style={{flexDirection: "row"}}>
      <View style={[styles.tile, (borderLeftWidth: 0, )]} />
      <View style={[styles.tile, ()]} />
      <View style={[styles.tile, (borderRightWidth: 0,)]} />
    </View>

    <View style={{flexDirection: "row"}}>
      <View style={[styles.tile, (borderBottomWidth: 0, borderLeftWidth: 0,)]} />
      <View style={[styles.tile, (borderBottomWidth: 0, )]} />
      <View style={[styles.tile, (borderBottomWidth: 0, borderRightWidth: 0, )]} />
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
    borderWidth: 10,
    width: 100,
    height: 100,
  }

  tilex {
    color: "red",
    fontsize: 10;
    flex: 1,
    alignitems: "center",
    justifyContent: "center",
  }
});
