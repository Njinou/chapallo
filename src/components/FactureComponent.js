import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,Image,Pressable,TextInput,Modal,TouchableHighlight,Alert,FlatList, useColorScheme} from 'react-native';
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

    const [isChecked,setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [comptable, setcomptable] = useState(0);
    const [category, setCategory] = useState("Nouvelle Commande...");
    const [sousCategory, setSousCategory] = useState(null);
    const [command,setCommand] = useState([]);
    const [article,setArticle] = useState({});
    const [commandTitle,setCommandTitle] = useState("Nouvelle Commande...");
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [quantite,setQuantite] = useState(0);

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
    
   //const donne = [{"age": "15", "country": "Atlanta", "id": "123", "name": "ananta"}, {"age": "990", "id": 1, "name": "Tony Montana sdfsdfds "}, {"age": "990", "id": 2, "name": "Tony Montana sdfsdfds "}, {"age": "990", "id": 3, "name": "Tony Montana sdfsdfds "}, {"age": "990", "id": 4, "name": "Tony Montana sdfsdfds "}];
    
     
    const funcSetTab = (val) =>{
        setTab(val);
    }

    const addCommand = () =>{
      /*
       setCategory("Petit Dejeuner");
        console.log(category);
                      let val =command;
                      if( category && val.hasOwnProperty(category)){  
                        console.log("INside!!!!!!!!!");
                        val[`${category}`].push({nom:'argent',category:category})

                        setCommand(val);
                      console.log('val val',val);
                      console.log('command',command);

                      } else if (category){
                        console.log(category);
                      val[`${category}`]=[{nom:'inspiration',category:'category  category '}];

                      setCommand(val);
                      console.log('val val',val);
                      console.log('command',command);
                      }   */   
                                 
    }
//'#A9A9A9'  '#B9A9A9' '#A9B9A9' '#A9A9B9' '#AAA9A9'
//textDecorationLine: 'line-through',
/*
searchFeatured = value => {
  const filterFeatured = [
    ...this.state.latestuploadsApiData,
    ...this.state.featuredspeakersApiData
  ].filter(item => {
    const searchString = `${item.name} ${item.title}`;

    return (
      searchString && searchString.toLowerCase().includes(value.toLowerCase())
    );
  });

  // both arrays will have the same data
  this.setState({
    featuredspeakers: filterFeatured,
    latestuploads: filterFeatured
  });

  boissons//=>  biere top  etrangere eau jus liqueur vin
  pdj //=>etranger local boissonsChaude  infusion
             plats //=> accompagnement  chaud traditionel  legume
             entrees //=> patisserie oeuvre

 ["drink", "pdj", "plats", "desserts", "grill", "entrees"]

*/
/*console.log('drink',Object.keys(Keys['drink']));
console.log('pdj',Object.keys(Keys['pdj']));
console.log('plats',Object.keys(Keys['plats']));
console.log('desserts',Object.keys(Keys['desserts']));
console.log('grill',Object.keys(Keys['grill']));
console.log('entrees',Object.keys(Keys['entrees']));*/


/*


                  
                  <>
                  
                  <TouchableHighlight
                     style={{ ...styles.openButton, backgroundColor: "#A9A9A9" ,margin:5}}
                     onPress={() => {
                       setCategory('pdj');
                       setSelection(true);
                       console.log(category);
                     }}
                   >
                     <Text style={styles.textStyle,{padding:2,color:'white',fontSize:22}}>Petit Dejeuner</Text>
                   </TouchableHighlight>
 
                   <TouchableHighlight
                       style={{ ...styles.openButton, backgroundColor: "#A9A9A9" ,margin:5}}
                       onPress={() => {
                         console.log("Inside.... Entree");
                         setCategory("entrees");
                       }}
                     >
                       <Text style={styles.textStyle,{padding:2,color:'white',fontSize:22}}>Entree</Text>
                     </TouchableHighlight>

                     <TouchableHighlight
                       style={{ ...styles.openButton, backgroundColor: "#A9A9A9" ,margin:5}}
                       onPress={() => {
                         console.log("Inside.... Plats Chauds.... ");
                         setCategory("plats");
                       }}
                     >
                       <Text style={styles.textStyle,{padding:2,color:'white',fontSize:22}}>Plats Chauds</Text>
                     </TouchableHighlight>
                   
 
                   <TouchableHighlight
                       style={{ ...styles.openButton, backgroundColor: "#A9A9A9",margin:5 }}
                       onPress={() => {
                         console.log("Inside.... Desserts ");
                         setCategory("desserts");
                         console.log(category);
                       }}
                     >
                       <Text style={styles.textStyle,{padding:2,color:'white',fontSize:22}}>Desserts</Text>
                     </TouchableHighlight>
 
                  <TouchableHighlight
                     style={{ ...styles.openButton, backgroundColor: "#A9A9A9",margin:5 }}
                     onPress={() => {
                       console.log("Inside.... Boissons... ");
                       setCategory("drink");
                     }}
                   >
                     <Text style={styles.textStyle,{padding:2,color:'white',fontSize:22}}>Boissons</Text>
                   </TouchableHighlight>
                   
                    <TouchableHighlight
                     style={{ ...styles.openButton, backgroundColor: "#A9A9A9",margin:5 }}
                     onPress={() => {
                       console.log("grill");
                       setCategory("grill");
                     }}
                   >
                     <Text style={styles.textStyle,{padding:2,color:'white',fontSize:22}}>Grillades</Text>
                   </TouchableHighlight> 
                   </>


*/

// command =

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
                 <>
                  <Text style={[styles.modalText,{fontWeight:'bold',fontSize:25,color:'#AAA9A9',textDecorationLine: 'underline'}]}> {category}</Text>
                  <FlatList
                      data={ !sousCategory && (Keys[category] && Object.keys(Keys[category])  ||  (Keys && Object.keys(Keys)))  ||  (sousCategory && Keys[category][sousCategory]) || [] }
                      renderItem={({item}) => 
                          <View key={item?.code} >  

              {  (sousCategory && Keys[category][sousCategory]) ?
                <View style={{flex:1,flexDirection:'row',padding:1,justifyContent:'center',alignItems:'center',alignSelf:'center',margin:5,}}> 
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => {
                                  setToggleCheckBox(newValue);
                                  console.log('newValue item ',item);
                                  newValue? setQuantite(1) : setQuantite(0);
                                }
                              }
              />
                  <View style={{ borderTopLeftRadius:8,borderTopRightRadius:1,borderBottomRightRadius:5,borderBottomLeftRadius:1,backgroundColor: "#1E90FF" ,justifyContent:'flex-start',alignItems:'center',width:'50%',marginLeft:5}}> 
                      <Text  style={styles.textStyle,{padding:5,color:'white',fontSize:18,textAlign:'center',textAlign:'center',textAlignVertical:'top',overflow: 'scroll'}}>{typeof(item) === 'string'? item : item?.description}</Text>
                  </View>



                  <View style={{flexDirection:'row',paddingRight:1,justifyContent:'flex-end',marginLeft:10}}>
                      {quantite >=1 ?<View style={{backgroundColor:'#AAA9A9',alignItems:'center',justifyContent:'center',borderTopLeftRadius:5,borderBottomLeftRadius:1,paddingLeft:'3%',paddingRight:'3%'}}>
                          <Text style={{color:'gray',fontSize:25}} onPress={() => {
                              quantite <= 1? setToggleCheckBox(false) : setToggleCheckBox(true);
                              setQuantite(quantite - 1);
                              
                            }
                            }>-</Text>
                      </View>:null}
                      <View style={{backgroundColor:'#F0FFFF',alignItems:'center',justifyContent:'center',paddingLeft:'1%',paddingRight:'1%'}}>
                          <Text style={{fontWeight:'bold',color:'#AAA9A9'}}>
                            {quantite}
                          </Text>
                      </View>
                      <View style={{backgroundColor:'#AAA9A9',alignItems:'center',justifyContent:'center',borderTopRightRadius:1,borderBottomRightRadius:5,paddingLeft:'2%',paddingRight:'2%'}}>
                          <Text style={{color:'gray',fontSize:25}}  onPress={() => {
                              setQuantite(quantite+1);
                              setToggleCheckBox(true);
                            }
                            }>+</Text>
                      </View>
                        
                        <View style={{justifyContent:'center',marginRight:'auto',marginLeft:'auto'}}>
                        <Text > { quantite * Number (item?.prix)}</Text>
                        </View>
                      
                    </View>


                </View> : 
                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: Keys[category]  && 'black' || "#A9A9A9" ,margin:5}}
                onPress={() => {
                  Keys[category]? setSousCategory(item): setCategory(item);
                  console.log('sous category',sousCategory);
                  console.log('AVANT SOUS  category',category);
                  sousCategory && console.log(Keys[category][sousCategory]);
                  //Keys[category]? setCategory(item) : setSousCategory(item);
                //  Keys[category][sousCategory] && console.log(Keys[category][sousCategory] );
                }}
              >
                <Text style={styles.textStyle,{padding:2,color:'white',fontSize:22,textAlign:'center'}}>{typeof(item) === 'string'? item : item?.description}</Text>
              </TouchableHighlight>
                }

                            
                           
                          </View> 
                      }
                      keyExtractor={item => typeof(item) === 'string'? item : item?.code}
                    />
                 </> 
                </View>
              </View>
            </Modal>
          </View>
  </>
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
      }

});
export default FactureComponent;
