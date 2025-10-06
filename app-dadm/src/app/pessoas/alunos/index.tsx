import { View, StyleSheet } from "react-native";
import Top from "../../../components/top/top"

export default function Alunos() {
    
    return (
        <View style={styles.container}>
            <Top title="Alunos"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    grid: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 25,
        borderColor: "#000",
        borderStyle: "solid",
        marginTop: 20,
    },
})
