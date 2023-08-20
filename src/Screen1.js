import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen1 = (props) => {
    const {navigation} = props;

    const Clickdi = () => {
        navigation.navigate('Screen2', {'name': 'Ng Văn B'})
    }

  return (
    <View>
        <Text>Screen 1</Text>
      <Pressable style={styles.press} onPress={Clickdi}>
        <Text style={styles.text}>Go to Screen 2</Text>
      </Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    press:{
        height: 20,
        borderRadius: 9,
        backgroundColor: 'blue',
    },
    text :{
        color: 'white',
        marginLeft: 10
    }
})