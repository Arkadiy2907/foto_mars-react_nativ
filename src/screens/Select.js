import { SafeAreaView, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import MyForm from '../components/MyForm';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

export default function Select() {
  const navigation = useNavigation();

  const linkToSelect = (arr) => {
    navigation.navigate("Cards", arr)
  }

  const [data, setData] = useState(null);

  const pressHandler = (v) => {
    // setValue(v)
    // console.log(v)
    let images = [];
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY')
      .then(response => {

        // console.log(response.data.photos)
        for (const { id, img_src: imgSrc } of response.data.photos) {
          images.push({ id, imgSrc });
        }
        console.log(v.date)
        // images = response.data.photos.map(photo => { photo.id, photo.img_src });
        setData(images);
        // console.log('images===========', data);
        linkToSelect(data)
      })
      .catch(error => {
        console.log('error=', error);
      });

  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ textAlign: 'center' }}>Select Camera and Date</Text>
      </View>
      <View style={styles.body}>
        <MyForm pressHandler={pressHandler} />
        <Image style={{ width: '100%' }} source={require('../../assets/images/car.webp')} />
      </View>

    </SafeAreaView >
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
});
