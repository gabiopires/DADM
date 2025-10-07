import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Top from "../../../components/top/top"
import CardPessoas from "../../../components/compPessoas/cardPessoas"
import { TypeAlunos } from "../../../components/type"
import { getAllAluno } from "../../../api/api"; 

export default function Alunos() {

    const [alunos,setAlunos] = useState<TypeAlunos[]>([]);

    async function getAlunos() {
        try {
            const response = await getAllAluno();
            setAlunos(response.data);
        } catch (error) {
            console.error("Erro ao buscar alunos:", error); 
        }
    }

    useEffect(() => {
        getAlunos();
    }, []);
    
    return (
        <View style={styles.container}>
            <Top title="Alunos"/>
            <View style={styles.grid}>
                {alunos.map((a, index)=>(
                    <CardPessoas key={index} aluno={a}/>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    grid: {
        width: "100%",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",   
        // alignItems: "center",
        marginTop: 20,
        marginLeft: 20,
    },
})
