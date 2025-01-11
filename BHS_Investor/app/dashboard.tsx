import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const Dashboard: React.FC = () => {
  const mockData = {
    numberOfInvestments: 5,
    unverifiedUsers: 2,
    numberOfAssets: 10,
    numberOfTrips: 8,
    totalInvestedAmount: 1800000,
  };

  const logRows = [
    { time: "08:00", truck: "T-001", location: "Warehouse A", speed: "45 mph", tripNumber: "TR-1001" },
    { time: "09:15", truck: "T-002", location: "Route 66", speed: "55 mph", tripNumber: "TR-1002" },
    { time: "10:30", truck: "T-003", location: "City Center", speed: "30 mph", tripNumber: "TR-1003" },
    { time: "11:45", truck: "T-004", location: "Highway 101", speed: "65 mph", tripNumber: "TR-1004" },
    { time: "13:00", truck: "T-005", location: "Warehouse B", speed: "0 mph", tripNumber: "TR-1005" },
  ];

  const renderCard = (title: string, value: string) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );

  const renderLogItem = ({ item }: { item: any }) => (
    <View style={styles.logRow}>
      <Text style={styles.logText}>{item.time}</Text>
      <Text style={styles.logText}>{item.truck}</Text>
      <Text style={styles.logText}>{item.location}</Text>
      <Text style={styles.logText}>{item.speed}</Text>
      <Text style={styles.logText}>{item.tripNumber}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Investor</Text>
        <Text style={styles.subtext}>Investor ID: N/A</Text>
      </View>

      <View style={styles.cardsContainer}>
        {renderCard("Investments' Value", `AED ${mockData.totalInvestedAmount}`)}
        {renderCard("No. of Investments", `${mockData.numberOfInvestments}`)}
        {renderCard("No. of Assets", `${mockData.numberOfAssets}`)}
        {renderCard("No. of Trips", `${mockData.numberOfTrips}`)}
      </View>

      <Text style={styles.sectionTitle}>Latest Updates</Text>

      <FlatList
        data={logRows}
        renderItem={renderLogItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.logTable}
      />

      <Text style={styles.termsText}>*Terms and Conditions Apply</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#322323",
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF9321",
  },
  subtext: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#493939",
    borderRadius: 8,
    padding: 16,
    width: "48%",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF9321",
    marginVertical: 16,
  },
  logTable: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 8,
    overflow: "hidden",
  },
  logRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
  },
  logText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  termsText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 16,
    textAlign: "center",
  },
});

export default Dashboard;
