import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Maps from './Maps';
import SuperRow from './SuperRow';

import FactureComponent from './src/components/FactureComponent';
const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView>  
        <Text>
          Home..... 
        </Text>
      </SafeAreaView>
    </>
  );
}

const SettingsScreen = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}> 
        <SuperRow text1='Article' text2='Quantite'  text3='Prix'/>
        <SuperRow text1='Article' text2='Quantite'  text3='Prix'/>
        <SuperRow text1='Article' text2='Quantite'  text3='Prix'/>
        <SuperRow text1='Article' text2='Quantite'  text3='Prix'/>
        <SuperRow text1='Article' text2='Quantite'  text3='Prix'/>
        <Text>
            Settings ...... 
        </Text>
        <SuperRow text1='Article' text2='Quantite'  text3='Prix'/>
        <SuperRow text1='Article' text2='Quantite'  text3='Prix'/>
        <SuperRow text1='Article' text2='Quantite'  text3='Prix'/>
      </SafeAreaView>
    </>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer style={{backgroundColor:'red'}}>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Maps} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="FactureComponent" component={FactureComponent} />
      
    </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'blue',
   // flex:1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
