import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";


export default function SearchBar({ ph, onPress, value,onChange }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <View style={styles.container}>
        <Ionicons
          name="search-sharp"
          size={24}
          color="black"
          style={styles.img}
        />
        <TextInput placeholder={ph} value={value} onChange={onChange} style={styles.inpt} />
      </View>
      <View style={{borderWidth:1, padding:8, borderRadius:10}}>
        <TouchableOpacity onPress={onPress}>
          <Entypo name="sound-mix" size={24} color="black" style={{transform:[{rotate:'-90deg'}]}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inpt: {
    width: 250,
    height: 40,
    padding: 2,
    fontFamily:'regular'
  },
  container: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 10,
  },
  img: {
    marginLeft: 10,
    marginRight: 10,
  },
});
