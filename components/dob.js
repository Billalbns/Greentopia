import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  TextInput,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Inpt from "./inpt";

const BirthdayInput = ({ Mydate,mb }) => {
  const [date, setDate] = useState(new Date());
  const [dob, setDob] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentdate = selectedDate;
      const stringdata = currentdate.toDateString();
      setDate(currentdate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDob(currentdate.toDateString());
        Mydate(currentdate);
        console.log("Selected DOB in BirthdayInput:", currentdate);
      }
    } else {
      toggleDatePicker();
    }
  };

  return (
    <View style={styles.container}>
      {showDatePicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
        />
      )}
      <Pressable onPress={toggleDatePicker}>
        <Inpt editable={false} ml={9} mr={9} mb={mb} v={dob} change={setDob} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BirthdayInput;
