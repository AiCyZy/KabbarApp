import { StyleSheet, Text, TextInput, View , Image, Pressable, TouchableOpacity, ScrollView, ToastAndroid} from 'react-native'
import React, {useState} from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './AxiosIntance'

const PostNew = () => {

    const [imgphoto, setImgphoto] = useState(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const Capture =async ()=>{
        const result = await launchCamera()

        //upload ảnh
        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image1.jpg'
        });

        const respone = await AxiosIntance("multipart/form-data").post("/media/upload", formdata)
        if(respone.error ==false){
            setImgphoto(respone.data.path)
            ToastAndroid.show('Upload ảnh thành công', ToastAndroid.SHORT)
        }else{
            ToastAndroid.show('Upload ảnh thất bại', ToastAndroid.SHORT)
        }
    }

    const ImageLibrary = async () =>{
        const result = await launchImageLibrary();
        

        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image1.jpg'
        });

        const respone = await AxiosIntance("multipart/form-data").post("/media/upload", formdata)
        if(respone.error ==false){
            setImgphoto(respone.data.path)
            ToastAndroid.show('Upload ảnh thành công', ToastAndroid.SHORT)
        }else{
            ToastAndroid.show('Upload ảnh thất bại', ToastAndroid.SHORT)
        }
    }

    const Publish = async () => {
        const respone = await AxiosIntance().post("/articles", {title: title, content: content, image:imgphoto})
        if(respone.error ==false){
            setImgphoto(respone.data.path)
            
            ToastAndroid.show('Đăng tin thành công', ToastAndroid.SHORT)
        }else{
            ToastAndroid.show('Đăng tin thất bại', ToastAndroid.SHORT)
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.viewtxtcreate}>
            <Text style={styles.txtcreate}>Create News</Text>
        </View>
      <View style={styles.viewcontent}>
      <View style={styles.viewpress}>
        <Pressable style={styles.pressimg} onPress={Capture}>
            <Text style={styles.prestxt}>Chụp Ảnh</Text>
        </Pressable>
        <Pressable style={styles.pressimg} onPress={ImageLibrary}>
            <Text style={styles.prestxt}>Chọn Ảnh</Text>
        </Pressable>
            <View style={styles.viewimg} >
                <View style={styles.viewtxtaddpohto}>
                    <Text style={styles.txtaddcover}>Add Cover Photo</Text>
                </View>
                <Image style={styles.imgpost} source={{uri: imgphoto}}/>
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.viewtxtinput}>
            <TextInput onChangeText={setTitle} multiline={true} style={styles.inputtitlenew} placeholder='News Title'/>
            <TextInput onChangeText={setContent} multiline={true} style={styles.inputaddnew} placeholder='Add News/Article'/>
        </ScrollView>
        
        
      </View>
      <View style={styles.presspublish}>
            <Pressable style={styles.prespub} onPress={Publish}>
                <Text style={styles.prestxt}>Publish</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default PostNew

const styles = StyleSheet.create({
    container:{
        flex: 2
    },
    viewtxtcreate:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtcreate:{
        color: 'black',
        fontSize: 16,
        margin: 10,
        
    },
    imgpost:{
        width: 370,
        height: 220,
        
    },
    viewimg:{
        marginTop: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        backgroundColor: '#EEF1F4',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    inputtitlenew:{
        fontSize: 24,
        color: '#A0A3BD',
        borderBottomWidth: 1,
        width: 370,
        flexWrap: 'wrap',
        
    },
    viewcontent:{
        alignItems: 'center',
        flex: 1

    },
    inputaddnew:{
        width: 370,
        flexWrap: 'wrap',
    },
    presspublish:{
        height: 50,
        borderWidth: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'grey',
    },
    prespub:{
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1877F2',
        borderRadius: 6
    },
    viewtxtaddpohto:{
        justifyContent: 'center',
        alignItems: 'center',

    }, 
    txtaddcover: {
        position: 'absolute',
        top: 100
    },
    viewtxtinput:{
    }
    ,
    pressimg:{
        height: 26,
        backgroundColor: '#1877F2',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'grey',
        margin: 6,
        marginStart: 30,
        marginEnd: 30,
        borderRadius: 6
    },
    prestxt:{
        color: '#FFFFFF', 
        fontWeight: '600'
    }

})    