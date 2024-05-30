import { LinearGradient } from "expo-linear-gradient";
import { Text, Touchable, TouchableWithoutFeedback, View } from "react-native";
import PostList from "../components/postList";
import EventList from "../components/eventList";
import SearchBar from "../components/searchBar";
export default function Home() {
  return (
    <LinearGradient
      colors={["#D2FFC7", "#FFFFFF"]}
      style={{ flex: 1 }}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={{ marginTop: 40, flex: 1 }}>
        <View style={{ alignItems:"center" ,marginBottom:20}}>
          <SearchBar ph={"search"} />
        </View>
        <EventList onPress={()=>console.log("hii")} />
        <PostList onPress={()=>console.log("hii")}/>
      </View>
    </LinearGradient>
  );
}
