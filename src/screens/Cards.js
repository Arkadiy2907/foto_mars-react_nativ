import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';


export default function Cards() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/images/Mars.webp')} style={{ width: '100%', height: '100%' }}>
        <View>
          <Text>MARS</Text>
          <Text>by Curiosity</Text>
        </View>
      </ImageBackground>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
