import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import * as Progress from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Btn from "../components/Btn";
import Inpt from "../components/inpt";
import { useState } from "react";
import BirthdayInput from "../components/dob";
import Time from "../components/time";
export default function EventCreate({ navigation }) {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [descreption, setDescription] = useState("");

  const handledobSelect = (date) => {
    setSelectedDate(date);
  };
  const handleTimeStart = (time) => {
    setSelectedDate(time);
  };
  const handleTimeEnd = (time) => {
    setSelectedDate(time);
  };

  const next = () => {
    const ns = step + 0.35;
    setStep(ns);
  };
  const prev = () => {
    const ns = step - 0.35;
    setStep(ns);
  };
  const createEvent = () => {
    console.log("hi");
  };
  return (
    <LinearGradient
      colors={["#D2FFC7", "#FFFFFF"]}
      style={{ flex: 1 }}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={{ flex: 0.9 }}>
        {step === 0 && (
          <View
            style={{
              justifyContent: "flex-start",
              marginLeft: 20,
              marginTop: 50,
              marginBottom: 50,
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="document-text"
              size={24}
              color="black"
              style={{ borderWidth: 1, borderRadius: 100, padding: 5 }}
            />
            <Text style={{ fontFamily: "bold", fontSize: 20 }}>
              What your event about
            </Text>
          </View>
        )}
        {step === 0.35 && (
          <View
            style={{
              justifyContent: "flex-start",
              marginLeft: 20,
              marginTop: 50,
              marginBottom: 50,
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Entypo
              name="pin"
              size={24}
              color="black"
              style={{ borderWidth: 1, borderRadius: 100, padding: 5 }}
            />
            <Text style={{ fontFamily: "bold", fontSize: 20 }}>
              When and where will it take place?
            </Text>
          </View>
        )}
        {step === 0.7 && (
          <View
            style={{
              justifyContent: "flex-start",
              marginLeft: 20,
              marginTop: 50,
              marginBottom: 50,
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="people"
              size={24}
              color="black"
              style={{ borderWidth: 1, borderRadius: 100, padding: 5 }}
            />
            <Text style={{ fontFamily: "bold", fontSize: 20 }}>
              Who should join it?
            </Text>
          </View>
        )}
        <View
          style={{
            flex: 0.02,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Progress.Bar progress={step} width={300} color="green" />
        </View>
        {step === 0 && (
          <View style={{ marginTop: 50, marginLeft: 25 }}>
            <Text
              style={{ fontFamily: "bold", fontSize: 17, marginBottom: 15 }}
            >
              Title
            </Text>
            <Inpt mr={25} mb={10} v={title} change={setTitle}/>
            <Text
              style={{ fontFamily: "bold", fontSize: 17, marginBottom: 15 }}
            >
              Category
            </Text>
            <Inpt mr={25} mb={10} v={category} change={setCategory}/>
            <Text
              style={{ fontFamily: "bold", fontSize: 17, marginBottom: 15 }}
            >
              Descreption
            </Text>
            <Inpt mr={25} mb={10} multiline={true} H={100} v={descreption} change={setDescription}/>
          </View>
        )}
        {step === 0.35 && (
          <View style={{ marginTop: 50, marginLeft: 16, marginRight: 16, }}>
            <Text
              style={{ fontFamily: "bold", fontSize: 17, marginBottom: 15,marginLeft:10}}
            >
              Date
            </Text>
            <BirthdayInput mb={10} Mydate={handledobSelect} />
            <Text
              style={{ fontFamily: "bold", fontSize: 17, marginBottom: 15,marginLeft:10}}
            >
              Start in
            </Text>
            <Time mb={10} MyTime={handleTimeStart}/>
            <Text
              style={{ fontFamily: "bold", fontSize: 17, marginBottom: 15,marginLeft:10}}
            >
              End in
            </Text>
            <Time mb={10} MyTime={handleTimeEnd}/>
            <Text
              style={{ fontFamily: "bold", fontSize: 17, marginBottom: 15,marginLeft:10}}
            >
              Location
            </Text>
            <Inpt mr={9} ml={9} mb={10} />
            
          </View>
        )}
        {step ===0.7 && (
            <View style={{ marginTop: 50, marginLeft: 25 }}>
            <Text
              style={{ fontFamily: "bold", fontSize: 17, marginBottom: 15 }}
            >
              Guest
            </Text>
            <Inpt mr={25} mb={10} Ph={'Username'}/>
            <Btn title={"Invite"} press={next} W={92} />
            </View>
        )}
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 5 }}>
          <Btn
            title={"Cancel"}
            press={() => navigation.navigate("events")}
            W={92}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginRight: 5,
          }}
        >
          {step > 0 && <Btn title={"Back"} press={prev} W={92} />}
          {step < 0.7 && <Btn title={"next"} press={next} W={92} />}
          {step === 0.7 && (
            <Btn title={"Create event"} press={createEvent} W={92} />
          )}
        </View>
      </View>
    </LinearGradient>
  );
}
