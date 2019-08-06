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
    });
  }

  onTilePress = (row, col) => {

    // constraint
    var value = this.state.gameState[row][col];
    if (value !== 0) { return; }

    // current player
    var currentPlayer = this.state.currentPlayer;

    // Set the correct tile

    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    // Switch to currentPlayer
    var nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});

  }
  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tileX} />;
        case -1:
          return <Icon name="circle-outline" style={styles.tileO} />;
          default: return <View />;
    }
  }

  // Returns 1 if Player 1 won, -1 if Player 2 won, or a 0 if no one has won,
  render() {
    return (
    <View style={styles.container}>

      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>

        <TouchableOpacity onPress={() => this.onTilePress[0, 0]} style={[styles.tile, (borderLeftWidth: 0, borderTopWidth: 0, )]}>
        {this.renderIcon(0, 0)}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onTilePress[0, 1]} style={[styles.tile, (borderTopWidth: 0, )]} >
        {this.renderIcon(0, 1)}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onTilePress[0, 2]} style={[styles.tile, (borderTopWidth: 0, borderRightWidth: 0, )]} >
        {this.renderIcon(0, 2)}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row"}}>

        <TouchableOpacity onPress={() => this.onTilePress[1, 0]} style={[styles.tile, (borderLeftWidth: 0, )]} >
        {this.renderIcon(1, 0)}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onTilePress[1, 1]} style={[styles.tile, ()]} >
        {this.renderIcon(1, 1)}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => thi s.onTilePress[1, 2]} style={[styles.tile, (borderRightWidth: 0, )]}>
        {this.renderIcon(1, 2)}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: "row"}}>

        <TouchableOpacity onPress={() => this.onTilePress[2, 0]} style={[styles.tile, (borderBottomWidth: 0, borderLeftWidth: 0, )]}>
        {this.renderIcon(2, 0)}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onTilePress[2, 1]} style={[styles.tile, (borderBottomWidth: 0, )]}>
        {this.renderIcon(2, 1)}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onTilePress[2, 2]} style={[styles.tile, (borderBottomWidth: 0, borderRightWidth: 0, )]}>
        {this.renderIcon(2, 2)}
        </TouchableOpacity>
      </View>

  
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

  tileX: {
    color: "red",
    fontsize: 10;
    flex: 1,
   
  }

  tileO: {
     color: "green",
    fontsize: 10;
    flex: 1,
   

  }
});
