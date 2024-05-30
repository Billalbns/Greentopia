import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Classment() {
  const data = [
    {
      classment: "#1",
      image: require("../assets/téléchargement.jpg"),
      name: "billal",
      points: "622 pts",
    },
    {
      classment: "#1",
      image: require("../assets/téléchargement.jpg"),
      name: "billal",
      points: "622 pts",
    },
    {
      classment: "#1",
      image: require("../assets/téléchargement.jpg"),
      name: "billal",
      points: "622 pts",
    },
    {
      classment: "#1",
      image: require("../assets/téléchargement.jpg"),
      name: "billal",
      points: "622 pts",
    },
    {
      classment: "#1",
      image: require("../assets/téléchargement.jpg"),
      name: "billal",
      points: "622 pts",
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, idx) => item + idx}
        style={{ paddingVertical: 5 }}
        showsHorizontalScrollIndicator={false}
        

        renderItem={({ item }) => (
          <>
            <View
              style={{
                backgroundColor: "#fff",
                marginTop: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 5,
                width:350,
                borderRadius:20,
              }}
            >
              
              <Text style={styles.txt}>{item.classment}</Text>
              <View style={{flexDirection:"row",alignItems:"center", gap:5}}>
                <Image source={item.image} style={{ height: 50, width: 50, borderRadius:100 }} resizeMode="stretch" />
                <Text style={styles.txt}>{item.name}</Text>
              </View>
              <Text style={styles.txt}>{item.points}</Text>
            </View>
          </>
        )}
      />
    </View>
  );
}
const styles =  StyleSheet.create({
  txt:{
    fontFamily:'regular'
  }
})
