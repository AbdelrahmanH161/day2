import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons , AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Cart = () => {


const [cart, setCart] = useState([]);

    useEffect(() =>
    {
        // AsyncStorage.clear()
        // console.log("lkjjkd")
        getStorage()
    }, [])
    async function getStorage()
    {
        var arr = await AsyncStorage.getItem('cart');
        // console.log(arr);
        arr = JSON.parse(arr);
        setCart([...arr]);
    }
    async function add(item)
    {
        var arr = await AsyncStorage.getItem("cart");
        // console.log(arr);
        arr = JSON.parse(arr);
        const indexed = arr.findIndex((x) => x.id === item.id)
        arr[indexed].quantity = arr[indexed].quantity + 1
        const newItem = arr[indexed];
        arr.splice(indexed, 1)
        arr.push(newItem)
        console.log(item)
        console.log("item")
        setCart([...arr]);
        await AsyncStorage.setItem('cart', JSON.stringify(arr))
    }
    async function min(item)
    {
        var arr = await AsyncStorage.getItem("cart");
        // console.log(arr);
        arr = JSON.parse(arr);
        const indexed = arr.findIndex((x) => x.id === item.id)
        arr[indexed].quantity = arr[indexed].quantity - 1;
        const newItem = arr[indexed];
        arr.splice(indexed, 1)
        arr.push(newItem)
        setCart([...arr]);
        await AsyncStorage.setItem('cart', JSON.stringify(arr))
    }
    
    return (
    <FlatList 
    data={cart}
    renderItem={({item})=> <View style={{alignItems:'center',margin:15}}>
    <View style={styles.card}>
    <View style={{alignItems:'center',flexDirection:'row'}}>
        <Image
        style={styles.img}
        source={{uri:item.thumbnail}}/>
        <View style={{alignItems:"center",justifyContent:"space-between",marginHorizontal:50}}>
        <Text>{item.price}</Text>
    </View>
    </View>
    <View style={{flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>add(item)}><Ionicons name="ios-add-circle-outline" size={25} color="#ff7700"/></TouchableOpacity>
            <Text style={{paddingHorizontal:10}}>{item.quantity}</Text>
            <TouchableOpacity onPress={()=>min(item)}><AntDesign name="minuscircle" size={20} color="#ff7700" /></TouchableOpacity></View>
</View></View>}/>
    )
}

export default Cart

const styles = StyleSheet.create({
    card:
    {
        width:"100%",
        backgroundColor:"white",
        elevation:20,
        borderRadius:30,
        height:90,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    img:
    {
        width:80,
        height:80,
        borderRadius:80,
        marginTop:5
    }
})