import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Inpt from './inpt';

const Time = ({ MyTime ,mb}) => {
    const [time, setTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);

    const toggleTimePicker = () => {
        setShowTimePicker(!showTimePicker);
    };

    const onChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(Platform.OS === 'ios');
        setTime(currentTime);
        MyTime(currentTime);
    };

    return (
        <View>
            {showTimePicker && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    display="spinner"
                    onChange={onChange}
                />
            )}
            <Pressable onPress={toggleTimePicker}>
                <Inpt
                    editable={false}
                    ml={9}
                    mr={9}
                    mb={mb}
                    v={time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 
                />
            </Pressable>
        </View>
    );
};

export default Time;
