import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { MotiView } from 'moti';
import axios from 'axios';

const LoginScreen = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  axios.defaults.baseURL = 'http://127.0.0.1:8000';

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/v1/token/", formData);

      const token = response.data["access"];
      localStorage.setItem("investorToken", token);
      console.log(localStorage.getItem("investorToken"));

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      // Handle error case if request fails
      setLoading(false);
      setError('Invalid email or password');
      console.error(error); // Log the error for debugging
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 500 }}
        style={styles.card}
      >
        {/* Left Section */}
        <View style={styles.leftSection}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Image
            source={require('../assets/logo/logo_bhavya.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.companyName}>Bhavya Haulage Services</Text>
        </View>

        {/* Right Section: Login Form */}
        {step === 1 && (
          <MotiView
            from={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 500, delay: 200 }}
            style={styles.formContainer}
          >
            <Text style={styles.formTitle}>Investor's Login</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email ID</Text>
              <TextInput
                value={formData.username}
                onChangeText={(value) => handleChange('username', value)}
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                value={formData.password}
                onChangeText={(value) => handleChange('password', value)}
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                placeholderTextColor="#999"
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLoginSubmit}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? 'Logging in...' : 'Login'}
              </Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Don't have an account?{' '}
              <Text style={styles.signUpLink} onPress={() => console.log('Navigate to Sign Up')}>
                Sign up here
              </Text>
            </Text>
          </MotiView>
        )}
      </MotiView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#322323',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#493939',
    borderRadius: 24,
    padding: 16,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  leftSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginVertical: 16,
  },
  companyName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FF9321',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#392929',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    maxWidth: 400,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  errorText: {
    color: '#f00',
    textAlign: 'center',
    marginBottom: 8,
  },
  inputGroup: {
    marginBottom: 12,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#FF9321',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 16,
  },
  signUpLink: {
    color: '#FF9321',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
