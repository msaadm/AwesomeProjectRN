import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({route}) => {
  return (
    <>
      <FlatList
        style={styles.container}
        contentContainerStyle={{paddingBottom: 50}}
        data={route.params.paletteColors}
        renderItem={({item}) => (
          <ColorBox
            color={{colorName: item.colorName, hexCode: item.hexCode}}
          />
        )}
        keyExtractor={(item, index) => item.colorName + index}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ColorPalette;
