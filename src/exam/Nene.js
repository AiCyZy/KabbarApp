import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const Nene = () => {
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 20}}>
        <Text style={styles.txt2}>Explore</Text>
        <Text style={styles.txt3}>Search for a pet</Text>
      </View>
      <View style={styles.head2}>
        <TextInput style={styles.txtinput} placeholder='Tìm Kiếm'/>
      </View>
      <View style={styles.viewanimo}>
        <TouchableOpacity style={styles.animo}>
          <Text style={styles.txtanimo}>Cats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.animo, {backgroundColor: '#FFB228'}]}>
          <Text style={styles.txtanimo}>Dogs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.animo}>
          <Text style={styles.txtanimo}>Birds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.animo}>
          <Text style={styles.txtanimo}>Others</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image style={styles.contentimg} source={require('../asm/img/avatar.png')}/>
        <View>
        <View style={styles.content1}>
          <Text>CoCo</Text>
          <Text>Female</Text>
        </View>
        <View style={styles.content2}>
          <View>
            <Text>Coat</Text>
            <Text>Medium</Text>
          </View>
          <View>
            <Text>Origin</Text>
            <Text>Canada</Text>
          </View>
        </View>
        <View style={styles.content3}>
        <View>
            <Text>Age</Text>
            <Text>3yrs</Text>
          </View>
          <View>
            <Text>Weight</Text>
            <Text>4 pounds</Text>
          </View>
        </View>
        </View>
      </View>
    </View>
  )
}

export default Nene

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#df0054'
    },
    head:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headtxt:{
        fontSize: 16,
        color: 'black',
    },
    headimg:{
        position: 'absolute',
        top: 2,
        right: 10
    },
    txt2:{
        fontSize: 20,
        color: 'white',
        fontWeight: '800',
        fontSize: 25
    },
    txt3:{
      color: 'white',
      fontSize: 22
    },
    head2:{
        marginTop: 20,
        alignItems: 'center'
    },
    txtinput: {
        borderWidth: 0.2,
        width: 313,
        borderRadius: 25,
        backgroundColor: 'white',
    },
    viewanimo:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 13
    },
    animo:{
      width: 50,
      height:50,
      backgroundColor: '#E5E5E5',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6
    },
    txtanimo: {
      color: 'white'
    },
    content:{
      flexDirection: 'row'
    },
    content1:{
      flexDirection: 'row',
      margin: 10
    },content2:{
      margin: 10,
      flexDirection: 'row'
    },
    content3: {
      margin: 10,
      flexDirection: 'row'
    },
    contentimg: {
      width: 173,
      width: 173
    }
})