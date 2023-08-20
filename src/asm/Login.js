import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid } from 'react-native'
import React, {useContext, useState} from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from '@react-native-community/checkbox';
import AxiosIntance from './AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IntentContext } from '../Context/IntentContext';

const Login = (props) => {

    const {navigation} = props;
    //chuyển qua dk
    const signup = () =>{
        navigation.navigate('register');
    }
    //usestate đăng nhập
    const [emailuser, setEmailuser] = useState("");
    const [passworduser, setPassworduser] = useState("");

    const {setIslogin, setInfouser} = useContext(IntentContext)

    //đăng nhập nè
    const login = async () => {
        try {
            const response = await AxiosIntance()
            .post("user/login", {email: emailuser, password: passworduser});//auth/login
            if(response.result == true){
                // console.log(response.data.token);
                // await AsyncStorage.setItem("token", response.data.token);
                ToastAndroid.show("Đăng nhập ok", ToastAndroid.SHORT);
                setInfouser(response.user)
                setIslogin(true) 
            }else{
                ToastAndroid.show("Đăng nhập không ok", ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log(error);
        }
        return false;
    }

  return (
    <View style={stylet.container}>
      <Text style={[stylet.textHello, {marginTop: 20}]}>Hello</Text>
      <Text style={[stylet.textHello, {color: '#1877F2'}]}>Again</Text>
      <Text style={[stylet.textHello, {fontSize: 20},{fontWeight: 'normal'}]}>Welcome back you’ve</Text>
      <Text style={[stylet.textHello, {fontSize: 20},{fontWeight: 'normal'}]}>been missed</Text>
      <Text style={stylet.textuser}>Username{<Text style = {{color:'red'}}>*</Text>}</Text>
      <TextInput style={stylet.textinput} onChangeText={setEmailuser}/>
      <Text style={[stylet.textuser, {marginTop:16}]}>Password{<Text style = {{color:'red'}}>*</Text>}</Text>
      <TextInput secureTextEntry={true} style={stylet.textinput} onChangeText={setPassworduser}/>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style = {{flexDirection: 'row', marginTop: 9}}>
        <View style={stylet.chk}>
            <CheckBox/>
            <Text style = {{color:'#4E4B66'}}>Remeber me</Text>
        </View>
      </View>
      <Text style = {stylet.textforgot}>Forgot the password ?</Text>
      </View>
      <Pressable style= {stylet.btnLogin} onPress={login}>
        <Text style={stylet.textLogin}>Login</Text>
      </Pressable>
      <Text style={stylet.textorLogin}>or continue with</Text>
      <View style ={stylet.viewpress}>
        <Pressable style= {stylet.pressF}>
            <Image source = {require('../asm/img/Icon.png')}/>
            <Text style={stylet.presstextF}>Facebook</Text>
        </Pressable>
        <Pressable style= {stylet.pressF}>
            <Image source = {require('../asm/img/gg.png')}/>
            <Text style={stylet.presstextF}>Google</Text>
        </Pressable>
      </View>
      <Text style ={stylet.textorLogin}>don’t have an account ?</Text>
      <Pressable onPress={signup}>
        <Text style={[stylet.textorLogin, {color: 'blue'}]}>Sign Up</Text>
      </Pressable>
    </View>
  )
}

export default Login

const stylet = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginStart: 25,
        marginEnd: 25
    },
    textHello: {
        fontFamily: 'Poppins',
        fontSize: 48,
        fontWeight: 'bold'
    },
    textuser:{
        fontSize: 14,
        fontFamily: 'Poppnis',
        marginTop: 30
    },
    textinput:{
        height: 48,
        borderRadius: 6,
        borderWidth: 1,
        padding: 10
    }, 
    textforgot:{
        color: '#5890FF',
        marginTop: 9
    }, 
    btnLogin:{
        backgroundColor: '#1877F2',
        height: 50,
        borderWidth: 1,
        marginTop: 16,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin:{
        fontSize: 16,
        fontWeight:'600',
       color: 'white'
    },
    textorLogin:{
        textAlign: 'center', 
        margin: 15,
        color: '#4E4B66'
    },
    viewpress:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pressF:{
        flexDirection: 'row',
        backgroundColor:'#EEF1F4',
        borderRadius: 6,
        justifyContent: 'center',
        width: 164,
        height: 48,
        alignItems: 'center',
    },
    presstextF:{
        fontSize: 16,
        fontWeight: '600',
        color: '#667080', 
        marginStart: 12
    },
    chk:{
        flexDirection: 'row',
        alignItems: 'center',
        top: -2
    }

})