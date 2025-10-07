import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Menu from "../menu/menu";
import { useRouter } from "expo-router";

type Props = {
  title: string
}

export default function Top({ title }: Props) {

    const [menuVisible, setMenuVisible] = useState(false);
    const router = useRouter();

    return (
        <View>
            <View style={title == "GeAcad" ? styles.headerHome:styles.header}>
                <TouchableOpacity onPress={title == "GeAcad" ? () => setMenuVisible(true): () => router.back()}>
                    {title == "GeAcad" ? 
                        <Ionicons name="menu" size={28} color="white" />:
                        <Ionicons name="arrow-back-circle-outline" size={32} color="#fff" />
                    }
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{title}</Text>
                <Ionicons name="person-circle-outline" size={28} color="white" />
            </View>
            {/* Menu lateral em Modal */}
            <Modal visible={menuVisible} animationType="slide" transparent={true}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    {/* Lado esquerdo → Menu */}
                    <View style={{ width: "75%", height: "100%" }}>
                        <Menu onClose={() => setMenuVisible(false)} />
                    </View>
        
                    {/* Lado direito → área escura que fecha o menu */}
                    <TouchableOpacity style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} onPress={() => setMenuVisible(false)}/>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    headerHome: {
        backgroundColor: "#a056eb",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        height: 170,
    },
    header: {
        backgroundColor: "#a056eb",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        height: 100,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

