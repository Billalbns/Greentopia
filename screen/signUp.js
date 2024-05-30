import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  Button,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import RoundProgressButton from "../components/RoundProgressButton";
import Inpt from "../components/inpt";
import { AntDesign } from "@expo/vector-icons";
import LocationField from "../components/locationField";
import { Entypo } from "@expo/vector-icons";
import MyImagePicker from "../components/ImagePicker";
import GenderInput from "../components/choiseInpt";
import BirthdayInput from "../components/dob";
import Btn from "../components/Btn";

export default function SignUp({ navigation }) {
  const [step, setStep] = useState(1);
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
  const [location, setLocation] = useState("");
  const [join, setJoin] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDOB, setSelectedDOB] = useState("");
  const [progress, setProgress] = useState(0);

  const handleNextStep = () => {
    setStep(step + 1);
    setProgress(progress + 35);
    console.log(
      firstname,
      lastName,
      username,
      email,
      password,
      confirmePassword,
      location,
      join,
      selectedDOB,
      selectedGender
    );
  };
  const handlePriviousStep = () => {
    setStep(step - 1);
    setProgress(progress - 35);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };
  const handledobSelect = (date) => {
    setSelectedDOB(date);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#D2FFC7", "#FFFFFF"]}
        style={{ flex: 1, justifyContent: "center" }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
     

        <View style={{ flex: 1, justifyContent: "space-between" }}>
          {step === 1 && (
            <ScrollView>
              <View style={styles.container}>
                <Text
                  style={{ fontSize: 37, marginLeft: 20, fontFamily: "bold" }}
                >
                  Get Started
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginLeft: 110,
                    color: "#A1BB99",
                    fontFamily: "regular",
                  }}
                >
                  It's quick and easy
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginLeft: 20,
                    marginTop: 79,
                    marginBottom: 15,
                    fontFamily: "regular",
                  }}
                >
                  Fill your information below
                </Text>
                <View style={styles.nameContainer}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.text}>first name</Text>
                    <Inpt mr={12} ml={9} v={firstname} change={setFirstname} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Last name</Text>
                    <Inpt ml={12} mr={9} v={lastName} change={setLastName} />
                  </View>
                </View>
                <View style={{ marginLeft: 9, marginRight: 9 }}>
                  <Text style={styles.text}>Username</Text>
                  <Inpt v={username} change={setUsername} />
                  <Text style={styles.text}>Email</Text>
                  <Inpt v={email} change={setEmail} />
                  <Text style={styles.text}>Password</Text>
                  <Inpt v={password} change={setPassword} ST={true} />
                  <Text style={styles.text}>Confirmation Password</Text>
                  <Inpt
                    v={confirmePassword}
                    change={setConfirmePassword}
                    ST={true}
                  />
                </View>
              </View>
            </ScrollView>
          )}
          {step === 2 && (
            <View style={styles.container}>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={handlePriviousStep}>
                  <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.Logotitle}>
                <Text style={{ fontSize: 37, fontFamily: "bold" }}>
                  Location
                </Text>
                <Entypo name="location-pin" size={100} color="black" />
              </View>
              <View style={styles.Fcontainer}>
                <Text style={styles.text}>Enter Your Location</Text>
                <LocationField location={location} setLocation={setLocation} />
                <Text style={styles.text}>Join neighborhood</Text>
                <Inpt ml={9} mr={9} v={join} change={setJoin} />
              </View>
            </View>
          )}
          {step === 3 && (
            <View style={styles.container}>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={handlePriviousStep}>
                  <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.img}>
                <Text
                  style={{ fontSize: 37, marginBottom: 5, fontFamily: "bold" }}
                >
                  Complet Your Profile
                </Text>
                <MyImagePicker />
              </View>
              <View style={{ flex: 0.5, justifyContent: "flex-start" }}>
                <Text style={styles.text}>Gender</Text>
                <GenderInput onSelect={handleGenderSelect} />
                <Text style={styles.text}>Date of birth</Text>
                <BirthdayInput Mydate={handledobSelect} />
              </View>
            </View>
          )}
          {step === 4 && (
            <View style={{ flex: 1, justifyContent: "space-around" }}>
              <View style={styles.img}>
                {/* hna ndirou la photo eli darha njibouha ml bd */}
                <MyImagePicker />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 37, fontFamily: "bold" }}>
                  Conratulation
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#A1BB99",
                    fontFamily: "regular",
                  }}
                >
                  You have successfully sign up
                </Text>
              </View>
              <Btn
                title={"Next"}
                press={() => navigation.navigate("homeApp")}
                W={260}
              />
            </View>
          )}

          {step !== 4 && (
            <RoundProgressButton progress={progress} onPress={handleNextStep} />
          )}
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    marginBottom: 2,
    marginLeft: 9,
    marginTop: 21,
    fontFamily: "regular",
  },
  container: {
    marginTop: 40,
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnContainer: {
    flex: 0.1,
  },
  Logotitle: {
    flex: 0.3,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  Fcontainer: {
    flex: 0.65,
    justifyContent: "flex-start",
  },
  img: {
    flex: 0.39,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
