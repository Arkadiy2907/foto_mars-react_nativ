import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cards({ route }) {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  }

  console.log(route.params[0][0].date)

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => goToBack()}
      >
        <Text>go to back</Text>
      </TouchableOpacity >
      <View>
        <Text>{route.params[0][0].camera}</Text>
        <Text>{route.params[0][0].date}</Text>
      </View>
      <View style={styles.cards}>
        {route.params[1]?.map(el => (
          <Image style={styles.card} key={el.id} source={{ uri: el.imgSrc }}
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
    backgroundColor: '#DCCEBE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: 109,
    height: 109,
    borderRadius: 7,
  },

});
