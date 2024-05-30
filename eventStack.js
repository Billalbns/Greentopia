import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Events from "./screen/events";
import EventCreate from './screen/eventsCreate';
import EventDetails from './screen/eventsDetails';

export default function EventStack() {
  const Stack = createNativeStackNavigator();
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="events"
          component={Events}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="eventCreate"
          component={EventCreate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="eventDetails"
          component={EventDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    
  );
}
