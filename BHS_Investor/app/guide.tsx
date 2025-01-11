import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronRight,
  Home,
  Map,
  Truck,
  User,
  HelpCircle,
  PhoneCall,
} from "lucide-react-native";

const GuideSection = ({
  title,
  icon,
  content,
  isOpen,
  toggle,
  link,
}: {
  title: string;
  icon: JSX.Element;
  content: string[];
  isOpen: boolean;
  toggle: () => void;
  link: string;
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity onPress={toggle} style={styles.sectionHeader}>
        <View style={styles.sectionHeaderLeft}>
          {icon}
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
        <ChevronRight
          style={[
            styles.chevronIcon,
            isOpen && { transform: [{ rotate: "90deg" }] },
          ]}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.sectionContent}>
          <Text style={styles.sectionDescription}>
            {title} allows you to access the following details:
          </Text>
          {content.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bullet} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => navigation.navigate(link)}
          >
            <Text style={styles.linkButtonText}>Go to {title}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const GuidePage = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const sections = [
    {
      title: "Dashboard",
      icon: <Home color="#FF9321" size={24} />,
      content: [
        "Initial Investment",
        "Current Investment Value",
        "Number of Assets",
        "Ticket Size",
        "Agreed ROI and Lock-In Period",
        "View Contract button",
        "Latest Updates",
        "Number of Trips So Far",
        "Currently Active Trucks",
      ],
      link: "Dashboard",
    },
    {
      title: "Trips",
      icon: <Map color="#FF9321" size={24} />,
      content: [
        "Trip History: value, origin, destination, start date, end date, and calculations for each trip",
      ],
      link: "Trips",
    },
    {
      title: "Assets",
      icon: <Truck color="#FF9321" size={24} />,
      content: [
        "List of your assets",
        "Links to view more details about each asset",
      ],
      link: "Assets",
    },
    {
      title: "Profile",
      icon: <User color="#FF9321" size={24} />,
      content: ["Personal and investment details"],
      link: "Profile",
    },
    {
      title: "Guide",
      icon: <HelpCircle color="#FF9321" size={24} />,
      content: [
        "You're currently reading the guide",
        "Return here anytime for help navigating the website",
      ],
      link: "Guide",
    },
    {
      title: "Contact",
      icon: <PhoneCall color="#FF9321" size={24} />,
      content: ["Customer support details"],
      link: "Contact",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Website Navigation Guide</Text>
        <Text style={styles.headerDescription}>
          Welcome to our investment tracking platform. This guide will help you
          navigate through the various sections of the website.
        </Text>
      </View>
      {sections.map((section, index) => (
        <GuideSection
          key={index}
          {...section}
          isOpen={openSection === index}
          toggle={() =>
            setOpenSection(openSection === index ? null : index)
          }
        />
      ))}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          By following this guide, you should have an easy time managing your
          investments and keeping track of your assets. Happy investing!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#322323",
  },
  headerContainer: {
    marginBottom: 24,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF9321",
    textAlign: "center",
  },
  headerDescription: {
    marginTop: 8,
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  sectionContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#493939",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#3a2a2a",
  },
  sectionHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  chevronIcon: {
    color: "#FF9321",
  },
  sectionContent: {
    padding: 16,
    backgroundColor: "#3a2a2a",
  },
  sectionDescription: {
    fontSize: 16,
    color: "white",
    fontStyle: "italic",
    marginBottom: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF9321",
    marginTop: 6,
    marginRight: 8,
  },
  listText: {
    color: "white",
    fontSize: 14,
  },
  linkButton: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#FF9321",
  },
  linkButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  footerContainer: {
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#493939",
  },
  footerText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});

export default GuidePage;
