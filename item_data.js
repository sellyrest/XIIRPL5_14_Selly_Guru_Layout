import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';


const item_data = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.parent_data}>
      <View style={styles.data_content}>
        <Text style={styles.nama_guru}>{props.name}</Text>
        <Text style={styles.mapel_guru}>{props.subject}</Text>
      </View>
      <Image style={styles.icon}
        source={require('./assets/image/arrow.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  nama_guru: {
    fontWeight: '500',
    fontSize: 20
  },
  mapel_guru: {
    fontSize: 16,
  },
  icon: {
    height: 28,
    width: 28
  },
  parent_data: {
    borderRadius: 18,
    backgroundColor: "#FFE3E1",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  data_content: {
    gap: 8
  }
})

export default item_data;