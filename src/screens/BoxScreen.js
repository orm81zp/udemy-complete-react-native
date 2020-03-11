import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    backgroundColor: 'red',
    width: 50,
    height: 50
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
  },
  viewTwoParent: {
    height: 94,
    justifyContent: 'flex-end'
  },
  viewThreeStyle: {
    backgroundColor: 'purple',
    width: 50,
    height: 50
  }
});

export default BoxScreen;
