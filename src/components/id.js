import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const IDCard = () => {
  const idData = {
    issueDate: '01/01/2023',
    expiryDate: '01/01/2028',
    gender: 'Male',
    randomNum: '12345',
    dateOfBirth: '05/15/1990',
    lastName: 'Doe',
    firstName: 'John',
    picture: require('../images/1.jpeg'), // Replace with your actual image path
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text2}>Driver's License</Text>
        <View style={styles.horizontalLine}></View>
       <View style={{ flexDirection: 'row'}}>
       <View style={styles.leftColumn}>
          <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/virtu-drive.appspot.com/o/kerfin7_nea_3134.jpg?alt=media&token=677035f4-1d7c-4eaf-b1b1-bb2917f55ddd&_gl=1*1aa9fu9*_ga*MjA3NDAwOTc1LjE2OTYwOTk2MDg.*_ga_CW55HF8NVT*MTY5OTA0NjgyNS4yNS4xLjE2OTkwNDg1NzIuNjAuMC4w'}} style={styles.profilePicture} />
        </View>
        <View style={styles.rightColumn}>
          <Text>Iss: {idData.issueDate}</Text>
          <Text>Exp: {idData.expiryDate}</Text>
          <Text>Gender: {idData.gender}</Text>
          <Text>Random Number: {idData.randomNum}</Text>
          <Text>Date of Birth: {idData.dateOfBirth}</Text>
          <Text>Last Name: {idData.lastName}</Text>
          <Text>First Name: {idData.firstName}</Text>
        </View>
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 190,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
    padding: 10
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 5
  },
  rightColumn: {
    flex: 2,
   
  },
  profilePicture: {
    width: 100,
    height: 120,
  },
  horizontalLine: {
      height: 4,
      width: '100%',
      backgroundColor: '#D3D3D3',
      marginTop: 5,
      marginBottom: 5,
  },
  text2: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default IDCard;
