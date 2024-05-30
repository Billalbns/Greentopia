import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import { Feather } from "@expo/vector-icons";

const Comments = ({ isVisible, onClose }) => {
  const data = [
    {
      image: require("../assets/téléchargement.jpg"),
      comment:
        "pzoeidujklfmlkjidk,l;mdkofjinKAN.ajbA.JFBa.jdbA,.JSDBA.JDBa.jbdkjABkajwdKAJDBkja",
      username: "billa__bns",
    },
    {
      image: require("../assets/téléchargement.jpg"),
      comment:
        "pzoeidujklfmlkjidk,l;mdkofjinKAN.ajbA.JFBa.jdbA,.JSDBA.JDBa.jbdkjABkajwdKAJDBkja",
      username: "billa__bns",
    },
    {
      image: require("../assets/téléchargement.jpg"),
      comment:
        "pzoeidujklfmlkjidk,l;mdkofjinKAN.ajbA.JFBa.jdbA,.JSDBA.JDBa.jbdkjABkajwdKAJDBkja",
      username: "billa__bns",
    },
  ];

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        style={styles.modal}
        swipeDirection="down"
        onSwipeComplete={onClose}
      >
        <View style={styles.modalContent}>
          <FlatList
            data={data}
            keyExtractor={(item, idx) => item + idx}
            contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ height: 50, width: 50, borderRadius: 100 }}
                    resizeMode="stretch"
                  />
                  <View style={{ gap: 5, margin: 10 }}>
                    <Text style={styles.txt1}>{item.username}</Text>
                    <Text style={styles.txt2}>{item.comment}</Text>
                  </View>
                </View>
              </View>
            )}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
     
            }}
          >
            <View style={styles.container1}>
              <TextInput placeholder={"comment"} style={styles.inpt} />
            </View>
            <View>
              <Feather name="send" size={24} color="black" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: "60%",
    paddingRight: 20,
    paddingLeft: 20,
  },
  txt1: {
    fontFamily: "bold",
    fontSize: 15,
  },
  txt2: {
    fontFamily: "regular",
    
  },
  inpt: {
    width: 250,
    height: 40,
    padding: 2,
    fontFamily:'regular'
  },
  container1: {
    borderWidth: 1,
    borderRadius: 10,
  },
  img: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Comments;
