import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import Btn from "../components/Btn";
import { LinearGradient } from "expo-linear-gradient";
import SepLine from "../components/sepLine";

export default function Index({ navigation }) {
  return (
    <LinearGradient
      colors={["#D2FFC7", "#FFFFFF"]}
      style={{ flex: 1 }}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.container}>
        {/* Hook */}

        <View>
          <Image
            source={require("../assets/icon.png")}
            resizeMode="contain"
            style={{ width: "100%", height: 100 }}
          />
        </View>
        <View>
          <Text style={styles.hook}>Hook Descriptioon</Text>
        </View>

        {/* Hook */}

        {/* Separatpr */}

        <View>
          <Btn
          W={260}
            title="Login"
            mgB={15}
            press={() => {
              navigation.navigate("login");
            }}
            
          />
          <SepLine />
          <Btn
          W={260}
            title="Sign-up"
            mgT={15}
            press={() => {
              navigation.navigate("signup");
            }}
          />
        </View>

        {/* Separatpr */}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  hook: {
    textAlign: "center",
    fontFamily: "regular",
  },
});
