import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ColorPalettePreview from '../components/ColorPalettePreview';

const {useState, useCallback, useEffect} = React;

const Home = ({navigation, route}) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    setIsRefreshing(true);
    setColorPalettes([]);
    const result = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    const _palettes = await result.json();
    if (result.ok) {
      setColorPalettes(_palettes);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes(palettes => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  return (
    <View style={styles.flex1}>
      <FlatList
        style={styles.list}
        data={colorPalettes}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <ColorPalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', {
                paletteName: item.paletteName,
                paletteColors: item.colors,
              });
            }}
            paletteName={item.paletteName}
            paletteColors={item.colors}
          />
        )}
        refreshing={isRefreshing}
        onRefresh={fetchColorPalettes}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddNewPaletteModal');
            }}>
            <Text style={styles.buttonText}>+ Add Palette</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
  },
  flex1: {
    flex: 1,
  },
});

export default Home;
