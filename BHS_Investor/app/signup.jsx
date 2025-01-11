// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ActivityIndicator,
//   ScrollView,
// } from 'react-native';
// import { Animated } from 'react-native';
// import { useEffect } from 'react';
// import { Picker } from '@react-native-picker/picker';


// export const InvestorSignup = () => {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     userType: 'Individual',
//     phonenumber: '',
//     email: '',
//     password: '',
//     address: '',
//     dob: '',
//   });
//   const [validationErrors, setValidationErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [fadeAnim] = useState(new Animated.Value(0));

//   const handleChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSignupSubmit = () => {
//     // Form submission logic
//     setLoading(true);
//     setTimeout(() => setLoading(false), 1000); // Simulate registration process
//   };

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Animated.View
//         style={{
//           ...styles.card,
//           opacity: fadeAnim,
//           transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [-20, 0] }) }],
//         }}
//       >
//         {/* Left Section */}
//         <View style={styles.leftSection}>
//           <Text style={styles.title}>Welcome to</Text>
//           <Text style={styles.subtitle}>Bhavya Haulage Services</Text>
//           <Image source={require('../assets/logo/logo_bhavya.png')} style={styles.logo} />
//         </View>

//         {/* Right Section */}
//         <View style={styles.rightSection}>
//           <Text style={styles.formTitle}>Investor's Signup</Text>
//           <View style={styles.form}>
//             {/* Name Input */}
//             <TextInput
//               placeholder="Enter your full name"
//               style={styles.input}
//               value={formData.name}
//               onChangeText={(text) => handleChange('name', text)}
//             />
//             {/* User Type Picker */}
//              <Picker
//               selectedValue={formData.userType}
//               onValueChange={(value) => handleChange('userType', value)}
//               style={styles.picker}
//             >
//               <Picker.Item label="Individual" value="Individual" />
//               <Picker.Item label="Company" value="Company" />
//             </Picker> 

//             {/* Phone Input */}
//             <TextInput
//               placeholder="Enter phone number"
//               style={styles.input}
//               value={formData.phone}
//               keyboardType="phone-pad"
//               onChangeText={(text) => handleChange('phone', text)}
//             />

//             {/* Email Input */}
//             <TextInput
//               placeholder="Enter your email address"
//               style={styles.input}
//               value={formData.email}
//               keyboardType="email-address"
//               onChangeText={(text) => handleChange('email', text)}
//             />

//             {/* Password Input */}
//             <TextInput
//               placeholder="Enter password (min. 7 characters)"
//               style={styles.input}
//               secureTextEntry
//               value={formData.password}
//               onChangeText={(text) => handleChange('password', text)}
//             />

//             {/* Address Input */}
//             <TextInput
//               placeholder="Enter your full address"
//               style={styles.input}
//               value={formData.address}
//               onChangeText={(text) => handleChange('address', text)}
//             />

//             {/* DOB Input */}
//             <TextInput
//               placeholder="Date of Birth (YYYY-MM-DD)"
//               style={styles.input}
//               value={formData.DOB}
//               onChangeText={(text) => handleChange('DOB', text)}
//             />

//             {/* Submit Button */}
//             <TouchableOpacity
//               style={[styles.button, loading && styles.buttonDisabled]}
//               onPress={handleSignupSubmit}
//               disabled={loading}
//             >
//               {loading ? (
//                 <ActivityIndicator size="small" color="#FFF" />
//               ) : (
//                 <Text style={styles.buttonText}>Register ➤</Text>
//               )}
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.loginLink}>
//             Already have an account?{' '}
//             <Text style={styles.link} onPress={() => console.log('Navigate to login')}>
//               Login here
//             </Text>
//           </Text>
//         </View>
//       </Animated.View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#322323',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   card: {
//     backgroundColor: '#493939',
//     borderRadius: 20,
//     padding: 16,
//     width: '100%',
//     maxWidth: 400,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   leftSection: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFF',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#FF9321',
//     marginBottom: 16,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//   },
//   rightSection: {
//     width: '100%',
//   },
//   formTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   form: {
//     width: '100%',
//   },
//   input: {
//     backgroundColor: '#FFF',
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#FF9321',
//   },
//   picker: {
//     backgroundColor: '#FFF',
//     marginBottom: 12,
//     padding: 12,
//     borderWidth: 1,
//     borderColor: '#FF9321',
//     borderRadius: 10,
//   },
//   button: {
//     backgroundColor: '#FF9321',
//     padding: 12,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   buttonDisabled: {
//     backgroundColor: '#e6811e',
//     opacity: 0.5,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   loginLink: {
//     marginTop: 16,
//     color: '#CCC',
//     textAlign: 'center',
//   },
//   link: {
//     color: '#FF9321',
//     fontWeight: 'bold',
//   },
// });

// export default InvestorSignup;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from "axios";

export const InvestorSignup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    userType: 'Individual',
    phonenumber: '',
    email: '',
    password: '',
    address: '',
    dob: '',
    username:'user123'
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  
  axios.defaults.baseURL = 'http://127.0.0.1:8000';

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupSubmit = async () => {
    setLoading(true);
    try {
      // Assuming you have an endpoint `/api/investor/signup/` on your backend
      const response = await axios.post("/api/v1/signup/",formData)

      const result = await response.json();
      if (response.ok) {
        // Handle successful registration, maybe navigate or show success message
        console.log('Registration successful:', response);
      } else {
        // Handle errors from the backend
        setValidationErrors(result.errors || {});
      }
    } catch (error) {
      console.error('Error during signup:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View
        style={{
          ...styles.card,
          opacity: fadeAnim,
          transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [-20, 0] }) }],
        }}
      >
        {/* Left Section */}
        <View style={styles.leftSection}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.subtitle}>Bhavya Haulage Services</Text>
          <Image source={require('../assets/logo/logo_bhavya.png')} style={styles.logo} />
        </View>

        {/* Right Section */}
        <View style={styles.rightSection}>
          <Text style={styles.formTitle}>Investor's Signup</Text>
          <View style={styles.form}>
            {/* Name Input */}
            <TextInput
              placeholder="Enter your full name"
              style={styles.input}
              value={formData.first_name}
              onChangeText={(text) => handleChange('first_name', text)}
            />
            {/* User Type Picker */}
            <Picker
              selectedValue={formData.userType}
              onValueChange={(value) => handleChange('userType', value)}
              style={styles.picker}
            >
              <Picker.Item label="Individual" value="Individual" />
              <Picker.Item label="Company" value="Company" />
            </Picker>

            {/* Phone Input */}
            <TextInput
              placeholder="Enter phone number"
              style={styles.input}
              value={formData.phonenumber}
              keyboardType="phone-pad"
              onChangeText={(text) => handleChange('phonenumber', text)}
            />

            {/* Email Input */}
            <TextInput
              placeholder="Enter your email address"
              style={styles.input}
              value={formData.email}
              keyboardType="email-address"
              onChangeText={(text) => handleChange('email', text)}
            />

            {/* Password Input */}
            <TextInput
              placeholder="Enter password (min. 8 characters)"
              style={styles.input}
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => handleChange('password', text)}
            />

            {/* Address Input */}
            <TextInput
              placeholder="Enter your full address"
              style={styles.input}
              value={formData.address}
              onChangeText={(text) => handleChange('address', text)}
            />

            {/* DOB Input */}
            <TextInput
              placeholder="Date of Birth (YYYY-MM-DD)"
              style={styles.input}
              value={formData.dob}
              onChangeText={(text) => handleChange('dob', text)}
            />

            {/* Submit Button */}
            <TouchableOpacity
              style={[styles.button, loading && styles.buttonDisabled]}
              onPress={handleSignupSubmit}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text style={styles.buttonText}>Register ➤</Text>
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.loginLink}>
            Already have an account?{' '}
            <Text style={styles.link} onPress={() => console.log('Navigate to login')}>
              Login here
            </Text>
          </Text>
        </View>
      </Animated.View>
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
    borderRadius: 20,
    padding: 16,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  leftSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FF9321',
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  rightSection: {
    width: '100%',
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FF9321',
  },
  picker: {
    backgroundColor: '#FFF',
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#FF9321',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FF9321',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#e6811e',
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 16,
    color: '#CCC',
    textAlign: 'center',
  },
  link: {
    color: '#FF9321',
    fontWeight: 'bold',
  },
});


export default InvestorSignup;
