import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import * as Font from 'expo-font';

const FontWrapper = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'dosis-light': require('../../assets/fonts/Dosis-Light.ttf'),
        'dosis-bold': require('../../assets/fonts/Dosis-Bold.ttf')
      });

      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {

    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FontWrapper;