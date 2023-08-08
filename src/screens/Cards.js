import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Cards({ route }) {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  }

  const linkToSelect = (arr) => {
    navigation.navigate("Card", arr)
  }

  // console.log(route.params[0][0].date)
  // const [card, setCard] = useState(route.params[1])

  const getCard = (id) => {
    // setCard(route.params[1]?.filter(el => el.id == id))
    linkToSelect(route.params[1]?.filter(el => el.id == id))
  }


  // console.log(card);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ padding: 10 }}
          activeOpacity={0.5}
          onPress={() => goToBack()}
        >
          <Image style={{ width: 30, height: 30 }} source={require('../../assets/icons/back.png')} />
        </TouchableOpacity >
        <View>
          <Text style={{ fontSize: 20 }}>{route.params[0][0].camera}</Text>
          <Text style={{ textAlign: 'center' }}>{route.params[0][0].date}</Text>
        </View>
        <View></View>
      </View>
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
