import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home(){
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    //const [imc, setImc] = useState('');
    const at = parseFloat(altura);
    const pe = parseFloat(peso);
    const im = pe / (at*at);

    return (
        <View style={styles.body}>
            <TextInput 
            placeholder = "Digite sua altura:"
            onChangeText = {setAltura}
            />
            <TextInput 
            placeholder = "Digite seu Peso:"
            onChangeText = {setPeso}
            />
            <Text style={styles.title}>
                Sua altura é: {altura}
            </Text>
             <Text style={styles.title}>
                Seu Peso é: {peso}
            </Text>
            <Text style={styles.title}>
                Seu IMC é: {im}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "red",
        padding: "auto"
    },
    title: {
        fontSize: 19
    }
})