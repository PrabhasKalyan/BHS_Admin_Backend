import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

type InvestmentData = {
  [key: string]: string;
};

const Investment: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [investment, setInvestment] = useState<InvestmentData>({
    "Investment ID": "INV001",
    "Investor Name": "Deepak Bhagchandani",
    "Investor ID": "I1",
    Amount: "50000",
    ROI: "10096",
    Contract: "contract_INV001.pdf",
    "Deposit Date": "2022-01-15",
    "Maturity Date": "2023-01-15",
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (field: string, value: string) => {
    setInvestment((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved investment details:", investment);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Investment</Text>

        <View style={styles.investmentDetails}>
          {Object.entries(investment).map(([fieldKey, fieldValue]) => (
            <View key={fieldKey} style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>{fieldKey}</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={fieldValue}
                  onChangeText={(value) => handleChange(fieldKey, value)}
                />
              ) : (
                <Text style={styles.fieldValue}>{fieldValue}</Text>
              )}
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>
              {isEditing ? "Cancel" : "Edit"}
            </Text>
          </TouchableOpacity>
          {isEditing && (
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#322323",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF9321",
    marginBottom: 16,
  },
  investmentDetails: {
    width: "100%",
    backgroundColor: "#493939",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF9321",
  },
  fieldValue: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 8,
  },
  input: {
    fontSize: 16,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FF9321",
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
    backgroundColor: "#322323",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    backgroundColor: "#FF9321",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#322323",
  },
});

export default Investment;
