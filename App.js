import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import {createStackNavigator} from '@react-navigation/stack';
import AddNewPaletteModal from './screens/AddNewPaletteModal';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Group>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen
              name="ColorPalette"
              component={ColorPalette}
              options={({route}) => ({title: route.params.paletteName})}
            />
          </RootStack.Group>
          <RootStack.Group screenOptions={{presentation: 'modal'}}>
            <RootStack.Screen
              name="AddNewPaletteModal"
              component={AddNewPaletteModal}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
