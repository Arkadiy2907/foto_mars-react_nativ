import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cards({ route }) {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  }

  console.log(route.params)

  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={require('../../assets/images/Mars.webp')} style={{ width: '100%', height: '100%' }}> */}
      {/* <Button onPress={goToBack}></Button> */}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => goToBack()}
      >
        <Text>go to back</Text>

      </TouchableOpacity >
      <View>
        <Text>MARS</Text>
        <Text>by Curiosity</Text>
      </View>
      <View>
        {route.params?.map(el => (
          <Image key={el.id} source={{ uri: el.imgSrc }}
            style={{ width: 109, height: 109 }}
          />

        ))}
      </View>
      {/* </ImageBackground> */}
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
