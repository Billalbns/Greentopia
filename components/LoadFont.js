import * as Font from 'expo-font';

// Function to load custom fonts
const loadFonts = async () => {
  await Font.loadAsync({

    'regular':require('../assets/fonts/NunitoSans_10pt-Regular.ttf'),
    'bold':require('../assets/fonts/NunitoSans_10pt-Bold.ttf'),

    // Add other custom font variants if necessary
  });
};

export default loadFonts;
