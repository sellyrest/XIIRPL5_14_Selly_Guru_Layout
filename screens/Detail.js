import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import ItemData from '../view_data_item'
import ButtonPrimaryyLarge from '../crudButton'

export default function Tambah({navigation}) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.top}>
        <View style={styles.text_top}>
        <Image style={styles.lg}
            source={require('../assets/image/g.jpeg')} /> 
          <Text style={styles.text_headline}>
            Selly Resty Wijayanti
          </Text>
          <View style={{ height: 2, flex: 1, backgroundColor: 'lightgrey', alignSelf: 'center'}}></View>
        </View>
      </View>

      <View style={styles.main_content}>
        <View style={styles.form}>
          <ItemData title_data="NIP" text_data="142536"/>
          <ItemData title_data="Name" text_data="Selly Resty Wijayanti"/>
          <ItemData title_data="Phone" text_data="088983878406"/>
          <ItemData title_data="Email" text_data="sellyresty17@gmail.com"/>
          <ItemData title_data="Gender" text_data="Female"/>
          <ItemData title_data="Address" text_data="Purwokerto"/>
          <ItemData title_data="Subject" text_data="KK4"/>
        </View>
        <View style={styles.button_pack}>
          <ButtonPrimaryyLarge onPress={() => navigation.navigate('Update')} tulisan="Edit Data"/>
          <ButtonPrimaryyLarge onPress={() => navigation.navigate('Update')} tulisan="Hapus Data"/>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  top: {
    gap: 24,
    paddingTop: 38,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: "#F675A8"
  },
  text_top: {
    gap: 8,
    alignItems: 'center'
  },
  text_headline: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: 500
  },
 
  main_content: {
    paddingHorizontal: 16,
    gap: 28
  },
  form: {
    gap: 18,
    marginTop: 20,
  },
  button_pack: {
    gap: 8
  },
  lg: {
    width: '30%',
    height: 100,
    borderRadius: 40,
  }
});
