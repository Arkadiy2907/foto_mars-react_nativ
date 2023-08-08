import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function Card({ route }) {

  console.log(route.params[0])

  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={require('../../assets/images/Mars.webp')} style={{ width: '100%', height: '100%' }}> */}
      <View style={styles.text}>
        <Text style={{ color: '#FFFFFF' }}>Photo ID</Text>
        <Text style={{ color: '#FFFFFF' }}>{route.params[0].id}</Text>
      </View>

      <Image style={styles.card} source={{ uri: route.params[0].imgSrc }} />
      {/* </ImageBackground> */}
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,

  },
  text: {
    marginBottom: 10,
  },

  card: {
    height: '90%',
    width: '90%',
    borderRadius: 10
  }
});
