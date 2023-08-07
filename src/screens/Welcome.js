import { SafeAreaView, StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  const linkToSelect = () => {
    navigation.navigate("Select")
  }

  return (
    <SafeAreaView>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ width: '100%', height: '100%' }}
        onPress={linkToSelect}>
        <ImageBackground
          source={require('../../assets/images/Mars.webp')}
          style={{ width: '100%', height: '100%' }} >
          <Image
            source={require('../../assets/images/title.webp')}
            style={styles.title}
          />
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 62,
    marginLeft: 18,
    width: 201,
    height: 109,
  },
});
