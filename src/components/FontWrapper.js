import React, { useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

const FontWrapper = ({ children }) => {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'dosis-light': require('../../assets/fonts/Dosis-Light.ttf'),
        'dosis-bold': require('../../assets/fonts/Dosis-Bold.ttf')
      });
    };

    loadFonts();
  }, []);

  return <>{children}</>;
};

export default FontWrapper;