/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Profiler } from 'react';
import Welcome from './src/Welcome';
import TinhToan from './src/TinhToan';
import {
  SafeAreaView,Text,View,Button
} from 'react-native';
import XoSoKienThiet from './src/XoSoKienThiet';
import Login from './src/asm/Login';
import Profille from './src/asm/Profille';
import ItemListNew from './src/asm/ItemListNew';
import ListNew from './src/asm/ListNew';
import NewDetail from './src/asm/NewDetail';
import Register from './src/asm/Register';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import ListNewsMe from './src/asm/ListNewsMe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IntentContextProvider } from './src/Context/IntentContext';
import AppNavigator from './src/Context/AppNavigator';
import PostNew from './src/asm/PostNew';
import Nene from './src/exam/Nene';
import Login2 from './src/exam/Login2';



/**
 * <IntentContextProvider></IntentContextProvider> là kho chứa thẻ của js, 
 * thẻ {children} là các thành phần con trong kho của thẻ chính
 * 
 * <NavigationContainer></NavigationContainer> là thẻ điều kiện để sử dụng Stack và Tab 
 * <AppNavigator/> là thẻ điều kiện, đăng nhập được thì vào nội dung, ko được thì đăng nhập đăng kí
 *  */ 




const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <IntentContextProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </IntentContextProvider>
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{headerShown: false}}>
  //     <Stack.Screen name='login2' component={Login2}/>
  //     <Stack.Screen name='nene' component={Nene}/>
  // </Stack.Navigator>
  //   </NavigationContainer>
    
  );
};

export default App;
