import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Roman';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Getting  started with React Native!</Text>
      <Text style={styles.text}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  title: {
    fontSize: 45
  },
  text: {
    fontSize: 20
  }
});

export default ComponentsScreen;
