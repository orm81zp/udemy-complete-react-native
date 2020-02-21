import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const defaultColors = { red: 0, green: 0, blue: 0 };
  const [colors, setColors] = useState(defaultColors);

  const setColor = (color, change) => {
    const sum = colors[color] + change;
    if (sum > 255 || sum < 0) {
      return;
    }
    setColors({
      ...colors,
      [color]: sum
    })
  }

  const { red, green, blue } = colors;

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT )}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT )}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT )}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <Button onPress={() => setColors(defaultColors)} title="Reset colors"/>
      <View style={{
        height: 150,
        width: 150,
        backgroundColor: `rgb(${red},${green},${blue})`
      }} />

    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
