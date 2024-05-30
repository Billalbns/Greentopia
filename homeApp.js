import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screen/Home";
import LeaderBoard from "./screen/leaderBoard";
import Map from "./screen/map";
import EventStack from "./eventStack";
import Profile from "./screen/Profile";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const tab = createBottomTabNavigator();
export default function HomeApp() {
  return (
    /*  */
    <tab.Navigator
      screenOptions={{
       tabBarItemStyle:{margin:3, borderRadius:10},
        tabBarActiveBackgroundColor:'#DEFFC7',
        tabBarInactiveBackgroundColor:'#fff',
        tabBarActiveTintColor:'#81AE60',
        tabBarInactiveTintColor:'#707070',
        tabBarShowLabel:true,
        tabBarLabelStyle:{fontFamily:'regular', fontSize:10},
        tabBarStyle:{borderTopLeftRadius:10,borderTopRightRadius:10, elevation:10,},
        tabBarHideOnKeyboard:true
        
      }}
    >
      <tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home-filled" size={30} color={color} />
            
          ),
          
        }}
      />
      <tab.Screen
        name="leaderBoard"
        component={LeaderBoard}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="leaderboard" size={30} color={color}/>
          ),
        }}
      />
      <tab.Screen
        name="map"
        component={Map}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="map-marked-alt" size={30} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="EventStack"
        component={EventStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="calendar-number-sharp" size={30} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Ionicons name="person" size={30} color={color} />,
        }}
      />
    </tab.Navigator>
  );
}
