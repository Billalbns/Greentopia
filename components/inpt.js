import { View, StyleSheet, TextInput } from "react-native";

export default function Inpt({ Ph, ST, v, change, ml, mr, mt, mb, editable,multiline,H }) {
  return (
    <View style={styles.container}>
      <TextInput
        editable={editable}
        placeholder={Ph}
        secureTextEntry={ST}
        style={[
          styles.Inpt,
          { marginLeft: ml, 
            marginRight: mr, 
            marginTop: mt, 
            marginBottom: mb,
            minHeight:H
        },
        ]}
        value={v}
        onChangeText={change}
        multiline={multiline}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Inpt: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#D9D9D9",
    backgroundColor: "#FFF",
    fontFamily: "regular",
    padding: 9,
    fontSize: 18,
  },
});
