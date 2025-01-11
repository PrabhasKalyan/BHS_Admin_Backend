import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

interface CardProps {
  children: React.ReactNode;
}

interface ProfileItemProps {
  icon: string;
  label: string;
  value: string | number;
}

interface User {
  name: string;
  phone: number;
  email: string;
  DOB: string;
  address: string;
  gender: string;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <View style={styles.card}>{children}</View>
);

const CardHeader: React.FC<CardProps> = ({ children }) => (
  <View style={styles.cardHeader}>{children}</View>
);

const CardContent: React.FC<CardProps> = ({ children }) => (
  <View style={styles.cardContent}>{children}</View>
);

const ProfileItem: React.FC<ProfileItemProps> = ({ icon, label, value }) => (
  <View style={styles.profileItem}>
    <Icon name={icon} size={20} color="#FF9321" style={styles.icon} />
    <View>
      <Text style={styles.profileLabel}>{label}</Text>
      <Text style={styles.profileValue}>{value}</Text>
    </View>
  </View>
);

const ProfileCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Card>
    <CardHeader>
      <Text style={styles.cardTitle}>{title}</Text>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const user: User = {
  name: "Antariksh",
  phone: 9748794406,
  email: "anta@gmail.com",
  DOB: "10/12/2005",
  address: "Indian Institute of Technology Kharagpur 721302, West Bengal, India",
  gender: "Male",
};

const convertDate = (dateStr: string): string => {
  const [day, month, year] = dateStr.split("/");
  const date = new Date(`${year}-${month}-${day}`);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Profile: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "unnamed.gif" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user.name}</Text>
      </View>

      <View style={styles.profileContent}>
        <ProfileCard title="Personal Information">
          <ProfileItem icon="user" label="Name" value={user.name} />
          <ProfileItem icon="birthday-cake" label="Birthday" value={convertDate(user.DOB)} />
          <ProfileItem icon="user" label="Gender" value={user.gender} />
        </ProfileCard>

        <ProfileCard title="Contact Information">
          <ProfileItem icon="envelope" label="Email" value={user.email} />
          <ProfileItem icon="phone" label="Phone" value={user.phone} />
          <ProfileItem icon="map-marker-alt" label="Address" value={user.address} />
        </ProfileCard>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#322323",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  profileHeader: {
    alignItems: "center",
    backgroundColor: "#FF9321",
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  profileContent: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#493939",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },
  cardHeader: {
    backgroundColor: "#FF9321",
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
  },
  cardContent: {
    padding: 10,
  },
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#666",
  },
  icon: {
    marginRight: 10,
  },
  profileLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  profileValue: {
    fontSize: 14,
    color: "#CCCCCC",
  },
});

export default Profile;
