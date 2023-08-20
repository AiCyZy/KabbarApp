import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const TinhToan = () => {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(1);
    const [result, setresult] = useState(3);

    const luaChon = (isChoose) => {
        let tong = num1 + num2;


        if((tong == result && isChoose == true) || (tong != result && isChoose == false)){
            alert('Bạn đã chọn đúng');
            setnum1(Math.floor(Math.random() * 10));
        setnum2(Math.floor(Math.random() * 10));
        setresult(Math.floor(Math.random() * 10));
        }else{
            alert('Bạn đã chọn sai');
        }
        
    }
  return (
    <View style = {{margin: 10}}>
      <Text style={styles.textTilte}>Bạn Giỏi Phép Cộng</Text>
        <Text style = {styles.textNum}>{num1} + {num2}</Text>
        <Text style = {styles.textNum}>=</Text>
        <Text style = {styles.textNum}>{result}</Text>
        <Pressable onPress={() => luaChon(true)} style = {styles.press_yes}>
            <Text style = {styles.press_text}>Đúng</Text>
        </Pressable>
        <Pressable onPress={() => luaChon(false)} style = {styles.press_no}>
            <Text style = {styles.press_text}>Sai</Text>
        </Pressable>

    </View>
  )
}

export default TinhToan

const styles = StyleSheet.create({
  textTilte: {
    color: 'red', fontWeight: 'bold', textAlign: 'center', fontSize: 40,
  },
  textNum: {
    color: 'blue', 
    fontWeight: 'bold', 
    fontSize: 50, 
    textAlign: 'center',
  },
  press_yes: {
    borderWidth: 0, padding: 10, backgroundColor: 'blue', borderRadius: 10,
  },
  press_no: {
    borderWidth: 0, padding: 10, backgroundColor: 'gray', marginTop: 10, borderRadius: 10,
  },
  press_text: {
    color: 'white', 
    textAlign: 'center',
    fontSize: 20, 
    fontWeight: 'bold',
  }
})