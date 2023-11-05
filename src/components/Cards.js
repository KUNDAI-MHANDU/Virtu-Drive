import React, {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native'
import Icon2 from '@expo/vector-icons/MaterialCommunityIcons'
import Icon from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native';

export default class Cards extends Component{
    render(){
        return(
         <TouchableOpacity style={{
            ...styles.container, 
            backgroundColor:this.props.bg
         }} onPress={this.props.onPress}
         >
            <View style={styles.col}>
                <Image style={styles.img} source={this.props.source}/>
            </View>
            <View style={{paddingLeft: 10}}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={{
                    ...styles.number,
                    color: this.props.bg == "red" ? "#FFF":"#000",
                }}>
                    {this.props.number}
                </Text>
            </View>
         </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    height:200,
    width:130,
    borderRadius:30,
    marginLeft:20
  },
  col: {
      flexDirection:"row"
  },
  title:{
      marginTop:15,
      color:"grey",
      fontWeight:"bold",
      fontSize:12
  },
  number:{
      fontWeight:'bold',
      fontSize:17
  },
  img: {
    height: 120,
    width: '100%', 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }
})