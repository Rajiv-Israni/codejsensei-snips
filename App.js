import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import Home from "./screens/Home";
import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      {/* <StatusBar style="dark" /> */}
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home Screen" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
