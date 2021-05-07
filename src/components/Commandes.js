import React,{useState} from 'react';
import {View, StyleSheet,Text,Image,Pressable} from 'react-native';
import Blue from '../img/bluecheck.png';
import Cross from '../img/redcross.png';
import cross from '../img/cross.jpeg';
import red from '../img/redcheck.png';

const Commandes = (props) =>{
    const [isChecked,setChecked] = useState(false);

    return (
        <View style={{flex:1,margin:25,backgroundColor:'#A9A9A9',borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
            <Pressable style={{backgroundColor:'red',flex:1}}
                onPress={()=>alert("Wrking fine....")}
            >
                <View style={{flex:1,borderBottomColor:'gray',borderBottomWidth:1,alignItems:'center',paddingLeft:10,paddingRight:10,backgroundColor:'white',flexDirection:'row'}}>
                    <Image  source={Blue} style={{width:30,height:30}}/>
                    <Text style={{textDecorationLine: 'line-through',fontSize:20,fontWeight:'bold', textDecorationStyle: 'solid'}}>
                        Solid line-through + {isChecked}
                    </Text>
                    <Image  source={cross} style={{width:30,height:30,marginLeft:'auto'}}/>
                </View>
            </Pressable>    
            <View style={{flex:1,borderBottomColor:'gray',borderBottomWidth:1,alignItems:'center',paddingLeft:10,paddingRight:10,backgroundColor:'white',flexDirection:'row'}}>
                <Image  source={red} style={{width:25,height:25}}/>
                <Text style={{textDecorationLine: 'line-through',fontSize:20,fontWeight:'bold', textDecorationStyle: 'solid',paddingLeft:15}}>
                    Solid line-through
                </Text>
                
                <Image  source={cross} style={{width:30,height:30,marginLeft:'auto'}}/>
            </View>

            <View style={{flex:1}}>
                <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                    Solid line-through
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                    Solid line-through
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                    Solid line-through
                </Text>
            </View>

        </View>
    );

}
const styles= StyleSheet.create({
    scrollView: {
        backgroundColor: 'blue',
       // flex:1
      },
      engine: {
        position: 'absolute',
        right: 0,
      },
      logo: {
        width: 66,
        height: 58,
      },
});
export default Commandes;
