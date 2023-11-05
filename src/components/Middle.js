import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from 'react-redux';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Config";

export default function Middle() {

  const [username, setUserName] = useState('');

  const { email } = useSelector(state => state.userReducer);

  (async function() {
    try {
      const docRef = doc(db, "Users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()){
        const userData = docSnap.data();
        setUserName(userData.username);
      }
    } catch (error) {

    }
  })();

  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../images/user.jpg")} />
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          {username}
        </Text>
        <Text
          style={{ fontSize: 16, color: Colors.darkGray, fontWeight: "500" }}
        >
          {email}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 5,
  },
  middleSectionTextContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  middleSectionText: {
    justifyContent: "center",
    alignItems: "center",
  },
  toptext: {
    fontSize: 16,
    color:  Colors.white,
    fontWeight: "bold",
  },
  bottomtext: {
    fontSize: 16,
    color: Colors.darkGray,
    fontWeight: "700",
  },
});
