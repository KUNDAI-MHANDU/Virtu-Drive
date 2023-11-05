import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/Animation1.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.title}>License & Disc Renewal</Text>
      <Text style={styles.subtitle}>
        Experience hassle-free license and license disc renewal with us. Enjoy a seamless application process.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>SKIP</Text>
          <Ionicons name="play-skip-forward-circle" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Screen3')}>
          <Text style={styles.buttonText}>NEXT</Text>
          <FontAwesome name="arrow-circle-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD3E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  animation: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    color: '#FF1493',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    color: '#FF1493',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
    width: '100%',
  },
  skipButton: {
    backgroundColor: '#FF4081',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#FF4081',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginRight: 10,
    fontSize: 16,
  },
});

export default OnboardingScreen2;
