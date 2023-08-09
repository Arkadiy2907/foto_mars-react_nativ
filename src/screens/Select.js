import { SafeAreaView, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import MyForm from '../components/MyForm';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { url, getUrl } from '../helper/var';

export default function Select() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const linkToSelect = (arr) => {
    navigation.navigate("Cards", arr)
  }

  const pressHandler = (v) => {

    setIsLoading(true);
    let images = [];
    console.log(v.camera);

    axios.get(getUrl(v.date, v.camera))
      .then(response => {
        for (const { id, img_src: imgSrc } of response.data.photos) {
          images.push({ id, imgSrc });
        }
        linkToSelect([[v], images]);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('error=', error);
        setIsLoading(false);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ textAlign: 'center' }}>Select Camera and Date</Text>
      </View>
      <View style={styles.body}>
        <MyForm pressHandler={pressHandler} />
        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          <Image style={{ width: '100%' }} source={require('../../assets/images/car.webp')} />
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
});