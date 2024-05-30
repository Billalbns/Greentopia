import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LikeButton from "./likeBtn";

export default function EventList({onPress}) {
  const data = [
    {
      name: "Tree planting event",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/téléchargement.jpg"),
    },
    {
      name: "lkdlqdz",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
    {
      name: "QefQEFeq",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
    {
      name: "erggt",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
    {
      name: "ergbfds ",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
    {
      name: "azdrgaerhzd",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
    {
      name: "azdhzd",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
    {
      name: "azdzrekazrhzd",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
    {
      name: "azdhzd",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
    {
      name: "ksfiefh",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
    {
      name: "azdhzd",
      date: "12 march 2024",
      location: "algeria, tiaret",
      image: require("../assets/adaptive-icon.png"),
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, idx) => item + idx}
        horizontal={true}
        style={{ paddingVertical: 5 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "flex-start",
              gap: 5,
              flexDirection: "row",
              width: 300,
              height: 160,
              backgroundColor: "#fff",
              borderRadius: 15,
            }}
          >
            <View style={{ marginLeft: 5, justifyContent: "center" }}>
              <Image
                source={item.image}
                style={{ width: 115, height: 137, borderRadius: 15 }}
                resizeMode="stretch"
              />
            </View>

            <View
              style={{
                margin: 5,
                flex: 1,
                gap: 5,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 11 ,fontFamily:'regular'}}>{item.date}</Text>
              <Text style={{ fontSize: 22 ,fontFamily:'bold'}}>{item.name}</Text>
              <Text style={{ fontSize: 11 ,fontFamily:'regular'}}>{item.location}</Text>
              <Text style={{ fontSize: 11 ,fontFamily:'regular'}}>{item.name}</Text>
            </View>

            <View style={{ justifyContent: "flex-end" }}>
              <LikeButton size={20} onPress={onPress}/>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
