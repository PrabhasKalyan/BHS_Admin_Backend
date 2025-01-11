import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Map, Phone, Mail } from 'lucide-react-native';

const Contact: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Bhavya</Text>
        <Text style={styles.headerSubtitle}>Haulage Services</Text>
      </View>

      {/* Feature Boxes */}
      <View style={styles.featuresContainer}>
        <FeatureBox icon={<Map size={48} color="#FF9321" />} title="Find Us" content="Office 1420 - JAFZA 1 Tower, P.O. Box 124707 Jebel Ali Freezone, Dubai - U.A.E" />
        <FeatureBox icon={<Phone size={48} color="#FF9321" />} title="Call Us" content="+971 54 402 2577" />
        <FeatureBox icon={<Mail size={48} color="#FF9321" />} title="Mail" content="info@bhavya.ae" />
      </View>

      {/* Contact Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formHeader}>Contact Us!</Text>
        <Text style={styles.formSubtitle}>Fill up the form below to send us a message.</Text>

        <InputField placeholder="Name" />
        <InputField placeholder="Email" keyboardType="email-address" />
        <InputField placeholder="Subject" />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Type your message here..."
          placeholderTextColor="#FFFFFF"
          multiline
          numberOfLines={4}
        />
        <View style={styles.buttonRow}>
          <FormButton label="Send ➤" onPress={() => {}} />
          <FormButton label="Reset" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

const FeatureBox: React.FC<{ icon: JSX.Element; title: string; content: string }> = ({ icon, title, content }) => (
  <View style={styles.featureBox}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureContent}>{content}</Text>
  </View>
);

const InputField: React.FC<{ placeholder: string; keyboardType?: string }> = ({ placeholder, keyboardType }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#FFFFFF"
    keyboardType={keyboardType as any}
  />
);

const FormButton: React.FC<{ label: string; onPress: () => void }> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#322323',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF9321',
  },
  headerSubtitle: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  featuresContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  featureBox: {
    backgroundColor: '#493939',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  featureContent: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  formContainer: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#493939',
    borderRadius: 10,
  },
  formHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF9321',
    textAlign: 'center',
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#322323',
    color: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FF9321',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Contact;
