import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { DetailsScreen } from "./screens/DetailsScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PeopleScreen } from "./screens/PeopleScreen";
import { PeopleDetailsScreen } from "./screens/PeopleDetailsScreen";

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Overview" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{ itemId: 42 }}
          />
          <Stack.Screen
            name="People"
            component={PeopleScreen}
            options={{ title: "Star Wars" }}
          />
          <Stack.Screen
            name="PeopleDetails"
            component={PeopleDetailsScreen}
            options={{ title: "People Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
