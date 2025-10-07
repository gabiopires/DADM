import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import OptionPessoas from "./optionPessoas"
import { TypeAlunos } from "../../components/type"

export default function CardPessoas({ aluno }: { aluno: TypeAlunos }) {

    const optionsName = ["Nome", "Matricula", "CPF", "RG", "Data de Nascimento", "Nacionalidade", "Naturalidade", "Sexo", "Reservista", "Endereço", "Telefone", "E-mail"]
    const [seeOptions, setSeeOptions] = useState(false);
    const [alunoData, setAlunoData] = useState<TypeAlunos>();

    useEffect(() => {
        setAlunoData(aluno)
    }, [aluno]);

    return (
        <View>
            <TouchableOpacity style={styles.card} onPress={()=> setSeeOptions(!seeOptions)}>
                <View style={styles.cardText}>
                    {alunoData?.nome}
                </View>
                <View style={styles.ima}>
                    a
                </View>
            </TouchableOpacity>

            {seeOptions &&
                <View style={styles.cardOpen}>
                    {optionsName.map((o, index)=>(
                        <OptionPessoas key={index} title={o} campo=""/>
                    ))}
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        marginVertical: -10,
        marginTop: 25,
        flexDirection: "row",
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        zIndex: 100,
    },
    cardText: {
        width: "95%",
    },
    ima: {
        width: "20%",
    },
    cardOpen:{
        width: "90%",
        height: 380,
        padding: 20,
        flexWrap: "wrap",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        borderRadius: 12,
    }
});