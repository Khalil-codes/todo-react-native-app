import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";

const About = () => {
    return (
        <View>
            <Text>About</Text>
        </View>
    );
};

const TabsScreen = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "home";
                    } else if (route.name === "About") {
                        iconName = "information-circle-outline";
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#FF6B6B",
                tabBarInactiveTintColor: "gray",
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    );
};

export default TabsScreen;

const styles = StyleSheet.create({});
