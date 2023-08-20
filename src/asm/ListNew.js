import { StyleSheet, Text, View, FlatList, Image, ToastAndroid, ActivityIndicatorBase, ActivityIndicator, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import ItemListNew from './ItemListNew'
import axios from 'axios'
import AxiosIntance from './AxiosIntance'

const ListNew = (props) => {

    const {navigation} = props;

    const [product, setProduct]= useState([]);

    const [isloading, setIsloading] = useState(true)
    const [Searchtext, setSearchtext] = useState("")

    useEffect(() => {
        const getNews = async () => {
                const respone = await AxiosIntance().get("/product");
                if(respone.result){
                    setProduct(respone.products);
                    console.log("orrrrrrrrr", respone.products)
                    setIsloading(false)
                } else{
                    ToastAndroid.show("Lấy dữ liệu không ok", ToastAndroid.SHORT)
                }
        }
        getNews();
        
        return ()=>{}
        }, []);


        const Search = async () => {
            setIsloading(true);
            const respone = await AxiosIntance().get("/search/name?keyword=" + Searchtext)

            if(respone.result == true){
                setdata(respone.products);
                setIsloading(false)
            } else{
                ToastAndroid.show("Lấy dữ liệu không ok", ToastAndroid.SHORT)
            }
        }


  return (
    <View style={styles.container}>
        <View>
            <View style={styles.viewlogo}>
                <Image style={styles.imgkabar} source={require('../asm/img/kabar.png')}/>
                <Image source={require('../asm/img/alert.png')}/>
            </View>
            <View style={[styles.viewsearch, {marginBottom: 15}]}>
                <TextInput style={styles.txtsearch} placeholder='Search' onChangeText={setSearchtext}/>
                <TouchableOpacity onPress={Search}>
                    <Image source={require("../asm/img/search.png")}/>
                </TouchableOpacity>
            </View>
            <View style={[styles.viewlogo, {marginBottom: 15}]}>
                <Text style={styles.textlatest}>Latest</Text>
                <Text>See all</Text>
            </View>
        </View>
        {isloading == true ?  (
            <View>
                <ActivityIndicator size='large' color='#1877F2'/>
                <Text style={styles.txtdoad}>Loading...</Text>
            </View>
        ):(
        <View >
            {/* <FlatList 
                data={product}
                renderItem={({item})=> <ItemListNew dulieu={item} navigation = {navigation}/>}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
            /> */}
            <FlatList
            data={ product}
            renderItem={({item}) => <ItemListNew dulieu = {item} navigation = {navigation}/>}
            keyExtractor={item => item}
            />
        </View>
        )}
    </View>
  )
}

export default ListNew

const styles = StyleSheet.create({
    container: {

        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewlogo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginStart: 24,
        marginEnd:24
    },
    imgkabar:{
        width: 99,
        height: 30, 
        marginBottom: 42,
        marginTop: 30
    },
    textlatest:{
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    flatlist:{
        paddingStart: 20,
        paddingEnd: 20
    },
    txtdoad:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 7,
        color: '#667080'
    },
    viewsearch:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginStart: 24,
        marginEnd:24,
    },
    txtsearch:{
        borderWidth: 1,
        width: 275,
        borderRadius: 6,
        padding: 6
    }
})

