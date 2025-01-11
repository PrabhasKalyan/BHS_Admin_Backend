import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

interface Investment {
  id: string;
  InvestmentID: string;
  Amount: string;
  ROI: string;
  InvestmentDate: string;
  MaturityDate: string;
}

const Investments = () => {
  const [investments] = useState<Investment[]>([
    {
      id: "1",
      InvestmentID: "INV001",
      Amount: "$10,000",
      ROI: "5%",
      InvestmentDate: "01/01/2023",
      MaturityDate: "01/01/2026",
    },
    {
      id: "2",
      InvestmentID: "INV002",
      Amount: "$5,000",
      ROI: "4%",
      InvestmentDate: "02/01/2023",
      MaturityDate: "02/01/2025",
    },
    {
      id: "3",
      InvestmentID: "INV003",
      Amount: "$20,000",
      ROI: "6%",
      InvestmentDate: "03/01/2023",
      MaturityDate: "03/01/2027",
    },
  ]);

  const renderInvestmentItem = ({ item }: { item: Investment }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.textBold}>Investment ID: {item.InvestmentID}</Text>
      <Text>Amount: {item.Amount}</Text>
      <Text>ROI: {item.ROI}</Text>
      <Text>Investment Date: {item.InvestmentDate}</Text>
      <Text>Maturity Date: {item.MaturityDate}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Investments</Text>
      <FlatList
        data={investments}
        keyExtractor={(item) => item.id}
        renderItem={renderInvestmentItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#322323",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF9321",
    marginVertical: 20,
  },
  listContainer: {
    paddingBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#FF9321",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  textBold: {
    fontWeight: "bold",
    color: "#FF9321",
  },
});

export default Investments;
