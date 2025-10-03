import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "../css/styleHome.js";
import AlertPopup from "../components/alert.js";
import Menu from "../components/menu.js";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Popup de alerta */}
      <AlertPopup visible={showModal} onClose={() => setShowModal(false)} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>GeAcad</Text>
        <Ionicons name="person-circle-outline" size={28} color="white" />
      </View>

      {/* Saudação */}
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Olá, Ingrid!</Text>
        <Text style={styles.dateText}>terça-feira, 23 de agosto</Text>
      </View>

      {/* Grid de botões */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => setShowModal(true)}>
          <MaterialIcons name="admin-panel-settings" size={32} color="#7b4dff" />
          <Text style={styles.cardText}>Administração</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setShowModal(true)}>
          <Ionicons name="school-outline" size={32} color="#7b4dff" />
          <Text style={styles.cardText}>Acadêmico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setShowModal(true)}>
          <Ionicons name="book-outline" size={32} color="#7b4dff" />
          <Text style={styles.cardText}>Docência</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="people-outline" size={32} color="#7b4dff" />
          <Text style={styles.cardText}>Pessoas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setShowModal(true)}>
          <Ionicons name="document-text-outline" size={32} color="#7b4dff" />
          <Text style={styles.cardText}>Secretaria</Text>
        </TouchableOpacity>
      </View>

      {/* Menu lateral em Modal */}
      <Modal visible={menuVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* Lado esquerdo → Menu */}
          <View style={{ width: "75%", height: "100%" }}>
            <Menu onClose={() => setMenuVisible(false)} />
          </View>

          {/* Lado direito → área escura que fecha o menu */}
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
            onPress={() => setMenuVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
