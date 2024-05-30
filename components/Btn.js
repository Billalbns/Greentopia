import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Btn({ title, mgT, mgB, press,W }) {
  return (
    <TouchableOpacity
      style={[styles.container ,{ marginTop: mgT, marginBottom: mgB,width:W }]}
      onPress={press}
    >
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#A1BB99",
    alignSelf: "center",
    justifyContent: "center",
    height: 45,
    width: 260,
  },
  txt: {
    textAlign: "center",
    fontFamily: "regular",
  },
});
