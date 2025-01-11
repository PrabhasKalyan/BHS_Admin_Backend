import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { CheckCircle } from "lucide-react-native";

const Review = ({ investorName = "Valued Investor" }) => {
  return (
    <View style={styles.container}>
      <Animated.View style={styles.card}>
        <View style={styles.innerCard}>
          <View style={styles.iconContainer}>
            <Animated.View style={styles.pulse} />
            <CheckCircle style={styles.icon} size={64} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Welcome, {investorName}!</Text>
          <Text style={styles.subtitle}>
            Thank you for joining our exclusive investment platform.
          </Text>
          <View style={styles.messageBox}>
            <Text style={styles.message}>
              Our expert team is carefully reviewing your profile to ensure the
              best investment experience. We'll reach out to you shortly to
              guide you through the next steps of your financial journey.
            </Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#667eea", // gradient color equivalent
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    transform: [{ scale: 1 }],
  },
  innerCard: {
    padding: 20,
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  pulse: {
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: "#48bb78",
    borderRadius: 40,
    opacity: 0.75,
    animation: "pulse 2s infinite",
  },
  icon: {
    position: "relative",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#c3dafb",
    textAlign: "center",
    marginBottom: 16,
  },
  messageBox: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 16,
    padding: 16,
  },
  message: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 20,
    textAlign: "center",
  },
});

export default Review;
