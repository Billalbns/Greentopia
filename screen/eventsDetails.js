import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet } from "react-native";
export default function EventDetails() {
  return (
    <LinearGradient
      colors={["#D2FFC7", "#FFFFFF"]}
      style={{ flex: 1 }}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Image
        source={require("../assets/téléchargement.jpg")}
        style={styles.img}
        resizeMode="stretch"
      />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
