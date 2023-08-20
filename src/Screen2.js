import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Screen2 = (props) => {
    const {navigation, route} = props;
    const {params} = route;
    
    const Clickdi = () => {
        navigation.navigate('Screen1')
    }
  return (
    <View>
      <Text>Screen 2</Text>

      <Text>{params?.name}</Text>

      <Pressable style={styles.press} onPress ={Clickdi}>
        <Text style={styles.text}>Go to Screen 1</Text>
      </Pressable>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    press:{
        height: 20,
        borderRadius: 9,
        backgroundColor: 'green',
    },
    text :{
        color: 'white',
        marginLeft: 10
    }
})