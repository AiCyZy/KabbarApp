import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const XoSoKienThiet = () => {
    const [soDuDoan, setsoDuDoan] = useState(-1);
    const [result, setresult] = useState('Kết quả sẽ hiển thị ở đây!');
    
    const DuDoan = () => {
        let numRand = Math.floor(Math.random() * 100) + 1;
        // console.log(numRand);
        if(soDuDoan == numRand){
            setresult('Bạn đã đoán chính xác số '+ numRand);
        }else{
            setresult('Rất tiếc. Bạn đoán sai mất rồi! '+ numRand);
        }
    }
  return (
    <View style = {{padding: 20}}>
      <Text style = {styles.textTitle}>Xổ Số Kiến Thiết</Text>

      <Text style = {styles.textTitle2}>Nhập một số từ 1 đến 100</Text>

      <TextInput onChangeText={newText => setsoDuDoan(newText)} placeholder='Nhập 1 số' style = {styles.textInput1}/>
        <Pressable onPress={DuDoan}>
            <Text style = {styles.press_text}>Quay Số</Text>
        </Pressable>
        <Text style = {styles.press_text2}>{result}</Text>
    </View>
  )
}

export default XoSoKienThiet

const styles = StyleSheet.create({
  textTitle: {
    color: 'blue', 
    fontSize: 40, 
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  textTitle2: {
    color: 'green', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 20,
  },
  textInput1: {
    borderWidth : 2, 
      paddingLeft: 10, 
      marginTop: 10, 
      fontSize : 20, 
      borderRadius: 10,
  },
  press_text: {
    padding: 10, textAlign: 'center', backgroundColor: 'blue', 
    borderRadius: 20, fontSize: 30, fontWeight: 'bold', 
    marginTop: 10, color: 'white'
  },
  press_text2: {
    textAlign: 'center', marginTop: 5,
    fontSize: 18, color: 'red',
  }
  
})