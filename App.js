import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigator/mainNavigator';

function App(){
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;