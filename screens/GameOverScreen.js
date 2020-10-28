import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Colors from '../constants/colors'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds : {props.rounds}</Text>
      <Text>Corrected number was : {props.answer}</Text>
        <Button
          title="New Game"
          style={ {marginTop: 10}}
          // ...เพิ่ม property onPress...
          onPress={() => props.onRestart()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
