import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formaScreentDate, getLabel } from '../helper/var';


export default function Cards({ route }) {
  const navigation = useNavigation();

  const goToBack = () => navigation.goBack();
  const linkToSelect = arr => navigation.navigate("Card", arr)
  const getCard = id => linkToSelect(route.params[1]?.filter(el => el.id == id))

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => goToBack()}
        >
          <Image style={styles.iconBack} source={require('../../assets/icons/back.png')} />
        </TouchableOpacity >
        <View>
          <Text style={styles.cameraText}>{getLabel(route.params[0][0].camera)}</Text>
          <Text style={styles.dateText}>{formaScreentDate(route.params[0][0].date)}</Text>
        </View>
        <View></View>
      </View>
      <ScrollView>
        <View style={styles.cards}>
          {route.params[1]?.map(el => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => getCard(el.id)}
              key={el.id}
            >
              <Image style={styles.card} key={el.id} source={{ uri: el.imgSrc }} />
            </TouchableOpacity >
          ))}
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DCCEBE',
    alignItems: 'center',
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
  iconBack: {
    width: 30,
    height: 30,
    padding: 5,
  },
  cameraText: {
    fontSize: 20,
  },
  dateText: {
    textAlign: 'center',
  },
  cards: {
    flexDirection: 'row',
    gap: 12,
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
