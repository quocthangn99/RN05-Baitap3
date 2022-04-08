import React,{Component} from "react";
import {View, ScrollView, Text, StyleSheet} from "react-native"
export default function App() {
  return(
    <View style={styles.container}>
      <View style={[styles.card, {backgroundColor: "#C9C9FF"}]}>
        <Text style={styles.cardTitle}>Purple: #C9C9FF</Text>
      </View>
      <View style={[styles.card, {backgroundColor: "#3D85C6"}]}>
        <Text style={styles.cardTitle}>Blue: #3D85C6</Text>
      </View>
      <View style={[styles.card, {backgroundColor: "#96CC96"}]}>
        <Text style={styles.cardTitle}>Green: #96CC96</Text>
      </View>
      <View style={[styles.card, {backgroundColor: "#F4B940"}]}>
        <Text style={styles.cardTitle}>Yellow: #F4B940</Text>
      </View>
    </View>
  )
}


// StyleSheet
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: "space-around"
  },

  card: {
    margin: 10,
    height: '20%',
    borderRadius: 8,
    justifyContent: "center"
  },

  cardTitle: {
    color:"black",
    fontWeight:"bold",
    textAlign:"center"
  }

})