import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Middle from "../components/Middle";
import Bottom from "../components/Bottom";
import Sizes from "../../constants/Sizes";

export default function Profile() {
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../images/bg.png")}
        // blurRadius={1}
      >
        <View style={styles.container}>
          <Middle />
          <Bottom/>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    marginHorizontal: Sizes.medium,
    marginTop: Sizes.safe,
  },
});
