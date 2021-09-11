import React from 'react';

import { View, StyleSheet, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import Routes from './src/routes';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    'LemonMilk-Bold': require('./src/fonts/LEMONMILK-Bold.otf'),
    'LemonMilk-Light': require('./src/fonts/LEMONMILK-Light.otf'),
  });

  if(!fontsLoaded) { 
    return <View/>
  } else { 
    return (
      <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
