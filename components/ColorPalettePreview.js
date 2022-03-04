import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const ColorPalettePreview = ({paletteName, paletteColors, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{paletteName}</Text>
      <FlatList
        style={styles.list}
        data={paletteColors.slice(0, 5)}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View
            style={[
              styles.box,
              {
                backgroundColor: item.hexCode,
              },
            ]}></View>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {color: '#000000', fontWeight: 'bold'},
  box: {
    height: 30,
    width: 30,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: {
    marginBottom: 10,
    flexDirection: 'row',
  },
});

export default ColorPalettePreview;
