import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LikeButton = ({size, onPress}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    onPress()
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleLike}>
        <Icon
          name="heart"
          size={size}
          color={liked ? 'red' : 'black'}
          style={{margin:5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LikeButton;
