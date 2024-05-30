import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import EventList from "../components/eventList";

import SearchBar from "../components/searchBar";
import Btn from "../components/Btn";
export default function Events({navigation}) {
  return (
    <LinearGradient
      colors={["#D2FFC7", "#FFFFFF"]}
      style={{ flex: 1 }}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView style={{ flex: 1 ,marginTop:40}}>
        <View style={styles.container}>
          <View>
            <Text>Hna ndirou Location :) 😊</Text>
          </View>

          <View style={{ borderWidth: 1, padding: 8, borderRadius: 10 }}>
            <TouchableOpacity>
              <Entypo
                name="sound-mix"
                size={24}
                color="black"
                style={{ transform: [{ rotate: "-90deg" }] }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <SearchBar ph={"search"} onPress={() => console.log("log")} />
        </View>
        {/* hna nrmlm ndirou flatList bah n affichou data */}
        <ScrollView style={{ marginTop: 50, flex: 0.9 }}>
          <Text style={styles.txt}>Upcoming events</Text>
          <EventList onPress={()=>navigation.navigate('eventDetails')} />
        </ScrollView>
        <Btn title={'Create event'} mgB={5} press={()=>navigation.navigate('eventCreate')}W={260}/>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },
  txt: {
    fontFamily: "bold",
    fontSize: 22,
    marginLeft: 10,
    marginBottom: 10,
  },
});
