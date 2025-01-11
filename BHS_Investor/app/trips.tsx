import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface Trip {
  id: string;
  TripNo: number;
  NumberPlate: string;
  To: string;
  From: string;
  StartDate: string;
  EndDate: string;
}

const Trips = () => {
  // Mock data to simulate trips
  const trips: Trip[] = [
    {
      id: "1",
      TripNo: 1,
      NumberPlate: "ABC1234",
      To: "New York",
      From: "Boston",
      StartDate: "01/01/2024",
      EndDate: "01/02/2024",
    },
    {
      id: "2",
      TripNo: 2,
      NumberPlate: "XYZ5678",
      To: "Los Angeles",
      From: "San Francisco",
      StartDate: "02/01/2024",
      EndDate: "02/02/2024",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trips</Text>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>Trip No: {item.TripNo}</Text>
            <Text style={styles.cell}>Number Plate: {item.NumberPlate}</Text>
            <Text style={styles.cell}>To: {item.To}</Text>
            <Text style={styles.cell}>From: {item.From}</Text>
            <Text style={styles.cell}>Start Date: {item.StartDate}</Text>
            <Text style={styles.cell}>End Date: {item.EndDate}</Text>
          </View>
        )}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF9321",
    textAlign: "center",
    marginBottom: 16,
  },
  row: {
    backgroundColor: "#FF9321",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  cell: {
    fontSize: 16,
    color: "#000",
  },
});

export default Trips;
