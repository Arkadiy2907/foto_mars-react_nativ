import { SafeAreaView, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
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
        onPress={linkToSelect}>
        <ImageBackground
          source={require('../../assets/images/Mars.webp')}
          style={styles.background} >
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
  background: {
    width: '100%',
    height: '100%'
  },
  title: {
    marginTop: 62,
    marginLeft: 18,
    width: 201,
    height: 109,
  },
});
