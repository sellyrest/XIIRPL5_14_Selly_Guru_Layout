import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const CustomMenu = (props) => {
  return(
    <TouchableOpacity style={{backgroundColor:'#edede9',borderRadius:20, marginTop:10}} onPress={props.onPress}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{padding:8, backgroundColor:'#5e548e', margin:16, marginLeft:16, borderRadius:100}}>
              <Image style={{width: 40, height:40, borderRadius:20}} source={props.gambar}/>
            </View>
            <View>
              <Text style={{paddingLeft: 6, fontSize:16, fontWeight:'bold'}}>{props.judul}</Text>
              <Text style={{paddingLeft: 6, fontSize:14}}>{props.subJudul}</Text>
           </View>
        </View>
    </TouchableOpacity>
  )
}

export default CustomMenu