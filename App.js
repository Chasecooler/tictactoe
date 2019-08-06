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

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame ()  {
    this.setState({gameState:
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    });
  }

  // Win or lose ... Returns 1 if Player 1 won, -1 if Player 2 won, or  0 if no one has won,
  getWinner = () => {
    const SEQ_TILES = 3;
    var arr = this.state.gameState;
    var sum;

    // Check sequence for row/ col 111 L-R, Up-Dn or Diag 
    for (var i = 0; 1 < SEQ_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {return -1; }
    }

    // Check seq for col/
    for (var i = 0; 1 < SEQ_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {return -1; }
    }

      // Check for seq diag
      
      sum = arr[0][0] + arr[1][1] + arr[2][2];
      if (sum == 3) {return 1; }
      else if (sum = -3) {return -1; }

      sum = arr[2][0] + arr[1][1] + arr[0][2];
      if (sum == 3) {return 1; }
      else if (sum = -3) {return -1; }

      // no winner 
      return 0;

  }



  onTilePress = (row, col) => {

  onNewGamePress = () => {
    this.initializeGame();
  }


    // constraint
    var value = this.state.gameState[row][col];
    if (value !== 0) { return; }

    // current player
    var {currentPlayer} = this.state.currentPlayer;

    // Set the correct tile

    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    // Switch to currentPlayer
    var nextPlayer = (this.state.currentPlayer === 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});

    // Winner
    var winner = this.getWinner();
    if (winner == 1) {
      Alert.alert("Player One is the Winner");
      this.initializeGame();
    } else if (winner == -1) {
      Alert.alert("Player Two is the Winner");
      this.initializeGame();
    }
    

  }
  renderIcon = (row, col) => {
    const value = this.state.gameState[row][col];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tileX} />;
        case -1:
          return <Icon name="circle-outline" style={styles.tileO} />;
          default: <View />;
    }
  }

  
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

      <View style=({paddingTop:50}) />

      <Button title="New Game" onPress={this.onNewGamePress}</Button>

  
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
