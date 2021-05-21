import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,Image,Pressable,TextInput,Modal,TouchableHighlight,Alert,FlatList, useColorScheme, Button} from 'react-native';
import Blue from '../img/bluecheck.png';
import Cross from '../img/redcross.png';
import cross from '../img/cross.jpeg';
import red from '../img/redcheck.png';
import CommandLists from './CommandLists';
import Keys from '../text/Keys';

import CheckBox from '@react-native-community/checkbox';

///var comptable=0;
//dans la commande mettre le nom, l'identtifiant, le numero de la facture , la date, le lieu.. . ou code de la boutique...  
//une commande peut contenir.... un petit dejeuner...  une entree,  un ou plusieurs plats chauds..., un dessert ou un raffraichissant  ou une infusion.... the... menthe infusee, tisane infuseeee
// quantite, prix unitaire, prix totale,  suggestions sur la bouffe... 
// chaque met peut avoir des specifications.....
/// #A9A9A9  

/*const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}*/

//setCategory

const FactureComponent = (props) =>{


  useEffect(() => {
    // action on update of movies
}, [category]);

useEffect(() => {
  // action on update of movies
}, [command]);

    const [isChecked,setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [comptable, setcomptable] = useState(0);
    const [category, setCategory] = useState("Nouvelle Commande...");
    const [sousCategory, setSousCategory] = useState(null);
    const [command,setCommand] = useState({});
    const [article,setArticle] = useState({});
    const [commandTitle,setCommandTitle] = useState("Nouvelle Commande...");
    const [toggleCheckBox, setToggleCheckBox] = useState([])
    const [quantite,setQuantite] = useState([]);
    const [vall, setVal] = useState(false);
    const [asdsd,setAasssad] = useState([]);
    const [detail, setDetail] = useState("");
    const [placeholder, setPlaceholder] = useState("Les details de la commande...");
    const [tab, setTab] = useState([
      {   
          "id":'123',
          "name": "ananta",
          "age": "15",
          "country": "Atlanta"
      }
  ]);
    const refreshingFunc = () =>{
      setRefreshing(true);
    }

    const comptableFunc = (compt) =>{
      console.log("et puis koi ...",compt);
      setcomptable(compt);
    }

    const propSetChecked = () =>{
        console.log("settig the check point...");
    }
    
    const funcIsCheck = () =>{
        console.log("settig the check funcSetTab...");
    }
    const funcSetTab = (val) =>{
        setTab(val);
    }
    const getSearchList = async () => {
      console.log("Je ne suis pas la dedans");
      
    }

    const  filterObjects = (objects) =>{
      var filtered = {};
      var keys = Object.keys(objects);
      for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (objects.hasOwnProperty(key)) {
              var object = objects[key];
              if (object.quantite >0)
              {
                filtered[key] = object;
              }
          }
      }
      return filtered;
  }
    return (
        <>
          <FlatList
            data={tab}
            refreshing={true}
            extraData={refreshing}
            onRefresh={()=>console.log('refreshing...')}
            renderItem={({ item }) => <CommandLists comptableFunc={comptableFunc} refresh={refreshingFunc} comptable={comptable} item={item} tab={tab} isChecked={isChecked}  func={propSetChecked} funcIsCheck={funcIsCheck}  funcSetTab={funcSetTab} />}
            keyExtractor={item => item.id +""}
          />
         
      <View style={{justifyContent:'center',marginLeft:25,marginRight:25,marginTop:20,flexDirection:'row'}}>
                <TextInput style={{backgroundColor:'white',alignSelf:'stretch'}} onTextChange={()=>console.log('Hello world')} placeholder='Ajouter une Commande'/>
                <Pressable style={{alignSelf:'center',backgroundColor:'#A9A9A9',marginLeft:5,paddingRight:5}} onPress={()=> setModalVisible(!modalVisible)}>
                    <Text style={{color:'white',padding:10}}>
                        Ajouter
                    </Text>
                </Pressable>
        </View>
          <View style={{flex:1,margin:1,backgroundColor:'#A9A9A9',borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{textDecorationLine: 'none', textDecorationStyle: 'solid',fontWeight:'bold',fontSize:20,color:'white'}}>
                  Solid line-through 5
              </Text>
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            > 
             <View style={styles.centeredView,{width:'90%',alignSelf:'center',paddingTop:'10%',marginBottom:'15%',}}>
               
               <View style={styles.modalView}>
                 <View>
                  <Text style={[styles.modalText,{fontWeight:'bold',fontSize:25,color:'#AAA9A9',textDecorationLine: 'underline'}]} onPress={() => {setSousCategory(null); setCategory(null)} }> {category}</Text>
                  <FlatList
                      data={ !sousCategory && (Keys[category] && Object.keys(Keys[category])  ||  (Keys && Object.keys(Keys)))  ||  (sousCategory && Keys[category][sousCategory]) || [] }
                      renderItem={({item}) => 
                          <View key={item?.code} >  

              {  (sousCategory && Keys[category][sousCategory]) ?
                <>
                <View style={{flex:1,flexDirection:'row',padding:1,justifyContent:'center',alignItems:'center',alignSelf:'center',margin:5,}}> 
                  <CheckBox
                    disabled={false}
                    value= {  command[item.code] && command[item.code].picked || false} //{toggleCheckBox[item.code]}
                    onValueChange={(newValue) => {
                                  
                                  let commandTemp = command ? command : {};
                                  let elmt = commandTemp[item.code] || {quantite:  0 , picked: false,  supplement:""};
                                  let NOUVELLEValue =  {quantite:  newValue ? (elmt.quantite ? elmt.quantite + 1: 1) : 0, picked: newValue,  supplement:"",category:category,sousCategory:sousCategory}; 
                                  commandTemp[item.code] = NOUVELLEValue;
                                  setCommand(filterObjects(commandTemp));
                                  console.log(filterObjects(command));
                      }
                    }
              /> 
                  <View style={{ borderTopLeftRadius:8,borderTopRightRadius:1,borderBottomRightRadius:5,borderBottomLeftRadius:1,backgroundColor: "#1E90FF" ,justifyContent:'flex-start',alignItems:'center',width:'50%',marginLeft:5}}> 
                      <Text  style={styles.textStyle,{padding:5,color:'white',fontSize:18,textAlign:'center',textAlign:'center',textAlignVertical:'top',overflow: 'scroll'}}>{typeof(item) === 'string'? item : item?.description}</Text>
                  </View>
                   
                  <View style={{flexDirection:'row',paddingRight:1,justifyContent:'flex-end',marginLeft:10}}>
                      {command[item.code] && command[item.code].quantite >=1 ?<View style={{backgroundColor:'#AAA9A9',alignItems:'center',justifyContent:'center',borderTopLeftRadius:5,borderBottomLeftRadius:1,paddingLeft:'3%',paddingRight:'3%'}}>
                          <Text style={{color:'gray',fontSize:25}} onPress={() => {
                                  let commandTemp =  command ? command : {};
                                  let elmt = commandTemp[item.code] || {quantite:  0, picked: false,  supplement:""};
                                  let NOUVELLEValue =  {quantite: commandTemp[item.code].quantite> 0 ?commandTemp[item.code].quantite - 1 :0, picked: true,  supplement:"",category:category,sousCategory:sousCategory}; 
                                  commandTemp[item.code] = NOUVELLEValue;
                                  setCommand(filterObjects(commandTemp));
                                  console.log('Minus minus minus ',command);

                            }
                            }>-</Text>
                      </View>:null}
                      <View style={{backgroundColor:'#F0FFFF',alignItems:'center',justifyContent:'center',paddingLeft:'1%',paddingRight:'1%'}}>
                          <Text style={{fontWeight:'bold',color:'#AAA9A9'}}>
                            {  command[item.code]? command[item.code] &&  command[item.code].quantite : 0 }
                          </Text>
                      </View>
                      <View style={{backgroundColor:'#AAA9A9',alignItems:'center',justifyContent:'center',borderTopRightRadius:1,borderBottomRightRadius:5,paddingLeft:'2%',paddingRight:'2%'}}>
                          <Text style={{color:'gray',fontSize:25}}  onPress={() => {
                           let commandTemp =  command ? command : {};
                                  let elmt = commandTemp[item.code] || {quantite:  0, picked: false,  supplement:""};
                                  let NOUVELLEValue =  {quantite: commandTemp[item.code] && commandTemp[item.code].quantite ? commandTemp[item.code].quantite + 1 : 1 , picked: true,  supplement:"",category:category,sousCategory:sousCategory}; 
                                  commandTemp[item.code] = NOUVELLEValue;
                                  setCommand(filterObjects(commandTemp));
                                  console.log("voici la nouvelle valeur de..",command);
                            }
                            }>+</Text>  
                      </View>
                        
                        <View style={{justifyContent:'center',marginRight:'auto',marginLeft:'auto'}}>
                          <Text > {  command[item.code] && command[item.code].quantite ? Number( command[item.code].quantite)  * Number (item?.prix): item?.prix}</Text>
                        </View>
                  </View>
                </View> 

                {command[item.code]? <TextInput
                    style={styles.input}
                    onChangeText={(val)=> {
                      let commandTemp =  command ? command : {};
                      let elmt = commandTemp[item.code] || {quantite:  0, picked: false,  supplement:""};
                      let NOUVELLEValue =  {quantite: commandTemp[item.code].quantite  , picked: commandTemp[item.code].picked,  supplement:val,category:category,sousCategory:sousCategory}; 
                      commandTemp[item.code] = NOUVELLEValue;
                      console.log('TextInput.... so on.....  ',command);
                      setDetail(val);
                    } }
                    value={command[item.code].supplement || ''}
                    placeholder='Entrez les details de la commande...'
                  />  : null}
                </>
                : 
                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: Keys[category]  && 'black' || "#A9A9A9" ,margin:5}}
                onPress={() => {
                  Keys[category]? setSousCategory(item): setCategory(item);
                  sousCategory && console.log(Keys[category][sousCategory]);
                }}
              >
                <Text style={styles.textStyle,{padding:2,color:'white',fontSize:22,textAlign:'center'}}>{typeof(item) === 'string'? item : item?.description}</Text>
              </TouchableHighlight>
                }
              </View> 
                      }
                      keyExtractor={item => typeof(item) === 'string'? item : item?.code}
                    />

                <Button
                style={{flex:1,fontSize:40}}
                onPress={() => Alert.alert("Je Ne suis pas dacord")}
                title="Valider la Commande...."
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
                 </View> 
                </View>
              </View>
            </Modal>
          </View>

  </>
    );
}
const PureFactureComponent = React.PureComponent (FactureComponent);

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

      centeredView: {
       // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 1,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor:'#A9A9A9',// "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },

});
export default React.memo(FactureComponent);
