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
          activeOpacity={0.5}
          onPress={() => goToBack()}
        >
          <Image style={styles.icon} source={require('../../assets/icons/backW.png')} />
        </TouchableOpacity >
        <View>
          <Text style={styles.titleIdText}>Photo ID</Text>
          <Text style={styles.idText}>{route.params[0].id}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => linkToSelect()}
        >
          <Image style={styles.icon} source={require('../../assets/icons/share.png')} />
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
  titleIdText: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  idText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  icon: {
    width: 22,
    height: 22,
    padding: 5,
  },
  card: {
    height: '90%',
    width: '90%',
    borderRadius: 10,
  }
});
