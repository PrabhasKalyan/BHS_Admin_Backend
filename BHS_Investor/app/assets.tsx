import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const mockData = [
  {
    id: "1",
    investmentId: "INV1001",
    numberPlate: "ABC1234",
    type: "Truck",
    brand: "Volvo",
    model: "FH16",
  },
  {
    id: "2",
    investmentId: "INV1002",
    numberPlate: "XYZ5678",
    type: "Truck",
    brand: "Mercedes",
    model: "Arocs",
  },
  {
    id: "3",
    investmentId: "INV1003",
    numberPlate: "LMN9101",
    type: "Truck",
    brand: "Toyota",
    model: "Dyna",
  },
  // Add more mock data as required
];

const Assets: React.FC = () => {
  const [assets, setAssets] = useState(mockData);

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>S No: {index + 1}</Text>
        <Text style={styles.text}>Investment ID: {item.investmentId}</Text>
        <Text style={styles.text}>Number Plate: {item.numberPlate}</Text>
        <Text style={styles.text}>Type: {item.type}</Text>
        <Text style={styles.text}>Brand: {item.brand}</Text>
        <Text style={styles.text}>Model: {item.model}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>View Asset</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assets</Text>
      <FlatList
        data={assets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#322323",
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF9321",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#444",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#FF9321",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Assets;
