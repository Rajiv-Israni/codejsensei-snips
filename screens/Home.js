import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Profile from "./Profile";
import IconButton from "../components/IconButton";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen!</Text>
    </View>
  );
}

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="person"
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate("Profile")}
            />
          ),
        })}
      ></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default Home;
