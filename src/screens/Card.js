import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Card({ route }) {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  }

  const linkToSelect = () => {
    navigation.navigate("Welcome")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ padding: 10 }}
          activeOpacity={0.5}
          onPress={() => goToBack()}
        >
          <Image style={{ width: 25, height: 25, objectFit: 'cover' }} source={require('../../assets/icons/backW.png')} />
        </TouchableOpacity >
        <View style={styles.text}>
          <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>Photo ID</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 20 }}>{route.params[0].id}</Text>
        </View>
        <TouchableOpacity
          style={{ padding: 10 }}
          activeOpacity={0.5}
          onPress={() => linkToSelect()}
        >
          <Image style={{ width: 20, height: 20 }} source={require('../../assets/icons/share.png')} />
        </TouchableOpacity >

      </View>
      <Image style={styles.card} source={{ uri: route.params[0].imgSrc }} />

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
  header: {
    flexDirection: 'row',
    width: '90%',
    paddingTop: 30,
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-between',
  },

  card: {
    height: '90%',
    width: '90%',
    borderRadius: 10
  }
});
