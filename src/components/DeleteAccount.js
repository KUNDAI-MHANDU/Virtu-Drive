import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../Config';


const DeleteAccountScreen = () => {

    const navigation = useNavigation();

    const deleteUserAccount = () => {
        const user = auth.currentUser;
    
        if (user !== null) {
            user
                .delete()
                .then(() => {
                    console.log('User account deleted successfully.');
                    navigation.navigate('Login');
                })
                .catch((error) => {
                    console.error('Error deleting user account:', error);
                });
        }
    };
      

  return (
    <View style={styles.container}>
      <Icon name="warning" size={80} color="#FF5733" />
      <Text style={styles.title}>Are you sure you want to delete your account?</Text>
      <Text style={styles.description}>
        Deleting your account will remove all your data permanently.
      </Text>

      <TouchableOpacity style={styles.deleteButton} onPress={deleteUserAccount}>
        <Text style={styles.buttonText}>Delete My Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  deleteButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DeleteAccountScreen;
