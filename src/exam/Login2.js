import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const Login2 = (props) => {

  const {navigation} = props;
  //chuyển qua dk
  const signin = () =>{
      navigation.navigate('nene');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.imghead} Source={require('../exam/imgg/headimg.png')}/>
      <View style={styles.viewtxtstart}>
        <Text style={styles.txtstart}>Lets Get Started</Text>
      </View>
      <View style={styles.viewtxt}>
        <Text style={styles.txt}>Create An Account</Text>
      </View>
      <View>
        <TextInput style={styles.txtinput} placeholder='Name'/>
        <TextInput style={styles.txtinput} placeholder='Email Address'/>
        <TextInput style={styles.txtinput} placeholder='Password'/>
      </View>
      <View style={styles.viewpress}>
        <TouchableOpacity onPress={signin} style={styles.press}>
          <Text style={styles.txtpress}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login2

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f9a188',
  },
  imghead:{
    width:375,
    height: 370
  },
  txtinput:{
    backgroundColor: '#FFFFFF',
    margin: 14,
    padding: 7,
    height: 52
  },
  viewpress:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  press:{
    width: 228,
    height: 59,
    backgroundColor: '#FF8B6A',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtpress:{
    color: 'white',
    fontSize: 18,
    fontWeight: '700'
  },
  viewtxtstart:{
    alignItems: 'center'
  },
  txtstart:{
    color: 'white',
    fontSize: 24,
    fontWeight:'700'
  },
  txt:{
    fontSize: 22,
    fontWeight: '500',
    color: 'white',
    marginLeft:28 
  }
})