import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../Config';
import { useSelector } from 'react-redux';

const DriverLicenseForm = ({navigation}) => {
  const [identificationType, setIdentificationType] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [countryOfIssue, setCountryOfIssue] = useState('');
  const [gender, setGender] = useState('');
  const [surname, setSurname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [initials, setInitials] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [languagePreference, setLanguagePreference] = useState('');
  const [email2, setEmail] = useState('');
  const [homePhoneNumber, setHomePhoneNumber] = useState('');
  const [dayPhoneNumber, setDayPhoneNumber] = useState('');
  const [faxNumber, setFaxNumber] = useState('');
  const [cellphoneNumber, setCellphoneNumber] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [suburb, setSuburb] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const { email } = useSelector(state => state.userReducer);



  const handleSubmit = async () => {
    try{
      const userInfo = doc(db, "Users", email);
         // Set the "capital" field of the city 'DC'
      await updateDoc(userInfo, {
          Firstname: firstname,
          Lastname: surname,
          Initials: initials
      });
      console.log('Form Submitted');
      navigation.navigate('Upload Driving Licence Documents');

  } catch (error){
      Alert.alert('Error', error.message);
  }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Type of Identification:</Text>
      <Picker
        selectedValue={identificationType}
        style={styles.input}
        onValueChange={(itemValue) => setIdentificationType(itemValue)}
      >
        <Picker.Item label="Traffic Register No" value="trafficRegisterNo" />
        <Picker.Item label="RSA ID" value="rsaId" />
        <Picker.Item label="Foreign ID" value="foreignId" />
      </Picker>

      <Text style={styles.label}>Identification Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setIdentificationNumber(text)}
        value={identificationNumber}
      />

      {identificationType === 'foreignId' && (
        <View>
          <Text style={styles.label}>Country of Issue:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setCountryOfIssue(text)}
            value={countryOfIssue}
          />
        </View>
      )}

      <Text style={styles.label}>Gender:</Text>
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      <Text style={styles.label}>Surname:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSurname(text)}
      />

        <Text style={styles.label}>Firstname:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFirstname(text)}
      />

      <Text style={styles.label}>Initials:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInitials(text)}
      />

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDateOfBirth(text)}
        value={dateOfBirth}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Official Language of Preference:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setLanguagePreference(text)}
        value={languagePreference}
      />

      <Text style={styles.label}>E-mail Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email2}
        keyboardType="email-address"
        placeholder={email}
      />

      <Text style={styles.label}>Telephone Number at Home:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setHomePhoneNumber(text)}
        value={homePhoneNumber}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Contact Telephone Number during Day:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDayPhoneNumber(text)}
        value={dayPhoneNumber}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Facsimile Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFaxNumber(text)}
        value={faxNumber}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Cellphone Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCellphoneNumber(text)}
        value={cellphoneNumber}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Postal Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPostalAddress(text)}
        value={postalAddress}
      />

      <Text style={styles.label}>Suburb:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSuburb(text)}
        value={suburb}
      />

      <Text style={styles.label}>City/Town:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCity(text)}
        value={city}
      />

      <Text style={styles.label}>Street Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setStreetAddress(text)}
        value={streetAddress}
      />

      <View style={{height: 140}}>
        <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
            <Text style={{color: 'white'}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  Button: {
    backgroundColor: '#1c2732',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10
  }
});

export default DriverLicenseForm;
