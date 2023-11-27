import React from 'react';
import {View,Text,ScrollView, StyleSheet, Image} from 'react-native';
import ItemData from '../item_data'
import ButtonPrimaryyLarge from '../crudButton'

const Menu = ({navigation}) =>{
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.text_top}>
            <Image style={styles.logo}
            source={require('../assets/image/logo-guru.jpg')} /> 
              <Text style={styles.text_headline}>
                Data Guru
              </Text>
            </View>
  
          </View>
  
          <View style={styles.main_content}>
            <ItemData onPress={() => 
              navigation.navigate('Detail')} name="Selly Resty Wijayanti" subject="Teacher KK4-C"
            />
            <ItemData onPress={() => 
              navigation.navigate('Detail')} name="Selly Resty Wijayanti" subject="Teacher KK4-C"
            />
            <ItemData onPress={() => 
              navigation.navigate('Detail')} name="Selly Resty Wijayanti" subject="Teacher KK4-C"
            />
            <ItemData onPress={() => 
              navigation.navigate('Detail')} name="Selly Resty Wijayanti" subject="Teacher KK4-C"
            />
            <ItemData onPress={() => 
              navigation.navigate('Detail')} name="Selly Resty Wijayanti" subject="Teacher KK4-C"
            />
            <ItemData onPress={() => 
              navigation.navigate('Detail')} name="Selly Resty Wijayanti" subject="Teacher KK4-C"
            />
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
      backgroundColor: "#F675A8",
      alignItems: 'center'
    },
    logo: {
      width: 200,
      height: 200,
   },
    text_top: {
      gap: 8,
      alignItems: 'center',
    },
    text_headline: {
      fontSize: 23,
      color: "#FFFFFF",
      fontWeight: 500
    },
    other_top: {
      justifyContent: 'space-between',
      alignItems: 'center', 
    },
    main_content: {
      paddingHorizontal: 16,
      gap: 18
    }
});

export default Menu;