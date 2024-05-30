
import { View, Alert, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import Inpt from './inpt';
export default function LocationField({location, setLocation}) {
    

    const getLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Please allow location access to use this feature.');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            let { latitude, longitude } = location.coords;
            let address = await Location.reverseGeocodeAsync({ latitude, longitude });

            let city = address[0].city || '';
            let neighborhood = address[0].subregion || '';
            let country = address[0].country || '';

            setLocation(`${neighborhood ? neighborhood + ', ' : ''}${city}, ${country}`);
        } catch (error) {
            console.error('Error getting location:', error);
            Alert.alert('Error', 'Failed to get location. Please try again.');
        }
    };

    return (
        
        <View style={{ alignItems:'center' , flexDirection: 'row'}}>
            <View style={{ flex: 1 }} >
                <Inpt v={location} change={setLocation} ml={9} />
            </View>
            <View style={{ flex: 0.2, alignItems:'center' }} >
            <TouchableOpacity onPress={getLocation}>
                 <MaterialIcons name="my-location" size={40} color="black" />
             </TouchableOpacity>
            </View>

        </View>
    );
}


