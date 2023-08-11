import { SafeAreaView, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import MyForm from '../components/MyForm';
import { useNavigation } from '@react-navigation/native';
import pressHandler from '../components/Api';
import FontWrapper from '../components/FontWrapper';

export default function Select() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const linkToSelect = (arr) => {
    navigation.navigate("Cards", arr)
  }

  const handlePress = (v) => {
    pressHandler(v, linkToSelect, setIsLoading);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FontWrapper>
        <Text style={styles.title}>Select Camera and Date</Text>
      </FontWrapper>
      <View style={styles.body}>
        <MyForm pressHandler={handlePress} />
        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          <Image style={styles.pic} source={require('../../assets/images/car.webp')} />
        )}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DCCEBE',
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  loader: {
    marginTop: 45,
    marginBottom: 235,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'dosis-bold',
    fontSize: 22,
  },
  pic: {
    width: '100%',
  }
});