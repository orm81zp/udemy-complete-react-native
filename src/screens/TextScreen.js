import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.root}>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(value) => setPassword(value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {password.length < 4 ? <Text>Password must be at less 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 15
  },
  input: {
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;