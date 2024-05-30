import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import LikeButton from "../components/likeBtn";
import Comments from "./comments";

export default function PostList({ onPress }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const data = [
    {
      name: "billal_bns",
      state: "citizen",
      type: "Event creation",
      image: require("../assets/téléchargement.jpg"),
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, idx) => item + idx}
        style={{ paddingVertical: 5 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
        renderItem={({ item }) => (
          <>
            <View
              style={{
                flex: 1,
                padding: 5,
                backgroundColor: "#FFF",
                borderRadius: 15,
                gap: 5,
              }}
            >
              <View
                style={{
                  flex: 0.5,
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <View>
                  <Image
                    source={require("../assets/téléchargement.jpg")}
                    style={{ height: 50, width: 50, borderRadius: 100 }}
                    resizeMode="stretch"
                  />
                </View>

                <View style={{ gap: 3 }}>
                  <Text style={styles.txt}>{item.name}</Text>
                  <Text style={styles.txt}>{item.state}</Text>
                  <Text style={styles.txt}>{item.type}</Text>
                </View>
              </View>

              <View style={{ flex: 0.5, alignItems: "center", padding: 5 }}>
                <Text style={styles.txt}>
                  Sunt incididunt aute in in. Ea aliqua et eu Lorem quis laborum
                  reprehenderit ut officia laborum est et ad. Proident enim
                  labore eiusmod nisi in esse elit sit aute voluptate nostrud
                  irure ad sit. Consequat ullamco laboris aliquip labore veniam
                  excepteur consectetur excepteur.
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 15,
                marginLeft: 15,
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <LikeButton size={22} onPress={onPress} />
              <TouchableOpacity onPress={toggleModal}>
                <FontAwesome6 name="comment" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5 name="share-square" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </>
        )}
      />
       <Comments isVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
}
const styles =  StyleSheet.create({
  txt:{
    fontFamily:'regular'
  }
})
