import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home(){
    const [name, setName] = useState('');
    const [profissao, setProfissao] = useState('');
    return (
        <View style={styles.body}>
            <TextInput 
            placeholder = "Digite seu nome:"
            onChangeText = {setName}
            />
            <TextInput 
            placeholder = "Digite sua Profissao:"
            onChangeText = {setProfissao}
            />
            <Text style={styles.title}>
                Qual seu nome: {name}
            </Text>
             <Text style={styles.title}>
                Qual sua profissão? {profissao}
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