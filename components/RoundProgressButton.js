import React, { useState, useEffect , useRef} from 'react';
import {   TouchableOpacity, Animated, Easing, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';


const RoundProgressButton = ({ initialProgress = 0,onPress}) => {
  const [progress, setProgress] = useState(initialProgress);
  const animatedValue = useRef(new Animated.Value(initialProgress)).current; 

  useEffect(() => {
    animateProgress();
  }, [progress]);

  const animateProgress = () => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 500, 
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const radius = 30; 
  const strokeWidth = 5; 
  const circumference = 2 * Math.PI * radius;

  const progressStrokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  const increaseProgress = () => {
    const newProgress = progress + 35; 
    setProgress(Math.min(newProgress, 100)); 
    if (onPress) {
      console.log("yes");
      onPress(); 
    }
  };
  return (
    <View style={{marginBottom:10, alignSelf:'center'}}>
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke="#ffffff" 
          strokeWidth={strokeWidth}
        />
        <AnimatedCircle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke="#000000" 
          strokeWidth={strokeWidth}
          strokeDasharray={[circumference]}
          strokeDashoffset={progressStrokeDashoffset}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </Svg>
       
         <TouchableOpacity onPress={increaseProgress} style={{ position: 'absolute', top: radius - 12, left: radius - 12 }} >
      <AntDesign name="arrowright" size={24} color="black" />
    </TouchableOpacity>
         
    </View>
    
  );
};

export default RoundProgressButton;


const AnimatedCircle = Animated.createAnimatedComponent(Circle);
