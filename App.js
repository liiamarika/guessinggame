import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  // kun äppi käynnistyy
useEffect ( () => { 
  startGame(); 
 }, [])


const startGame = () => {
  // arvo random luku
  setRandom(Math.floor(Math.random() * 100) + 1);
  // aloita laskuri ekasta arvauksesta
  setCount(1);
  // aseta alkuteksti
  setText('Guess number between 1-100');
}

const [random, setRandom] = useState();
const[guess, setGuess] = useState(0);
const[text, setText] = useState();
const [count, setCount] = useState();

// tarkistetaan onko oikein, nollataan arvaus, kasvatetaan lukumäärää
const checkGuess = () => {
  setCount(count + 1);
  if (parseInt(guess) === random ) {
    Alert.alert('You guessed the number in ' + (count) + ' guesses');
    setGuess(0);
    // aloita uusi peli
    startGame();
} else if (guess > random) {
    setText('Your guess ' + (guess) + ' is too high');
    setGuess(0);
} else {
    setText('Your guess ' + (guess) + ' is too low');
    setGuess(0);
} }


  
  return (
    <View style={styles.container}>
      <Text> {text} </Text>
      <TextInput
      style={{width:200, borderColor:'gray', borderWidth:1}}
      keyboardType='numeric'
      value={guess}
      onChangeText={text => setGuess(text)}
      />
      <Button title='Make guess'
      onPress={checkGuess} />
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
});
