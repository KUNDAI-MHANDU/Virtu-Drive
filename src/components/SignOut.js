import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import { auth } from '../../Config';
import { useNavigation } from '@react-navigation/native'

const SignOutScreen = () => {
    const navigation = useNavigation();
  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user
      console.log('User signed out successfully');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../assets/Animation - 1699213819155.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.title}>Are you sure you want to sign out?</Text>
      <Button
        title="Sign Out"
        buttonStyle={styles.button}
        onPress={handleSignOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    animationContainer: {
      width: 200,
      height: 200,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    button: {
      backgroundColor: '#FF5733',
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 10,
    },
  });

export default SignOutScreen;
