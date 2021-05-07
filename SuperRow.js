import React from 'react';
import {View , Text} from 'react-native';

const  SuperRow = (props) =>{
    return (
        <View style={{flex:1,backgroundColor:'red',flexDirection:'row',alignItems:'center',borderBottomColor:'black',borderStyle:'dotted',borderBottomWidth:1}}> 
            <View style={{flex:1,backgroundColor:'green',alignSelf:'stretch',justifyContent:'center'}}>
                <Text style={{alignSelf:'center',color:'white',fontWeight:'bold',fontSize:20}}>
                    {props.text1?  props.text1: 'text 1'} 
                </Text>
            </View>
            <View style={{flex:1,backgroundColor:'red',alignSelf:'stretch',justifyContent:'center'}}>
                <Text style={{alignSelf:'center',color:'gold',fontWeight:'bold',fontSize:20}}>
                    {props.text2?  props.text2: 'text 2'} 
                </Text>
            </View>
            <View style={{flex:1,backgroundColor:'yellow',alignSelf:'stretch',justifyContent:'center'}}>
                <Text style={{alignSelf:'center',color:'black',fontWeight:'bold',fontSize:20}}>
                    {props.text3?  props.text3: 'text 3'}  
                </Text>
            </View>
        </View>
    );
   
}

export default  SuperRow;