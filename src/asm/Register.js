import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AxiosIntance from './AxiosIntance';

const Register = (props) => {

    const {navigation} = props;
    //chuyển qua dn
    const signout = () =>{
        navigation.navigate('login')
    }

    //usestate đăng ký
    const [emailuser, setEmailuser] = useState("");
    const [passworduser, setPassworduser] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    const [name, setName] = useState("");

    //hàm đăng ký
    const regis = async () => {
        console.log(emailuser, passworduser)
        try{
            const response = await AxiosIntance()
            .post('user/register', {email: emailuser, password: passworduser, confirm_password: confirm_password, name: name});
            console.log(response);

            if (response.result) {
                ToastAndroid.show("Đăng ký ok", ToastAndroid.SHORT) 
                navigation.navigate('login')
            }else{
                ToastAndroid.show("Đăng Ký Không ok", ToastAndroid.SHORT)
            }
        }catch(e){
            console.log(e)
        }
    }
  return (
      <View style={stylet.container}>
          <Text style={[stylet.textHello, { marginTop: 20 }]}>Hello</Text>
          <Text style={[stylet.textHello, { color: '#1877F2' }]}>Again</Text>
          <Text style={[stylet.textHello, { fontSize: 20 }, { fontWeight: 'normal' }]}>Welcome back you’ve</Text>
          <Text style={[stylet.textHello, { fontSize: 20 }, { fontWeight: 'normal' }]}>been missed</Text>
          <Text style={stylet.textuser}>Username{<Text style={{ color: 'red' }}>*</Text>}</Text>
          <TextInput style={stylet.textinput} onChangeText={setEmailuser} />
          <Text style={[stylet.textuser, { marginTop: 16 }]}>Password{<Text style={{ color: 'red' }}>*</Text>}</Text>
          <TextInput secureTextEntry={true} style={stylet.textinput} onChangeText={setPassworduser} />
          <Text style={[stylet.textuser, { marginTop: 16 }]}>Confirm Password{<Text style={{ color: 'red' }}>*</Text>}</Text>
          <TextInput secureTextEntry={true} style={stylet.textinput} onChangeText={setConfirm_password} />
          <Text style={[stylet.textuser, { marginTop: 16 }]}>Name{<Text style={{ color: 'red' }}>*</Text>}</Text>
          <TextInput secureTextEntry={true} style={stylet.textinput} onChangeText={setName} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginTop: 9 }}>
                  <BouncyCheckbox />
                  <Text style={{ color: '#4E4B66' }}>Remeber me</Text>
              </View>
          </View>
          <Pressable style={stylet.btnLogin} onPress={regis}>
              <Text style={stylet.textLogin}>Register</Text>
          </Pressable>
          <Text style={stylet.textorLogin}>or continue with</Text>
          <View style={stylet.viewpress}>
              <Pressable style={stylet.pressF}>
                  <Image source={require('../asm/img/Icon.png')} />
                  <Text style={stylet.presstextF}>Facebook</Text>
              </Pressable>
              <Pressable style={stylet.pressF}>
                  <Image source={require('../asm/img/gg.png')} />
                  <Text style={stylet.presstextF}>Google</Text>
              </Pressable>
          </View>
          <Text style={stylet.textorLogin}>Already have an account ?</Text>
          <Pressable onPress={signout}>
              <Text style={[stylet.textorLogin, { color: 'blue' }]}>Sign Out</Text>
          </Pressable>
      </View>
  )
}

export default Register

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
    }

})