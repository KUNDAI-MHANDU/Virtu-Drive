import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const VehicleLicenseApplicationForm = ({navigation}) => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [vehicleRegisterNumber, setVehicleRegisterNumber] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');
  const [make, setMake] = useState('');
  const [seriesName, setSeriesName] = useState('');
  const [natisModelNumber, setNatisModelNumber] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('');
  const [driven, setDriven] = useState('');
  const [identificationType, setIdentificationType] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [countryOfIssue, setCountryOfIssue] = useState('');
  const [gender, setGender] = useState('');
  const [surname, setSurname] = useState('');
  const [initials, setInitials] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [languagePreference, setLanguagePreference] = useState('');
  const [email, setEmail] = useState('');
  const [homePhoneNumber, setHomePhoneNumber] = useState('');
  const [dayPhoneNumber, setDayPhoneNumber] = useState('');
  const [faxNumber, setFaxNumber] = useState('');
  const [cellphoneNumber, setCellphoneNumber] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [suburb, setSuburb] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');

  const handleSubmit = () => {

    navigation.navigate('Upload Documents For Licence Disc');
   
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
        value={surname}
      />

      <Text style={styles.label}>Initials:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInitials(text)}
        value={initials}
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
        value={email}
        keyboardType="email-address"
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

<Text>License Number</Text>
<TextInput
  style={styles.input}
  value={licenseNumber}
  onChangeText={text => setLicenseNumber(text)}
/>

<Text>Vehicle Register Number</Text>
<TextInput
  style={styles.input}
  value={vehicleRegisterNumber}
  onChangeText={text => setVehicleRegisterNumber(text)}
/>

<Text>Chassis Number/VIN</Text>
<TextInput
  style={styles.input}
  value={chassisNumber}
  onChangeText={text => setChassisNumber(text)}
/>

<Text>Make</Text>
<TextInput
  style={styles.input}
  value={make}
  onChangeText={text => setMake(text)}
/>

<Text>Series Name</Text>
<TextInput
  style={styles.input}
  value={seriesName}
  onChangeText={text => setSeriesName(text)}
/>

<Text>NaTIS Model Number</Text>
<TextInput
  style={styles.input}
  value={natisModelNumber}
  onChangeText={text => setNatisModelNumber(text)}
/>

<Text>Vehicle Category</Text>
<Picker
  selectedValue={vehicleCategory}
  style={styles.input}
  onValueChange={(itemValue, itemIndex) => setVehicleCategory(itemValue)}
>
  <Picker.Item label="Motorcycle" value="Motorcycle" />
  <Picker.Item label="Motor Tricycle" value="Motor Tricycle" />
  <Picker.Item label="Motor Quadrucycle" value="Motor Quadrucycle" />
  <Picker.Item label="Light Passenger Vehicle" value="Light Passenger Vehicle" />
  <Picker.Item label="Heavy Passenger Vehicle" value="Heavy Passenger Vehicle" />
  <Picker.Item label="Light Load Vehicle" value="Light Load Vehicle" />
  <Picker.Item label="Heavy Load Vehicle (Not to draw)" value="Heavy Load Vehicle (Not to draw)" />
  <Picker.Item label="Special Vehicle" value="Special Vehicle" />
  <Picker.Item label="Heavy Load Vehicle (Equipped to draw)" value="Heavy Load Vehicle (Equipped to draw)" />
</Picker>

<Text>Driven</Text>
<Picker
  selectedValue={driven}
  style={styles.input}
  onValueChange={(itemValue, itemIndex) => setDriven(itemValue)}
>
  <Picker.Item label="Self-propelled" value="Self-propelled" />
  <Picker.Item label="Trailer (Drawn)" value="Trailer (Drawn)" />
  <Picker.Item label="Semi-trailer" value="Semi-trailer" />
  <Picker.Item label="Trailer Drawn by Tractor" value="Trailer Drawn by Tractor" />
</Picker>

      <View style={{height: 160}}>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
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

export default VehicleLicenseApplicationForm;