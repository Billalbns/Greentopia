import React, { useState } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MyImagePicker() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <TouchableOpacity onPress={pickImage} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor:  'rgba(217, 217, 217, 0.5)', borderRadius: 100, width: 200, height: 200, justifyContent: 'center', alignItems: 'center' }}>
                {image && <Image source={{ uri: image }} style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius:100 }} />}
                {!image && <Image source={require('../assets/Icons/image.png')} style={{ width: 150, height: 150 }} />}
            </View>
        </TouchableOpacity>
    );
}
