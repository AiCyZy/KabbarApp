import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Login from '../asm/Login'
import Register from '../asm/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { IntentContext } from './IntentContext'
import ListNew from '../asm/ListNew'
import Profille from '../asm/Profille'
import NewDetail from '../asm/NewDetail'
import PostNew from '../asm/PostNew'
import ListNewsMe from '../asm/ListNewsMe'



//Login, Rigister => Stack
const Stack = createNativeStackNavigator();
const Users = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='login' component={Login}/>
          <Stack.Screen name='register' component={Register}/>
        </Stack.Navigator>
    )
}

//lisnews => Stack
const NaStackListNew = () => {
    return(
      <Stack.Navigator initialRouteName='listnew' screenOptions={{headerShown: false}}>
        <Stack.Screen name='listnew' component={ListNew}/>
        <Stack.Screen name='newdetail' component={NewDetail}/>
      </Stack.Navigator>
    )
  }

//content app => Tab
const Tab = createBottomTabNavigator()
const Main = () =>{
    return(
        <Tab.Navigator initialRouteName='NaStackListNew'
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'NaStackListNew') {
            iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'PostNew') {
            iconName = focused ? 'md-brush' : 'md-brush-outline';
            } else if (route.name === 'ListNewsMe') {
            iconName = focused ? 'ios-bookmark' : 'ios-bookmark-outline';
            } else if (route.name === 'Profille') {
                iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1877F2',
        tabBarInactiveTintColor: '#4E4B66',
        headerShown: false
        })}
    >
            <Tab.Screen name='NaStackListNew' component={NaStackListNew} options={{title: "Home"}}/>
            <Tab.Screen name='PostNew' component={PostNew} options={{title: "PostNews"}}/>
            <Tab.Screen name='ListNewsMe' component={ListNewsMe}/>
            <Tab.Screen name='Profille' component={Profille} options={{title: "Profile"}}/>
        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    const {islogin} = useContext(IntentContext);
  return (
    <>
      {
        islogin == false ? <Users/> : <Main/>
      }
    </>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})