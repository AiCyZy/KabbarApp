import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import React, {useContext} from 'react'
import { IntentContext } from '../Context/IntentContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './AxiosIntance'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profille = () => {
    const {setIslogin, setInfouser} = useContext(IntentContext)

    const Logout = async ()=>{
        setIslogin(false)
        setInfouser("")
        await AsyncStorage.setItem("token", "")
    }

    const {infouser} = useContext(IntentContext)

    const Capture =async ()=>{
        const result = await launchCamera()
        
        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image1.jpg'
        });

        const respone = await AxiosIntance("multipart/form-data").
        post("/media/upload", formdata)

        setInfouser({...infouser, avatar: respone.data.path})
    }

    const ImageLibrary = async () =>{
        const result = await launchImageLibrary();
        

        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image1.jpg'
        });

        const respone = await AxiosIntance("multipart/form-data").post("/media/upload", 
        formdata)

        setInfouser({...infouser, avatar: respone.data.path})
        
    }

    const UpdateProfile= async() => {
        const respone = await AxiosIntance().post("/users/update-profile", 
        {name: infouser.name, 
            dob: infouser.dob, 
            address: infouser.address, 
            phone: infouser.phone, 
            avatar: infouser.avatar})

            if(respone.error ==false){
                ToastAndroid.show('Cập nhật thành công', ToastAndroid.SHORT)
            }else{
                ToastAndroid.show('Cập nhật thất bại', ToastAndroid.SHORT)
            }
    }

  return (
    <View style={styles.container}>
        <View style={styles.viewFill}>
            {/* <Image style={styles.viewarrow} source={require('../asm/img/arrow.png')}/> */}
            <Text style={styles.viewtextfill}>Fill your Profile</Text>
        </View>
        <TouchableOpacity style={styles.viewimg} onPress={Capture}>
            {
                infouser.avatar == "" ?
                <Image style={styles.img} source={require('../asm/img/Ellipse13.png')}/>
                :
                <Image style={styles.img} source={{uri: infouser.avatar}}/>
            }
            <Image style={styles.imgcamera} source={require('../asm/img/camera.png')}/>
        </TouchableOpacity>

        <Pressable style={styles.pressimg} onPress={Capture}>
            <Text style={styles.prestxt}>Chụp Ảnh</Text>
        </Pressable>
        <Pressable style={styles.pressimg} onPress={ImageLibrary}>
            <Text style={styles.prestxt}>Chọn Ảnh</Text>
        </Pressable>
        <ScrollView>
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.textinput} value={infouser.name} onChangeText={(textname) => setInfouser({...infouser, name: textname})}/>
            <Text style={styles.text}>Date Of Birth</Text>
            <TextInput style={styles.textinput} value={infouser.dob} onChangeText={(textdob) => setInfouser({...infouser, dob: textdob})}/>
            <Text style={styles.text}>Email Address{<Text style = {{color:'red'}}>*</Text>}</Text>
            <TextInput style={styles.textinput} value={infouser.address} onChangeText={(textaddress) => setInfouser({...infouser, address: textaddress})}/>
            <Text style={styles.text}>Phone Number{<Text style = {{color:'red'}}>*</Text>}</Text>
            <TextInput style={styles.textinput} value={infouser.phone} onChangeText={(textphone) => setInfouser({...infouser, phone: textphone})}/>
        </ScrollView>
        
        <View style={styles.viewpress}>
            <Pressable style= {styles.press} onPress={UpdateProfile}>
                <Text style={styles.presstext}>Update</Text>
            </Pressable>
        </View>
        <View style={styles.logout}>
            <Pressable style= {styles.press} onPress={Logout}>
                <Text style={styles.presstext}>Log Out</Text>
            </Pressable>
        </View>
        
    </View>
  )
}

export default Profille

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginStart: 24,
        marginEnd: 24
    },
    viewFill:{
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewarrow:{
        position: 'absolute',
        left: 5
    }, viewtextfill:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16
    },
    viewimg:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center'
    },
    img:{
        width: 120,
        height: 120,
        borderRadius: 60
    },
    imgcamera:{
        position: 'absolute',
        right: 120,
        width: 30,
        height: 30,
        top: 90
    },
    text:{
        fontSize: 14,
        fontFamily: 'Poppnis',
        marginTop: 15
    },
    textinput:{
        height: 48,
        borderRadius: 6,
        borderWidth: 1,
    }, 
    viewpress: {
        marginTop: 15
    },
    press:{
        backgroundColor: '#1877F2',
        height: 35,
        width: 350,
        borderWidth: 1, 
        borderRadius: 6,
        justifyContent: 'center',
        alignItems:'center',
    }, 
    presstext:{
        color: 'white',
        fontWeight: '600',
        fontSize: 16
    },
    logout: {
        marginTop: 20,
        marginBottom: 10
    },
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