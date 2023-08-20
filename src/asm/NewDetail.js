import { ScrollView, StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import AxiosIntance from './AxiosIntance';
import ItemListNew from './ItemListNew';


const NewDetail = props => {

    const {route} = props;
    const {params} = route;
    const [datadetail, setDatadetail] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [imguri, setImguri] = useState("")
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        const getDetail = async () => {
                const respone = await AxiosIntance().get("/product/" + params.id);
                console.log("params: --------", params)
                console.log("resspone: --------", respone)
                if(respone.result == true){
                    setDatadetail(respone.products);
                    setTitle(respone.products.name);
                    setContent(respone.products.price);
                    setImguri(respone.products.image);
                    setIsloading(false)
                } else{
                    ToastAndroid.show("Lấy dữ liệu không ok", ToastAndroid.SHORT)
                }
        }
        getDetail();
        return ()=>{}
        }, []);

  return (
    <View style={styles.container}>
        {isloading == true ? (
            <View>
                <ActivityIndicator size='large' color='#1877F2'/>
                <Text style={styles.txtdoad}>Loading...</Text>
            </View>
            ):(
                <View>
            <View style={styles.viewlogo}>
                <View style={styles.viewlogo}>
                    <Image style={styles.imgavatar} source={require('../asm/img/avatar.png')}/>
                    <View style={styles.info}>
                        <Text style={styles.txtuser}>BHC @@</Text>
                        <Text style={styles.txttime}>14m ago</Text>
                    </View>
                </View>
                <Pressable style={styles.pressfollow}>
                    <Text style={styles.txtfollow}>Following</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.scrollview}>
                <Image style={styles.imgdetail} source={{uri: imguri}}></Image>
                <Text style={styles.loai}>Europe</Text>
                <Text style={styles.txttitle}>{title}</Text>
                <Text style={styles.txtcontent}>{content}</Text>
            {/* <View>
                <Text style={styles.txtnews}>Đọc Thêm Tin Tức</Text>
                {
                    datadetail.map((item) => <ItemListNew key={item._id} dulieu={item}/>)
                }
            </View> */}
            </ScrollView>
            <View style={styles.viewemoji}>
                <View style={styles.emoji}>
                    <Image style={styles.emo} source={require('../asm/img/heart.png')}/>
                    <Text style={styles.txtcmt}>24k</Text>
                    <Image style={styles.emo} source={require('../asm/img/chat.png')}/>
                    <Text style={styles.txtcmt}>1k</Text>
                </View>
                <Image style={styles.bookmark} source={require('../asm/img/bookmark.png')}/>
            </View>
        </View>
        )}
    </View>
    
  )
}

export default NewDetail

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgdetail:{
        width: 370,
        height: 220
    },
    scrollview:{
        paddingStart: 24,
        paddingEnd: 24,
    },
    loai:{
        marginTop: 15,
        fontSize: 14,
        marginBottom: 5
    },
    txttitle:{
        fontSize: 24,
        color:'black',
        fontWeight:'500',
        marginBottom: 16
    },
    txtcontent:{
        fontSize: 16,
        color: '#4E4B66',
        fontWeight: '400'
    },
     viewlogo:{
        flexDirection: 'row',
        marginStart: 10,
        marginEnd: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
     }, 
     pressfollow:{
        width: 100,
        height: 34,
        borderRadius: 6,
        backgroundColor: '#1877F2',
        alignItems: 'center',
        justifyContent:'center'
     },
     txtfollow:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
     },
     imgavatar:{
        width: 50,
        height: 50
     },
     txtuser:{
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
     },
     txttime:{
        color: 'gray',
        fontSize: 14
     },
     info:{
        flexDirection: 'column',
        marginLeft: 5
     },
     viewemoji:{
        height: 58,
        // position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: 24,
        paddingEnd: 24,
        borderWidth: 0.5
     },
     emoji:{
        flexDirection: 'row'
     },
     emo:{
        width: 20,
        height: 18
     },
     txtcmt:{
        fontSize: 16,
        color: '#050505',
        marginRight: 31,
        marginLeft: 6
     },
     txtnews:{
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 10
     }
})

