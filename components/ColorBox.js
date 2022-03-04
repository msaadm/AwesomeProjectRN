import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({color}) => {
  const boxColor = {backgroundColor: color.hexCode};
  const textColor = {
    color:
      parseInt(color.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? '#000000'
        : '#ffffff',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text
        style={[
          styles.text,
          textColor,
        ]}>{`${color.colorName}: ${color.hexCode}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  box: {
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorBox;
