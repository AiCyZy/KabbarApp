import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemListNew = (props) => {
    const {dulieu, navigation} = props;

    const ClickItem = () =>{
        navigation.navigate('newdetail', {id: dulieu._id})
    }

  return (
    <TouchableOpacity onPress={ClickItem}>
        <View style= {styles.container}>
            <Image style={styles.img} source={{uri: dulieu.image}}/>
            <View style={styles.content1}>
                <Text numberOfLines={2} style={styles.texttitle}>{dulieu.name}</Text>
                <Text numberOfLines={2} style={styles.textcontent}>{dulieu.price}</Text>
                {/* <View style={styles.info}>
                    <Image style={styles.imglogo} source={{uri: dulieu.createdBy.avater}}/>
                    <Text numberOfLines={0.1} style={styles.namelogo}>{dulieu.createdBy.name}</Text>
                    <Image style={styles.clock} source={require('../asm/img/clock.png')}/>
                    <Text style={styles.time}>{dulieu.createdAt}</Text>
                </View> */}
            </View>
        </View>
    </TouchableOpacity>
    
  )
}

export default ItemListNew

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 32
    },
    img : {
        width: 94,
        height: 94,
        borderRadius: 6
    },
    texttitle:{
        fontSize: 13,
        color: '#4E4B66',
        marginLeft: 5
    },
    textcontent:{
        fontSize: 17,
        color:'#000000',
        marginLeft: 5,
        marginTop: 5,
    },
    info:{
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center'
    },
    imglogo:{
        width: 20,
        height: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    namelogo:{
        fontSize: 13,
        fontWeight: '600',
        color: '#4E4B66',
        marginRight: 9.5
    },
    clock:{
        width: 11,
        height: 11,
        marginRight: 5
    },
    time:{
        fontSize: 13,
        color: '#4E4B66',
    },
    content1:{
        width: Dimensions.get('window').width - 140
    }
})