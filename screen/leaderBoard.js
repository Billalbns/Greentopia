import { Text, View } from "react-native";
import Classment from "../components/classment";
import { LinearGradient } from "expo-linear-gradient";
export default function LeaderBoard() {
    return(
        <LinearGradient
        colors={["#D2FFC7", "#FFFFFF"]}
        style={{ flex: 1, justifyContent: "flex-end", alignItems:"center" }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
       
            <Classment />
       
        </LinearGradient>
    )
};
