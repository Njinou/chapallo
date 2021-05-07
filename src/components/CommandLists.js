import React from 'react';
import {View,Text,Pressable,Alert,Image} from 'react-native';
import Blue from '../img/bluecheck.png';
import Cross from '../img/redcross.png';
import cross from '../img/cross.jpeg';
import red from '../img/redcheck.png';


  const  CommandLists =(props) =>{
    return (
       <View key={props.item.id} style={{flex:1,borderBottomColor:'gray',borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomWidth:1,alignItems:'center',justifyContent:'center',paddingLeft:10,paddingRight:10,backgroundColor:'white',flexDirection:'row',marginTop:5,marginBottom:5,paddingBottom:5,paddingTop:5}}>
                    <Pressable style={{flex:1,alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}
                        onPress={()=> props.funcIsCheck(!props.isChecked)}
                    >    
                            <Image  source={props.isChecked? red: Blue} style={{width:props.isChecked?25:30,height:props.isChecked?25: 30}}/>
                            <Text style={{textDecorationLine:props.isChecked? 'line-through':'none' ,fontSize:20,fontWeight:'bold',color:props.isChecked? 'red':'black', textDecorationStyle: 'solid',paddingLeft:props.isChecked? 5:0}}>
                                Solid line-through 2
                            </Text>
                    </Pressable> 
                    <Pressable 
                        onPress={()=>  Alert.alert(
                            "Supprimer la Commande",
                            "Etes vous sûr de vouloir supprimer la commande",
                            [
                              {
                                text: "Cancel",
                                onPress: () => { 
                                    console.log('Cancel Pressed')},//console.log("Cancel Pressed"),
                                style: "cancel"
                              },
                              { text: "OK", onPress: () =>  {
                                  var variable = props.tab;
                                let compt =  props.comptable++;
                                    console.log('compt',compt);
                                    compt++;
                                    ///props.comptableFunc(10);
                                    let newId = variable.length;
                                    props.comptableFunc(newId);
                                    variable.push({"id":newId,"name": "Tony Montana sdfsdfds ", "age": "990"});

                                    console.log("Voir les ways ....",variable);
                                   // console.log("Nombresssss",variable.length);
                                 props.funcSetTab(variable); 
                                 props.refresh();
                                 //console.log("Prps",props.tab)
                                } }
                            ],
                            { cancelable: false }
                          )}
                    > 
                        <Image source={cross} style={{width:30,height:30,marginLeft:'auto'}}/>
                    </Pressable>
                </View>
    );
  }

  export default CommandLists;