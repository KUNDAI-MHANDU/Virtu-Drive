import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import Card from "../../constants/Card";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from 'react-redux';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Config";

export default function Bottom() {

  const [date, setDate] = useState('');
  const [date2, setDate2] = useState('');

  const { email } = useSelector(state => state.userReducer);

  (async function() {
    try {
      const docRef = doc(db, "Users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()){
        const userData = docSnap.data();
        setDate(userData.DL_Expire);
        setDate2(userData.LD_Expire);
      }
    } catch (error) {

    }
  })();

  return (
    <View style={styles.bottomContainer}>
      <Text style={{ fontSize: 20, color: Colors.white, fontWeight: "bold", marginTop: 70 }}>
        Driving License                 License Disc
      </Text>

      <View style={styles.completeContainer}>
        <Card
          icon={
            <FontAwesome
              name="user"
              size={24}
              color={Colors.primary}
            />
          }
          cardTextOne={date}
          cardText="Driving License"
          style={{ backgroundColor: Colors.primary}}
        />
        <Card
          icon={
            <FontAwesome name="car" size={24} color={Colors.secondary} />
          }
          cardTextOne={date2}
          cardText="Lisence Disc"
          style={{ backgroundColor: Colors.secondary }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    marginTop: Sizes.medium,
  },
  completeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Sizes.xs,
  },
  card: {
    backgroundColor: Colors.secondary,
  },
  bottomSection: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Sizes.medium,
  },
  bottomSectionText: {
    fontWeight: "bold",
    fontSize: Sizes.smedium,
    color: Colors.darkGray,
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: Colors.darkGray,
  }
});
