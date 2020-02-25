import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.root}>
      <Text>Enter passwword:</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {text.length < 4 ? <Text>Password must be at less 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 15
  },
  input: {
    marginTop: 15,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;