import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { useAuth } from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import { useDispatch } from "react-redux";
import { logoutUser } from "./redux/auth/authSlice";
import Logout from "./components/Logout";
import TabsScreen from "./screens/TabsScreen";
import Colors from "./Colors";

const Stack = createNativeStackNavigator();

const AppEntry = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: { backgroundColor: Colors.lightColor },
                }}>
                {user ? (
                    <Stack.Screen
                        name="Dashboard"
                        component={TabsScreen}
                        options={{
                            headerRight: () => <Logout />,
                        }}
                    />
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppEntry;
